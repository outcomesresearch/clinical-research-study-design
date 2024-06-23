export const EXPERIMENTAL_STUDY_ID = "experimentalStudy";

export default {
  [EXPERIMENTAL_STUDY_ID]: {
    id: EXPERIMENTAL_STUDY_ID,
    question: "Random Allocation?",
    options: [
      { answer: "Yes", next: "randomized-controlled-trial" },
      { answer: "No", next: "nonrandomized-controlled-trial" },
    ],
  },
  "randomized-controlled-trial": {
    id: "randomized-controlled-trial",
    question: "You chose randomized clinical trial",
  },
  "nonrandomized-controlled-trial": {
    id: "nonrandomized-controlled-trial",
    question: "You chose non randomized clinical trial",
  },
};
