import React from "react"
import Accordion from "react-bootstrap/Accordion";

const Chapters = () => {

    return (
        <div>
            <div className="row">
                <div className="col-lg-5">
                    <div>
                        <ul class="list-group list-group-flush">
                        <li class="list-group-item list-group-item-action">
                        <Accordion>
                        <Accordion.Header><div className="fw-bold">Chapter 1: Intro to Java</div></Accordion.Header>
                        <Accordion.Body>
                        <div class="list-group list-group-flush">
                                <a href="/chapter1-intro" className="list-group-item list-group-item-action"> Introduction to Java</a>
                                <a href="/chapter1-variables" className="list-group-item list-group-item-action"> Variables</a>
                                <a href="/chapter1-methods" className="list-group-item list-group-item-action"> Methods and Properties</a>
                                <a href="/chapter1-test" className="list-group-item list-group-item-action">Chapter 1 Test/Game</a>
                            </div>
                        </Accordion.Body>
                        </Accordion>
                        </li>
                        <li class="list-group-item list-group-item-action">
                        <Accordion>
                        <Accordion.Header><div className="fw-bold">Chapter 2: Conditionals & Scope</div></Accordion.Header>
                        <Accordion.Body>
                        <div class="list-group list-group-flush">
                                <a href="/chapter2-conditionals" className="list-group-item list-group-item-action"> Conditionals</a>
                                <a href="/chapter2-logic" className="list-group-item list-group-item-action"> Logical Operators</a>
                                
                            </div>
                        </Accordion.Body>
                        </Accordion>
                        </li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3">
                    <p>Here you can select which aspect of JavaScript you want to learn about. Selecting a Chapter allows you to choose 
                        a specific topic to learn. Each topic teaches you different concepts and keywords about JavaScript, and allows you to
                        test your knowledge!
                    </p>
                </div>
            </div>
        </div>
    )
}


export default Chapters;