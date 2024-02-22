import React, { useState } from "react"
import LogicCardGame from "./LogicCardGame"


const LogicPage = () => {
    const larrow = "<"
    const lcbrace = "{"
    const rarrow = ">"
    const rcbrace = "}"

    const [ex1, setEx1] = useState("")
    const [ex2, setEx2] = useState("")
    const [ex3, setEx3] = useState("")
    return ( 
        <>
        <h2 class="text-start mx-5 my-2">Logical Operators</h2>
        <hr></hr>
        <div class="text-start mx-5 my-2">
            <h5>What are Logical Operators</h5>
            <p>Logical operators allow us to add logic into our code, and we will specifically look at how to use logical operators in a conditional statement. 
            The three logical operators in JavaScript are AND, NOT, and OR:
            <span> <ul className="list-group list-group-flush">
                <li className="list-group-item"><span className='fw-bold'>&&</span> - AND operator, both conditions must be met.</li>
                <li className="list-group-item"><span className='fw-bold'>||</span> - OR operator, either condition must be met.</li>
                <li className="list-group-item"><span className='fw-bold'>!</span> - NOT operator, the compared values should not be equal in order to fulfill the condition.</li>
                </ul>
                </span> 
                <br></br>
            Let's look at some examples of how these logical operators could be used:

             <div className="bg-dark">
                <p className="text-white px-2 pt-2"><span className="text-warning">if </span>(<span className="text-warning">60</span> {larrow} <span className="text-warning">70</span> && <span className="text-warning">50</span> {rarrow} <span className="text-warning">40</span>)</p>
                <p className="text-white px-2 pt-2"><span className="text-warning">if </span>(<span className="text-warning">40</span> {larrow} <span className="text-warning">30</span> || <span className="text-warning">5</span> {rarrow} <span className="text-warning">1</span>)</p>
                <p className="text-white px-2 pt-2"><span className="text-warning">if </span>(<span className="text-warning">70</span> != <span className="text-warning">30</span> )</p>
            </div> 
            <p>All of these conditions would be met if they were used in some real code. In the first if statement, that AND operator is used, which means that both conditions must be true in order to meet the overall condition. If one of these statements is incorrect, then it would evaluate to false.
                 In the second statement, the OR operator is used, and since only one of the conditions is met, then the overall condition is also met. However, if both conditions fail, then the overall condition is not met. 
                 In the final statement, the NOT operator is used, which evaluates to true if the values are NOT equal, and therefore meets the condition. It is worth mentioning that != and !== are slightly different because !== checks for value and type, whereas != only checks for value.</p>   
            </p>     
            <hr></hr>
            <h5>Complex Examples of Logical Operators</h5>

        <p>Have a look at the following code examples and try and identify if the condition will be true or false.</p>

        <div className="bg-dark">
                <p className="text-white px-2 py-1"><span className="text-warning">if </span>((<span className="text-warning">55.5</span> {larrow} <span className="text-warning">66.6</span> && <span className="text-warning">1337</span> {rarrow} <span className="text-warning">800</span>) || (<span className="text-warning">300</span> === <span className="text-warning">500</span>))</p>
                </div>
                <button type="submit" onClick={(e) => setEx1("Correct")}>True</button> 
                <button className="mx-1" type="submit" onClick={(e) => setEx1("Incorrect")}>False</button> 
                <p>{ex1}</p>

                <div className="bg-dark">
                <p className="text-white px-2 py-1"><span className="text-warning">if </span>((<span className="text-warning">1.234</span> {larrow} <span className="text-warning">4.321</span> && <span className="text-warning">983</span> !== <span className="text-warning">"983"</span>) && (<span className="text-warning">"Hello"</span> === <span className="text-warning">"Hell0"</span> || <span className="text-warning">"610"</span> === <span className="text-warning">610</span>))</p>
                </div>
                <button type="submit" onClick={(e) => setEx2("Incorrect")}>True</button> 
                <button className="mx-1" type="submit" onClick={(e) => setEx2("Correct")}>False</button> 
                <p>{ex2}</p>

                <div className="bg-dark">
                <p className="text-white px-2 py-1"><span className="text-warning">if </span>(<span className="text-warning">915</span> !== <span className="text-warning">915 </span>)</p>
                </div>
                <button type="submit" onClick={(e) => setEx3("Incorrect")}>True</button> 
                <button className="mx-1" type="submit" onClick={(e) => setEx3("Correct")}>False</button> 
                <p>{ex3}</p>

                <hr></hr>

                <h5>Match the Logical Operators</h5>

                <LogicCardGame/>
            </div>
        </>
    )
}


export default LogicPage;