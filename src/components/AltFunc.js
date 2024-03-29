import React, { useState, useRef } from "react";


const AltFunc = () => {
    const larrow = "<"
    const lcbrace = "{"
    const rarrow = ">"
    const rcbrace = "}"


    const myFunc = () => 6


    const dragItem = useRef();
    const dragOverItem = useRef();
    const [list, setList] = useState(["myFunc","=","const","=>","'Hello World'","()"]);
    const [question, setQuestion] = useState("")
   
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
         <h2 class="text-start mx-5 my-2">Alternate Function Syntax</h2>
       <hr></hr>
       <div class="text-start mx-5 my-2">
       <h5>Function Expressions</h5>
       <p>Previously we have looked at some simple functions. These functions were created using function <span className="fw-bold">declarations</span> which use the function keyword, followed by the name of the function and its parameters.
        However, there is another way to define a function, called a <span className="fw-bold">function expression</span>. Function expressions are written as:
    </p>
    <div className="bg-dark">
                <p className="text-white px-2 pt-2"><span className="text-warning">const </span><span className="text-info">myFunc</span> = <span className="text-warning">function</span> (<span className="text-warning">a</span>,<span className="text-warning">b</span>) {lcbrace}</p>
                <p className="text-white px-2 pb-2"><span className="text-warning">return </span><span className="text-warning">a</span> * <span className="text-warning">b</span> {rcbrace}</p>
            </div>
            <p>In essence, a function expression is just assigning a function to a variable. To call these types of functions, we just use the variable name instead, and can call arguments as we normally would.
            </p>
            <hr></hr>
            <h5>Arrow Function Expression</h5>
            <p>An arrow function expression allows us to write shorter function syntax, and depending on your functions properties, it can be as short as one line:
            </p>
            <div className="bg-dark">
                <p className="text-white px-2 pt-2 pb-2"><span className="text-warning">const </span><span className="text-info">myFunc</span> = <span className="text-warning"></span> (<span className="text-warning"></span><span className="text-warning"></span>) ={rarrow} "Hello World"</p>
            </div>
            <p>This type of function is also known as a concise body arrow function, because of how short it is. If we were to use the arrow function for a multi-lined code block, we would have to add in the curly braces {lcbrace}{rcbrace} to create the code block. Another feature this type of function has is how it deals with parameters.
            As you can see from the previous example, we defined no parameters, and thus left empty brackets. However, if we wish to define <span className="fw-bold">one</span> parameter, we can leave out the parentheses altogether. Just remember that they are required for zero or more than one parameter. Another unique feature within concise functions is the omission of the return statement. This is because since it is all on one line, the computer knows to automatically return the value.</p>
        <hr></hr>
        <h5>Sort the code!</h5>
        {
        list&&
    list.map((item, index) => (
      <div style={{backgroundColor:'#332c2c', textAlign:'center', fontSize:'20px',width:"30%", color:"white",display:'inline',padding:'2px'}}
        onDragStart={(e) => dragStart(e, index)}
        onDragEnter={(e) => dragEnter(e, index)}
        onDragEnd={drop}
        key={index}
        draggable>
        {item}
      </div>
      ))}

<div className="row">
      <div className="col-lg-5"> 
  
      </div>
        <div className="col">
      <button type="submit" onClick={(e) => { if (list[0] === "const" && list[1] === "myFunc" && list[2] === "=" && list[3] === "()" && list[4] === "=>" && list[5] === "'Hello World'"){
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
        <hr></hr>

            <h5>End of Lesson</h5>

            Congratulations, you have successfully finished this lesson, click <a href="./chapter3-intobj">here</a> to continue to the next lesson, or navigate using the <a href="./chapters">Chapters</a> page!
        
        
         </div>
        </>
    )
}


export default AltFunc; 