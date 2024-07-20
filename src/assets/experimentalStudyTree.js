export const EXPERIMENTAL_STUDY_ID = "experimentalStudy";
const RANDOMIZED_CONROLLED_TRIAL = "randomized-controlled-trial"
const NON_RANDOMIZED_CONROLLED_TRIAL = "non_randomized-controlled-trial"
const RANDOM_ASSIGNMENT = "random assignment"

export default {
  [EXPERIMENTAL_STUDY_ID]: {
    type: "statement",
    title: "Experimental Study",
    id: EXPERIMENTAL_STUDY_ID,
    description: " so far you're on the path for experimental study",
    next: RANDOM_ASSIGNMENT
  },
  [RANDOM_ASSIGNMENT]: {
    type: "question",
    title: "Random Assignment?",
    description: "Randomization is used to minimize bias and involves the random assignment of participants to different intervention groups. This is done to ensure that, on average, known and unknown factors that could influence treatment response are evenly distributed across groups, allowing for a fair comparison.",
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
    description: "A randomized trial is an experimental design with random assignment of interventions."
  },
  [NON_RANDOMIZED_CONROLLED_TRIAL]: {
    type: "statement",
    id: NON_RANDOMIZED_CONROLLED_TRIAL,
    leaf: true,
    title: "You chose non randomized clinical trial",
    description: "In a non-randomized trial, the investigator assigns interventions, but they are not randomly assigned."
  },
};
