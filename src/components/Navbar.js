import React from "react";
import {Link} from "react-router-dom";

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link mx-3"  to="/">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link mx-3" to="/link1">
                                    Link1
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link mx-3" to="/link2">
                                    Link2
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link mx-3" to="/link3">
                                    Link3
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link mx-3" to="/link4">
                                    Link4
                                </Link>
                            </li>
                            
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link mx-3 dropdown-toggle"
                                    href="/"
                                    id="navbarDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li>
                                        <Link className="dropdown-item" to="/action">
                                            Action
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/action2">
                                            Another action
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}
