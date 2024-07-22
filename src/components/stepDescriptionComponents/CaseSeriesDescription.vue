<template>
  <div>
    <p>
      A descriptive study design that involves the detailed analysis of a group
      of patients with similar characteristics or who share a common condition.
      Provides a comprehensive and in-depth description of the clinical
      characteristics, course of disease, and outcomes for the patients included
      in the series. Unlike experimental designs, case series lack a comparison
      group for assessing causation.
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
        <v-tab value="oxford">Oxford CEBM Level of Evidence</v-tab>
        <v-tab value="example">Example Study</v-tab>
      </v-tabs>
      <v-tabs-window v-model="tab">
        <v-tabs-window-item value="strengths">
          <ol>
            <li>
              <strong>Rich clinical information</strong>: Case series reports
              allow for in-depth characterization of individual cases, providing
              valuable clinical information and expanding knowledge in specific
              fields.
            </li>
            <li>
              <strong>Hypothesis generation</strong>: They can generate
              hypotheses and identify potential associations or outcomes that
              need further investigation through more rigorous study designs.
            </li>
            <li>
              <strong>Rare conditions or events</strong>: Case series provide a
              means to study rare conditions or events where randomized
              controlled trials may not be feasible or ethical.
            </li>
            <li>
              <strong>Clinical insights</strong>: Provides valuable clinical
              insights and contributes to the understanding of disease patterns,
              natural history, and potential treatment approaches.
            </li>
            <li>
              <strong>Illustrative Cases</strong>: Illustrative cases within a
              series can be used for educational purposes, enhancing medical
              knowledge and training.
            </li>
          </ol>
        </v-tabs-window-item>
        <v-tabs-window-item value="weaknesses">
          <ol>
            <li>
              <strong>Lack of comparison or control group</strong>: The absence
              of a comparison or control group limits the ability to establish
              causality or differentiate between the effects of the intervention
              and other factors.
            </li>
            <li>
              <strong>Inherent selection bias</strong>: The selection of cases
              for inclusion in the series is often based on certain criteria,
              which may result in a non-representative sample and introduce
              bias.
            </li>
            <li>
              <strong>Limited generalizability</strong>: Findings from case
              series reports cannot be generalized to the broader population due
              to the absence of randomization and control.
            </li>
            <li>
              <strong>Critical Appraisal</strong>: To critically appraise case
              reports, consider factors such as selective reporting of details,
              preconceived notions about a particular condition, and
              researcher’s own bias. There are several types of bias that can
              potentially impact cross-sectional studies. Here are the main
              types to consider.
            </li>
            <li>
              <strong>Ascertainment bias</strong>: Cases may be selected based
              on certain characteristics or circumstances, leading to an
              unrepresentative sample.
            </li>
            <li>
              <strong>Reporting bias</strong>: Variations in reporting practices
              and inconsistent documentation may introduce biases in data
              collection.
            </li>
            <li>
              <strong>Observer bias</strong>: Researchers or clinicians involved
              in collecting and interpreting data may introduce their own
              subjective biases.
            </li>
          </ol>
        </v-tabs-window-item>
        <v-tabs-window-item value="oxford">
          <h4 class="my-4">Level of Evidence <strong>4</strong>.</h4>
          <p>
            Level 4 evidence refers to case reports or case series that provide
            anecdotal or descriptive information about individual cases or a
            series of cases. Level 4 evidence is considered the lowest level of
            evidence on the hierarchy.
          </p>
          <p>
            While case series can contribute to the medical literature by
            sharing valuable clinical experiences and observations, they are
            considered anecdotal evidence and have inherent limitations. This
            level of evidence does not involve systematic data collection or
            comparison with control groups, making it difficult to establish
            causality or generalize to a broader population.
          </p>
          <p>
            Case series reports contribute exploratory evidence and can be
            useful for generating hypotheses, but they require further research
            with more rigorous designs to establish stronger evidence.
          </p>
        </v-tabs-window-item>
        <v-tabs-window-item value="example">
          <h4 class="my-4">
            What is the impact of mindfulness practices on stress reduction in
            college students?
          </h4>
          <ul>
            <li><strong>Study design</strong>: Case series report</li>
            <li>
              <strong>Study population</strong>: College students aged 18-25
              years, enrolled in a university setting, and experiencing elevated
              levels of stress.
            </li>
            <li>
              <strong>Suggested variables</strong>:
              <ul>
                <li>
                  <span class="italic">Independent Variable</span>: Mindfulness
                  Practices
                  <ul>
                    <li>
                      Type of mindfulness practice (e.g. meditation, deep
                      breathing exercises, yoga)
                    </li>
                    <li>
                      Frequency and duration of mindfulness practice sessions
                    </li>
                    <li>
                      Specific techniques used within mindfulness practices
                    </li>
                  </ul>
                </li>
                <li>
                  <span class="italic">Dependent Variable</span>: Stress Levels
                  - Measured using a validated stress scale before and after
                  practicing mindfulness techniques
                </li>
              </ul>
            </li>
            <li>
              <strong>Sample size calculation</strong>: For this case series
              report, a convenient sample of college students who meet the
              inclusion criteria and consent to participate in the mindfulness
              program will be recruited. While there is no predetermined sample
              size calculation, the aim is to include an adequate number of
              cases to provide descriptive information about the impact of
              mindfulness practices on stress reduction in college students. The
              final sample size will depend on the number of eligible
              participants who complete the study.
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
