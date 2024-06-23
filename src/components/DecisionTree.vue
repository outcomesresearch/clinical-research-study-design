<!-- src/components/DecisionTree.vue -->

<template>
  <div>
    <transition name="fade" mode="out-in">
      <v-card :disabled="loading" :loading="loading" class="mx-auto my-12">
        <v-progress-linear
          color="deep-purple"
          height="4"
          :model-value="progress"
        ></v-progress-linear>
        <v-card-item>
          <v-card-title>{{ currentQuestion.question }}</v-card-title>
        </v-card-item>
        <v-card-item
          v-if="currentQuestion.options"
          :key="currentQuestion.id"
          className="flex flex-wrap"
        >
          <step-card
            v-for="option in currentQuestion.options"
            :title="option.answer"
            :description="`investigator assigned exposures`"
            :supportSeeExample="false"
            :key="option.answer"
            @click="advanceTree(option.next)"
          />
        </v-card-item>
        <v-card-actions>
          <v-btn
            text="Go back"
            variant="text"
            v-if="path.length > 0"
            @click="goBack"
          ></v-btn>
          <v-btn
            text="Learn More"
            variant="text"
            :style="{ marginLeft: 'auto' }"
          ></v-btn>
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
      selection: 1,
      currentStep: ROOT,
      path: [],
      steps: rootTree,
    };
  },
  components: {
    StepCard,
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
    advanceTree(nextStep) {
      if (nextStep) {
        this.path.push(this.currentStep); // Save the current step in the path
        this.currentStep = nextStep;
      } else {
        alert("End of selection. You can review your choices or restart.");
      }
    },
    goBack() {
      this.currentStep = this.path.pop(); // Move back to the previous step
    },
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
