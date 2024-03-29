import React from "react";


const Navigation = () => {
    return (
        <div className="container-fluid bg-white sticky-top ">
         <div className="container ">
        <nav className="navbar navbar-expand-md bg-white navbar-light py-2 py-lg-0">
                <div className="navbar-nav nav-fill">

                    <a href="./" className="nav-item nav-link active">
                        Home
                    </a>
                    <a href="./chapters" className="nav-item nav-link">
                        Chapters
                    </a>
                    <a href="./about" className="nav-item nav-link">
                        About
                    </a>
                    
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