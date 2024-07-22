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
          <v-card-title>{{ currentQuestion.title }}</v-card-title>
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
            @click="$emit('started', true)"
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
import StepCard from "./StepCard.vue";
import rootTree from "../assets/rootTree";
import { findLongestPath } from "../utils";
import Descriptions from "./stepDescriptionComponents/index";

export default {
  data() {
    return {
      currentStep: "caseSeries",
      path: [],
      steps: rootTree,
      nextStep: undefined,
    };
  },
  components: {
    StepCard,
    ...Descriptions,
  },
  computed: {
    currentQuestion() {
      return this.steps[this.currentStep];
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

@media only screen and (max-width: 500px) {
  .choices-container {
    flex-direction: column;
  }
}
</style>
