import React from "react";
import { Link } from "react-router-dom";


const Navigation = () => {
    return (
        <div className="container-fluid bg-white sticky-top ">
         <div className="container ">
        <nav className="navbar navbar-expand-md bg-white navbar-light py-2 py-lg-0">
                <div className="navbar-nav nav-fill">

                    <Link to="./" className="nav-item nav-link active">
                        Home
                    </Link>
                    <Link to="./chapters" className="nav-item nav-link">
                        Chapters
                    </Link>
                    <Link to="./about" className="nav-item nav-link">
                        About
                    </Link>
                    
                </div>
                <div className="border-start ps-4 d-none d-lg-block">
                    <button type="button" className="btn btn-sm p-0">
                        <i className="fa fa-search"></i>
                    </button>
                </div>
        </nav>
           </div>
           </div>
    
    );
};
export default Navigation;