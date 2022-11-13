import React, { Component } from "react";
//links to different Routes
import { Link } from "react-router-dom";

//all components are classes that extend Component from react
export default class Navbar extends Component {
    
    render() {
        return (
            //nav bar is a bootstrap component that is a horizontal list of links
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                {/* links from react-router-dom */}
                <Link to="/" className="navbar-brand">Exercise Tracker</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/" className="nav-link">Exercises</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/create" className="nav-link">Create Exercise Log</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/user" className="nav-link">Create User</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}