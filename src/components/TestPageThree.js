import React, { useState }from "react"
import QuizThree from "./QuizThree"
import { SurveyCreatorWidget } from "./rendersurvey"

const TestPageThree = () => {   

    return (
        <>
        <h2 class="text-start mx-5 my-2">Chapter Three Recap Test</h2>
        <hr></hr>
        <div class="text-start mx-5 my-2">
        <p>Complete the following questions to test your knowledge on the previous chapter. Please take a note of your results.</p>
        

        <div>
            <QuizThree></QuizThree>
        </div>
            <br></br>

            <hr></hr>
        <h5>End of Test</h5>

        Congratulations, you have successfully finished this course!

            </div>
        </>
    )

}



export default TestPageThree