import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./MyHeader.css";
const MyHeader = () => {
    return (
        <div className="divHeader">
            <header>
                <h2>web dev</h2>
                <input type="checkbox" className="switcher" id="menu" />
                <label className="open" htmlFor="menu">
                    <FontAwesomeIcon className="symbol" icon={faBars} />
                </label>
                <nav>
                    <ul>
                        <li>
                            <a href="#">Someone 1</a>
                        </li>
                        <li>
                            <a href="#">Someone 2</a>
                        </li>
                        <li>
                            <a href="#">Someone 3</a>
                        </li>
                        <li>
                            <a href="#">Someone 4</a>
                        </li>
                        <li>
                            <a href="#">Someone 5</a>
                        </li>
                    </ul>
                    <label className="close" htmlFor="menu">
                        <FontAwesomeIcon className="symbol" icon={faTimes} />
                    </label>
                </nav>
            </header>
        </div>
    );
};

export default MyHeader;
