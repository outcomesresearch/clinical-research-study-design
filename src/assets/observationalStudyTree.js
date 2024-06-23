export const OBSERVATIONAL_STUDY_ID = "observationalStudy";



const ANALYTICAL_STUDY = "analyticalStudy"
const EXPOSURE_OUTCOME = 'exposureOutcome'
const OUTCOME_EXPOSURE = 'outcomeExposure'
const OUTCOME_EXPOSURE_SAME_TIME = 'outcomeExposureSameTIme'
const analyticalStudySubtree = {
  [ANALYTICAL_STUDY]: {
    id: ANALYTICAL_STUDY,
    question: "Direction?",
    options: [
      { answer: "Exposure --> Outcome", next: EXPOSURE_OUTCOME },
      { answer: "Outcome --> Exposure", next: OUTCOME_EXPOSURE },
      { answer: "Exposure and outcome at the same time", next: OUTCOME_EXPOSURE_SAME_TIME },
    ],
  },
  [EXPOSURE_OUTCOME]: {
    id: EXPOSURE_OUTCOME,
    question: "You chose Cohort Study.",
  },
  [OUTCOME_EXPOSURE]: {
    id: OUTCOME_EXPOSURE,
    question: "You chose Case Control Study.",
  },
  [OUTCOME_EXPOSURE_SAME_TIME]: {
    id: OUTCOME_EXPOSURE_SAME_TIME,
    question: "You chose Cross Sectional Study.",
  },
}


const DESCRIPTIVE_STUDY = "descriptiveStudy"
const ONE_SUBJECT = "1Subject"
const MORE_THAN_ONE = ">1Subject"
const descriptiveStudySubtree = {
  [DESCRIPTIVE_STUDY]: {
    id: DESCRIPTIVE_STUDY,
    question: "How many subjects?",
    options: [
      { answer: "1", next: ONE_SUBJECT },
      { answer: "More than 1", next: MORE_THAN_ONE },
    ],
  },
  [ONE_SUBJECT]: {
    id: ONE_SUBJECT,
    question: "You chose Case Study.",
  },
  [MORE_THAN_ONE]: {
    id: MORE_THAN_ONE,
    question: "You chose Case Series.",
  },
}



export default {
  [OBSERVATIONAL_STUDY_ID]: {
    id: OBSERVATIONAL_STUDY_ID,
    question: "Comparison group?",
    options: [
      { answer: "Yes", next: ANALYTICAL_STUDY },
      { answer: "No", next: DESCRIPTIVE_STUDY },
    ],
  },
  ...analyticalStudySubtree,
  ...descriptiveStudySubtree,
};