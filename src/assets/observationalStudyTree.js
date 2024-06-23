export const OBSERVATIONAL_STUDY_ID = "observationalStudy";

const ANALYTICAL_STUDY = "analyticalStudy";
const EXPOSURE_OUTCOME = "exposureOutcome";
const OUTCOME_EXPOSURE = "outcomeExposure";
const OUTCOME_EXPOSURE_SAME_TIME = "outcomeExposureSameTIme";
const analyticalStudySubtree = {
  [ANALYTICAL_STUDY]: {
    title: "Analytical Study",
    id: ANALYTICAL_STUDY,
    question: "Direction?",
    question_description:
      "The sequence of events or the temporal relationship between the exposure and the outcome. This sequence differs between cohort studies and case-control studies.",
    options: [
      {
        answer: "Exposure --> Outcome",
        next: EXPOSURE_OUTCOME,
      },
      {
        answer: "Outcome --> Exposure",
        next: OUTCOME_EXPOSURE,
      },
      {
        answer: "Exposure and outcome at the same time",
        next: OUTCOME_EXPOSURE_SAME_TIME,
      },
    ],
  },
  [EXPOSURE_OUTCOME]: {
    id: EXPOSURE_OUTCOME,
    question: "You chose Cohort Study.",
    description:
      " Participants are initially classified based on their exposure status (exposed vs. unexposed) or level of intervention, followed over time, and outcomes are assessed based on their exposure or intervention status.  The relationship between exposure or intervention and outcomes is analyzed to establish associations.",
  },
  [OUTCOME_EXPOSURE]: {
    id: OUTCOME_EXPOSURE,
    question: "You chose Case Control Study.",
    question_description:
      "Cases (individuals with the outcome of interest) and controls (those without the outcome) are identified, exposure status is determined for cases and controls retrospectively, and the baseline characteristics of cases and controls are compared to assess the association between exposure or intervention and outcome.",
  },
  [OUTCOME_EXPOSURE_SAME_TIME]: {
    id: OUTCOME_EXPOSURE_SAME_TIME,
    question: "You chose Cross Sectional Study.",
    question_description:
      "Observational research designs that collect data from participants at a single point in time, providing a snapshot of a population.  They aim to examine the prevalence of exposure and outcome variables within the population and identify associations. Cross-sectional studies are often a starting point for research, guiding the development of more robust study designs to explore causal relationships.",
  },
};

const DESCRIPTIVE_STUDY = "descriptiveStudy";
const ONE_SUBJECT = "1Subject";
const MORE_THAN_ONE = ">1Subject";
const descriptiveStudySubtree = {
  [DESCRIPTIVE_STUDY]: {
    title: "Descriptive Study",
    description:
      "Descriptive studies are not hypothesis-driven and aim to characterize and document.  The purpose is to explore patterns, identify trends, or generate hypotheses",
    id: DESCRIPTIVE_STUDY,
    question: "How many subjects were there?",
    options: [
      { answer: "1", next: ONE_SUBJECT },
      { answer: "More than 1", next: MORE_THAN_ONE },
    ],
  },
  [ONE_SUBJECT]: {
    id: ONE_SUBJECT,
    question: "You chose Case Report.",
    question_description:
      "In-depth analysis and documentation of individual case, often focusing on unique or rare medical conditions, unusual presentations, or unexpected outcomes.  Typically provide a detailed narrative of a patient's medical history, symptoms, diagnostic findings, treatment, and outcomes.  Case reports are a form of anecdotal evidence and contribute to the medical literature by sharing valuable clinical experiences.",
  },
  [MORE_THAN_ONE]: {
    id: MORE_THAN_ONE,
    question: "You chose Case Series.",
    question_description:
      "A descriptive study design that involves the detailed analysis of a group of patients with similar characteristics or who share a common condition. Provides a comprehensive and in-depth description of the clinical characteristics, course of disease, and outcomes for the patients included in the series.  Unlike experimental designs, case series lack a comparison group for assessing causation.",
  },
};

export default {
  [OBSERVATIONAL_STUDY_ID]: {
    title: "Observational Study",
    description:
      "Investigator does not control or assign exposure. Instead, the researcher observes and analyzes existing exposures or interventions that occur naturally, without any interference.",
    id: OBSERVATIONAL_STUDY_ID,
    question: "Was there a comparison group?",
    question_description:
      "A comparison group is a crucial requirement in assessing the relationship between an exposure or intervention, and an outcome. The comparison group consists of individuals or a cohort of participants who do not have the exposure or intervention of interest, allowing for a comparison with those who do.",
    options: [
      {
        answer: "Yes",
        next: ANALYTICAL_STUDY,
        description: "A comparison group was used",
      },
      {
        answer: "No",
        next: DESCRIPTIVE_STUDY,
        description: "No comparison group was used",
      },
    ],
  },
  ...analyticalStudySubtree,
  ...descriptiveStudySubtree,
};
