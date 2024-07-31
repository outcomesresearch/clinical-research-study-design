<template>
  <div>
    <p>
      Cases (individuals with the outcome of interest) and controls (those
      without the outcome) are identified, exposure status is determined for
      cases and controls retrospectively, and the baseline characteristics of
      cases and controls are compared to assess the association between exposure
      or intervention and outcome.
    </p>
    <v-card class="mt-5">
      <v-tabs
        v-model="tab"
        bg-color="gray"
        grow
        class="mb-5"
        :direction="isMobile ? 'vertical' : 'horizontal'"
      >
        <v-tab :value="STRENGTHS">Strengths</v-tab>
        <v-tab :value="WEAKNESSES">Weaknesses</v-tab>
        <v-tab :value="CRITICAL_APPRAISAL">Critical Appraisal</v-tab>
        <v-tab :value="LEVEL_OF_EVIDENCE">Oxford CEBM Level of Evidence</v-tab>
        <v-tab :value="EXAMPLE">Example Study</v-tab>
      </v-tabs>
      <v-tabs-window v-model="tab">
        <v-tabs-window-item :value="STRENGTHS">
          <ol>
            <li>
              <strong>Efficiency</strong>: Case-control studies are often more
              efficient than cohort studies, especially when studying rare
              outcomes.
            </li>
            <li>
              <strong>Suitable for rare outcomes</strong>: Ideal for
              investigating diseases or outcomes with low prevalence.
            </li>
            <li>
              <strong>Cost-Effective</strong>: Generally requires less time and
              resources than prospective cohort studies.
            </li>
            <li>
              <strong>Multiple exposures</strong>: Allows for the study of
              multiple exposures in relation to a single outcome.
            </li>
            <li>
              <strong>Useful for hypothesis generation</strong>: Effective for
              generating hypotheses or exploring associations that can be
              further investigated in more rigorous study designs.
            </li>
          </ol>
        </v-tabs-window-item>
        <v-tabs-window-item :value="WEAKNESSES">
          <ol>
            <li>
              <strong>Selection of an appropriate control group</strong>:
              Researchers need to carefully consider the characteristics of the
              control group in relation to the cases, taking steps to minimize
              bias and confounding and ensuring that the control group
              adequately represents the population from which the cases were
              drawn.
            </li>
            <li>
              <strong>Recall bias</strong>: Participants may have difficulty
              accurately recalling past exposures, particularly if the exposure
              occurred a long time ago.
            </li>
            <li>
              <strong>Temporality challenges</strong>: Establishing a clear
              temporal sequence between exposure and outcome can be challenging,
              as case-control studies are retrospective.
            </li>
            <li>
              <strong>Not suitable for rare exposures</strong>: If the exposure
              is rare, finding enough cases and controls with the exposure may
              be difficult.
            </li>
            <li>
              <strong>Selection bias</strong>: The process of selecting cases
              and controls may introduce bias if they are not representative of
              the population.
            </li>
            <li>
              <strong>Cannot establish causation</strong>: While useful for
              identifying associations, case-control studies alone cannot
              establish causation.
            </li>
            <li>
              <strong>Dependence on existing data</strong>: Relies on existing
              data or participants' recall of past exposures, which may be less
              accurate than prospective data collection.
            </li>
            <li>
              <strong>Difficulty in determining exposure levels</strong>: It may
              be challenging to determine the level or intensity of exposure
              accurately.
            </li>
          </ol>
        </v-tabs-window-item>
        <v-tabs-window-item :value="CRITICAL_APPRAISAL">
          <p>
            To critically appraise case-control studies, consider factors such
            as selection of controls, adequacy of data on exposure, adequate
            sample size to provide precise estimates, and use of validated and
            clinically relevant exposure measurement. There are several types of
            bias that can potentially impact equivalence or non-inferiority
            randomized clinical trials (RCTs). Here are the main types to
            consider.
          </p>
          <p>
            The impact of bias in the selection of cases and controls can cause
            the observed association to be either stronger or weaker than the
            true association.
          </p>
          <ul>
            <li>
              <strong>Selection of controls</strong>: Bias can occur if controls
              are not selected properly, meaning they do not represent the
              population that produced the cases. There are different types of
              biases in the selection of controls to consider.
              <ul>
                <li>
                  <strong>Berkson's Bias</strong>: When cases and controls are
                  selected from hospitalized patients, leading to a
                  non-representative sample.
                </li>
                <li>
                  <strong>Control selection bias</strong>: When controls are
                  selected based on criteria related to the exposure, leading to
                  bias.
                </li>
              </ul>
            </li>
            <li>
              <strong>Selection of cases</strong>: Bias can occur if cases are
              not selected properly, meaning they do not represent the
              population that produced the cases. There are different types of
              biases in the selection of cases to consider.
              <ul>
                <li>
                  <strong>Hospital patient selection bias</strong>: Cases are
                  selected from hospital patients, which may not represent the
                  general population of cases.
                </li>
                <li>
                  <strong>Survivor bias</strong>: Only cases who survived a
                  condition are included, potentially excluding those with more
                  severe disease who did not survive.
                </li>
              </ul>
            </li>
            <li>
              The impact of bias in the selection of cases and controls can
              cause the observed association to be either stronger or weaker
              than the true association.
            </li>
            <li>
              <strong>Recall bias</strong>: Cases and controls may not remember
              their exposures accurately; cases may be more (or less) likely to
              accurately remember exposure leading to differential
              misclassification.
            </li>
            <li>
              <strong>Interviewer bias</strong>: If interviewers know the
              case/control status, they may probe differently for exposure
              information, introducing differential misclassification.
            </li>
          </ul>
        </v-tabs-window-item>
        <v-tabs-window-item :value="LEVEL_OF_EVIDENCE">
          <h4 class="my-4">Level of Evidence <strong>3b</strong>.</h4>
          <p>
            Level 3 evidence is obtained from well-designed case-control or
            cohort studies. These studies usually involve comparing groups of
            individuals with a specific outcome (cases) to those without the
            outcome (controls) and investigating the potential exposure or risk
            factor retrospectively.
          </p>
          <p>
            These studies provide moderate-quality evidence that is useful for
            identifying associations and generating hypotheses, especially for
            rare conditions. However, they are susceptible to various biases and
            cannot establish causality. When interpreting results from
            case-control studies, it is important to consider these limitations
            and use the findings as a basis for further research and
            higher-level evidence gathering.
          </p>
        </v-tabs-window-item>
        <v-tabs-window-item :value="EXAMPLE">
          <h4 class="my-4">
            Is there a significant association between smoking and the risk of
            developing lung cancer?
          </h4>
          <ul>
            <li><strong>Study design</strong>: Case-Control Study</li>
            <li>
              <strong>Study population</strong>:
              <ul>
                <li>
                  <span class="italic">Cases</span>: Patients diagnosed with
                  lung cancer at the hospital between 2015 and 2020.
                </li>
                <li>
                  <span class="italic">Controls</span>: Patients without lung
                  cancer, matched by age and sex, who were treated at the same
                  hospital for non-cancerous conditions during the same period.
                </li>
              </ul>
            </li>
            <li>
              <strong>Independent Variables</strong>:
              <ul>
                <li>
                  <span class="italic">Exposure Measure</span>: Smoking status
                </li>
                <li>
                  <span class="italic">Exposed Group</span>: Individuals who
                  have a history of smoking (current or former smokers).
                </li>
                <li>
                  <span class="italic">Non-Exposed Group</span>: Individuals who
                  have never smoked.
                </li>
              </ul>
            </li>
            <li>
              <strong>Outcome Measure</strong>: Diagnosis of lung cancer
              (yes/no).
            </li>
            <li>
              <strong>Measure of Association</strong>: Odds Ratio (OR). The odds
              ratio is a measure of association that quantifies the odds of
              exposure (smoking) among cases (lung cancer patients) relative to
              the odds of exposure among controls (patients without lung
              cancer).
            </li>
            <li>
              <strong>Data and Analysis</strong>:
              <ul>
                <li>
                  <span class="italic">Cases (Lung Cancer Patients)</span>:
                  Smokers: 80, Non-Smokers: 20.
                </li>
                <li>
                  <span class="italic">Controls (Non-Cancer Patients)</span>:
                  Smokers: 40, Non-Smokers: 60
                </li>
              </ul>
            </li>
            <li>
              <strong>Odds Calculation</strong>:
              <ul>
                <li>
                  <span class="italic">Odds of Smoking among Cases</span>: 80/20
                  = 4
                </li>
                <li>
                  <span class="italic">Odds of Smoking among Controls</span>:
                  40/60 = 2/3
                </li>
                <li><span class="italic">Odds Ratio (OR)</span>: 6</li>
                <li>
                  <span class="italic"
                    >95% Confidence Interval (CI) for the Odds Ratio</span
                  >: 3.2 to 11.3
                </li>
              </ul>
            </li>
          </ul>

          <p className="mt-5 pb-0">
            The odds of smoking among lung cancer patients are approximately 6
            times higher than among patients without lung cancer. The 95%
            confidence interval for the OR ranges from 3.2 to 11.3, indicating a
            moderately precise estimate of the association between smoking and
            lung cancer.
          </p>
        </v-tabs-window-item>
      </v-tabs-window>
    </v-card>
  </div>
</template>

<script>
import { provide } from "vue";
import { useTabSync } from "@/mixins/useTabSync"; // Adjust
import { useResponsive } from "../../mixins/responsiveMixin"; // Adjust the path as needed
import {
  EXAMPLE,
  LEVEL_OF_EVIDENCE,
  WEAKNESSES,
  STRENGTHS,
  CRITICAL_APPRAISAL,
} from "../../assets/ids";

export default {
  setup() {
    const { windowWidth, isMobile } = useResponsive();
    provide("windowWidth", windowWidth);
    provide("isMobile", isMobile);

    const { tab } = useTabSync(STRENGTHS); // Pass the default tab value

    return {
      windowWidth,
      isMobile,
      tab,
      EXAMPLE,
      LEVEL_OF_EVIDENCE,
      WEAKNESSES,
      STRENGTHS,
      CRITICAL_APPRAISAL,
    };
  },
};
</script>
<style scoped></style>
