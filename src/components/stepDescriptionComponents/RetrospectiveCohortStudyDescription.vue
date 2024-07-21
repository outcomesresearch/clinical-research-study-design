<template>
  <div>
    <p>
      This type of study is a type of observational study where researchers look
      back at historical data to investigate relationships between exposures and
      outcomes. In this design, two groups (cohorts) are identified based on
      their exposure status to a certain factor or intervention. Researchers
      then track these groups forward in time using existing records to see if
      there are differences in outcomes between the exposed and non-exposed
      cohorts.
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
        <v-tab value="example">Example Study</v-tab>
      </v-tabs>
      <v-tabs-window v-model="tab">
        <v-tabs-window-item value="strengths">
          <ol>
            <li>
              <strong>Cost and time efficiency</strong>: Retrospective studies
              are generally quicker and more cost-effective than prospective
              studies.
            </li>
            <li>
              <strong>Availability of historical data</strong>: Useful for
              studying outcomes that have occurred in the past.
            </li>
            <li>
              <strong>Multiple outcomes</strong>: Allows the investigation of
              multiple outcomes related to the same exposure.
            </li>
            <li>
              <strong>Suitable for rare outcomes</strong>: If the outcome is
              rare, a retrospective design can efficiently capture events over a
              shorter time.
            </li>
          </ol>
        </v-tabs-window-item>
        <v-tabs-window-item value="weaknesses">
          <ol>
            <li>
              <strong>Recall bias</strong>: Participants may have difficulty
              accurately recalling past exposures, leading to bias.
            </li>
            <li>
              <strong>Limited control over data quality</strong>: The quality of
              historical data may vary, impacting the accuracy of exposure and
              outcome ascertainment.
            </li>
            <li>
              <strong>Temporality challenges</strong>: Establishing a clear
              temporal sequence between exposure and outcome can be challenging.
            </li>
            <li>
              <strong>Confounding</strong>: Since data are collected after the
              outcome has occurred, confounding variables may be more
              challenging to control.
            </li>
          </ol>
        </v-tabs-window-item>
        <v-tabs-window-item value="oxford">
          <h4 class="my-4">Level of Evidence <strong>2b</strong>.</h4>
          <p class="mb-5">
            Level 2b evidence refers to individual cohort studies, including
            retrospective cohort studies, which provide moderate-quality
            evidence. These studies offer valuable insights but must be
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
        <v-tabs-window-item value="example">
          <h4 class="my-4">
            Does the new rehabilitation program improve functional outcomes in
            stroke patients more effectively than the standard rehabilitation
            program?
          </h4>
          <ul>
            <li>
              <strong>Study Design</strong>: Retrospective Cohort Study. The
              investigator will extract data from hospital records for all
              stroke patients who received either the new or standard
              rehabilitation program.
            </li>
            <li>
              <strong>Study Population</strong>: Stroke patients who received
              rehabilitation at the hospital between 2010 and 2020. At this
              hospital, there were a total of 102 patients who received
              rehabilitation (53 standard therapy, 49 new rehabilitation) during
              this time.
            </li>
            <li>
              <strong>Independent Variables</strong>:
              <ul>
                <li>
                  <span className="italic">Intervention Group</span>: Patients
                  who underwent the new rehabilitation program.
                </li>
                <li>
                  <span className="italic">Control Group</span>: Patients who
                  underwent the standard rehabilitation program.
                </li>
              </ul>
            </li>
            <li>
              <strong>Outcome Measure</strong>: Functional Independence Measure
              (FIM) scores, which assess the level of a patient's functional
              independence in various activities of daily living.
              <ul>
                <li>
                  <span className="italic">Pre-Rehabilitation FIM Score</span>:
                  FIM score before starting rehabilitation.
                </li>
                <li>
                  <span className="italic">Post-Rehabilitation FIM Score</span>:
                  FIM score six months after completing rehabilitation.
                </li>
                <li>
                  <span className="italic">Within-Subject Difference</span>: The
                  change in FIM score for each patient from pre- to
                  post-rehabilitation.
                </li>
                <li>
                  <span className="italic">Between-Group Difference</span>: The
                  difference in the average within-subject differences between
                  the two groups.
                </li>
              </ul>
            </li>
            <li>
              <strong>Minimal Clinically Important Difference</strong>: A
              clinically meaningful change in FIM score is an improvement of 10
              points.
            </li>
            <li>
              <strong
                >Sample Size Calculation and Precision of the Effect Size
                Estimate</strong
              >:
              <ul>
                <li>
                  In this scenario, the sample size is fixed at 102 patients who
                  received rehabilitation (53 standard therapy, 49 new
                  rehabilitation) during this time.
                </li>
                <li>
                  The investigator estimates that the average within-subject
                  difference in FIM for the patients who received the new
                  rehabilitation program is 15 points (with a standard deviation
                  of 5 points).
                </li>
                <li>
                  The investigator estimates that the average within-subject
                  difference in FIM for the patients who received the standard
                  program is 10 points (with a standard deviation of 5 points).
                </li>
                <li>
                  The between-group difference is estimated to be 5 points (15
                  points - 10 points).
                </li>
                <li>
                  Given the fixed sample size of 102 and the expected results,
                  the precision of the effect size estimate (between-group
                  difference of 5 points) is defined by the width of the 95%
                  confidence interval for this estimate, which is from 3.04 to
                  6.96 points.
                </li>
                <li>
                  Given the fixed sample size, the investigator can be confident
                  where the true value for the difference in FIM between
                  standard and new rehabilitation program lies (somewhere
                  between 3.04 and 6.96). Given that a clinically meaningful
                  change in FIM score is 10 points, the observed between-group
                  difference of 5 points suggests only a moderate improvement
                  with the new program. The upper bound of the CI (6.96)
                  suggests that even the largest plausible effect size value is
                  still not clinically meaningful.
                </li>
              </ul>
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
