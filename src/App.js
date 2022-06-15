import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from 'react'
import Alert from "./components/Alert";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor='black';
      document.body.style.color='white';
      showAlert("Dark mode has been enebled", "success");
    }
    else { 
      setMode('light'); 
      document.body.style.backgroundColor='white';
      document.body.style.color='black';
      showAlert("Light mode has been enebled", "success");
    }
  }
  return (
    // js fragment cuz we can only return one tag
    <>
      <Navbar title="TextUtils" aboutText="About textutils" myMode={mode} handleMode={toggleMode} />
      <Alert alert={alert}/>
      {/* <Navbar/> */}
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze" myMode={mode} myShowAlert={showAlert}/>
      </div>

      {/* <div className="container my-3">
        <About/>
      </div> */}
    </>
  );
}

export default App;
