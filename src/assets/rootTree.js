
import { ROOT, EXPERIMENTAL_STUDY_ID, OBSERVATIONAL_STUDY_ID } from "./ids"

import experimentalStudyTree from "./experimentalStudyTree"
import observationalStudyTree from "./observationalStudyTree"

export default {
    [ROOT]: {
        id: ROOT,
        title: "Did the investigator assign exposures?",
        flowChartTitle: "Did the investigator\nassign exposures?",
        component: "AssignExposures",
        inputs: [],
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
}
