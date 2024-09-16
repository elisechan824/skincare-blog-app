import React from "react";
import "./Header.css";
import logo from '../../assets/images/logo.png';

function Header() {
    return <header className="header">
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-transparent">
            <a className="navbar-brand" href="/">
                <img id="logo" src={logo}/>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                <a className="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="/feed">Feed</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/create">Create a Post</a>
                </li>
            </ul>
            </div>
        </nav>
    </header>
}

export default Header;