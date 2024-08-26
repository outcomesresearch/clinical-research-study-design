<template>
  <div>
    <p>
      A non-inferiority trial is designed to establish that the new treatment is
      not worse than the comparator by more than a predefined non-inferiority
      margin. If the new treatment is found to be within this margin of the
      comparator’s effect, it is considered non-inferior, even if it does not
      demonstrate superiority.
    </p>
    <v-card class="mt-5">
      <v-tabs
        v-model="tab"
        bg-color="gray"
        grow
        class="mb-3"
        :direction="isMobile ? 'vertical' : 'horizontal'"
      >
        <v-tab value="strengths">Strengths</v-tab>
        <v-tab value="weaknesses">Weaknesses</v-tab>
        <v-tab value="criticalAppraisal">Critical Appraisal</v-tab>
        <v-tab value="oxford">Oxford CEBM Level of Evidence</v-tab>
        <v-tab value="example">Example Study</v-tab>
      </v-tabs>
      <v-tabs-window v-model="tab">
        <v-tabs-window-item value="strengths">
          <ol>
            <li>
              <strong>Relevant assessment</strong>: These trials address
              clinically important questions by comparing treatments that are
              expected to have similar effectiveness.
            </li>
            <li>
              <strong>Practicality</strong>: Conducting a non-inferiority trial
              can be more feasible when demonstrating superiority is unlikely or
              unethical.
            </li>
            <li>
              <strong>Broader options</strong>: Establishing non-inferiority
              allows physicians and patients to consider alternative treatment
              options that may have other benefits (e.g., cost, convenience)
              while still maintaining acceptable efficacy.
            </li>
          </ol>
        </v-tabs-window-item>
        <v-tabs-window-item value="weaknesses">
          <ol>
            <li>
              <strong>Challenging design</strong>: It can be complex to
              determine an appropriate non-inferiority margin, which defines the
              acceptable difference between treatments.
            </li>
            <li>
              <strong>Risk of false conclusions</strong>: If the non-inferiority
              margin is set too wide or the study lacks statistical power, the
              trial may fail to detect a clinically relevant difference between
              treatments, leading to a false conclusion of non-inferiority.
            </li>
            <li>
              <strong>Interpretation of results</strong>: Demonstrating
              non-inferiority does not establish the new treatment’s
              superiority; it only establishes that it is not worse beyond the
              predefined margin.
            </li>
          </ol>
        </v-tabs-window-item>
        <v-tabs-window-item value="criticalAppraisal">
          <p>
            To critically appraise a non-inferiority randomized clinical trial
            (RCT), consider the following factors such as adequacy of
            randomization, use of blinding, adequate sample size to provide
            precise estimates, and use of validated and clinically relevant
            outcome measurement. There are several types of bias that can
            potentially impact non-inferiority RCTs. Here are the main types to
            consider:
          </p>
          <ol>
            <li>
              <strong>Measurement bias</strong>: Biases in measuring outcomes or
              assessing comparability between treatments can affect the
              comparison of effectiveness.
            </li>
            <li>
              <strong>Non-Adherence bias</strong>: Differences in adherence to
              treatment protocols can impact the efficacy comparison between
              groups.
            </li>
            <li>
              <strong>Reporting bias</strong>: Selective reporting or incomplete
              reporting of outcomes can introduce bias in favor of one treatment
              over the other.
            </li>
            <li>
              <strong>Attrition bias</strong>: If participant dropout rates
              differ between treatment groups and are related to treatment
              effectiveness, it can bias the assessment of non-inferiority.
            </li>
          </ol>
        </v-tabs-window-item>
        <v-tabs-window-item value="oxford">
          <h4 class="my-4">Level of Evidence <strong>2b</strong>.</h4>
          <p>
            Level 2b evidence refers to trials that address the comparative
            effectiveness of treatments, interventions, or diagnostic tests.
            These trials aim to determine if the new treatment is not worse than
            the comparator treatment by more than a pre-defined non-inferiority
            margin. Even if the new treatment does not demonstrate superiority,
            if it falls within the pre-defined margin, it is considered
            non-inferior.
          </p>
        </v-tabs-window-item>
        <v-tabs-window-item value="example">
          <h4 class="my-4">
            Is treatment Y (e.g., a novel oral medication targeting insulin
            resistance) for Type 2 Diabetes non-inferior to the current standard
            treatment (e.g., Metformin) in terms of controlling blood glucose
            levels and improving insulin sensitivity in patients with Type 2
            Diabetes?
          </h4>
          <ul>
            <li>
              <strong>Study design</strong>: Randomized controlled
              non-inferiority trial
            </li>
            <li>
              <strong>Study population</strong>: Adults (age 18-65) diagnosed
              with Type 2 Diabetes, who meet all of the inclusion and none of
              the exclusion criteria and are willing to participate. Dependent
              Variables. Fasting blood glucose levels, HbA1c levels, insulin
              sensitivity, and safety profiles.
            </li>
            <li><strong>Duration of follow-up</strong>: 24 weeks</li>
            <li>
              <strong>Primary outcome measure</strong>: Reduction in HbA1c
              levels from baseline to week 24, measured using a validated
              laboratory test.
            </li>
            <li>
              <strong>Clinically meaningful difference</strong>: The
              non-inferiority margin of 0.5% reduction in HbA1c levels has been
              determined to be clinically acceptable, indicating that treatment
              Y should not be more than 0.5% different than the current standard
              treatment in terms of reducing HbA1c levels.
            </li>
            <li>
              <strong>Sample size calculation</strong>: Assuming a predetermined
              non-inferiority margin of a 0.5% difference in HbA1c reduction,
              with a two-sided significance level of 0.05 and a statistical
              power of 80%, a sample size calculation estimates a minimum of 300
              participants (150 per group).
            </li>
            <li>
              <strong>Margin of Non-inferiority</strong>: The margin of
              non-inferiority refers to the predefined difference in treatment
              effect that is considered clinically acceptable. In this trial, a
              0.5% difference in HbA1c reduction is determined to be the margin
              of non-inferiority, indicating that treatment Y will be considered
              non-inferior if it is not more than 0.5% different than the
              current standard treatment in terms of reducing HbA1c levels.
            </li>
          </ul>
        </v-tabs-window-item>
      </v-tabs-window>
    </v-card>
  </div>
</template>

<script>
import { ref, provide } from "vue";
import { useResponsive } from "../../mixins/responsiveMixin"; // Adjust the path as needed

export default {
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
