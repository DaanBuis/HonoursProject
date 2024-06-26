import React from "react"
import CardGamePage from "./CardGamePage";
import '../styles/main.css';
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h3 className="text-center">Introductory JavaScript Course</h3>
            <p className="px-4 pt-3">Welcome to this JavaScript course, created to test different interactive elements. Throughout this course, you will be taught different 
                introductory JavaScript concepts and with the use of interactive elements such as Quizzes, Drag and Drop exercises, and Memory Games. The aim of this course 
                is to find how well the interactive elements complement your learning experience, so it is important that when you go through this course you take note of how the interactivity affects your learning experience. 
            </p>

            <p className="px-4 pt-1">You can click <Link to="/chapter1-intro">here</Link> to get started straight away, or you can use the <Link to="/chapters">Chapters</Link> page to navigate to the different topics.</p>
            <p className="px-4 pt-1">If you have any questions or inqueries, please either see the <Link to="/about">about us</Link> page, or email DBUIS201@caledonian.ac.uk</p>
        </div>
    )
}


export default Home;