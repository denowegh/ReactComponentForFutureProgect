import React from "react";
import "./MyButtonSkew.css";
const MyButtonSkew: React.FC<{
    children: string;
    className: string;
}> = ({ children, className, ...props }) => {
    return (
        <button {...props} className={className + " myButton"}>
            {children}
        </button>
    );
};

export default MyButtonSkew;
