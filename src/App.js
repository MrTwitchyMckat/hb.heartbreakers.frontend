import React from "react";

//import main css
import "./App.scss";

//Import components
import Nav from "./components/nav/nav";
import Header from "./components/header/header";
import CTABoxes from "./components/cta-box/cta-boxes";

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <CTABoxes />
    </div>
  );
}

export default App;
