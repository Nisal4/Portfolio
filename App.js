import NavBar from "./src/components/NavBar/navbar";
import Home from "./src/components/Home/home";
import Projects from "./src/components/Projects/projects";
import Contact from "./src/components/Contact/contact";

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
