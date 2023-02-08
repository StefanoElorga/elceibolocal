import logo from "./logo.svg";
import "./App.css";
import TopBar from "./components/topBar/TopBar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Menu from "./components/menu/Menu";
import Contact from "./components/contact/Contact";
function App() {
  let Component;
  let selected;
  switch (window.location.pathname) {
    case "/":
      Component = <Home />;
      selected = "home";
      break;
    case "/about":
      Component = <About />;
      selected = "about";

      break;
    case "/menu":
      Component = <Menu />;
      selected = "menu";

      break;
    case "/contact":
      Component = <Contact />;
      selected = "contact";

      break;
  }
  return (
    <>
      <TopBar selected={selected} /> {Component}
    </>
  );
}

export default App;
