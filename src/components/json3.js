export const json3 = {
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
            "html": "You are about to start a quiz on Functions and Objects. <br>You will have 15 seconds for every question and 135 seconds to end the quiz."
          },
        ]
      },
      {
        "elements": [
          {
            "type": "radiogroup",
            "name": "funckey",
            "title": "Which of the following is the keyword used to create a function ?",
            "choicesOrder": "random",
            "choices": [
              "myFunc()",
              "function",
              "createFunction",
              "func"
            ],
            "correctAnswer": "function",
            "enableIf": "{funckey} empty"
          }
        ]
      },
      {
        "elements": [
          {
            "type": "radiogroup",
            "name": "arrowop",
            "title": "Which of the following is the arrow function operator ?",
            "choicesOrder": "random",
            "choices": [
              "=>",
              ">=",
              "==>",
              "=>>"
            ],
            "correctAnswer": "=>",
            "enableIf": "{arrowop} empty"
          }
        ]
      },
      {
        "elements": [
          {
            "type": "radiogroup",
            "name": "param",
            "title": "Which of the following parameters uses correct syntax?",
            "choicesOrder": "random",
            "choices": [
              "(myParam1 myParam2)",
              "(myParam1, myParam2)",
              "(myParam1",
              "myParam1, myParam2"
            ],
            "correctAnswer": "(myParam1, myParam2)",
            "enableIf": "{param} empty"
          }
        ]
      },
      {
        "elements": [
          {
            "type": "radiogroup",
            "name": "funccall",
            "title": "Which of the following function calls uses the correct syntax",
            "choicesOrder": "random",
            "choices": [
              "myFunc20",
              "myFunc(50)",
              "myFunc(40",
              "myFunc[30]"
            ],
            "correctAnswer": "myFunc(50)",
            "enableIf": "{funccall} empty"
          }
        ]
      },
      {
        "elements": [
          {
            "type": "radiogroup",
            "name": "concise",
            "title": "Which of the following is an accurate concise body arrow function",
            "choicesOrder": "random",
            "choices": [
              "const myFunc = () => 'Hello World'",
              "const myFunc => 'Hello World",
              "const myFunc = () => return 'Hello World'",
              "let myFunc = () -> 'Hello World"
            ],
            "correctAnswer": "const myFunc = () => 'Hello World'",
            "enableIf": "{concise} empty"
          }
        ]
      },
      {
        "elements": [
          {
            "type": "radiogroup",
            "name": "obj",
            "title": "Which of the following is the correct syntax for an object",
            "choicesOrder": "random",
            "choices": [
              "const person = name:'Bart & age:10",
              "const person = {name = Homer, age =38}",
              "const person = {name:'Lisa', age:8}",
              "const person = name:'Marge', age:36"
            ],
            "correctAnswer": "const person = {name:'Lisa', age:8}",
            "enableIf": "{obj} empty"
          }
        ]
      },
      {
        "elements": [
            {
                "type": "radiogroup",
                "name": "objprops",
                "title": "Which of the following is NOT the correct way to access and objects property",
                "choicesOrder": "random",
                "choices": [
                  "objectName.property",
                  "objectName['property']",
                  "objectName[expression]",
                  "objectName.expression"
                ],
                "correctAnswer": "objectName.expression",
                "enableIf": "{objprops} empty"
              }
        ]
      },
      {
        "elements": [
          {
            "type": "radiogroup",
            "name": "objdel",
            "title": "Which of the following is the correct way to delete a property?",
            "choicesOrder": "random",
            "choices": [
              "del objectName.property",
              "remove objectName.property",
              "delete objectName.property",
              "objectName.property = 0"
            ],
            "correctAnswer": "delete objectName.property",
            "enableIf": "{objdel} empty"
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