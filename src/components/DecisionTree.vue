<!-- src/components/DecisionTree.vue -->

<template>
  <div>
    <transition name="fade" mode="out-in">
      <v-card
        :disabled="loading"
        :loading="loading"
        class="mx-auto my-12 container"
      >
        <v-progress-linear
          color="red-darken-4"
          height="5"
          :model-value="progress"
          class="progressBarTag"
        ></v-progress-linear>
        <v-card-item>
          <v-card-title>{{ currentQuestion.question }}</v-card-title>
        </v-card-item>
        <v-card-text>{{ currentQuestion.question_description }}</v-card-text>
        <v-card-item
          selected-class="bg-primary"
          v-if="currentQuestion.options"
          :key="currentQuestion.id"
          class="flex flex-wrap"
        >
          <v-layout class="flex-sm-wrap flex-md-wrap flex-lg-wrap ga-5">
            <step-card
              v-for="option in currentQuestion.options"
              :key="option.answer"
              :title="option.answer"
              :description="option.description"
              :supportSeeExample="false"
              :currentlySelected="this.nextStep === option.next"
              @click="setNextStep(option.next)"
            />
          </v-layout>
        </v-card-item>
        <v-card-actions>
          <v-btn
            v-if="path.length > 0"
            text="Back"
            variant="text"
            @click="goBack"
          />
          <v-btn
            v-if="this.steps[this.currentStep].options"
            text="Next"
            variant="text"
            :style="{ marginLeft: 'auto' }"
            @click="advanceTree()"
            :disabled="!this.nextStep"
          />
          <v-btn
            v-if="!this.steps[this.currentStep].options"
            text="Start over"
            variant="text"
            :style="{ marginLeft: 'auto' }"
            @click="startOver()"
          />
        </v-card-actions>
      </v-card>
    </transition>
  </div>
</template>

<script>
import StepCard from "./StepCard.vue";
import rootTree, { ROOT } from "../assets/rootTree";
import { findLongestPath } from "../utils";

export default {
  data() {
    return {
      loading: false,
      currentStep: ROOT,
      path: [],
      steps: rootTree,
      nextStep: undefined,
    };
  },
  components: {
    StepCard,
  },
  computed: {
    currentQuestion() {
      console.log(this.steps[this.currentStep]);
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
</style>
