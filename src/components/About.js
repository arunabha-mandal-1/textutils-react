import React from "react";
// import { useState } from "react";

export default function About(props) {
  // const [myStyle, setMystyle] = useState({
  //     color: 'black',
  //     backgroundColor: 'white',
  //     padding: '10px',
  //     marginBottom: '10px',
  //     borderRadius: '7px'
  // })
  // const [buttonText, setButtonText] = useState("Dark Mode");
  // const [buttonStyle, setButtonStyle] = useState({
  //     color: 'white',
  //     backgroundColor: 'black'
  // });

  // const changeMode = () => {
  //     if (myStyle.color === 'white') {
  //         setMystyle({
  //             color: 'black',
  //             backgroundColor: 'white',
  //             padding: '10px',
  //             marginBottom: '10px',
  //             borderRadius: '7px'
  //         })
  //         setButtonText("Dark Mode");
  //         setButtonStyle({
  //             color: 'white',
  //             backgroundColor: 'black'
  //         })
  //     } else {
  //         setMystyle({
  //             color: 'white',
  //             backgroundColor: 'black',
  //             padding: '10px',
  //             marginBottom: '10px',
  //             border: '3px solid red',
  //             borderRadius: '7px'
  //         })
  //         setButtonText("Light Mode");
  //         setButtonStyle({
  //             color: 'black',
  //             backgroundColor: 'white'
  //         })
  //     }
  // }

  //   const [mode, setMode] = useState(null);
  const styleMode = {
    backgroundColor: props.myAboutMode === "dark" ? "black" : "white",
    color: props.myAboutMode === "dark" ? "white" : "black",
  };
  return (
    <>
      <div
        className="container"
        style={styleMode}
      >
        <h1 className="my-3">About Us</h1>
        <p>
          You can manipulate text the way you want. We provide some importance
          functionalities for daily use.
        </p>
      </div>
      {/* <div className="container">
                <button type="button" onClick={changeMode} className="btn btn-dark" style={buttonStyle}>{buttonText}</button>
            </div> */}
    </>
  );
}
