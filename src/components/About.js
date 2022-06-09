import React, { useState } from 'react';

export default function About() {
    const [myStyle, setMystyle] = useState({
        color: 'black',
        backgroundColor: 'white',
        padding: '10px',
        marginBottom: '10px',
        borderRadius: '7px'
    })
    const [buttonText, setButtonText] = useState("Dark Mode");
    const [buttonStyle, setButtonStyle] = useState({
        color: 'white',
        backgroundColor: 'black'
    });

    const changeMode = () => {
        if (myStyle.color === 'white') {
            setMystyle({
                color: 'black',
                backgroundColor: 'white',
                padding: '10px',
                marginBottom: '10px',
                borderRadius: '7px'
            })
            setButtonText("Dark Mode");
            setButtonStyle({
                color: 'white',
                backgroundColor: 'black'
            })
        } else {
            setMystyle({
                color: 'white',
                backgroundColor: 'black',
                padding: '10px',
                marginBottom: '10px',
                border: '3px solid red',
                borderRadius: '7px'
            })
            setButtonText("Light Mode");
            setButtonStyle({
                color: 'black',
                backgroundColor: 'white'
            })
        }
    }
    return (
        <>
            <div className='container' style={myStyle}>
                <h1 className='my-3'>About Us</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam reprehenderit animi optio distinctio eligendi recusandae mollitia eum autem architecto porro, numquam alias ullam vel ducimus provident. Ullam omnis vel quaerat numquam id rerum laudantium, ipsam odit doloremque. Sapiente, earum eius!</p>
            </div>
            <div className="container">
                <button type="button" onClick={changeMode} className="btn btn-dark" style={buttonStyle}>{buttonText}</button>
            </div>
        </>
    )
}
