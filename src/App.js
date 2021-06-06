import React from "react";
import "./App.css";
import {
  Programmer,
  Frontend,
  Backend,
  Fullstack,
} from "./components/inheritance";
import { createProgrammer, createFrontend, createBackend, createFullstack } from "./components/composition";

class App extends React.Component {
  render() {
    console.log("Inheritance");

    const programmer = new Programmer("Programmer");
    programmer.code();

    const frontend = new Frontend("Frontend");
    frontend.code();
    frontend.angular();

    const backend = new Backend("Backend");
    backend.code();
    backend.nodejs();

    const fullstack = new Fullstack("Fullstack");
    fullstack.code();
    fullstack.angular();
    fullstack.nodejs();

    console.log("Composition");

    const programmerComp = createProgrammer("Programmer");
    programmerComp.code();

    const frontendComp = createFrontend("Frontend");
    frontendComp.code();
    frontendComp.angular();
    frontendComp.react();
    frontendComp.vue();

    const backendComp = createBackend("Backend");
    backendComp.code();
    backendComp.nodejs();

    const fullstackComp = createFullstack("Fullstack");
    fullstackComp.code();
    fullstackComp.angular();
    fullstackComp.nodejs();

    return <div className="App"></div>;
  }
}

export default App;
