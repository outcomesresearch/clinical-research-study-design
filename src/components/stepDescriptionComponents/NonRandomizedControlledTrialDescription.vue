<template>
  <div>
    <p>
      Investigator does assign interventions, but those interventions are not
      randomly assigned. Examples include before-and-after studies, time series
      studies, and non-equivalent control group designs. Investigators may
      choose to use a non-randomized clinical trial design instead of a
      randomized clinical trial (RCT) design in various situations. Here are a
      few scenarios.
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
              <strong>Real-World context</strong>: Non-randomized trials often
              reflect real-world clinical practice and provide insights into the
              effectiveness and safety of interventions in routine settings.
            </li>
            <li>
              <strong>Ethical considerations</strong>: In some cases, it may be
              ethically challenging or deemed inappropriate to randomize
              participants to different treatment groups. For example, if a
              treatment is believed to be highly effective and withholding it
              from a control group would be unethical, a non-randomized design
              may be used.
            </li>
            <li>
              <strong>Cost and feasibility</strong>: Conducting RCTs can be
              resource-intensive and may require significant time, funding, and
              logistical support. In situations where these resources are
              limited, a non-randomized design can be a more feasible option.
            </li>
            <li>
              <strong>Exploratory or Hypothesis-Generating Studies</strong>:
              Non-randomized designs can be useful when researchers aim to
              explore new treatments or interventions and generate hypotheses
              for further investigation. These designs allow for initial
              exploration of potential benefits or risks.
            </li>
          </ol>
        </v-tabs-window-item>
        <v-tabs-window-item value="weaknesses">
          <ol>
            <li>
              <strong>Potential bias</strong>: Non-randomized trials are prone
              to various types of bias, which can distort the results and affect
              the validity of the conclusions.
            </li>
            <li>
              <strong>Confounding factors</strong>: Differences in baseline
              characteristics between treatment groups can confound the results
              and make it challenging to attribute observed effects solely to
              the interventions.
            </li>
            <li>
              <strong>Limited internal validity</strong>: Non-randomized designs
              may have limited internal validity due to the lack of random
              allocation, resulting in potential alternative explanations for
              observed outcomes.
            </li>
          </ol>
        </v-tabs-window-item>
        <v-tabs-window-item value="criticalAppraisal">
          <p class="mb-5">
            To critically appraise non-randomized controlled trials, consider
            factors such as lack of randomization, use of blinding, was there
            adequate sample size to provide precise estimates, and use of
            validated and clinically relevant outcome measurements.
          </p>
          <ol>
            <li>
              <strong>Selection bias</strong>: Selection bias can occur when the
              non-random allocation of participants to treatment groups can lead
              to systematic differences in patients that impacts the
              interpretation of results.
            </li>
          </ol>
        </v-tabs-window-item>
        <v-tabs-window-item value="oxford">
          <h4 class="my-4">Level of Evidence <strong>3</strong>.</h4>
          <p class="mb-5">
            Level 3 evidence is categorized as "Non-randomized controlled
            cohort/follow-up study" within the CEBM levels of evidence
            framework. Non-randomized trials can contribute important
            information, especially in cases where conducting randomized
            controlled trials is challenging or not possible.
          </p>
          <p>
            However, non-randomized trials should be interpreted with caution
            due to the potential for confounding factors and other biases that
            may influence the results. It is important to consider the
            limitations of non-randomized trials when assessing the strength of
            evidence.
          </p></v-tabs-window-item
        >
        <v-tabs-window-item value="example">
          <h4 class="my-4">
            Is treatment X (e.g., a targeted therapy blocking a specific
            pathway) superior to the standard treatment (e.g., chemotherapy) in
            slowing disease progression and reducing disability in patients with
            advanced non-small cell lung cancer?
          </h4>
          <p>
            A non-randomized trial design was selected for pragmatic reasons.
            The non-randomized trial design allows researchers to evaluate the
            two interventions under conditions closer to routine clinical
            practice. This pragmatic approach offers additional information on
            treatment outcomes and experiences in a broader patient population.
          </p>
          <ul>
            <li>
              <strong>Study design</strong>: Non-randomized superiority clinical
              trial
            </li>
            <li>
              <strong>Study population</strong>: Adults (age 18-75) diagnosed
              with advanced non-small cell lung cancer who meet the inclusion
              and exclusion criteria and are willing to participate.
            </li>
            <li>
              <strong>Dependent variables</strong>: Disease progression (e.g.,
              tumor size, metastasis), disability (e.g., ability to perform
              daily activities), and safety profiles.
            </li>
            <li><strong>Duration of follow-up</strong>: 1 year</li>
            <li>
              <strong>Primary outcome measure</strong>: Disease progression-free
              survival (time to disease progression or death)
            </li>
            <li>
              <strong>Clinically meaningful difference</strong>: In this
              non-randomized trial, a 20% improvement in disease
              progression-free survival is determined to be clinically
              meaningful, indicating that treatment X would need to demonstrate
              a 20% increase or reduction in the risk of disease progression or
              death compared to the standard treatment to be considered
              clinically superior.
            </li>
            <li>
              <strong>Sample size calculation</strong>: Assuming a significant
              difference in disease progression-free survival of 20% between
              treatment X and the standard treatment, with a two-sided
              significance level of 0.05 and a statistical power of 80%, a
              sample size calculation estimates a minimum of 200 participants
              (100 per group).
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
