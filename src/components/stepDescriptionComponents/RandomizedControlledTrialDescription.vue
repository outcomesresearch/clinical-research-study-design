<template>
  <div>
    <p>
      Participants are randomly assigned to different interventions and baseline
      characteristics should be comparable between groups. Control and
      experimental interventions are administered based on random assignment.
      Outcomes are assessed and compared between the control and experimental
      intervention to evaluate the impact of the intervention. Randomized
      clinical trials are a powerful and widely accepted method for evaluating
      the causal relationship between an intervention and an outcome.
    </p>
  </div>
</template>

<script>
import { ref, provide } from "vue";
import { useResponsive } from "../../mixins/responsiveMixin"; // Adjust the path as needed

export default {
  name: "RandomizedControlledTrialDescription",
  setup() {
    const { windowWidth, isMobile } = useResponsive();
    provide("windowWidth", windowWidth);
    provide("isMobile", isMobile);

    const tab = ref(0); // Initialize the tab value

    return {
      windowWidth,
      isMobile,
      tab,
    };
  },
};
</script>
<style scoped></style>
