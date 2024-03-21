export const json2 = {
    "title": "Recap Quiz",
    "showProgressBar": "bottom",
    "showTimerPanel": "top",
    "maxTimeToFinishPage": 15,
    "maxTimeToFinish": 135,
    "firstPageIsStarted": true,
    "startSurveyText": "Start Quiz",
    "pages": [
      {
        "elements": [
          {
            "type": "html",
            "html": "You are about to start a quiz on Conditionals & Scope. <br>You will have 15 seconds for every question and 135 seconds to end the quiz."
          },
        ]
      },
      {
        "elements": [
          {
            "type": "radiogroup",
            "name": "if",
            "title": "Which of these is the correct if statement syntax?",
            "choicesOrder": "random",
            "choices": [
              "if true",
              "if (5 = 2 {",
              "if (true) {}",
              "elseif (false) {}"
            ],
            "correctAnswer": "if (true) {}",
            "enableIf": "{if} empty"
          }
        ]
      },
      {
        "elements": [
          {
            "type": "radiogroup",
            "name": "and",
            "title": "Which of the following is the AND operator?",
            "choicesOrder": "random",
            "choices": [
              "&&",
              `││`,
              "!==",
              "!="
            ],
            "correctAnswer": "&&",
            "enableIf": "{and} empty"
          }
        ]
      },
      {
        "elements": [
          {
            "type": "radiogroup",
            "name": "blockscope",
            "title": "Which of the following has block scope?",
            "choicesOrder": "random",
            "choices": [
              "var myVar = 5",
              "{ let myVar = 5 }",
              "{ var myVar = 5 }",
              "const myVar = 5"
            ],
            "correctAnswer": "{ let myVar = 5 }",
            "enableIf": "{blockscope} empty"
          }
        ]
      },
      {
        "elements": [
          {
            "type": "radiogroup",
            "name": "or",
            "title": "Which of the following is the OR operator",
            "choicesOrder": "random",
            "choices": [
              "&&",
              `││`,
              "!==",
              "!="
            ],
            "correctAnswer": "││",
            "enableIf": "{or} empty"
          }
        ]
      },
      {
        "elements": [
          {
            "type": "radiogroup",
            "name": "andor",
            "title": "Which of the following creates a condition for either TWO conditions must be met or ONE condition must be met",
            "choicesOrder": "random",
            "choices": [
              `((a > b && c > d) ││ e > f)`,
              `(a > b ││ c > d)`,
              `((a > b ││ c > d) && e > f)`,
              "(a > b && c > d)"
            ],
            "correctAnswer": "((a > b && c > d) ││ e > f)",
            "enableIf": "{andor} empty"
          }
        ]
      },
      {
        "elements": [
          {
            "type": "radiogroup",
            "name": "greaterthan",
            "title": "Which of the following is the comparison operator for greater than",
            "choicesOrder": "random",
            "choices": [
              ">",
              "<",
              ">=",
              "<="
            ],
            "correctAnswer": ">",
            "enableIf": "{greaterthan} empty"
          }
        ]
      },
      {
        "elements": [
            {
                "type": "radiogroup",
                "name": "lessthanequal",
                "title": "Which of the following is the comparison operator for less than or equal to",
                "choicesOrder": "random",
                "choices": [
                  ">",
                  "<",
                  ">=",
                  "<="
                ],
                "correctAnswer": "<=",
                "enableIf": "{lessthanequal} empty"
              }
        ]
      },
      {
        "elements": [
          {
            "type": "radiogroup",
            "name": "equals",
            "title": "Which of the following is the comparison operator for equals, that compares both value and type?",
            "choicesOrder": "random",
            "choices": [
              "==",
              "===",
              ">=",
              "<="
            ],
            "correctAnswer": "===",
            "enableIf": "{equals} empty"
          }
        ]
      },
      {
        "elements": [
          {
            "type": "radiogroup",
            "name": "not",
            "title": "Which of the following is the correct description for the NOT (!) operator",
            "choicesOrder": "random",
            "choices": [
              "both conditions must be met",
              "either condition must be met",
              "the compared values should not be equal",
              "both values should be false"
            ],
            "correctAnswer": "the compared values should not be equal",
            "enableIf": "{not} empty"
          }
        ]
      }
    ],
    "completedHtml": "<h4>You got <b>{correctAnswers}</b> out of <b>{questionCount}</b> correct answers.</h4>",
    "completedHtmlOnCondition": [
      {
        "expression": "{correctAnswers} == 0",
        "html": "<h4>Unfortunately, none of your answers are correct. Please try again.</h4>"
      },
      {
        "expression": "{correctAnswers} == {questionCount}",
        "html": "<h4>Congratulations! You answered all the questions correctly!</h4>"
      }
    ]
  };