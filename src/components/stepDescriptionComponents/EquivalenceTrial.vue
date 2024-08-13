<template>
  <div>
    <p>
      A superiority trial aims to show that one treatment is significantly
      better than another in terms of efficacy, safety, or both. It is a
      specific type of randomized clinical trial designed to establish that a
      new intervention or treatment is superior to an existing one. Researchers
      hypothesize that the new intervention will be more effective, safer, or
      have better outcomes compared to the existing intervention or control
      group.
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
              <strong>Practicality</strong>: Conducting an equivalence or
              non-inferiority trial can be more feasible when demonstrating
              superiority is unlikely or unethical.
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
              non-inferiority does not establish the new treatment's
              superiority; it only establishes that it is not worse beyond the
              predefined margin.
            </li>
          </ol>
        </v-tabs-window-item>
        <v-tabs-window-item value="criticalAppraisal">
          <p>
            To critically appraise equivalence or non-inferiority RCTs, consider
            factors such as adequacy of randomization, use of blinding, adequate
            sample size to provide precise estimates, and use of validated and
            clinically relevant outcome measurement. There are several types of
            bias that can potentially impact equivalence or non-inferiority
            randomized clinical trials (RCTs). Here are the main types to
            consider.
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
              effectiveness, it can bias the assessment of equivalence or
              non-inferiority.
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
            clinically equivalent or non-inferior.
          </p>
        </v-tabs-window-item>
        <v-tabs-window-item value="example">
          <h4 class="my-4">
            Is treatment X (e.g., a novel medication targeting a specific
            receptor) for chronic pain non-inferior to the current standard
            treatment (e.g., a combination of pain-relief medications and
            lifestyle modifications) in terms of reducing pain and improving
            functional status in patients with chronic migraine?
          </h4>
          <ul>
            <li>
              <strong>Study design</strong>: Randomized controlled
              non-inferiority trial
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
              <strong>Clinically meaningful difference</strong>: The
              non-inferiority margin of 20% difference in pain reduction has
              been determined to be clinically acceptable, indicating that
              treatment X should not be more than 20% worse than the current
              standard treatment in terms of reducing pain severity.
            </li>
            <li>
              <strong>Sample size calculation</strong>: Assuming a predetermined
              non-inferiority margin of a 20% difference in pain reduction, with
              a two-sided significance level of 0.05 and a statistical power of
              80%, a sample size calculation estimates a minimum of 250
              participants (125 per group).
            </li>
            <li>
              <strong>Margin of non-inferiority</strong>: The margin of
              non-inferiority refers to the predefined difference in treatment
              effect that is considered clinically acceptable. In this fictional
              trial, a 20% difference in pain reduction is determined to be the
              margin of non-inferiority, indicating that treatment X will be
              considered non-inferior if it is not worse than the current
              standard treatment by more than 20% in terms of pain reduction.
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
