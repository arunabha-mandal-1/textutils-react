import React, { useState } from "react";
import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import Diffmode from "./components/Diffmode";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import ReactDOM from "react-dom/client";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      showAlert("Dark mode has been enebled", "success");
      // changing title after some effect/operations=>like: facebook(1) title
      // document.title = "TextUtils - Home(dark)";

      // experiment
      // const flag = setInterval(() => {
      //   document.title = 'TextUtils is amazing.';
      // }, 3000);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light mode has been enebled", "success");
      // document.title = "TextUtils - Home(light)";
    }
  };
  return (
    // js fragment cuz we can only return one tag
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <Navbar
          title="TextUtils"
          aboutText="About textutils"
          myMode={mode}
          handleMode={toggleMode}
        />
        <Alert alert={alert} />
        <Routes>
          <Route
            exact path="/textutils-react/about" // this one is only for github pages
            element={
              <div className="container my-3">
                <About myAboutMode={mode}/>
              </div>
            }
          />
          <Route
            exact path="/textutils-react"
            element={
              <div className="container my-3">
                <TextForm
                  heading="Enter the text to analyze"
                  myMode={mode}
                  myShowAlert={showAlert}
                />
              </div>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
