import React from "react"


const MethodsPage = () => {


    return ( 
        <>
        <h2 class="text-start mx-5 my-2">Methods and Properties</h2>
        <hr></hr>
        <div class="text-start mx-5 my-2">
            <h5>What are Properties</h5>
            <p>In JavaScript all data types have access to specific properties, which means that each instance of a data type also has access to those properties. 
                One of the properties of the String data type is the length property, which as you can guess, returns the length of the string. We call properties, and similarly methods, 
                using the <span className="fw-bold">.</span> (dot) operator.</p>

                <div className="bg-dark">
                <p className="text-white px-2 pt-2"><span className="text-info">let</span> <span className="text-warning">myString</span> = <span className="text-warning">"I like coding"</span></p>
                <p className="text-white px-2"><span className="text-info">console</span>.<span className="text-warning">log</span>(<span className="text-info">myString</span>.<span className="text-danger">length</span>)</p>
                <p className="text-white px-2 fw-bold">Console Output:</p>
                <p className="text-white px-2 pb-2">13</p>
            </div>
            <p>These properties can be useful when creating our own applications. For example, if you were to develop a chat site, and wanted to limit the amount of characters 
                the user could type, the .length property could be used to implement this.
            </p>
            <hr></hr>
            <h5>What are Methods</h5>
            <p>Each data type has different methods that allow us to handle different instances of those data types. Methods can also be applied to objects, both the built-in ones, and objects 
                that you have created. For example, we have already looked at the console object, and have applied the .log() method. All methods are called using the  
                <span className="fw-bold"> .</span> (dot) operator, the method name, followed by parentheses: () </p>
                <br></br>
                <p>Some methods that we can apply to the string data type are the .toUpperCase(), and the .startsWith() methods.</p>

                <div className="bg-dark">
                <p className="text-white px-2 pt-2"><span className="text-info">console</span>.<span className="text-warning">log</span>(<span className="text-warning">"javascript is fun"</span>.<span className="text-danger">toUpperCase</span><span className="text-info">()</span>)</p>
                <p className="text-white px-2"><span className="text-info">console</span>.<span className="text-warning">log</span>(<span className="text-warning">"Mars starts with M"</span>.<span className="text-danger"><span className="text-info"></span>startsWith</span><span className="text-info">()</span>)</p>
                <p className="text-white px-2 fw-bold">Console Output:</p>
                <p className="text-white px-2">JAVASCRIPT IS FUN</p>
                <p className="text-white px-2 pb-2">True</p>
            </div>

            </div>
        </>
    )
}


export default MethodsPage;