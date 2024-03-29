import React from "react"
import Accordion from "react-bootstrap/Accordion";
import { Link } from "react-router-dom";

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
                                <Link to="/chapter1-intro" className="list-group-item list-group-item-action"> Introduction to Java</Link>
                                <Link to="/chapter1-variables" className="list-group-item list-group-item-action"> Variables</Link>
                                <Link to="/chapter1-methods" className="list-group-item list-group-item-action"> Methods and Properties</Link>
                                <Link to="/chapter1-test" className="list-group-item list-group-item-action">Chapter 1 Test/Game</Link>
                            </div>
                        </Accordion.Body>
                        </Accordion>
                        </li>
                        <li class="list-group-item list-group-item-action">
                        <Accordion>
                        <Accordion.Header><div className="fw-bold">Chapter 2: Conditionals & Scope</div></Accordion.Header>
                        <Accordion.Body>
                        <div class="list-group list-group-flush">
                                <Link to="/chapter2-conditionals" className="list-group-item list-group-item-action"> Conditionals</Link>
                                <Link to="/chapter2-logic" className="list-group-item list-group-item-action"> Logical Operators</Link>
                                <Link to="/chapter2-scope" className="list-group-item list-group-item-action">Scope</Link>
                                <Link to="/chapter2-test" className="list-group-item list-group-item-action">Test and Review</Link>
                            </div>
                        </Accordion.Body>
                        </Accordion>
                        </li>
                        <li class="list-group-item list-group-item-action">
                        <Accordion>
                        <Accordion.Header><div className="fw-bold">Chapter 3: Functions</div></Accordion.Header>
                        <Accordion.Body>
                        <div class="list-group list-group-flush">
                                <Link to="/chapter3-functions" className="list-group-item list-group-item-action"> Functions</Link>
                                <Link to="/chapter3-altfunc" className="list-group-item list-group-item-action">Alternate Functions </Link>
                                <Link to="/chapter3-intobj" className="list-group-item list-group-item-action">Intro to Objects</Link>
                                <Link to="/chapter3-test" className="list-group-item list-group-item-action">Recap Test</Link>
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