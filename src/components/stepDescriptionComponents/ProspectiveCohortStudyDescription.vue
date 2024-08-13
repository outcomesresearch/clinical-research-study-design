<template>
  <div>
    <p>
      This type of cohort study follows a group of individuals over time,
      assessing their health outcomes based on certain exposures. Participants
      are enrolled based on their exposure status, and then followed over time
      to observe the occurrence of outcomes. Information on exposure and
      outcomes is collected at regular intervals throughout the study duration.
      Exposures and outcomes can be measured using various methods, including
      self-reporting, medical records, or laboratory tests.
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
        <v-tab value="oxford">Oxford CEBM Level of Evidence</v-tab>
        <v-tab value="criticalAppraisal">Critical Appraisal</v-tab>
        <v-tab value="example">Example Study</v-tab>
      </v-tabs>
      <v-tabs-window v-model="tab">
        <v-tabs-window-item value="strengths">
          <ol>
            <li>
              <strong>Temporality</strong>: Establishes a clear temporal
              sequence between exposure and outcome, making it valuable for
              assessing causation.
            </li>
            <li>
              <strong>Measure of incidence</strong>: Can assess the incidence
              and cumulative risk of outcomes over time.
            </li>
            <li>
              <strong>Controlled data collection</strong>: Researchers can
              collect detailed and standardized information on exposures,
              reducing the risk of recall bias.
            </li>
            <li>
              <strong>Outcome ascertainment</strong>: Allows for real-time and
              standardized measurement of outcomes, enhancing accuracy.
            </li>
            <li>
              <strong>Measurement of multiple exposures and outcomes</strong>:
              Enables the study of multiple exposures and their combined effects
              on outcomes. Also allows for the study of multiple outcomes
              associated with a single exposure.
            </li>
            <li>
              <strong>Minimizes recall bias</strong>: Since data on exposures
              are collected before the outcome occurs, participants are less
              likely to be influenced by knowledge of the outcome.
            </li>
          </ol>
        </v-tabs-window-item>
        <v-tabs-window-item value="weaknesses">
          <ol>
            <li>
              <strong>Time-Consuming and costly</strong>: Prospective cohort
              studies are resource-intensive, requiring long-term follow-up and
              significant financial investment.
            </li>
            <li>
              <strong>Loss to follow-up</strong>: Participants may drop out or
              be lost to follow-up over the study duration, potentially
              introducing bias.
            </li>
            <li>
              <strong>Not suitable for rare outcomes</strong>: If the outcome of
              interest is rare, a large sample size and extended follow-up may
              be needed to observe enough events.
            </li>
            <li>
              <strong>Selection bias</strong>: Participants who stay in the
              study may differ systematically from those who drop out, leading
              to bias.
            </li>
          </ol>
        </v-tabs-window-item>
        <v-tabs-window-item value="oxford">
          <h4 class="my-4">Level of Evidence <strong>2b</strong>.</h4>
          <p>
            Level 2b evidence refers to individual cohort studies with a low
            risk of bias or confounding. Level 2b evidence provides moderately
            strong evidence for evaluating the associations between exposures
            and outcomes. These studies offer valuable insights but must be
            interpreted with an understanding of their inherent limitations and
            potential biases.
          </p>
          <p>
            In the hierarchy of evidence, Level 2b is more reliable than expert
            opinion or case series, but not as strong as randomized controlled
            trials or systematic reviews. This level of evidence can support
            clinical decision-making, especially when higher-quality evidence is
            lacking.
          </p>
        </v-tabs-window-item>
        <v-tabs-window-item value="criticalAppraisal">
          <p>
            To critically appraise prospective cohort studies, consider the key
            sources of bias that may impact the research and findings. Although
            over 35 biases have been described (Sackett J Chronic Dis 1979; 32:
            51–63), the main biases in prospective cohort studies are:
          </p>
          <ol>
            <li>
              <strong>Selection bias</strong>: Bias in recruitment, which
              includes selection bias, occurs when the sampling process is
              flawed.
            </li>
            <li>
              <strong>Attribution bias</strong>: Systematic error due to unequal
              loss of participants caused by factors like deaths, unsatisfactory
              results, or adverse effects.
            </li>
            <li>
              <strong>Recall bias</strong>: This includes bias while performing
              the study, involving errors due to differences in participants'
              recollections and is common in retrospective studies and surveys.
            </li>
            <li>
              <strong>Measurement bias</strong>: Systematic distortion
              in information gathering, such as varying techniques in blood
              pressure readings.
            </li>
            <li>
              <strong>Performance or procedure bias</strong>: Arises from
              treatment disparities among groups, such as different levels of
              care for surgical versus non-surgical patients.
            </li>
          </ol>
        </v-tabs-window-item>
        <v-tabs-window-item value="example">
          <h4 class="my-4">
            Does adherence to a Mediterranean diet slow the progression of Type
            2 Diabetes (T2D) compared to a standard Western diet?
          </h4>

          <ul>
            <li>
              <strong>Study population</strong>: Adults (40-65 years), diagnosed
              with Type 2 Diabetes within the past 2 years, HbA1c levels between
              6.5% and 9%, and BMI between 25 and 35 kg/m². Exclude pregnant or
              breastfeeding women, individuals with severe comorbid conditions
              (e.g., cancer, advanced cardiovascular disease), and those on
              medications known to significantly affect glucose metabolism
              (other than standard T2D medications).
            </li>
            <li>
              <strong>Intervention Group</strong>: Participants following a
              Mediterranean diet, characterized by high consumption of fruits,
              vegetables, whole grains, legumes, and olive oil, moderate
              consumption of fish and poultry, and low consumption of red meat
              and sweets.
            </li>
            <li>
              <strong>Control group</strong>: Participants following a standard
              Western diet, characterized by higher intake of red meats,
              processed foods, and sweets, and lower intake of fruits and
              vegetables.
            </li>
            <li>
              <strong>Outcome Measure</strong>: Change in HbA1c levels over 12
              months.
            </li>
            <li>
              <strong>Clinically important change</strong>: A reduction of 0.5%
              in HbA1c is considered clinically significant, as it is associated
              with a meaningful reduction in the risk of diabetes complications.
            </li>
            <li>
              <strong>Sample size calculation and power</strong>: Assuming a
              two-sided significance level of 0.05, statistical power of 80%,
              and a difference of 0.5% or greater as a clinically meaningful
              difference, an estimated total sample size of 152 (76 per group)
              would be needed. This calculation would provide enough statistical
              power to detect a clinically meaningful difference.
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
