import NavBar from "./components/NavBar/navbar";
import Home from "./components/Home/home";
import Projects from "./components/Projects/projects";
import Contact from "./components/Contact/contact";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <hr></hr>
      <Projects />
      <hr></hr>
      <Contact />
    </div>
  );
}

export default App;
