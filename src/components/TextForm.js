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
        text.length>0 && props.myShowAlert("Converted to uppercase", "success");
    };
    const handleLowClick = () => {
        setText(text.toLowerCase());
        text.length>0 && props.myShowAlert("Converted to lowercase", "success");
    };
    async function handleCopy() { 
        try {
            await navigator.clipboard.writeText(text); // is not working on phone
            props.myShowAlert("Text copied", "success");
            // console.log('copied to clipboard');
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    }
    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.myShowAlert("Extra space removed", "success");
    }
    const handleClearClick = () => {
        setText("");
        props.myShowAlert("Cleared", "success");
    };
    const countWords = (string) => {
        let temp = string.trim().split(" ");
        const totalWords = temp.filter((word) => word !== "").length;
        return totalWords;
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
