export const OBSERVATIONAL_STUDY_ID = "observationalStudy";

const ANALYTICAL_STUDY = "analyticalStudy";
const EXPOSURE_OUTCOME = "exposureOutcome";
const OUTCOME_EXPOSURE = "outcomeExposure";
const OUTCOME_EXPOSURE_SAME_TIME = "outcomeExposureSameTIme";
const COMPARISON_GROUP = "comparison gruop"
const DIRECTION = "direction"
const HOW_MANY_SUBJECTS = "subjectcount"
const DESCRIPTIVE_STUDY = "descriptiveStudy";
const ONE_SUBJECT = "1Subject";
const MORE_THAN_ONE = ">1Subject";


const analyticalStudySubtree = {
  [ANALYTICAL_STUDY]: {
    type: "statement",
    title: "Analytical Study",
    id: ANALYTICAL_STUDY,
    description: "so far you're on the path for analytical study",
    next: DIRECTION
  },
  [DIRECTION]: {
    type: "question",
    title: "Direction?",
    id: DIRECTION,
    description:
      "The sequence of events or the temporal relationship between the exposure and the outcome. This sequence differs between cohort studies and case-control studies.",
    choices: [
      {
        answer: "Exposure → Outcome",
        next: EXPOSURE_OUTCOME,
        option_description: "Exposure leads to outcome"
      },
      {
        answer: "Outcome → Exposure",
        next: OUTCOME_EXPOSURE,
        option_description: "Outcome leads to exposure"
      },
      {
        answer: "Exposure ≟ Outcome",
        next: OUTCOME_EXPOSURE_SAME_TIME,
        option_description: "Relationship between exposure and outcome is indeterminate"
      },
    ],
  },
  [EXPOSURE_OUTCOME]: {
    type: "statement",
    title: "You chose Cohort Study.",
    id: EXPOSURE_OUTCOME,
    leaf: true,
    description:
      " Participants are initially classified based on their exposure status (exposed vs. unexposed) or level of intervention, followed over time, and outcomes are assessed based on their exposure or intervention status.  The relationship between exposure or intervention and outcomes is analyzed to establish associations.",
  },
  [OUTCOME_EXPOSURE]: {
    type: "statement",
    title: "You chose Case Control Study.",
    id: OUTCOME_EXPOSURE,
    leaf: true,
    description:
      "Cases (individuals with the outcome of interest) and controls (those without the outcome) are identified, exposure status is determined for cases and controls retrospectively, and the baseline characteristics of cases and controls are compared to assess the association between exposure or intervention and outcome.",
  },
  [OUTCOME_EXPOSURE_SAME_TIME]: {
    type: "statement",
    title: "You chose Cross Sectional Study.",
    id: OUTCOME_EXPOSURE_SAME_TIME,
    leaf: true,
    description:
      "Observational research designs that collect data from participants at a single point in time, providing a snapshot of a population.  They aim to examine the prevalence of exposure and outcome variables within the population and identify associations. Cross-sectional studies are often a starting point for research, guiding the development of more robust study designs to explore causal relationships.",
  },
};

const descriptiveStudySubtree = {
  [DESCRIPTIVE_STUDY]: {
    type: "statement",
    title: "Descriptive Study",
    id: DESCRIPTIVE_STUDY,
    description:
      "Descriptive studies are not hypothesis-driven and aim to characterize and document.  The purpose is to explore patterns, identify trends, or generate hypotheses",
    next: HOW_MANY_SUBJECTS,
  },
  [HOW_MANY_SUBJECTS]: {
    type: "question",
    title: "How many subjects were there?",
    id: HOW_MANY_SUBJECTS,
    choices: [
      { answer: "1", next: ONE_SUBJECT },
      { answer: "More than 1", next: MORE_THAN_ONE },
    ],
  },
  [ONE_SUBJECT]: {
    type: "statement",
    title: "You chose Case Report.",
    id: ONE_SUBJECT,
    leaf: true,
    description:
      "In-depth analysis and documentation of individual case, often focusing on unique or rare medical conditions, unusual presentations, or unexpected outcomes.  Typically provide a detailed narrative of a patient's medical history, symptoms, diagnostic findings, treatment, and outcomes.  Case reports are a form of anecdotal evidence and contribute to the medical literature by sharing valuable clinical experiences.",
  },
  [MORE_THAN_ONE]: {
    type: "statement",
    title: "You chose Case Series.",
    id: MORE_THAN_ONE,
    leaf: true,
    description:
      "A descriptive study design that involves the detailed analysis of a group of patients with similar characteristics or who share a common condition. Provides a comprehensive and in-depth description of the clinical characteristics, course of disease, and outcomes for the patients included in the series.  Unlike experimental designs, case series lack a comparison group for assessing causation.",
  },
};

const comparisonGroupSubtree = {
  [COMPARISON_GROUP]: {
    type: "question",
    title: "Was there a comparison group?",
    description: "comparison group description",
    choices: [
      {
        answer: "Yes",
        next: ANALYTICAL_STUDY,
        option_description: "A comparison group was used",
      },
      {
        answer: "No",
        next: DESCRIPTIVE_STUDY,
        option_description: "No comparison group was used",
      },
    ],
  },
  ...analyticalStudySubtree,
  ...descriptiveStudySubtree,
}

export default {
  [OBSERVATIONAL_STUDY_ID]: {
    type: "statement",
    title: "Observational Study",
    id: OBSERVATIONAL_STUDY_ID,
    description:
      "so far you're on the path for observational study",
    next: COMPARISON_GROUP

  },
  ...comparisonGroupSubtree
};
