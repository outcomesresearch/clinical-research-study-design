export const EXPERIMENTAL_STUDY_ID = "experimentalStudy";
const RANDOMIZED_CONROLLED_TRIAL = "randomized-controlled-trial"
const NON_RANDOMIZED_CONROLLED_TRIAL = "non_randomized-controlled-trial"
export default {
  [EXPERIMENTAL_STUDY_ID]: {
    title: "Experimental Study",
    id: EXPERIMENTAL_STUDY_ID,
    question: "Random Assignment?",
    question_description: "Randomization is used to minimize bias and involves the random assignment of participants to different intervention groups. This is done to ensure that, on average, known and unknown factors that could influence treatment response are evenly distributed across groups, allowing for a fair comparison.",
    options: [
      {
        answer: "Yes",
        next: RANDOMIZED_CONROLLED_TRIAL,
        description: "Participants were randomly assigned",
      },
      {
        answer: "No",
        next: NON_RANDOMIZED_CONROLLED_TRIAL,
        description: "Participants were not randomly assigned"
      },
    ],
  },
  [RANDOMIZED_CONROLLED_TRIAL]: {
    id: RANDOMIZED_CONROLLED_TRIAL,
    question: "You chose randomized clinical trial",
    question_description: "A randomized trial is an experimental design with random assignment of interventions."
  },
  [NON_RANDOMIZED_CONROLLED_TRIAL]: {
    id: NON_RANDOMIZED_CONROLLED_TRIAL,
    question: "You chose non randomized clinical trial",
    question_description: "In a non-randomized trial, the investigator assigns interventions, but they are not randomly assigned."
  },
};
