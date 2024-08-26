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
    inputs: [COMPARISON_GROUP]
  },
  [DIRECTION]: {
    type: "question",
    title: "What is the direction of research?",
    flowChartTitle: "What is the direction\nof research?",
    id: DIRECTION,
    component: "DirectionDescription",
    inputs: [ANALYTICAL_STUDY],
    choices: [
      {
        answer: "Exposure\n→\nOutcome",
        next: PERSPECTIVE,
        option_description: "Exposure leads to outcome"
      },
      {
        answer: "Outcome\n→\nExposure",
        next: CASE_CONTROL,
        option_description: "Outcome leads to exposure"
      },
      {
        answer: "Exposure\n<?>\nOutcome",
        next: CROSS_SECTIONAL_STUDY,
        option_description: "Relationship between exposure and outcome is indeterminate"
      },
    ],
  },
  [PERSPECTIVE]: {
    type: "question",
    title: "What is the perspective of the researcher relative to the data under study?",
    flowChartTitle: "What is the perspective of the\nresearcher relative to\nthe data under study?",
    id: PERSPECTIVE,
    component: "PerspectiveQuestion",
    inputs: [DIRECTION],
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
    flowChartTitle: "Prospective\nCohort\nStudy",
    id: PROSPECTIVE_COHORT_STUDY,
    leaf: true,
    inputs: [PERSPECTIVE],
    component: "ProspectiveCohortStudyDescription",
    color: "teal-darken-4",
    choices: []
  },
  [RETROSPECTIVE_COHORT_STUDY]: {
    type: "statement",
    title: "Retrospective Cohort Study",
    flowChartTitle: "Retrospective\nCohort\nStudy",
    id: RETROSPECTIVE_COHORT_STUDY,
    leaf: true,
    inputs: [PERSPECTIVE],
    component: "RetrospectiveCohortStudyDescription",
    color: "teal-darken-4",
    choices: []
  },
  [CASE_CONTROL]: {
    type: "statement",
    title: "Case Control Study",
    flowChartTitle: "Case Control\nStudy",
    id: CASE_CONTROL,
    leaf: true,
    inputs: [DIRECTION],
    component: "CaseControlStudyDescription",
    color: "teal-darken-4",
    choices: []
  },
  [CROSS_SECTIONAL_STUDY]: {
    type: "statement",
    title: "Cross Sectional Study",
    flowChartTitle: "Cross\nSectional\nStudy",
    id: CROSS_SECTIONAL_STUDY,
    leaf: true,
    inputs: [DIRECTION],
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
    inputs: [COMPARISON_GROUP],
    color: 'green-darken-2'
  },
  [HOW_MANY_SUBJECTS]: {
    type: "question",
    title: "How many subjects were there?",
    flowChartTitle: "How many subjects\nwere there?",
    id: HOW_MANY_SUBJECTS,
    component: "HowManySubjctsDescription",
    inputs: [DESCRIPTIVE_STUDY],
    choices: [
      { answer: "One subject", next: CASE_REPORT },
      { answer: "More than\none", next: CASE_SERIES },
    ],
  },
  [CASE_REPORT]: {
    type: "statement",
    title: "Case Report",
    id: CASE_REPORT,
    leaf: true,
    inputs: [HOW_MANY_SUBJECTS],
    component: "CaseReportDescription",
    color: "teal-darken-4",
  },
  [CASE_SERIES]: {
    type: "statement",
    title: "Case Series",
    id: CASE_SERIES,
    leaf: true,
    inputs: [HOW_MANY_SUBJECTS],
    component: "CaseSeriesDescription",
    color: "teal-darken-4",
  },
};


export default {
  [OBSERVATIONAL_STUDY_ID]: {
    type: "statement",
    title: "Observational Study",
    id: OBSERVATIONAL_STUDY_ID,
    component: "ObservationalStudyDescription",
    next: COMPARISON_GROUP,
    color: 'green-lighten-2',
    inputs: [ROOT]
  },
  [COMPARISON_GROUP]: {
    type: "question",
    id: COMPARISON_GROUP,
    title: "Was there a comparison group?",
    component: "ComparisonGroupDescription",
    inputs: [OBSERVATIONAL_STUDY_ID],
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
};
