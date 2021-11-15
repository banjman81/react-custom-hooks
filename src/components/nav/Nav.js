import React from "react";
import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                Home
                </a>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <Link to="/sign-up" className="nav-link active" aria-current="page">
                    Sign up
                    </Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/sign-in" className="nav-link">
                    Sign in
                    </Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>

);
}

export default Nav;