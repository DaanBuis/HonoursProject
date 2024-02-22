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
        </div>
        </>
    )
}

export default ScopePage;