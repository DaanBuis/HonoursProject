import React, { useState }from "react"
import QuizTwo from "./QuizTwo"
import { SurveyCreatorWidget } from "./rendersurvey"
import { Link } from "react-router-dom";

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

        Congratulations, you have successfully finished this test, click <Link to="/chapter3-functions">here</Link> to continue to the next lesson, or navigate using the <Link to="/chapters">Chapters</Link> page!

            </div>
        </>
    )

}



export default TestPageTwo