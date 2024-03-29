import React from 'react';
import { Link } from "react-router-dom";


const IntObjects = () => {
    const larrow = "<"
    const lcbrace = "{"
    const rarrow = ">"
    const rcbrace = "}"

    return (
        <>
        <h2 class="text-start mx-5 my-2">Intro to Objects</h2>
       <hr></hr>
       <div class="text-start mx-5 my-2">
       <h5>What is an Object</h5>
       <p>JavaScript is an Object-Oriented programming language, meaning that objects are very central to programming in JavaScript. In JavaScript almost everything is an object, from functions to strings, however, objects can also be variables. Objects contain many values that are written as <span className="fw-bold">key:value</span> pairs, where the key is the name of the property, and the value is the value of the property.   </p>
        
       <div className="bg-dark">
                <p className="text-white px-2 pt-2 pb-2"><span className="text-warning">const </span><span className="text-info">user</span> = {lcbrace} <br></br> <span className="text-warning">username</span>:<span className="text-info">"Geralt"</span>,<br></br><span className="text-warning">age</span>:<span className="text-info">52</span>, <br></br><span className="text-warning">hairColour</span>:<span className="text-info">"White"</span> <br></br> {rcbrace}</p>
                
            </div>

            <p>As you can see we have declared the object with the const keyword, as this is common practice when creating objects. The easiest way to create a JavaScript object is to use an object literal, as seen above. Each property within an object is a key:value pair and are seperated by commas.   </p>

        <hr></hr>
        <h5>Object Properties</h5>
        <p>Object properties can be changed, added, and deleted, although it is important to note that some are read-only. Properties in objects can be accessed through 3 different ways:
        <span> <ul className="list-group list-group-flush">
                <li className="list-group-item">objectName.property    ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎  ‎ ‎ ‎ ‎ ‎ ‎  <span className="text-success">//user.username</span></li>
                <li className="list-group-item">objectName["property"]    ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ <span className="text-success">//user["username"]</span></li>
                <li className="list-group-item">objectName[expression] ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ <span className="text-success">//x = username; user[x]</span></li>
                </ul>
                </span>
            <br></br>

        <p className="fw-bold">For example: </p>
        </p>
        <div className="bg-dark">
                <p className="text-white px-2 pt-2 pb-2"><span className="text-info">user</span>.<span className="text-warning">username</span> + "is" + <span className="text-info">user</span>.[<span className="text-warning">"age"</span>] + "years old"</p>
            </div>
            <p className="fw-bold">Would return:</p>
            <div className="bg-dark">
                <p className="text-white px-2 pt-2 pb-2">Geralt is 52 years old</p>
                </div>
                <hr></hr>
                <h5>Editing Objects</h5>
                <p>We are able to add, change and remove properties within an object. In order to add a property to an existing object, you just need to give it a value:</p>
                <div className="bg-dark">
                <p className="text-white px-2 pt-2 pb-2"><span className="text-info">user</span>.<span className="text-warning">horse</span> = <span className="text-warning">"Roach"</span> </p>
            </div>
            <p>Since the property 'horse' did not previously exist, a new property was created with the assigned value. If we want to change the value of a propery that already exists, we will use the same syntax, however instead of supplying a property name that doesnt exist, we will supply one already contained within the object:</p>
            <div className="bg-dark">
                <p className="text-white px-2 pt-2 pb-2"><span className="text-info">user</span>.<span className="text-warning">horse</span> = <span className="text-warning">"Roach Jr."</span> </p>
            </div>
            
            
            
            
            <p>In order to delete a property within an object, we can use the delete keyword: </p>
            <div className="bg-dark">
                <p className="text-white px-2 pt-2 pb-2">delete <span className="text-info">user</span>.<span className="text-warning">horse</span></p>
            </div>
            <p>This keyword also works with the <span className="fst-italic">objectName["property"]</span> syntax</p>

            <hr></hr>
            <h5>Try it yourself</h5>
            <textarea
        name="postContent"
        placeholder="Enter your code here"
        rows={4}
        cols={40}
      />

      <hr></hr>

<h5>End of Lesson</h5>

Congratulations, you have successfully finished this lesson, click <Link to="./chapter3-test">here</Link> to continue to the test!

    </div>
        </>
    )
}

export default IntObjects;
