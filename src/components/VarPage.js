import React, { useState, useRef} from "react"
import { Link } from "react-router-dom";

const VarPage = () => {
    const dragItem = useRef();
  const dragOverItem = useRef();
  const [list, setList] = useState(['=','var/let','const','+','%','-']);
  const [question, setQuestion] = useState("")
  const list2 = ["A constant variable","The addition operator","The subtraction operator","The assignment operator","Mutable variable declaration","Remainder operator"]
 
  const dragStart = (e, position) => {
    dragItem.current = position;
    console.log(e.target.innerHTML);
  };
 
  const dragEnter = (e, position) => {
    dragOverItem.current = position;
    console.log(e.target.innerHTML);
  };
 
  const drop = (e) => {
    const copyListItems = [...list];
    const dragItemContent = copyListItems[dragItem.current];
    copyListItems.splice(dragItem.current, 1);
    copyListItems.splice(dragOverItem.current, 0, dragItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    setList(copyListItems);
  };
    return ( 
        <>
        <h2 class="text-start mx-5 my-2">Variables</h2>
        <hr></hr>
        <div class="text-start mx-5 my-2">
        <h5>What are Variables</h5>
        <p>Variables are used to store data within an application, which can then be accessed and reused. 
            A variable is split into two components: its unique identifier, and its value, and is assigned using the = operator: <span className="fw-bold">myVar = 50</span>  </p>
            <hr></hr>
            <h5>Variable Types</h5>
            <p>A variable in JavaScript is declared using the <span className="fw-bold">var</span> keyword, however there are two other 
            ways of declaring a variable. <span className="fw-bold">Let</span> and <span className="fw-bold">const</span> are used to alter how a variable is accessed and used.
            The main difference between var and let is the scope given to the variable, however this will be covered later. The const variable 
            declares a variable to be constant, which means that once the variable is assigned a value, it's value cannot be changed or altered.
            </p>
            <hr></hr>
            <h5>Declaring Variables</h5>

            <div className="bg-dark">
                <p className="text-white px-2 pt-2"><span className="text-warning">var myNum</span> = <span className="text-warning">320</span></p>
                <p className="text-white px-2 "><span className="text-warning">let myText</span> = <span className="text-warning">"Hello Mars"</span></p>
                <p className="text-white px-2 pb-2 "><span className="text-warning">const myBoolean</span> = <span className="text-warning">True</span></p>
            </div>

            <p>Let's see what would happen if we reassign these variables</p>

            <div className="bg-dark">
                <p className="text-white px-2 pt-2"><span className="text-warning">myNum</span> = <span className="text-warning">400</span></p>
                <p className="text-white px-2 "><span className="text-warning">myText</span> = <span className="text-warning">"Hello Jupiter"</span></p>
                <p className="text-white px-2 "><span className="text-warning">myBoolean</span> = <span className="text-warning">False</span></p>
                <p className="text-white px-2 "><span className="text-info">console</span>.<span className="text-warning">log</span>(<span className="text-info">myNum, myText, myBoolean</span>)</p>
                <p className="text-white px-2 fw-bold">Console Output:</p>
                <p className="text-white px-2 pb-2"><span className="text-warning">400</span><br></br><span className="text-warning">Hello Jupiter</span><br></br><span className="text-warning">True</span></p>
            </div>

        <p>Notice that we can reassign variables by using their identifier and the = operator to assign a new value, however the const 
            variable does not change. We are also able to use the variable names to display their data alongside console.log(). The value 
            contained within the called variable is displayed, rather than the variable name.
        </p>
        <hr></hr>
        <h5>Arithmetic Operators</h5>
        <p>Arithmetic operators gives us the ability to do calculations within JavaScript. There are 5 arithmetic operators: 
            <span> <ul>
                <li>Addition: +</li>
                <li>Subtract: -</li>
                <li>Multiply: *</li>
                <li>Divide: /</li>
                <li>Remainder: %</li>
                </ul>
                </span></p>

                <div className="bg-dark">
                <p className="text-white px-2 "><span className="text-info">console</span>.<span className="text-warning">log</span>(<span className="text-info">5 </span>+<span className="text-info"> 4</span>)</p>
                <p className="text-white px-2 "><span className="text-info">console</span>.<span className="text-warning">log</span>(<span className="text-info">10 </span>-<span className="text-info"> 6</span>)</p>
                <p className="text-white px-2 "><span className="text-info">console</span>.<span className="text-warning">log</span>(<span className="text-info">7 </span>*<span className="text-info"> 6</span>)</p>
                <p className="text-white px-2 "><span className="text-info">console</span>.<span className="text-warning">log</span>(<span className="text-info">56 </span>/<span className="text-info"> 8</span>)</p>
                <p className="text-white px-2 "><span className="text-info">console</span>.<span className="text-warning">log</span>(<span className="text-info">13 </span>%<span className="text-info"> 3</span>)</p>
                <p className="text-white px-2 fw-bold">Console Output:</p>
                <p className="text-white px-2 ">9</p>
                <p className="text-white px-2 ">4</p>
                <p className="text-white px-2 ">42</p>
                <p className="text-white px-2 ">7</p>
                <p className="text-white px-2 pb-2">1</p>
            </div>

            <p>All of these calculations can be done inside the console, however they can also be assigned to variables,
                 and variables can also be used as values inside a calculation. </p>
      <hr></hr>

          <h5>Test your Knowledge!</h5>    

        <p>Match the keywords and symbols on the left to the correct description on the right.</p>  
<div className="container">               
<div className="row">
    <div className="col-sm ">
                 {
    list&&
    list.map((item, index) => (
      <div style={{backgroundColor:'#332c2c', margin:'5px', textAlign:'center', fontSize:'20px',width:"50%", color:"white"}}
        onDragStart={(e) => dragStart(e, index)}
        onDragEnter={(e) => dragEnter(e, index)}
        onDragEnd={drop}
        key={index}
        draggable>
          {item}
      </div>
      ))}
</div>
<div className="col-sm">
    <ul class="list-unstyled">
        <li class="py-1 my-1 px-5">----------------------</li>
        <li class="py-1 my-1 px-5">----------------------</li>
        <li class="py-1 my-1 px-5">----------------------</li>
        <li class="py-1 my-1 px-5">----------------------</li>
        <li class="py-1 my-1 px-5">----------------------</li>
        <li class="py-1 my-1 px-5">----------------------</li>
    </ul>
</div>
<div className="col-sm">
{
    list2&&
    list2.map((item, index) => (
      <div style={{backgroundColor:'#332c2c', margin:'5px', textAlign:'center', fontSize:'18px',width:"50%", color:"white"}}
        
        key={index}
        draggable>
          {item}
      </div>
      ))}
</div>
      </div>
      </div> 

      <br></br>
      <div className="container-fluid">
      <div className="row">
      <div className="col-lg-5"> 
  
      </div>
        <div className="col">
      <button type="submit" onClick={(e) => { if (list[0] === "const" && list[1] === "+" && list[2] === "-" && list[3] === "=" && list[4] === "var/let" && list[5] === "%"){
        console.log("correct");
        console.log(list);
        setQuestion("Correct!")
      } else {
        console.log("incorrect")
        console.log(list)
        setQuestion("Incorrect.")
      }}}>Submit</button>
      </div>
      <div className="col-lg-6">
         <div className="">{question}</div>
      </div>
      
        </div>
        </div>
        <hr></hr>

            <h5>End of Lesson</h5>

            Congratulations, you have successfully finished this lesson, click <Link to="/chapter1-methods">here</Link> to continue to the next lesson, or navigate using the <Link to="/chapters">Chapters</Link> page!
        </div>

        </>
    )
}

export default VarPage;