import React, { useState }from "react"
import QuizOne from "./QuizOne"
import { SurveyCreatorWidget } from "./rendersurvey"
import { Link } from "react-router-dom";

const TestPageOne = () => {   

    return (
        <>
        <h2 class="text-start mx-5 my-2">Chapter One Recap Test</h2>
        <hr></hr>
        <div class="text-start mx-5 my-2">
        <p>Complete the following questions to test your knowledge on the previous chapter. Please take a note of your results.</p>
        

        <div>
            <QuizOne></QuizOne>
        </div>
            <br></br>

            <hr></hr>
        <h5>End of Test</h5>

        Congratulations, you have successfully finished this test, click <Link to="./chapter2-conditionals">here</Link> to continue to the next lesson, or navigate using the <Link to="./chapters">Chapters</Link> page!

            </div>
        </>
    )

}



export default TestPageOne