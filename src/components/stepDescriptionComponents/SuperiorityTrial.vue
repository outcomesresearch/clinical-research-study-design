<template>
  <div>
    {{ size }}
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
        <v-tab value="criticalAppraisal">Cricial Appraisal</v-tab>
        <v-tab value="oxford">Oxford CEBM Level of Evidence</v-tab>
        <v-tab value="example">Example Study</v-tab>
      </v-tabs>
      <v-tabs-window v-model="tab">
        <v-tabs-window-item value="strengths">
          <ol>
            <li>
              <strong>Clear objective</strong>: The primary objective of
              superiority trials is to determine if one treatment is
              significantly better than another, providing a clear and specific
              research aim.
            </li>
            <li>
              <strong>High scientific rigor</strong>: Superiority trials are
              usually designed with strict methodology, including randomization,
              blinding, and control groups, which enhances the internal validity
              of the study.
            </li>
            <li>
              <strong>Direct clinical relevance</strong>: Successful
              demonstration of superiority can have immediate clinical
              implications, allowing for evidence-based decision-making in
              treatment selection.
            </li>
          </ol>
        </v-tabs-window-item>
        <v-tabs-window-item value="weaknesses">
          <ol>
            <li>
              <strong>High sample size requirements</strong>: Superiority trials
              typically require large sample sizes to achieve adequate
              statistical power, which can be resource-intensive,
              time-consuming, and potentially costly.
            </li>
            <li>
              <strong>Ethical considerations</strong>: The requirement of a
              control group with placebo or standard therapy may raise ethical
              concerns due to withholding potentially effective treatments from
              participants.
            </li>
            <li>
              <strong>Dependent on patient compliance</strong>: The validity of
              superiority trials heavily relies on participant compliance with
              assigned treatments, which may vary and introduce potential bias.
            </li>
          </ol>
        </v-tabs-window-item>
        <v-tabs-window-item value="criticalAppraisal">
          <p class="mb-5">
            To critically appraise superiority RCTs, consider factors such as
            adequacy of randomization, use of blinding, adequate sample size to
            provide precise estimates, and use of validated and clinically
            relevant outcome measurements. There are several types of bias that
            can potentially impact superiority randomized clinical trials
            (RCTs). Here are the main types to consider.
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
          <p>
            Level 1b evidence refers to evidence derived from well-conducted
            randomized clinical trials (RCTs) with a narrow confidence interval.
            In Level 1b evidence, the research is based on high-quality RCTs
            that include appropriate randomization methods and have controlled
            for biases effectively. These trials often involve enough
            participants to provide statistical power for drawing reliable
            conclusions. The narrow confidence interval indicates a precise
            estimation of the treatment effect, reducing uncertainty.
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
            Is the new immunotherapy drug superior to methotrexate, the current
            standard treatment in improving clinical outcomes in patients with
            rheumatoid arthritis?
          </h4>
          <ul>
            <li>
              <strong>Study design</strong>: Randomized controlled trial (RCT)
            </li>
            <li>
              <strong>Study population</strong>: Adults (age 18-65) diagnosed
              with rheumatoid arthritis, who meet the inclusion and exclusion
              criteria for the trial and are willing to participate.
            </li>
            <li>
              <strong>Dependent variables</strong>: Clinical outcomes specific
              to condition Y, such as symptom severity, functional status, or
              quality of life.
            </li>
            <li><strong>Duration of follow-up</strong>: 24 weeks</li>
            <li>
              <strong>Primary outcome measure</strong>: Improvement in symptom
              severity score from baseline to week 24, measured using the
              "Patient Global Assessment of Disease Activity" (PGA). The PGA is
              a patient-reported outcome measure where patients rate their
              overall disease activity on a numerical scale or using verbal
              descriptors.
            </li>
            <li>
              <strong>Clinically meaningful difference</strong>: Studies suggest
              that a change of at least 1 point on the 0-10 numerical scale of
              the PGA represents a clinically meaningful difference in disease
              activity.
            </li>
            <li>
              <strong>Sample size calculation</strong>: Assuming a two-sided
              significance level of 0.05 and a statistical power of 80%,
              previous research has suggested that clinically meaningful
              improvement in the symptom severity score is a change of at least
              1 point on the PGA. With this information, a sample size
              calculation estimates a minimum of 100 participants (50 in each
              group) based on anticipated effect sizes and variability.
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
