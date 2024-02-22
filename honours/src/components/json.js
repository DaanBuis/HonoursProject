export const json = {
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
            "html": "You are about to start a quiz on Intro to JavaScript. <br>You will have 15 seconds for every question and 135 seconds to end the quiz."
          },
        ]
      },
      {
        "elements": [
          {
            "type": "radiogroup",
            "name": "string",
            "title": "Which of these is a String?",
            "choicesOrder": "random",
            "choices": [
              "\"1951.35\"",
              "I am A String",
              "\"JavaScript",
              "1663"
            ],
            "correctAnswer": "\"1951.35\"",
            "enableIf": "{string} empty"
          }
        ]
      },
      {
        "elements": [
          {
            "type": "radiogroup",
            "name": "properties",
            "title": "Which of the following is a property of the String data type ?",
            "choicesOrder": "random",
            "choices": [
              ".floor()",
              ".random()",
              ".toUpperCase()",
              ".iAmAString()"
            ],
            "correctAnswer": ".toUpperCase()",
            "enableIf": "{properties} empty"
          }
        ]
      },
      {
        "elements": [
          {
            "type": "radiogroup",
            "name": "methods1",
            "title": "Which of the following methods rounds a number DOWN to the nearest whole number?",
            "choicesOrder": "random",
            "choices": [
              "Math.floor()",
              "Math.random()",
              "Math.sqrt()",
              "Math.round()"
            ],
            "correctAnswer": "Math.floor()",
            "enableIf": "{methods1} empty"
          }
        ]
      },
      {
        "elements": [
          {
            "type": "radiogroup",
            "name": "methods2",
            "title": "Which of the following methods creates a random number between 0-20?",
            "choicesOrder": "random",
            "choices": [
              "Math.floor()",
              "Math.random()",
              "Math.random() * 10",
              "Math.random() * 20"
            ],
            "correctAnswer": "Math.random() * 20",
            "enableIf": "{methods2} empty"
          }
        ]
      },
      {
        "elements": [
          {
            "type": "radiogroup",
            "name": "variables1",
            "title": "Which of the following creates a mutable variable called myVar with a value of 300?",
            "choicesOrder": "random",
            "choices": [
              "const myVar = 300",
              "let myVar = 300",
              "myVar = 300",
              "let myVar = \"450\""
            ],
            "correctAnswer": "let myVar = 300",
            "enableIf": "{variables1} empty"
          }
        ]
      },
      {
        "elements": [
          {
            "type": "radiogroup",
            "name": "variables2",
            "title": "Which of the following creates a constant variable called myConst with a value of \"JavaScript\"?",
            "choicesOrder": "random",
            "choices": [
              "const myVar = \"JavaScript\"",
              "let myConst = \"JavaScript\"",
              "const myConst = \"JavaScript\"",
              "myConst = \"JavaScript\""
            ],
            "correctAnswer": "const myConst = \"JavaScript\"",
            "enableIf": "{variables2} empty"
          }
        ]
      },
      {
        "elements": [
          {
            "type": "radiogroup",
            "name": "console",
            "title": "Select the following code snippet that outputs the variable myVar?",
            "choicesOrder": "random",
            "choices": [
              "console.log(var)",
              "console.log(const myVar)",
              "console.log(myVar)",
              "log(myVar)"
            ],
            "correctAnswer": "console.log(myVar)",
            "enableIf": "{console} empty"
          }
        ]
      },
      {
        "elements": [
          {
            "type": "radiogroup",
            "name": "operator1",
            "title": "Which of the following is the correct symbol for the addition operator?",
            "choicesOrder": "random",
            "choices": [
              "+",
              "-",
              "=",
              "%"
            ],
            "correctAnswer": "+",
            "enableIf": "{operator1} empty"
          }
        ]
      },
      {
        "elements": [
          {
            "type": "radiogroup",
            "name": "operator2",
            "title": "Which of the following is the correct symbol for the assignment operator?",
            "choicesOrder": "random",
            "choices": [
              "+",
              "-",
              "=",
              "%"
            ],
            "correctAnswer": "=",
            "enableIf": "{operator2} empty"
          }
        ]
      }
    ],
    "completedHtml": "<h4>You got <b>{correctAnswers}</b> out of <b>{questionCount}</b> correct answers.</h4>",
    "completedHtmlOnCondition": [
      {
        "expression": "{correctAnswers} == 0",
        "html": "<h4>Unfortunately, none of your answers is correct. Please try again.</h4>"
      },
      {
        "expression": "{correctAnswers} == {questionCount}",
        "html": "<h4>Congratulations! You answered all the questions correctly!</h4>"
      }
    ]
  };