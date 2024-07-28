import {
  ROOT,
  EXPERIMENTAL_STUDY_ID,
  RANDOMIZED_CONTROLLED_TRIAL,
  NONRANDOMIZED_CONTROLLED_TRIAL,
  RANDOM_ASSIGNMENT,
  NEW_TREATMENT_BETTER,
  SUPERIORITY_TRIAL,
  EQUIVALENCE_TRIAL,
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
    component: "RandomizedControlledTrialDescription",
    next: NEW_TREATMENT_BETTER,
    color: "blue-darken-2",
    inputs: [RANDOM_ASSIGNMENT]
  },
  [NEW_TREATMENT_BETTER]: {
    type: "question",
    id: NEW_TREATMENT_BETTER,
    title: "Is the aim of the study to demonstrate a new treatment is significantly better than existing treatment or placebo?",
    component: "NewTreatmentBetter",
    choices: [
      {
        answer: "Yes",
        next: SUPERIORITY_TRIAL,
        // option_description: "Superiority Trial",
      },
      {
        answer: "No",
        next: EQUIVALENCE_TRIAL,
        // option_description: "Participants were not randomly assigned"
      },
    ],
    inputs: [RANDOMIZED_CONTROLLED_TRIAL],
  },
  [SUPERIORITY_TRIAL]: {
    type: "statement",
    id: SUPERIORITY_TRIAL,
    title: "Superiority Trial",
    leaf: true,
    component: "SuperiorityTrial",
    color: "indigo-darken-4",
    inputs: [NEW_TREATMENT_BETTER]
  },
  [EQUIVALENCE_TRIAL]: {
    type: "statement",
    id: EQUIVALENCE_TRIAL,
    title: "Equivalence or Non-Inferiority Trial",
    leaf: true,
    component: "EquivalenceTrial",
    color: "indigo-darken-4",
    inputs: [NEW_TREATMENT_BETTER]
  },
  [NONRANDOMIZED_CONTROLLED_TRIAL]: {
    type: "statement",
    id: NONRANDOMIZED_CONTROLLED_TRIAL,
    title: "Non-randomized Clinical Trial",
    leaf: true,
    component: "NonRandomizedControlledTrialDescription",
    color: "indigo-darken-4",
    inputs: [RANDOM_ASSIGNMENT]
  },
};
