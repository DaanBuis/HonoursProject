import React, { useState } from "react"
import { Link } from "react-router-dom";


const IntroPage = () => {
const [consoleField, setConsoleField] = useState("")
const [questionOne, setQuestionOne] = useState("")
const [questionTwo, setQuestionTwo] = useState("")
const [questionThree, setQuestionThree] = useState("")
const [questionFour, setQuestionFour] = useState("")

    return (
        <>
        <h2 class="text-start mx-5 my-2">Intro to JavaScript</h2>
        <hr></hr>
        <div class="text-start mx-5 my-2">
            <h5>What is JavaScript ?</h5>
            <p>JavaScript, or JS, is a widely used programming language that makes up most modern web browsers, and this website! 
                We will be looking at how to code JavaScript so that we can complete basic calculations, manipulate data, and much more! </p>
            <hr></hr>
            <h5>Console</h5>
            
                
            <p>Most software for programming will have a console, which is where data and results from your application 
                can be displayed. We do this using the console.log() command. JavaScript has a number of built-in objects (which will be covered later) 
                that help develop applications, such as console and the Math object. These objects can have methods applied to them, so in essence, 
                console.log() applies the log method to the console. It works as such:
            </p>
            <div className="bg-dark">
                <p className="text-white px-2 pt-2"><span className="text-info">console</span>.<span className="text-warning">log</span>(<span className="text-info">310</span>)</p>
                <p className="text-white px-2 fw-bold">Console Output:</p>
                <p className="text-white px-2 ">310</p>
                <br></br>
            </div>
            <br></br>
            <h5>Try it yourself:</h5>

            <p>console.log(<span className="inline-flex w-auto" ><input className="w-auto h-25" type="text" placeholder="Examples: 330, Hello, 514" value={consoleField} onChange={(e) => setConsoleField(e.target.value)}></input></span>)</p>
            <p>Console Output: <span>{consoleField}</span></p>
                
            <hr></hr>
            <h5>Data Types</h5>
            <p>In JavaScript there are 8 fundamental data types:
                <span><ul>
                    <li>Number - Any number, including decimals</li>
                    <li>BigInt - Any number larger than 2^53-1 or less than -(2^53-1)</li>
                    <li>String - Any grouping of characters surrounded by either single, ' ', or double, " ", quotes </li>
                    <li>Boolean - True of False values</li>
                    <li>Null - The absence of a value</li>
                    <li>Undefined - Similar to Null, however it means that a given value does not exist</li>
                    <li>Symbol - Used for more complex coding, symbols are unique identifiers</li>
                    <li>Object - Collections of data</li>
                    </ul></span>

                    The first 7 of these data types are considered primitive, which means that they are basic, non-complex data types.
            </p>
            <hr></hr>
            <h5>Data Type Quiz</h5>
            Identify the following data types:
            <br></br>
            <br></br>
            <div className="row">
            <div className="col col-lg-1 w-auto"><h6>1.</h6></div>
            <div className="col">
                
                <p className="fw-bold">"Hello World"</p>
                <div class="">
                <form>

                <div class="form-check">
                <input type="radio" class="form-check-input" name="flexRadioDefault" id="question1.1" onClick={(e) => setQuestionOne("Correct!")} />
                <label for="question1.1" class="form-check-label">String</label>
                </div>

                <div class="form-check">
                <input type="radio" class="form-check-input" name="flexRadioDefault" id="question1.2" onClick={(e) => setQuestionOne("Incorrect!")}/>
                <label for="question1.2" class="form-check-label">Number</label>
                </div>

                <div class="form-check">
                <input type="radio" class="form-check-input" name="flexRadioDefault" id="question1.3" onClick={(e) => setQuestionOne("Incorrect!")}/>
                <label for="question1.3" class="form-check-label">BigInt</label>
                </div>

                <div class="form-check">
                <input type="radio" class="form-check-input" name="flexRadioDefault" id="question1.4" onClick={(e) => setQuestionOne("Incorrect!")}/>
                <label for="question1.4" class="form-check-label">Null</label>
                </div>
                </form>
                <p>{questionOne}</p>
            </div>
            </div>
            </div>
            
            <div className="row">
            <div className="col col-lg-1 w-auto"><h6>2.</h6></div>
            <div className="col">
                
                <p className="fw-bold">401.51</p>
                <div class="">
                <form>

                <div class="form-check">
                <input type="radio" class="form-check-input" name="flexRadioDefault" id="question2.1" onClick={(e) => setQuestionTwo("Incorrect!")} />
                <label for="question2.1" class="form-check-label">Boolean</label>
                </div>

                <div class="form-check">
                <input type="radio" class="form-check-input" name="flexRadioDefault" id="question2.2" onClick={(e) => setQuestionTwo("Correct!")}/>
                <label for="question2.2" class="form-check-label">Number</label>
                </div>

                <div class="form-check">
                <input type="radio" class="form-check-input" name="flexRadioDefault" id="question2.3" onClick={(e) => setQuestionTwo("Incorrect!")}/>
                <label for="question2.3" class="form-check-label">BigInt</label>
                </div>

                <div class="form-check">
                <input type="radio" class="form-check-input" name="flexRadioDefault" id="question2.4" onClick={(e) => setQuestionTwo("Incorrect!")}/>
                <label for="question2.4" class="form-check-label">Null</label>
                </div>
                </form>
                <p>{questionTwo}</p>
            </div>
            </div>
            </div>

            <div className="row">
            <div className="col col-lg-1 w-auto"><h6>3.</h6></div>
            <div className="col">
                
                <p className="fw-bold">True</p>
                <div class="">
                <form>

                <div class="form-check">
                <input type="radio" class="form-check-input" name="flexRadioDefault" id="question3.1" onClick={(e) => setQuestionThree("Incorrect!")} />
                <label for="question3.1" class="form-check-label">Undefined</label>
                </div>

                <div class="form-check">
                <input type="radio" class="form-check-input" name="flexRadioDefault" id="question3.2" onClick={(e) => setQuestionThree("Incorrect!")}/>
                <label for="question3.2" class="form-check-label">String</label>
                </div>

                <div class="form-check">
                <input type="radio" class="form-check-input" name="flexRadioDefault" id="question3.3" onClick={(e) => setQuestionThree("Correct!")}/>
                <label for="question3.3" class="form-check-label">Boolean</label>
                </div>

                <div class="form-check">
                <input type="radio" class="form-check-input" name="flexRadioDefault" id="question3.4" onClick={(e) => setQuestionThree("Incorrect!")}/>
                <label for="question3.4" class="form-check-label">BigInt</label>
                </div>
                </form>
                <p>{questionThree}</p>
            </div>
            </div>
            </div>

            <div className="row">
            <div className="col col-lg-1 w-auto"><h6>4.</h6></div>
            <div className="col">
                
                <p className="fw-bold">"50102"</p>
                <div class="">
                <form>

                <div class="form-check">
                <input type="radio" class="form-check-input" name="flexRadioDefault" id="question4.1" onClick={(e) => setQuestionFour("Incorrect!")} />
                <label for="question4.1" class="form-check-label">Number</label>
                </div>

                <div class="form-check">
                <input type="radio" class="form-check-input" name="flexRadioDefault" id="question4.2" onClick={(e) => setQuestionFour("Correct!")}/>
                <label for="question4.2" class="form-check-label">String</label>
                </div>

                <div class="form-check">
                <input type="radio" class="form-check-input" name="flexRadioDefault" id="question4.3" onClick={(e) => setQuestionFour("Incorrect!")}/>
                <label for="question4.3" class="form-check-label">Null</label>
                </div>

                <div class="form-check">
                <input type="radio" class="form-check-input" name="flexRadioDefault" id="question4.4" onClick={(e) => setQuestionFour("Incorrect!")}/>
                <label for="question4.4" class="form-check-label">Boolean</label>
                </div>
                </form>
                <p>{questionFour}</p>
            </div>
            </div>
            </div>
            

            <hr></hr>

            <h5>End of Lesson</h5>

            Congratulations, you have successfully finished this lesson, click <Link to="/chapter1-variables">here</Link> to continue to the next lesson, or navigate using the <Link to="/chapters">Chapters</Link> page!
        </div>
        </>
    )
}

export default IntroPage;