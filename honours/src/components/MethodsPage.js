import React from "react"
import CardGamePage from "./CardGamePage";


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

            <hr></hr>

            <h5>Useful Built-in Methods</h5>

            <p>There are a number of useful built-in methods that can be applied to the built-in Objects. These can be used to manipulate data,
                 carry out mathematical concepts and more:
                 <span> <ul className="list-group list-group-flush">
                <li className="list-group-item">Math.round(num) - Returns the provided number rounded to the closest integer.</li>
                <li className="list-group-item">Math.floor(num) - Rounds down to the previous integer.</li>
                <li className="list-group-item">Math.sqrt(num) - Returns the square root of num.</li>
                <li className="list-group-item">Math.random(num) - Returns a random number between 0 and num. Use alongside Math.floor to generate a random whole number, as normally it would contain lots of decimal numbers.</li>
                <li className="list-group-item">string.replace(searchFor, replaceWith) - Finds every instance of the search for substring and replaces it with the new substring. 
                    <div className="small">Note: A substring is a string within a string</div></li>
                </ul>
                </span>
            </p>
            <hr></hr>
            <div className="container-fluid">
                <CardGamePage></CardGamePage>
                </div>
            </div>
        </>
    )
}


export default MethodsPage;