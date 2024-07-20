export const EXPERIMENTAL_STUDY_ID = "experimentalStudy";
const RANDOMIZED_CONTROLLED_TRIAL = "randomized-controlled-trial"
const NONRANDOMIZED_CONTROLLED_TRIAL = "non_randomized-controlled-trial"
const RANDOM_ASSIGNMENT = "random assignment"
const NEW_TREATMENT_BETTER = "newtreatment better"
const SUPERIORITY_TRIAL = 'superiority trial'
const EQUIVALENCE_TRIAL = 'equivalence trial'

export default {
  [EXPERIMENTAL_STUDY_ID]: {
    type: "statement",
    title: "Experimental Study",
    id: EXPERIMENTAL_STUDY_ID,
    component: "ExperimentalStudyDescription",
    next: RANDOM_ASSIGNMENT
  },
  [RANDOM_ASSIGNMENT]: {
    type: "question",
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
  },
  [RANDOMIZED_CONTROLLED_TRIAL]: {
    type: "statement",
    id: RANDOMIZED_CONTROLLED_TRIAL,
    title: "You chose randomized clinical trial",
    component: "RandomizedControlledTrialDescription",
    next: NEW_TREATMENT_BETTER,
  },
  [NEW_TREATMENT_BETTER]: {
    type: "question",
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
  },
  [SUPERIORITY_TRIAL]: {
    type: "statement",
    id: SUPERIORITY_TRIAL,
    title: "You chose Superiority Trial",
    leaf: true,
    component: "SuperiorityTrial",
  },
  [EQUIVALENCE_TRIAL]: {
    type: "statement",
    id: EQUIVALENCE_TRIAL,
    title: "You chose Equivalence or Non-Inferiority Trial",
    leaf: true,
    component: "EquivalenceTrial",
  },
  [NONRANDOMIZED_CONTROLLED_TRIAL]: {
    type: "statement",
    id: NONRANDOMIZED_CONTROLLED_TRIAL,
    title: "You chose non randomized clinical trial",
    leaf: true,
    component: "NonRandomizedControlledTrialDescription",
  },
};
