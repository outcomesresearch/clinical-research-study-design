import {
  ROOT,
  OBSERVATIONAL_STUDY_ID,
  ANALYTICAL_STUDY,
  CASE_CONTROL,
  CROSS_SECTIONAL_STUDY,
  COMPARISON_GROUP,
  DIRECTION,
  HOW_MANY_SUBJECTS,
  DESCRIPTIVE_STUDY,
  CASE_REPORT,
  CASE_SERIES,
  PERSPECTIVE,
  PROSPECTIVE_COHORT_STUDY,
  RETROSPECTIVE_COHORT_STUDY
} from "./ids"

const analyticalStudySubtree = {
  [ANALYTICAL_STUDY]: {
    type: "statement",
    title: "Analytical Study",
    id: ANALYTICAL_STUDY,
    component: "AnalyticalStudyDescription",
    next: DIRECTION,
    color: 'green-darken-2',
    inputs: [ROOT]
  },
  [DIRECTION]: {
    type: "question",
    title: "What is the direction of research?",
    id: DIRECTION,
    component: "DirectionDescription",
    choices: [
      {
        answer: "Exposure → Outcome",
        next: PERSPECTIVE,
        option_description: "Exposure leads to outcome"
      },
      {
        answer: "Outcome → Exposure",
        next: CASE_CONTROL,
        option_description: "Outcome leads to exposure"
      },
      {
        answer: "Exposure <?> Outcome",
        next: CROSS_SECTIONAL_STUDY,
        option_description: "Relationship between exposure and outcome is indeterminate"
      },
    ],
  },
  [PERSPECTIVE]: {
    type: "question",
    title: "What is the perspective of the researcher relative to the data under study?",
    id: PERSPECTIVE,
    component: "PerspectiveQuestion",
    choices: [
      {
        answer: "Prospective",
        next: PROSPECTIVE_COHORT_STUDY,
        option_description: "Outcomes tracked moving forward in time"
      },
      {
        answer: "Retrospective",
        next: RETROSPECTIVE_COHORT_STUDY,
        option_description: "Outcomes tracked by examining past records"
      },
    ],
  },
  [PROSPECTIVE_COHORT_STUDY]: {
    type: "statement",
    title: "Prospective Cohort Study",
    id: PROSPECTIVE_COHORT_STUDY,
    leaf: true,
    component: "ProspectiveCohortStudyDescription",
    color: "teal-darken-4",
    choices: []
  },
  [RETROSPECTIVE_COHORT_STUDY]: {
    type: "statement",
    title: "Retrospective Cohort Study",
    id: RETROSPECTIVE_COHORT_STUDY,
    leaf: true,
    component: "RetrospectiveCohortStudyDescription",
    color: "teal-darken-4",
    choices: []
  },
  [CASE_CONTROL]: {
    type: "statement",
    title: "Case Control Study",
    id: CASE_CONTROL,
    leaf: true,
    component: "CaseControlStudyDescription",
    color: "teal-darken-4",
    choices: []
  },
  [CROSS_SECTIONAL_STUDY]: {
    type: "statement",
    title: "Cross Sectional Study.",
    id: CROSS_SECTIONAL_STUDY,
    leaf: true,
    component: "CrossSectionalStudyDescription",
    color: "teal-darken-4",
    choices: []
  },
};

const descriptiveStudySubtree = {
  [DESCRIPTIVE_STUDY]: {
    type: "statement",
    title: "Descriptive Study",
    id: DESCRIPTIVE_STUDY,
    component: "DescriptiveStudyDescription",
    next: HOW_MANY_SUBJECTS,
    color: 'green-darken-2'
  },
  [HOW_MANY_SUBJECTS]: {
    type: "question",
    title: "How many subjects were there?",
    id: HOW_MANY_SUBJECTS,
    component: "HowManySubjctsDescription",
    choices: [
      { answer: "One subject", next: CASE_REPORT },
      { answer: "More than one", next: CASE_SERIES },
    ],
  },
  [CASE_REPORT]: {
    type: "statement",
    title: "Case Report",
    id: CASE_REPORT,
    leaf: true,
    component: "CaseReportDescription",
    color: "teal-darken-4",
  },
  [CASE_SERIES]: {
    type: "statement",
    title: "Case Series",
    id: CASE_SERIES,
    leaf: true,
    component: "CaseSeriesDescription",
    color: "teal-darken-4",
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
    next: COMPARISON_GROUP,
    color: 'green-lighten-2'

  },
  ...comparisonGroupSubtree
};
