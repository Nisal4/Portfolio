import NavBar from "./components/NavBar/navbar";
import Home from "./components/Home/home";
import Projects from "./components/projects/projects";

function App() {
  return (
    <div className="App">
      <NavBar />
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <Home />
      <br></br>
      <hr></hr>
      <br></br>
      <Projects />
    </div>
  );
}

export default App;
