import React from "react";
import About  from "./components/About";
import Header from "./components/Header";
import Home from "./components/Home"
import SkillSet from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact"
function App() {
  return (
    <>
      <Header />
      <Home />  
      <About />
      <SkillSet />
      <Portfolio />
      <Contact/>
      
    </>
  )
}

export default App;
