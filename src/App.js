import NavBar from "./components/NavBar/navbar";
import Home from "./components/Home/home";
import Projects from "./components/Projects/projects";
import Contact from "./components/Contact/contact";

function App() {
  return (
    <div className="App">
      <NavBar />
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <Home />
      <br></br>
      <hr></hr>
      <br></br>
      <Projects />
      <br></br>
      <hr></hr>
      <br></br>
      <Contact />
      <br></br>
    </div>
  );
}

export default App;
