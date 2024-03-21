import React, { useState }from "react"
import QuizTwo from "./QuizTwo"
import { SurveyCreatorWidget } from "./rendersurvey"

const TestPageTwo = () => {   

    return (
        <>
        <h2 class="text-start mx-5 my-2">Chapter Two Recap Test</h2>
        <hr></hr>
        <div class="text-start mx-5 my-2">
        <p>Complete the following questions to test your knowledge on the previous chapter. Please take a note of your results.</p>
        

        <div>
            <QuizTwo></QuizTwo>
        </div>
            <br></br>

            <hr></hr>
        <h5>End of Test</h5>

        Congratulations, you have successfully finished this test, click <a href="/chapter3-functions">here</a> to continue to the next lesson, or navigate using the <a href="/chapters">Chapters</a> page!

            </div>
        </>
    )

}



export default TestPageTwo