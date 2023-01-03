import React from "react";
import "./MyInput.css";
const MyInput: React.FunctionComponent<{
    className: string;
    placeholder: string;
}> = ({ className, placeholder, ...props }) => {
    return (
        <div className="divInput">
            <input
                {...props}
                placeholder={placeholder}
                className={className + " myinput"}
                id="inputInDiv"
            />
            <label htmlFor="inputInDiv" className="lableFromInput">
                ggg
            </label>
        </div>
    );
};

export default MyInput;
