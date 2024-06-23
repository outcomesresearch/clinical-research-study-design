<!-- src/components/DecisionTree.vue -->

<template>
  <div>
    <h1>{{ currentQuestion.question }}</h1>
    <transition name="fade" mode="out-in">
      <ul v-if="currentQuestion.options" :key="currentQuestion.id">
        <li v-for="option in currentQuestion.options" :key="option.answer">
          <button @click="advanceTree(option.next)">{{ option.answer }}</button>
        </li>
      </ul>
    </transition>
    <button v-if="path.length > 0" @click="goBack">Go Back</button>
  </div>
</template>

<script>
import experimentalStudyTree, {
  EXPERIMENTAL_STUDY_ID,
} from "../assets/experimentalStudyTree";
import observationalStudyTree, {
  OBSERVATIONAL_STUDY_ID,
} from "../assets/observationalStudyTree";

export default {
  data() {
    return {
      currentStep: "start",
      path: [],
      steps: {
        start: {
          id: "start",
          question: "Did the investigator assign exposures?",
          options: [
            { answer: "Yes", next: EXPERIMENTAL_STUDY_ID },
            { answer: "No", next: OBSERVATIONAL_STUDY_ID },
          ],
        },
        ...experimentalStudyTree,
        ...observationalStudyTree,
      },
    };
  },
  computed: {
    currentQuestion() {
      return this.steps[this.currentStep];
    },
  },
  methods: {
    advanceTree(nextStep) {
      console.log(this.steps)
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
