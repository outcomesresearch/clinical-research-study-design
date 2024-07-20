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
    component: "AnalyticalStudyDescription",
    next: DIRECTION
  },
  [DIRECTION]: {
    type: "question",
    title: "Direction?",
    id: DIRECTION,
    component: "DirectionDescription",
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
    component: "CohortStudyDescription",
  },
  [OUTCOME_EXPOSURE]: {
    type: "statement",
    title: "You chose Case Control Study.",
    id: OUTCOME_EXPOSURE,
    leaf: true,
    component: "CaseControlStudyDescription",
  },
  [OUTCOME_EXPOSURE_SAME_TIME]: {
    type: "statement",
    title: "You chose Cross Sectional Study.",
    id: OUTCOME_EXPOSURE_SAME_TIME,
    leaf: true,
    component: "CrossSectionalStudyDescription",
  },
};

const descriptiveStudySubtree = {
  [DESCRIPTIVE_STUDY]: {
    type: "statement",
    title: "Descriptive Study",
    id: DESCRIPTIVE_STUDY,
    component: "DescriptiveStudyDescription",
    next: HOW_MANY_SUBJECTS,
  },
  [HOW_MANY_SUBJECTS]: {
    type: "question",
    title: "How many subjects were there?",
    id: HOW_MANY_SUBJECTS,
    component: "HowManySubjctsDescription",
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
    component: "CaseReportDescription",
  },
  [MORE_THAN_ONE]: {
    type: "statement",
    title: "You chose Case Series.",
    id: MORE_THAN_ONE,
    leaf: true,
    component: "CaseSeriesDescription",
  },
};

const comparisonGroupSubtree = {
  [COMPARISON_GROUP]: {
    type: "question",
    title: "Was there a comparison group?",
    component: "ComparisonGroupDescription",
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
    component: "ObservationalStudyDescription",
    next: COMPARISON_GROUP

  },
  ...comparisonGroupSubtree
};
