export default [
    {
        "id": "mini.json",
        "reports": [
            {
                "nodeId": "Did investigator assign exposures?",
                "detail": "This is QS4",
                "Edge": [
                    {
                        "node": "Experimental Study",
                        "label": "Yes"
                    },
                    {
                        "node": "Observational Study",
                        "label": "No"
                    }
                ],
                "Inputs": []
            },
            {
                "nodeId": "Experimental Study",
                "detail": {
                    "name": "test.log",
                    "sync Version": "13.0",
                    "mod Date": "20160623120856EDT"
                },
                "Edge": [
                    {
                        "node": "Random Allocation"
                    }
                ],
                "Inputs": ["Observational Study"]
            },
            {
                "nodeId": "Comparison Group?",
                "detail": "This is QS3",
                "Edge": [
                    {
                        "node": "Analytical Study"
                    },
                    {
                        "node": "Descriptive Study"
                    }
                ],
                "Inputs": ["Observational Study"]
            },
            {
                "nodeId": "Observational Study",
                "detail": "This is QS2",
                "Edge": [
                    { node: "Comparison Group?" }
                ],
                "Inputs": ["Did investigator assign exposures?"],
                "label": "This is the label from ... what to what"
            },
            {
                "nodeId": "Analytical Study",
                "detail": "This is QS3",
                "Edge": [{ "node": "Direction?" }],
                "Inputs": ["Observational Study"]
            },
            {
                "nodeId": "Descriptive Study",
                "detail": "This is QS3",
                "Edge": [{ "node": "Number of subjects" }],
                "Inputs": ["Observational Study"]
            },
            {
                "nodeId": "Direction?",
                "detail": "This is QS3",
                "Edge": [
                    {
                        "node": "Cross-Sectional Study",
                        "label": "Exposure and outcome\nat same time"
                    },
                    {
                        "node": "Case Control Study",
                        "label": "Exposure <- Outcome"
                    },
                    {
                        "node": "Cohort Study",
                        "label": "Exposure -> Outcome"
                    }
                ],
                "Inputs": ["Analytical Study"]
            },
            {
                "nodeId": "Number of subjects",
                "detail": "This is QS3",
                "Edge": [
                    { "node": "Case Report", "label": "One" },
                    { "node": "Case Series", "label": "More than one" }
                ],
                "Inputs": ["Descriptive Study"]
            },
            {
                "nodeId": "Case Report",
                "detail": "This is QS3",
                "Edge": [],
                "Inputs": ["Number of subjects"],
                cssClass: "study"
            },
            {
                "nodeId": "Case Series",
                "detail": "This is QS3",
                "Edge": [],
                "Inputs": ["Number of subjects"],
                cssClass: "study"
            },
            {
                "nodeId": "Random Allocation",
                "detail": "This is QS3",
                "Edge": [
                    {
                        "node": "Non-Randomized Controlled Trial",
                        "label": "No"
                    },
                    {
                        "node": "Randomized Controlled Trial",
                        "label": "Yes"
                    }
                ],
                "Inputs": ["Experimental Study"]
            },
            {
                "nodeId": "Randomized Controlled Trial",
                "detail": "This is QS3",
                "Edge": [
                    {
                        "node": "Is the aim of the study to\ndeomstrate a new treatment is significantly\nbetter than existing treatment or placebo?"
                    }
                ],
                "Inputs": ["Random Allocation"],
                cssClass: "study"
            },
            {
                "nodeId": "Non-Randomized Controlled Trial",
                "detail": "This is QS3",
                "Edge": [],
                "Inputs": ["Random Allocation"],
                cssClass: "study"
            },
            {
                "nodeId": "Is the aim of the study to\ndeomstrate a new treatment is significantly\nbetter than existing treatment or placebo?",
                "detail": "This is QS3",
                "Edge": [
                    {
                        "node": "Superiority Trial",
                        "label": "Yes"
                    },
                    {
                        "node": "Equivalence or Non-\nInferiority Trial",
                        "label": "No"
                    }
                ],
                "Inputs": ["Randomized Controlled Trial"]
            },
            {
                "nodeId": "Superiority Trial",
                "detail": "This is QS3",
                "Edge": [],
                "Inputs": [
                    "Is the aim of the study to\ndeomstrate a new treatment is significantly\nbetter than existing treatment or placebo?"
                ],
                cssClass: "study"
            },
            {
                "nodeId": "Equivalence or Non-\nInferiority Trial",
                "detail": "This is QS3",
                "Edge": [],
                "Inputs": [
                    "Is the aim of the study to\ndeomstrate a new treatment is significantly\nbetter than existing treatment or placebo?"
                ],
                cssClass: "study"
            },
            {
                "nodeId": "Cohort Study",
                "detail": "This is QS3",
                "Edge": [],
                "Inputs": ["Direction?"],
                cssClass: "study"
            },
            {
                "nodeId": "Case Control Study",
                "detail": "This is QS3",
                "Edge": [],
                "Inputs": ["Direction?"],
                cssClass: "study"
            },
            {
                "nodeId": "Cross-Sectional Study",
                "detail": "This is QS3",
                "Edge": [],
                "Inputs": ["Direction?"],
                cssClass: "study"
            }
        ]
    }
]
