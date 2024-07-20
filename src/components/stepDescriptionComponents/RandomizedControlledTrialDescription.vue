<template>
  <div>
    {{ size }}
    <p>
      Participants are randomly assigned to different interventions and baseline
      characteristics should be comparable between groups. Control and
      experimental interventions are administered based on random assignment.
      Outcomes are assessed and compared between the control and experimental
      intervention to evaluate the impact of the intervention. Randomized
      clinical trials are a powerful and widely accepted method for evaluating
      the causal relationship between an intervention and an outcome.
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
        <v-tab value="criticalAppraisal">Cricial Appraisal</v-tab>
        <v-tab value="oxford">Oxford CEBM Level of Evidence</v-tab>
        <v-tab value="example">Example Study</v-tab>
      </v-tabs>
      <v-tabs-window v-model="tab">
        <v-tabs-window-item value="strengths">
          <ol>
            <li>
              <strong>Causality inference</strong>: RCTs provide a strong basis
              for inferring causality due to the random assignment of
              participants.
            </li>
            <li>
              <strong>Minimization of confounding</strong>: Randomization
              minimizes the impact of known and unknown confounding variables,
              allowing for a more accurate assessment of treatment effects.
            </li>
            <li>
              <strong>Comparability of groups</strong>: Achieves baseline
              comparability, ensuring that differences in outcomes can be
              attributed to the intervention.
            </li>
            <li>
              <strong>Minimization</strong>: A dynamic randomization method that
              minimizes differences between groups by adjusting for specific
              baseline characteristics.
            </li>
          </ol>
        </v-tabs-window-item>
        <v-tabs-window-item value="weaknesses">
          <ol>
            <li>
              <strong>External validity concerns</strong>: Strict
              inclusion/exclusion criteria and controlled settings may limit the
              generalizability of findings to real-world populations.
            </li>
            <li>
              <strong>Ethical limitations</strong>: Randomization may not be
              ethical or practical in certain situations.
            </li>
            <li>
              <strong>Practical challenges</strong>: Recruitment, retention, and
              adherence issues may affect the feasibility and reliability of
              RCTs.
            </li>
            <li>
              <strong>Resource intensive</strong>: Conducting RCTs can be
              time-consuming and expensive.
            </li>
            <li>
              <strong>Potential for bias</strong>: Despite randomization, bias
              can still occur if there are issues with blinding, adherence, or
              other study procedures.
            </li>
            <li>
              <strong>Analytical challenges</strong>: Subjects can drop out or
              switch between treatments, which makes analysis and interpretation
              very challenging.
            </li>
          </ol>
        </v-tabs-window-item>
        <v-tabs-window-item value="criticalAppraisal">
          <p class="mb-5">
            To critically appraise RCTs, consider factors such as randomization,
            use of blinding, adequate sample size to provide precise estimates,
            and outcome measurement. There are several types of bias that can
            potentially impact RCTs. Here are the main types to consider.
          </p>
          <ol>
            <li>
              <strong>Selection bias</strong>: This bias can occur if there is a
              systematic difference in the characteristics of participants
              assigned to different treatment groups. For example, if the
              randomization process fails to properly balance important factors
              between the groups, it can introduce bias and affect the validity
              of the trial results.
            </li>
            <li>
              <strong>Performance bias</strong>: This bias can arise when
              participants or care providers are aware of the assigned
              treatments, which may influence their behavior or decision-making
              during the trial. To mitigate this bias, blinding or masking
              techniques are often employed to maintain participant and/or
              provider unawareness of the assigned treatments.
            </li>
            <li>
              <strong>Detection bias</strong>: Also known as ascertainment bias
              or observer bias, this occurs when outcome assessors are
              influenced by their knowledge of the treatment group assignments,
              leading to biased assessment or interpretation of outcomes.
              Blinding assessors to treatment allocation can help minimize this
              bias.
            </li>
            <li>
              <strong>Attrition bias</strong>: This bias occurs when
              participants drop out from the study, and their reasons for
              dropping out may be related to their treatment or outcome status,
              resulting in incomplete or biased data. High attrition rates can
              impact the generalizability of the findings and introduce bias if
              not appropriately addressed.
            </li>
          </ol>
        </v-tabs-window-item>
        <v-tabs-window-item value="oxford">
          <h4 class="my-4">Level of Evidence <strong>1b</strong>.</h4>
          <p class="mb-5">
            This refers to evidence derived from well-conducted randomized
            clinical trials (RCTs) with a narrow confidence interval. In Level
            1b evidence, the research is based on high-quality RCTs that include
            appropriate randomization methods and have effectively controlled
            for biases. These trials often involve enough participants to
            provide statistical power for drawing reliable conclusions. The
            narrow confidence interval indicates a precise estimation of the
            treatment effect, reducing uncertainty.
          </p>
          <p>
            Level 1b evidence is among the highest levels of evidence available.
            It provides valuable information on the effectiveness of
            interventions, treatments, or therapies, offering robust evidence
            for clinical decision-making.
          </p>
        </v-tabs-window-item>
        <v-tabs-window-item value="example">
          <h4 class="my-4">
            Does the new drug X effectively lower blood pressure in individuals
            with hypertension compared to a placebo?
          </h4>
          <ul>
            <li>
              <strong>Study design</strong>: Randomized controlled trial (RCT)
            </li>
            <li>
              <strong>Study population</strong>: Adults (age 35-70) diagnosed
              with hypertension, without any contraindications for the study
              drug X, and not currently on any other antihypertensive
              medications.
            </li>
            <li>
              <strong>Dependent variables</strong>: Blood pressure measurements
              (systolic and diastolic).
            </li>
            <li><strong>Duration of follow-up</strong>: 12 weeks.</li>
            <li>
              <strong>Primary outcome measure</strong>: Change in systolic blood
              pressure from baseline to week 12.
            </li>
            <li>
              <strong>Clinically meaningful difference</strong>: A reduction in
              systolic blood pressure of 10 mmHg or more is considered
              clinically meaningful in managing hypertension.
            </li>
            <li>
              <strong>Sample size calculation and power</strong>: Assuming a
              two-sided significance level of 0.05 and statistical power of 80%,
              a prior study found that a mean reduction of 10 mmHg in systolic
              blood pressure with a standard deviation of 12 mmHg is clinically
              meaningful. Considering this information, an estimated total
              sample size of 200 participants would be needed. This calculation
              would provide enough statistical power to detect a clinically
              meaningful difference.
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
