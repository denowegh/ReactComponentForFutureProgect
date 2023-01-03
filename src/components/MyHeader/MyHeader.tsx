import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./MyHeader.css";
import MyButtonSkew from "../MyButtonSkew/MyButtonSkew";
const MyHeader: React.FunctionComponent<{ className: string }> = ({
    className,
}) => {
    return (
        <div className={className}>
            <header>
                <h2>Nav bar </h2>
                <input type="checkbox" className="switcher" id="menu" />
                <label className="open" htmlFor="menu">
                    <FontAwesomeIcon className="symbol" icon={faBars} />
                </label>
                <nav>
                    <ul>
                        <li>
                            <MyButtonSkew className=" liElement ">
                                Someone 1
                            </MyButtonSkew>
                        </li>
                        <li>
                            <MyButtonSkew className=" liElement ">
                                Someone 1
                            </MyButtonSkew>
                        </li>
                        <li>
                            <MyButtonSkew className=" liElement ">
                                Someone 1
                            </MyButtonSkew>
                        </li>
                        <li>
                            <MyButtonSkew className=" liElement ">
                                Someone 1
                            </MyButtonSkew>
                        </li>
                        <li>
                            <MyButtonSkew className=" liElement ">
                                Someone 1
                            </MyButtonSkew>
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
