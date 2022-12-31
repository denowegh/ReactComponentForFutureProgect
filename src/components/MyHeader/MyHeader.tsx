import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./MyHeader.module.css";
import classes from "./MyHeader.module.css";
const MyHeader = () => {
    return (
        <div>
            <header>
                <h2>web dev</h2>
                <input type="checkbox" className="switcher" id="menu" />
                <label htmlFor="menu">
                    <FontAwesomeIcon icon={faBars} />
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
                </nav>
                <label htmlFor="menu">
                    <FontAwesomeIcon icon={faTimes} />
                </label>
            </header>
        </div>
    );
};

export default MyHeader;
