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
        // console.log("Uppercase!");
        setText(text.toUpperCase());
    };
    const handleLowClick = () => {
        setText(text.toLowerCase());
    };
    async function handleCopy() { 
        try {
            await navigator.clipboard.writeText(text); // is not working on phone
            // console.log('copied to clipboard');
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    }
    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }
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
                        style={
                            {backgroundColor:props.myMode==='dark'?'#282828':'white',
                            color:props.myMode==='dark'?'white':'black'}
                        }
                    ></textarea>
                </div>
                <button className="btn btn-sm btn-primary my-2" onClick={handleUpClick}>
                    Convert to uppercase
                </button>
                <button className="btn btn-sm btn-primary my-2 ms-2" onClick={handleLowClick}>
                    Convert to lowercase
                </button>
                <button className="btn btn-sm btn-success my-2 ms-2" onClick={handleCopy}>
                    Copy
                </button>
                <button className="btn btn-sm btn-success my-2 ms-2" onClick={handleExtraSpaces}>
                    Remove extra spaces
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
                <p>{text.length===0?"Enter something in the textbox to preview here":text}</p>
            </div>
        </>
    );
}
