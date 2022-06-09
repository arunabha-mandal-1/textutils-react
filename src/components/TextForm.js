import "./TextForm.css";
import React, { useState } from "react";

export default function TextForm(props) {
    const [text, setText] = useState("");
    // console.log(useState("i am", "fuck")); // checking
    const handleOnChange = (event) => {
        // console.log(event);
        setText(event.target.value);
    };
    const handleUpClick = () => {
        setText(text.toUpperCase());
    };
    const handleLowClick = () => {
        setText(text.toLowerCase());
    };
    const handleClearClick = () => {
        setText("");
    };
    const countWords = (string) => {
        let temp = string.trim().split(" ");
        return temp.filter((word) => word !== "").length;
    };
    return (
        <>
            <div className="container">
                <h1>{props.heading}</h1>
                <div className="mb-2">
                    <label htmlFor="myBox"></label>
                    <textarea
                        className="form-control text-300"
                        placeholder="Enter your text here..."
                        id="myBox"
                        value={text}
                        onChange={handleOnChange}
                        height="50"
                    ></textarea>
                </div>
                <button className="btn btn-sm btn-primary my-2" onClick={handleUpClick}>
                    Convert to uppercase
                </button>
                <button className="btn btn-sm btn-primary my-2 ms-2" onClick={handleLowClick}>
                    Convert to lowercase
                </button>
                <button className="btn btn-sm btn-danger my-2 ms-2" onClick={handleClearClick}>
                    Clear
                </button>
            </div>
            <div className="container">
                <h1>Your text summary</h1>
                <p>
                    {countWords(text)} words, {text.trim().length} characters
                </p>
                <p>{0.008 * countWords(text)} minutes read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    );
}
