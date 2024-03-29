import React from "react";
import { Link } from "react-router-dom";

const FuncPage = () => {
    const larrow = "<"
    const lcbrace = "{"
    const rarrow = ">"
    const rcbrace = "}"


    return (
        <div>
        <h2 class="text-start mx-5 my-2">Functions</h2>
       <hr></hr>
       <div class="text-start mx-5 my-2">
       <h5>What are Functions</h5>
       <p>In JavaScript, you are able to create something called a function. A function is a block of code that can be used repeatedly with the use of <span className="fw-bold">function calls</span>. In a function you are able to 
       add in <span className="fw-bold">parameters</span>, which will allow the function to take in <span className="fw-bold">arguments</span>. Here's an example of a function with and without parameters:
       </p>
       <div className="bg-dark">
                <p className="text-white px-2 pt-2"><span className="text-warning">let </span><span className="text-info">myVar</span> = <span className="text-warning">5</span></p>
                <p className="text-white px-2 "><span className="text-warning">function</span> <span className="text-info">myFunction</span>() {lcbrace}</p>
                <p className="text-white px-2"><span className="text-info">console</span>.<span className="text-warning">log</span>(<span className="text-info">myVar</span>) </p>
                <p className="text-white px-2 "><span className="text-warning">return </span><span className="text-info">myVar</span> {rcbrace}</p>
                <p className="text-white px-2"><span className="text-info">myFunction</span>()</p>
                <p className="text-white px-2 fw-bold">Console Output:</p>
                <p className="text-white px-2 pb-2">5</p>
            </div>
        <br></br>
        <div className="bg-dark">
                <p className="text-white px-2 pt-2"><span className="text-warning">let </span><span className="text-info">myVar</span> = <span className="text-warning">5</span></p>
                <p className="text-white px-2 "><span className="text-warning">function</span> <span className="text-info">myFunction</span>(<span className="text-info">myParam</span>) {lcbrace}</p>
                <p className="text-white px-2"><span className="text-info">console</span>.<span className="text-warning">log</span>(<span className="text-info">myParam</span>) </p>
                <p className="text-white px-2 "><span className="text-warning">return </span><span className="text-info">myParam</span> {rcbrace}</p>
                <p className="text-white px-2"><span className="text-info">myFunction</span>(<span className="text-info">myVar</span>)</p>
                <p className="text-white px-2 fw-bold">Console Output:</p>
                <p className="text-white px-2 pb-2">5</p>
            </div>
            <hr></hr>
            <h5>Function Calls</h5>
            <p>In order to use a function, we have to make use of function calls. To call a function, we just write the name of the function followed by parentheses (). If a function has a parameter/s then we will want to include arguments in our function calls. Arguments go inside the parentheses of a function call. </p>
            <hr></hr>
            <h5>Parameters and Arguments</h5>
            <p>As you can see in the first example, we have created a function that takes zero parameters using (). However, in the second function we have one parameter called myParam. 
                Since the first function has no parameters, we dont have any arguments to give. In the 
                second function call, we call the function with an argument of myVar. This means that the value stored within myVar, is now passed onto the parameter myParam, which we can then use inside the function instead. This is how we input information into a function.
             We can also add more than one parameter, by seperating each parameter with a comma: (myParam1, myParam2)</p>
             <hr></hr>
            <h5>Return Statement</h5>
            <p>The return statement is how we properly output information from a function. In previous examples console.log() has been used to log the results, however, the true value that is returned from the function comes from the return statement.
                In essence, if we were to create a variable called myFuncResult and assign it the value of a function call, its value would be the returned value from the function. If that function returned 5, then the variable myFuncResult would be 5. As you can see, this is how we are able to make code blocks that perform actions for us depending on what we need them for. For example, if we wanted to calculate the sum of two numbers for a list of lots of numbers, we can just insert those values into the functionc all, rather than doing each of those calculations seperately.
            </p>
            <hr></hr>

             <h5>Try writing your own</h5>
           
        
            <textarea name="postContent" rows={5} cols={50} placeholder='function calcArea(paramH, paramW) {
            return paramH * paramW;
            }' />


            <hr></hr>
             <h5>End of Lesson</h5>

Congratulations, you have successfully finished this lesson, click <Link to="/chapter3-altfunc">here</Link> to continue to the next lesson, or navigate using the <Link to="/chapters">Chapters</Link> page!

            </div>
            
            </div>
    )
}

export default FuncPage;