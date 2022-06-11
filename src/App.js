import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from 'react'


function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor='black';
      document.body.style.color='white';
    }
    else { 
      setMode('light'); 
      document.body.style.backgroundColor='white';
      document.body.style.color='black';
    }
  }
  return (
    // js fragment cuz we can only return one tag
    <>
      <Navbar title="TextUtils" aboutText="About textutils" myMode={mode} handleMode={toggleMode} />
      {/* <Navbar/> */}
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze" myMode={mode}/>
      </div>

      {/* <div className="container my-3">
        <About/>
      </div> */}
    </>
  );
}

export default App;
