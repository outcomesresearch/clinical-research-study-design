import {
  ROOT,
  EXPERIMENTAL_STUDY_ID,
  RANDOMIZED_CONTROLLED_TRIAL,
  NONRANDOMIZED_CONTROLLED_TRIAL,
  RANDOM_ASSIGNMENT,
  NEW_TREATMENT_BETTER,
  SUPERIORITY_TRIAL,
  EQUIVALENCE_TRIAL,
  NONINFERIORITY_TRIAL,
  EQUIVALENCE_OR_NONINFERIORITY
} from "./ids"

export default {
  [EXPERIMENTAL_STUDY_ID]: {
    type: "statement",
    title: "Experimental Study",
    id: EXPERIMENTAL_STUDY_ID,
    component: "ExperimentalStudyDescription",
    next: RANDOM_ASSIGNMENT,
    color: "blue-lighten-2",
    inputs: [ROOT]
  },
  [RANDOM_ASSIGNMENT]: {
    type: "question",
    id: RANDOM_ASSIGNMENT,
    title: "Were participants randomly assigned?",
    component: "RandomAllocationDescription",
    choices: [
      {
        answer: "Yes",
        next: RANDOMIZED_CONTROLLED_TRIAL,
        option_description: "Participants were randomly assigned",
      },
      {
        answer: "No",
        next: NONRANDOMIZED_CONTROLLED_TRIAL,
        option_description: "Participants were not randomly assigned"
      },
    ],
    inputs: [EXPERIMENTAL_STUDY_ID]
  },
  [RANDOMIZED_CONTROLLED_TRIAL]: {
    type: "statement",
    id: RANDOMIZED_CONTROLLED_TRIAL,
    title: "Randomized Clinical Trial",
    flowChartTitle: "Randomized\nClinical Trial",
    component: "RandomizedControlledTrialDescription",
    next: NEW_TREATMENT_BETTER,
    color: "blue-darken-2",
    inputs: [RANDOM_ASSIGNMENT]
  },
  [NEW_TREATMENT_BETTER]: {
    type: "question",
    id: NEW_TREATMENT_BETTER,
    title: "What does the study aim to demonstrate, relative to an existing treatment or placebo?",
    flowChartTitle: "What does the study\naim to demonstrate,\nrelative to an existing \ntreatment or placebo?",
    component: "NewTreatmentBetter",
    choices: [
      {
        answer: "New treatment\nis better",
        next: SUPERIORITY_TRIAL,
        option_description: "Aims to establish superiority",
      },
      {
        answer: "Neither better\nnor worse",
        next: EQUIVALENCE_TRIAL,
        option_description: "Aims to esablish equivalence"
      },
      {
        answer: "New treatment\n is not worse",
        next: NONINFERIORITY_TRIAL,
        option_description: "Aims to establish non-inferiority"
      },
    ],
    inputs: [RANDOMIZED_CONTROLLED_TRIAL],
  },
  [SUPERIORITY_TRIAL]: {
    type: "statement",
    id: SUPERIORITY_TRIAL,
    title: "Superiority Trial",
    flowChartTitle: "Superiority\nTrial",
    leaf: true,
    component: "SuperiorityTrial",
    color: "indigo-darken-4",
    inputs: [NEW_TREATMENT_BETTER]
  },
  [EQUIVALENCE_TRIAL]: {
    type: "statement",
    id: EQUIVALENCE_TRIAL,
    title: "Equivalence Trial",
    flowChartTitle: "Equivalence Trial",
    leaf: true,
    component: "EquivalenceTrial",
    color: "indigo-darken-4",
    inputs: [EQUIVALENCE_OR_NONINFERIORITY]
  },
  [NONINFERIORITY_TRIAL]: {
    type: "statement",
    id: NONINFERIORITY_TRIAL,
    title: "Non-Inferiority Trial",
    flowChartTitle: "Non-Inferiority\nTrial",
    leaf: true,
    component: "NonInferiorityTrial",
    color: "indigo-darken-4",
    inputs: [EQUIVALENCE_OR_NONINFERIORITY]
  },
  [NONRANDOMIZED_CONTROLLED_TRIAL]: {
    type: "statement",
    id: NONRANDOMIZED_CONTROLLED_TRIAL,
    title: "Non-randomized Clinical Trial",
    flowChartTitle: "Non-randomized\nClinical Trial",
    leaf: true,
    component: "NonRandomizedControlledTrialDescription",
    color: "indigo-darken-4",
    inputs: [RANDOM_ASSIGNMENT]
  },
};
