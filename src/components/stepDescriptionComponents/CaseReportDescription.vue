<template>
  <div>
    <p>
      Case reports involve the detailed documentation and analysis of the
      clinical characteristics, diagnostic findings, treatment approaches, and
      outcomes of individual patients with unique or rare medical conditions,
      unusual presentations, or unexpected outcomes. They typically provide a
      narrative description of the patient's medical history and relevant
      information. Case reports are a form of anecdotal evidence and contribute
      to the medical literature by sharing valuable clinical experiences.
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
        <v-tab value="criticalAppraisal">Critical Appraisal</v-tab>
        <v-tab value="oxford">Oxford CEBM Level of Evidence</v-tab>
        <v-tab value="example">Example Study</v-tab>
      </v-tabs>
      <v-tabs-window v-model="tab">
        <v-tabs-window-item value="strengths">
          <ol>
            <li>
              <strong>Unique or rare cases</strong>: Case reports provide an
              opportunity to examine and document unusual or rare medical
              conditions, which can contribute to medical knowledge and
              understanding of these conditions.
            </li>
            <li>
              <strong>Valuable clinical experiences</strong>: Case reports share
              valuable clinical experiences and provide insights into diagnostic
              challenges, treatment approaches, and unexpected outcomes.
            </li>
            <li>
              <strong>Hypothesis generation</strong>: Case reports can help
              generate hypotheses for future research by highlighting
              associations or patterns that warrant further investigation.
            </li>
            <li>
              <strong>Educational value</strong>: Case reports serve as teaching
              tools for medical education, allowing healthcare professionals to
              learn from real-world clinical scenarios.
            </li>
          </ol>
        </v-tabs-window-item>
        <v-tabs-window-item value="weaknesses">
          <ol>
            <li>
              <strong>Limited generalizability</strong>: Due to the nature of
              case reports focusing on individual cases, their findings cannot
              be easily generalized to a larger population.
            </li>
            <li>
              <strong>Lack of control group</strong>: Case reports lack a
              comparison group or control, making it difficult to establish
              causality or determine the true effectiveness of a treatment.
            </li>
            <li>
              <strong>Bias and subjectivity</strong>: Case reports can be
              influenced by various biases, including reporting bias,
              confirmation bias, and observer bias.
            </li>
            <li>
              <strong>Lack of statistical analysis</strong>: Case reports often
              lack statistical analysis, making it challenging to assess the
              statistical significance of the reported outcomes.
            </li>
          </ol>
        </v-tabs-window-item>
        <v-tabs-window-item value="criticalAppraisal">
          <p>
            To critically appraise case reports, consider factors such as
            selective reporting of details, preconceived notions about a
            particular condition, and researcher’s own bias. There are several
            types of bias that can potentially impact case report studies:
          </p>
          <ul>
            <li>
              <strong>Reporting bias</strong>: Case reports may be influenced by
              the selective reporting of specific details, omitting certain
              information that does not align with the desired outcome or
              conclusion.
            </li>
            <li>
              <strong>Confirmation bias</strong>: Researchers may have
              preconceived notions or beliefs about a particular condition or
              treatment, leading to a biased interpretation of the case details.
            </li>
            <li>
              <strong>Observer bias</strong>: The researcher's own biases and
              expectations can influence the documentation and interpretation of
              the case, potentially leading to subjective assessments.
            </li>
            <li>
              <strong>Publication bias</strong>: Case reports with more
              extraordinary or positive outcomes are more likely to be
              published, leading to an overemphasis on exceptional cases and
              potentially creating a skewed representation of reality.
            </li>
          </ul>
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
            While case reports can contribute to the medical literature by
            sharing valuable clinical experiences and observations, they are
            considered anecdotal evidence and have inherent limitations. This
            level of evidence does not involve systematic data collection or
            comparison with control groups, making it difficult to establish
            causality or generalize to a broader population.
          </p>
          <p>
            The findings in case reports are based on individual experiences and
            can be influenced by reporting bias, confirmation bias, and other
            types of bias.
          </p>
        </v-tabs-window-item>
        <v-tabs-window-item value="example">
          <h4 class="my-4">
            What is the impact of virtual reality therapy on anxiety levels in
            pediatric patients?
          </h4>
          <ul>
            <li><strong>Study design</strong>: Case report</li>
            <li>
              <strong>Study population</strong>: Single pediatric patient aged 8
              years, diagnosed with anxiety disorders, and seeking treatment at
              a pediatric mental health clinic.
            </li>
            <li>
              <strong>Suggested variables</strong>:
              <ul>
                <li>
                  <span class="italic">Independent Variable</span>: Virtual
                  Reality Therapy (VRT), Exposure to VR therapy sessions,
                  Duration of each VR therapy session, and Specific VR
                  environments used.
                </li>
                <li>
                  <span class="italic">Dependent Variable</span>: Anxiety Levels
                  - Measured using a validated anxiety scale before and after
                  VRT sessions.
                </li>
              </ul>
            </li>
            <li>
              <strong>Approach</strong>: Gather data from this case, analyze the
              results, and provide a detailed description about the impact of
              VRT on anxiety levels in this specific pediatric patient. This
              approach allows for a more in-depth understanding of the
              individual patient’s response to the therapy.
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
