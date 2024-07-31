<template>
  <div>
    <transition name="fade" mode="out-in">
      <v-card class="mx-auto my-12 container">
        <v-progress-linear
          color="red-darken-4"
          height="5"
          :model-value="progress"
          class="progressBarTag"
        ></v-progress-linear>
        <v-card-item>
          <v-card-title className="v-card-title card-title-bar">
            <span className="mr-5" :style="{ 'word-wrap': 'break-spaces' }">{{
              currentQuestion.title
            }}</span>
            <span className="chips" v-if="breadcrumbs.length">
              <v-chip
                v-for="chip in breadcrumbs"
                :key="chip.title"
                :color="chip.color"
                tonal
                >{{ chip.title }}</v-chip
              >
            </span>
          </v-card-title>
        </v-card-item>
        <v-card-item>
          <component :is="currentQuestion.component" />
        </v-card-item>
        <v-card-item
          selected-class="bg-primary"
          v-if="currentQuestion.choices"
          :key="currentQuestion.id"
          class="flex flex-wrap"
        >
          <div class="choices-container">
            <step-card
              v-for="option in currentQuestion.choices"
              :key="option.answer"
              :title="option.answer"
              :description="option.option_description"
              :currentlySelected="this.nextStep === option.next"
              @click="setNextStep(option.next)"
            />
          </div>
        </v-card-item>
        <v-card-actions>
          <v-btn
            v-if="path.length > 0"
            text="Back"
            variant="text"
            @click="goBack"
          />
          <v-btn
            v-else
            text="Back to Intro"
            variant="text"
            @click="$router.push({ name: 'IntroMessage' })"
          />
          <v-btn
            v-if="this.steps[this.currentStep].choices"
            text="Next"
            variant="text"
            :style="{ marginLeft: 'auto' }"
            @click="advanceTree()"
            :disabled="!this.nextStep"
          />
          <v-btn
            v-if="
              !this.steps[this.currentStep].choices && // if no configured choices
              !this.steps[this.currentStep].next // if no configured next step
            "
            text="Start over"
            variant="text"
            :style="{ marginLeft: 'auto' }"
            @click="startOver()"
          />
          <v-btn
            v-if="
              this.steps[this.currentStep].type === 'statement' &&
              this.steps[this.currentStep].next
            "
            text="Continue"
            variant="text"
            :style="{ marginLeft: 'auto' }"
            @click="
              () => {
                setNextStep(currentQuestion.next);
                advanceTree();
              }
            "
          />
        </v-card-actions>
      </v-card>
    </transition>
  </div>
</template>

<script>
import StepCard from "../components/StepCard.vue";
import rootTree from "../assets/rootTree";
import { ROOT } from "../assets/ids";
import { findLongestPath, findPreviousSteps } from "../utils";
import Descriptions from "../components/stepDescriptionComponents/index";

export default {
  props: ["step"],
  data() {
    return {
      currentStep: ROOT,
      path: [],
      steps: rootTree,
      nextStep: undefined,
    };
  },
  components: {
    StepCard,
    ...Descriptions,
  },
  watch: {
    // Watch for changes in currentStep to update the URL
    currentStep(newStep, oldStep) {
      if (newStep !== oldStep) {
        this.$router
          .push({ path: "/decision-tree", query: { step: newStep } })
          .catch(console.error);
      }
    },
  },
  created() {
    // When component is created, initialize the current step from the URL or default
    if (this.step) {
      this.currentStep = this.step;
      //Actually need to create the path NOT including the current step
      this.path = findPreviousSteps(this.steps[this.currentStep].inputs[0]);
    }
  },
  computed: {
    currentQuestion() {
      return this.steps[this.currentStep];
    },
    breadcrumbs() {
      return [
        ...this.path.map((p) => this.steps[p]),
        this.steps[this.currentStep], // for a given step, should we already show their chip?
      ].filter((p) => p.type === "statement");
    },
    progress() {
      let longestNextPath = findLongestPath(this.currentStep, this.steps);
      let totalPathLength = longestNextPath + this.path.length;
      let pathDoneSoFar = this.path.length;
      return (pathDoneSoFar / totalPathLength) * 100;
    },
  },
  methods: {
    advanceTree() {
      this.path.push(this.currentStep); // Save the current step in the path
      this.currentStep = this.nextStep;
      this.nextStep = undefined;
    },
    setNextStep(next) {
      this.nextStep = next;
    },
    startOver() {
      this.currentStep = this.path[0];
      this.path = [];
      this.nextStep = undefined;
    },
    goBack() {
      this.currentStep = this.path.pop(); // Move back to the previous step
      this.nextStep = undefined;
    },
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.container {
  padding: 12px;
}

.progressBarTag {
  margin: -12px;
  margin-bottom: 12px;
  width: calc(100% + 24px);
}

.choices-container {
  display: flex;
  gap: 25px;
  margin-bottom: 20px;
  justify-content: center;
}

.choices-container .v-card {
  margin: 2px !important;
}

.card-title-bar {
  display: flex;
  white-space: break-spaces;
}

.card-title-bar > .chips {
  display: flex;
  flex-grow: 1;
  justify-content: end;
  gap: 10px;
}

@media only screen and (max-width: 800px) {
  .card-title-bar {
    display: grid;
    grid-template-columns: 1fr;
  }

  .card-title-bar > .chips {
    justify-content: start;
    margin-top: 10px;
  }
}

@media only screen and (max-width: 500px) {
  .choices-container {
    flex-direction: column;
  }
  .card-title-bar > .chips {
    display: none;
  }
}
</style>
