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
        <v-tabs-window-item :value="WEAKNESSES">
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
        <v-tabs-window-item :value="CRITICAL_APPRAISAL">
          <p>
            To critically appraise case reports, consider factors such as
            selective reporting of details, preconceived notions about a
            particular condition, and researcher’s own bias. There are several
            types of bias that can potentially impact cross-sectional studies:
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
        <v-tabs-window-item :value="LEVEL_OF_EVIDENCE">
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
        <v-tabs-window-item :value="EXAMPLE">
          <h4 class="my-4">
            What is the impact of virtual reality therapy on anxiety levels in
            pediatric patients?
          </h4>
          <ul>
            <li><strong>Study design</strong>: Case series report</li>
            <li>
              <strong>Study population</strong>: Pediatric patients aged 8 to 12
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
                  environments used
                </li>
                <li>
                  <span class="italic">Dependent Variable</span>: Anxiety Levels
                  - Measured using a validated anxiety scale before and after
                  VRT sessions
                </li>
              </ul>
            </li>
            <li>
              <strong>Sample Size Calculation</strong>: Given the exploratory
              nature of the case series design and the absence of a
              predetermined sample size calculation, our study aimed to include
              a convenience sample of pediatric patients who meet the inclusion
              criteria and consent to participate in the VRT program. As we
              gather data from these cases, we will compile and analyze the
              results to provide descriptive information about the impact of VRT
              on anxiety levels in pediatric patients.
            </li>
          </ul>
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
