export const EXPERIMENTAL_STUDY_ID = "experimentalStudy";
const RANDOMIZED_CONROLLED_TRIAL = "randomized-controlled-trial"
const NON_RANDOMIZED_CONROLLED_TRIAL = "non_randomized-controlled-trial"
const RANDOM_ASSIGNMENT = "random assignment"

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
    title: "Random Assignment?",
    component: "RandomAllocationDescription",
    choices: [
      {
        answer: "Yes",
        next: RANDOMIZED_CONROLLED_TRIAL,
        option_description: "Participants were randomly assigned",
      },
      {
        answer: "No",
        next: NON_RANDOMIZED_CONROLLED_TRIAL,
        option_description: "Participants were not randomly assigned"
      },
    ],
  },
  [RANDOMIZED_CONROLLED_TRIAL]: {
    type: "statement",
    id: RANDOMIZED_CONROLLED_TRIAL,
    leaf: true,
    title: "You chose randomized clinical trial",
    component: "RandomizedControlledTrialDescription"
  },
  [NON_RANDOMIZED_CONROLLED_TRIAL]: {
    type: "statement",
    id: NON_RANDOMIZED_CONROLLED_TRIAL,
    leaf: true,
    title: "You chose non randomized clinical trial",
    component: "NonRandomizedControlledTrialDescription",
  },
};
