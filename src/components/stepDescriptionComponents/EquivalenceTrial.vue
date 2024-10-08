<template>
  <div>
    <p>
      An equivalence trial is designed to demonstrate that two treatments are
      similar in effectiveness within a predetermined margin. If the new
      treatment is found to be within this margin of the comparator’s effect, it
      is considered clinically equivalent, even if it does not demonstrate
      superiority.
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
              <strong>Practicality</strong>: Conducting an equivalence trial can
              be more feasible when demonstrating superiority is unlikely or
              unethical.
            </li>
            <li>
              <strong>Broader options</strong>: Establishing equivalence allows
              physicians and patients to consider alternative treatment options
              that may have other benefits (e.g., cost, convenience) while still
              maintaining acceptable efficacy.
            </li>
          </ol>
        </v-tabs-window-item>
        <v-tabs-window-item value="weaknesses">
          <ol>
            <li>
              <strong>Challenging design</strong>: It can be complex to
              determine an appropriate equivalence margin, which defines the
              acceptable difference between treatments.
            </li>
            <li>
              <strong>Risk of false conclusions</strong>: If the equivalence
              margin is set too wide or the study lacks statistical power, the
              trial may fail to detect a clinically relevant difference between
              treatments, leading to a false conclusion of equivalence.
            </li>
            <li>
              <strong>Interpretation of results</strong>: Demonstrating
              equivalence does not establish the new treatment’s superiority; it
              only establishes that it is not worse beyond the predefined
              margin.
            </li>
          </ol>
        </v-tabs-window-item>
        <v-tabs-window-item value="criticalAppraisal">
          <p>
            To critically appraise an equivalence randomized clinical trial
            (RCT), consider the following factors such as adequacy of
            randomization, use of blinding, adequate sample size to provide
            precise estimates, and use of validated and clinically relevant
            outcome measurement. There are several types of bias that can
            potentially impact equivalence RCTs. Here are the main types to
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
              effectiveness, it can bias the assessment of equivalence.
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
            clinically equivalent.
          </p>
        </v-tabs-window-item>
        <v-tabs-window-item value="example">
          <h4 class="my-4">
            Is treatment X (e.g., a novel medication targeting a specific
            receptor) for chronic pain equivalent to the current standard
            treatment (e.g., a combination of pain-relief medications and
            lifestyle modifications) in terms of reducing pain and improving
            functional status in patients with chronic migraine?
          </h4>
          <ul>
            <li>
              <strong>Study design</strong>: Randomized controlled equivalence
              trial
            </li>
            <li>
              <strong>Study population</strong>: Adults (age 18-65) diagnosed
              with chronic migraine, who meet the inclusion and exclusion
              criteria and are willing to participate.
            </li>
            <li>
              <strong>Dependent variables</strong>: Pain severity and frequency,
              functional status (e.g., ability to perform daily activities), and
              safety profiles.
            </li>
            <li><strong>Duration of follow-up</strong>: 12 weeks</li>
            <li>
              <strong>Primary outcome measure</strong>: Reduction in pain
              severity from baseline to week 12, measured using a validated pain
              scale.
            </li>
            <li>
              <strong>Clinically meaningful difference</strong>: The equivalence
              margin of 20% difference in pain reduction has been determined to
              be clinically acceptable, indicating that treatment X should not
              be more than 20% different than the current standard treatment in
              terms of reducing pain severity.
            </li>
            <li>
              <strong>Sample size calculation</strong>: Assuming a predetermined
              equivalence margin of a 20% difference in pain reduction, with a
              two-sided significance level of 0.05 and a statistical power of
              80%, a sample size calculation estimates a minimum of 250
              participants (125 per group).
            </li>
            <li>
              <strong>Margin of Equivalence</strong>: The margin of equivalence
              refers to the predefined difference in treatment effect that is
              considered clinically acceptable. In this fictional trial, a 20%
              difference in pain reduction is determined to be the margin of
              equivalence, indicating that treatment X will be considered
              equivalent if it is not more than 20% different than the current
              standard treatment in terms of pain reduction.
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
