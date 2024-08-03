<template>
  <div>
    <p>
      Observational research designs that collect data from participants at a
      single point in time, providing a snapshot of a population. They aim to
      examine the prevalence of exposure and outcome variables within the
      population and identify associations. Cross-sectional studies are often a
      starting point for research, guiding the development of more robust study
      designs to explore causal relationships.
    </p>
    <v-card class="mt-5">
      <v-tabs
        v-model="tab"
        bg-color="gray"
        grow
        class="mb-5"
        :direction="isMobile ? 'vertical' : 'horizontal'"
      >
        <v-tab value="strengths">Strengths</v-tab>
        <v-tab value="weaknesses">Weaknesses</v-tab>
        <v-tab value="criticalAppraisal">Crticial Appraisal</v-tab>
        <v-tab value="oxford">Oxford CEBM Level of Evidence</v-tab>
        <v-tab value="example">Example Study</v-tab>
      </v-tabs>
      <v-tabs-window v-model="tab">
        <v-tabs-window-item value="strengths">
          <ol>
            <li>
              <strong>Quick and relatively inexpensive</strong>: Cross-sectional
              studies are relatively quick and cost-effective compared to
              longitudinal studies, as they gather data at a single point in
              time.
            </li>
            <li>
              <strong>Provides a snapshot of the population</strong>: These
              studies give an overview of a population's characteristics at a
              specific time, providing insights into the prevalence of exposure
              and outcome variables.
            </li>
            <li>
              <strong>Useful for generating hypotheses</strong>: Cross-sectional
              studies are often the first step in research, allowing researchers
              to generate hypotheses for further investigation.
            </li>
          </ol>
        </v-tabs-window-item>
        <v-tabs-window-item value="weaknesses">
          <ol>
            <li>
              <strong>Limited causal inference</strong>: Cross-sectional designs
              focus on associations rather than causal relationships. It is
              challenging to establish the direction of causality or determine
              if the exposure preceded the outcome.
            </li>
            <li>
              <strong>Potential for selection bias</strong>: Cross-sectional
              studies may suffer from selection bias if the participants are not
              representative of the target population, leading to results that
              are not generalizable.
            </li>
            <li>
              <strong>Recall bias and measurement error</strong>: As data are
              collected at a single time point, participants' recall of past
              exposures and outcomes may be inaccurate, leading to recall bias
              and measurement error in the study.
            </li>
            <li>
              <strong>Nonresponse bias</strong>: If participation rates are low,
              those who choose to participate may differ systematically from
              those who don't, introducing nonresponse bias.
            </li>
            <li>
              <strong>Cross-sectional bias</strong>: Bias may arise from
              comparing respondents' characteristics at a single point in time,
              potentially leading to biased associations or misleading
              conclusions.
            </li>
          </ol>
        </v-tabs-window-item>
        <v-tabs-window-item value="criticalAppraisal">
          <p>
            To critically appraise cross-sectional studies, consider factors
            such as selection of study participants and adequacy of data, and
            take care to avoid bias in assessing exposure to on exposure.
          </p>
          <p>
            There are several types of bias that can potentially impact
            cross-sectional studies:
          </p>
          <ul>
            <li>
              <strong>Selection bias</strong>: Selection bias can occur if the
              selection of study participants is not representative of the
              target population. This bias can lead to an over- or
              underrepresentation of certain groups, which can affect the
              generalizability of the study findings.
            </li>
            <li>
              <strong>Information bias</strong>: Information bias can occur if
              there are errors or inaccuracies in the data collected. It can
              arise due to self-reporting by participants or limitations in the
              measurement tools used to assess exposures or outcomes. If there
              is differential misclassification of exposure or outcome between
              comparison groups, it can introduce bias into the study results.
            </li>
            <li>
              <strong>Observer bias</strong>: Observer bias can occur if the
              researchers collecting the data are aware of the participants'
              exposure status and this knowledge influences how the data is
              collected or recorded.
            </li>
          </ul>
        </v-tabs-window-item>
        <v-tabs-window-item value="oxford">
          <h4 class="my-4">Level of Evidence <strong>2c</strong>.</h4>
          <p>
            Level 2c, specifically applied to cross-sectional studies, signifies
            a moderate level of evidence. The letter "C" represents
            cross-sectional studies within Level 2 evidence.
          </p>
          <p>
            While cross-sectional studies provide valuable insights into
            associations, they have limitations in terms of establishing
            causality and addressing biases. Therefore, they are considered
            moderate-level evidence and provide a less robust level of evidence
            compared to higher-ranking levels, such as randomized controlled
            trials (RCTs) or systematic reviews/meta-analyses.
          </p>
        </v-tabs-window-item>
        <v-tabs-window-item value="example">
          <h4 class="my-4">
            What is the relationship between physical activity levels and mental
            health outcomes in college students?
          </h4>
          <ul>
            <li>
              <strong>Study design</strong>: A cross-sectional study design will
              be employed, where data will be collected at a single point in
              time from a representative sample of college students.
            </li>
            <li>
              <strong>Study Population</strong>: The study will include
              undergraduate students from various universities across the
              country, aged 18-25 years, who are currently enrolled in full-time
              programs.
            </li>
            <li>
              <strong>Variables</strong>: The variables of interest will include
              physical activity level (measured using validated questionnaires),
              mental health outcomes (measured using standardized scales), age,
              gender, body mass index (BMI), academic performance, and
              socioeconomic status.
            </li>
            <li>
              <strong>Primary Results</strong>: The study will aim to explore
              the association between physical activity levels and mental health
              outcomes. Possible results may include finding a significant
              positive correlation between higher physical activity levels and
              better mental health outcomes in college students.
            </li>
            <li>
              <strong>Sample size calculation</strong>: Assuming a power of
              0.80, alpha level of 0.05, and an expected moderate effect size
              based on prior studies, a sample size of 400 participants may be
              required.
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
