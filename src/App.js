import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    // js fragment cuz we can only return one tag
    <>
      <Navbar title="TextUtils" aboutText="About textutils" />
      {/* <Navbar/> */}
      <div className="container my-3">
        <TextForm heading = "Enter the text to analyze"/>
      </div>

      {/* <div className="container my-3">
        <About/>
      </div> */}
    </>
  );
}

export default App;
