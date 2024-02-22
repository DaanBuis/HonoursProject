import React, { useState, useRef } from 'react'



const ConditionalsPage = () => {
    const [fCodeVar, setFCodeVar] = useState("")
    const larrow = "<"
    const lcbrace = "{"
    const rarrow = ">"
    const rcbrace = "}"


    const dragItem = useRef();
    const dragOverItem = useRef();
    const [list, setList] = useState(["The other car is faster","else","else if","otherCarSpeed","myCarSpeed","log"]);
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
        <h2 class="text-start mx-5 my-2">Conditionals</h2>
        <hr></hr>
        <div class="text-start mx-5 my-2">
        <h5>What are Conditionals</h5>
        <p>A conditional statement is a popular concept within programming. A conditional statement allows for multiple different outcomes depending on different 
            factors such as variables, user input, and more. The first conditional statement we will look at is the <span className='fw-bold'>if</span> statement. 
            The <span className='fw-bold'>if</span> statement allows you to execute a segment of code if a condition is met. Think of it as going to bed or eating food; 
            if you are hungry, you will eat food, and if you are tired you will go to sleep. The same is with <span className='fw-bold'>if</span> statements in programming, if a condition is met, then something happens, for example:
             </p>

             <div className="bg-dark">
                <p className="text-white px-2 pt-2"><span className="text-warning">if </span>(<span className="text-warning">5</span> {larrow} <span className="text-warning">10</span>) {lcbrace} </p>
                <p className="text-white px-2 "><span className="text-info">console</span>.<span className="text-warning">log</span>(<span className="text-info">"5 is smaller than 10"</span>)</p>
                <p className="text-white px-2">{rcbrace}</p>
                <p className="text-white px-2 fw-bold">Console Output:</p>
                <p className="text-white px-2 pb-2 "><span className="text-info">5 is smaller than 10</span></p>
            </div>


            <p>In this if statement, since 5 is always smaller than 10, the code inside the curly braces will always run. However if we were to change 
                the less than symbol ({larrow}) to the greater than arrow ({rarrow}), then the condition would be false, meaning the code would not run. </p>
            <hr></hr>
            <h5>Comparison Operators</h5>
            <p>When we are creating conditional statements, we will often have to use comparison operators. Comparison operators allow us to compare two values or variables in different ways.
                This is because of the different conditional operators:
                <span> <ul className="list-group list-group-flush">
                <li className="list-group-item"><span className='fw-bold'>{larrow}</span> - The less than symbol</li>
                <li className="list-group-item"><span className='fw-bold'>{rarrow}</span> - The greater than symbol</li>
                <li className="list-group-item"><span className='fw-bold'>{larrow}=</span> - The less than or equal to symbol</li>
                <li className="list-group-item"><span className='fw-bold'>{rarrow}=</span> - The greater than or equal to symbol</li>
                <li className="list-group-item"><span className='fw-bold'>==</span> - The equals symbol. Note that this has 2 equals symbols, which is because it compares only value, not type.</li>
                <li className="list-group-item"><span className='fw-bold'>===</span> - The equals symbol. Note that this has 3 equals symbols, which is because it compares both type and value.</li>
                </ul>
                </span>
            </p>

            <p>Together, these operators give you a wide variety of different comparisons that you can make in your conditional statements. However, 
                there is a specific distinction to be made between == and ===. The operator == compares only value, not type, which means that one of the values is converted to the data type that matches the other value, 
                for example, if we wrote if (10 == "10") it would equal true, since after type conversion, they both equal 10 or "10". However, if we wrote 
                if (10 === "10") we would get false, because they are of different type.
            </p>
        <hr></hr>

        <h5>More Conditionals</h5>
        <p>The <span className='fw-bold'>if</span> statement can be expanded to also include the <span className="fw-bold">else</span> statement. This allows for two outcomes depending on the conditional. If the condition is not met, then it will execute the code in the <span className='fw-bold'>else</span> statement.
    </p>
    <div className="bg-dark">
                <p className="text-white px-2 pt-2"><span className="text-warning">if </span>(<span className="text-warning">myGrade</span> {rarrow} <span className="text-warning">40</span>) {lcbrace} </p>
                <p className="text-white px-2 "><span className="text-info">console</span>.<span className="text-warning">log</span>(<span className="text-info">"You have passed the test"</span>)</p>
                <p className="text-white px-2">{rcbrace} <span className="text-warning">else</span> {lcbrace} </p>
                <p className="text-white px-2"> <span className="text-info">console</span>.<span className="text-warning">log</span>(<span className="text-info">"You have failed the test"</span>)  </p>
                <p className="text-white px-2">{rcbrace}</p>
                <p className="text-white px-2 fw-bold">Console Output:</p>
                <p className="text-white px-2 pb-2 "><span className="text-info">You have passed/failed the test
                <br></br> </span>Depends on the value stored within myGrade</p>
            </div>

            <p>In this code example, there are two possible outcomes, which both depend on the value stored within the variable <span className='fw-bold'>myGrade</span>.
             If the value is less than 40, then the fail message will be returned, and if the value is greater than 40 then the pass message will be returned.
            <br></br>
            The if/else statement also has an extra feature that allows for even more conditions to be applied. This is by using else if. Else if allows you to add extra conditions, for example:
            </p>
            <div className="bg-dark">
                <p className="text-white px-2 pt-2"><span className="text-warning">var</span> <span className="text-info">myGrade</span> = <span className="text-warning">74</span></p>
                <p className="text-white px-2"><span className="text-warning">if </span>(<span className="text-warning">myGrade</span> {rarrow} <span className="text-warning">70</span>) {lcbrace} </p>
                <p className="text-white px-2 "><span className="text-info">console</span>.<span className="text-warning">log</span>(<span className="text-info">"You have got an A"</span>)</p>
                <p className="text-white px-2">{rcbrace} <span className="text-warning">else if</span>(<span className="text-warning">myGrade</span> {rarrow} <span className="text-warning">60</span>) {lcbrace} </p>
                <p className="text-white px-2"> <span className="text-info">console</span>.<span className="text-warning">log</span>(<span className="text-info">"You have got a B"</span>)  </p>
                <p className="text-white px-2">{rcbrace} <span className="text-warning">else if</span>(<span className="text-warning">myGrade</span> {rarrow} <span className="text-warning">50</span>) {lcbrace} </p>
                <p className="text-white px-2"> <span className="text-info">console</span>.<span className="text-warning">log</span>(<span className="text-info">"You have got a C"</span>)  </p>
                <p className="text-white px-2">{rcbrace} <span className="text-warning">else if</span>(<span className="text-warning">myGrade</span> {rarrow} <span className="text-warning">40</span>) {lcbrace} </p>
                <p className="text-white px-2"> <span className="text-info">console</span>.<span className="text-warning">log</span>(<span className="text-info">"You have got a D"</span>)  </p>
                <p className="text-white px-2">{rcbrace} <span className="text-warning">else</span> {lcbrace} </p>
                <p className="text-white px-2"> <span className="text-info">console</span>.<span className="text-warning">log</span>(<span className="text-info">"You have failed the test"</span>)  </p>
                <p className="text-white px-2">{rcbrace}</p>
                <p className="text-white px-2 fw-bold">Console Output:</p>
                <p className="text-white px-2 pb-2 "><span className="text-info">You have got an A </span></p>
            </div>

            <p>As you can see we have chained multiple else if statements in order to add extra conditions. This code is a simple grade calculator, and depending on which grade the user got, it finds the corresponding letter grade.

            </p>
            <hr></hr>

            <h5>Sort the Code!</h5>
            <div className="bg-dark">
                <p className="text-white px-2 pt-2"> <span className='text-warning'>let</span> <span className='text-info'>myCarSpeed</span> = <span className='text-warning'>75</span></p>
                <p className="text-white px-2 pt-2"> <span className='text-warning'>let</span> <span className='text-info'>otherCarSpeed</span> = <span className='text-warning'>65</span></p>
                <p className="text-white px-2"><span className='text-warning'>if</span> (<span className='text-warning fw-bold'>{list[0]}</span> {rarrow} <span className='text-warning fw-bold'>{list[1]}</span>) {lcbrace} </p>
                <p className="text-white px-2"><span className='text-info'>console</span>.<span className='text-warning fw-bold'>{list[2]}</span>(<span className='text-info'>"My car is faster"</span>)</p> 
                <p className='text-white px-2'>{rcbrace} <span className='text-warning fw-bold'>{list[3]}</span> (<span className='text-warning'>otherCarSpeed</span> {rarrow} <span className='text-warning'>myCarSpeed</span>) {lcbrace} </p>
                <p className="text-white px-2"><span className='text-info'>console</span>.<span className='text-warning'>log</span>(<span className='text-info fw-bold'>"{list[4]}"</span>)</p> 
                <p className='text-white px-2'>{rcbrace} <span className='text-warning fw-bold'>{list[5]}</span> {lcbrace} </p>
                <p className='text-white px-2'><span className='text-info'>console</span>.<span className='text-warning'>log</span>(<span className='text-info'>"Both cars are the same speed"</span>)</p>
                <p className='text-white px-2'>{rcbrace}</p>
                <p className="text-white px-2 fw-bold">Console Output:</p>
                <p className="text-white px-2 pb-2 "><span className="text-info">My car is faster </span></p>
            </div>
            <div>
            {
    list&&
    list.map((item, index) => (
      <div style={{backgroundColor:'#332c2c', margin:'8px', textAlign:'center', fontSize:'20px',width:"30%", color:"white",display:'inline',float:'left'}}
        onDragStart={(e) => dragStart(e, index)}
        onDragEnter={(e) => dragEnter(e, index)}
        onDragEnd={drop}
        key={index}
        draggable>
         {index + 1}. {item}
      </div>
      ))}
            </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
            <div className="container-fluid">
      <div className="row">
      <div className="col-lg-5"> 
  
      </div>
        <div className="col">
      <button type="submit" onClick={(e) => { if (list[0] === "myCarSpeed" && list[1] === "otherCarSpeed" && list[2] === "log" && list[3] === "else if" && list[4] === "The other car is faster" && list[5] === "else"){
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

            Congratulations, you have successfully finished this lesson, click <a href="/chapter2-logic">here</a> to continue to the next lesson, or navigate using the <a href="/chapters">Chapters</a> page!
        
        </div>
        
        </>
    )
}

export default ConditionalsPage