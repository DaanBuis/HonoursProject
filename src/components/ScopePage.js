import React from 'react'


const ScopePage = () => {
    const larrow = "<"
    const lcbrace = "{"
    const rarrow = ">"
    const rcbrace = "}"

    return (
        <>
         <h2 class="text-start mx-5 my-2">Scope</h2>
        <hr></hr>
        <div class="text-start mx-5 my-2">
            <h5>What is scope</h5>
            <p>Every programming language you will find will have a concept called scope. Scope is what determines a variables accessibility (where it can be accessed in the code). Earlier, when we were learning about variables, it was mentioned that var and let are similar, but they have different scope capabilities. 
                This is because they are accessed throughout an application differently. There are 3 types of scope in JavaScript: 
                <span> <ul className="list-group list-group-flush">
                <li className="list-group-item"><span className='fw-bold'>Block Scope</span> - Variables declared within a block <span className='fw-bold'>{lcbrace} {rcbrace}</span> cannot be accessed outside of this block.</li>
                <li className="list-group-item"><span className='fw-bold'>Function/Local Scope</span> - Variables declared within a function are <span className="fw-bold">local</span> to that function</li>
                <li className="list-group-item"><span className='fw-bold'>Global Scope</span> - Variables declared in the global namespace, can be accessed anywhere. However, it is bad practice to make every variable have global scope.</li>
                </ul>
                </span> 
            </p>
            <hr></hr>
            <h5>Block Scope</h5>
            <p>For a variable to have block scope, it has to be declared inside a code block ({}). When a variable is declared in a code block, it can only be accessed within that code block. However, it is important to note 
                that there is a distinction between var and let which affects this. If a variable is declared using var, then it cannot have block scope, and can be accessed from outside the block, whereas variables 
                declared with the let keyword can only be accessed from within the block. Here's an example of block scope:
            </p>
            <div className="bg-dark">
                <p className="text-white px-2 pt-2"><span className="text-warning">let </span><span className="text-info">myVar</span> = <span className="text-warning">5</span></p>
                <p className="text-white px-2 "><span className="text-warning">if </span>(<span className="text-warning">true</span>) {lcbrace}</p>
                <p className="text-white px-2 "><span className="text-warning">let </span><span className="text-info">myVar</span> = <span className="text-warning">10</span></p>
                <p className="text-white px-2"><span className="text-info">console</span>.<span className="text-warning">log</span>(<span className="text-info">myVar</span>) {rcbrace}</p>
                <p className="text-white px-2"><span className="text-info">console</span>.<span className="text-warning">log</span>(<span className="text-info">myVar</span>)</p>
                <p className="text-white px-2 fw-bold">Console Output:</p>
                <p className="text-white px-2">10</p>
                <p className="text-white px-2 pb-2">5</p>
            </div>
            <p>As you can see, we declared two variables with the same name, different values, and with different scope. Since the 2nd variable was declared within the code block 
                of the if statement, it became only accessible within that block, meaning the console.log() statement would return its stored value. However, when we call console.log() with 
                the same variable name outside of the code block, it returns the value for the first variable, since both are outside of the code block. </p>
        <hr></hr>
        <h5>Function Scope</h5>
        <p>Function scope is extremely similar to block scope, however, instead of variables being accessible only to code within the block, the code is only accessible to code within the function. We will cover this during the functions lessons.</p>
        <hr></hr>
        <h5>Global Scope</h5>
        <p>Global scope is the easiest scope to understand, and that is because variables that have global scope can be accessed anywhere in the application. However, although tempting, it is not a good idea to make every variable global, and this 
            is because too many global variables can slow down the performance of your application. Scope can also be used to tackle problems that arise in programming, so its good practice to remember to use function scope and block scope.
        </p>
        <hr></hr>
        <h5>End of Lesson</h5>

        Congratulations, you have successfully finished this lesson, click <a href="./chapter2-test">here</a> to continue to the test, or navigate using the <a href="./chapters">Chapters</a> page!

        </div>

        </>
    )
}

export default ScopePage;