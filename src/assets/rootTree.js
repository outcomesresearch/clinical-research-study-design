export const ROOT = "AssignExposures";
import experimentalStudyTree, { EXPERIMENTAL_STUDY_ID } from "./experimentalStudyTree"
import observationalStudyTree, { OBSERVATIONAL_STUDY_ID } from "./observationalStudyTree"

export default {
    [ROOT]: {
        id: ROOT,
        title: "Did the investigator assign exposures?",
        description: "The key distinction between experimental studies and observational studies lies in the level of control the investigator has over exposure or intervention.",
        choices: [
            {
                answer: "Yes",
                next: EXPERIMENTAL_STUDY_ID,
                option_description: "Investigator did assign exposures"
            },
            {
                answer: "No",
                next: OBSERVATIONAL_STUDY_ID,
                option_description: "Investigator did not assign exposures"
            },
        ],
    },
    ...experimentalStudyTree,
    ...observationalStudyTree,
};

