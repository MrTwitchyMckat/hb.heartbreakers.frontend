import React from "react";
//import main css
import "./App.scss";
//Import components
import Nav from "./components/nav/nav";
import DrawerNav from "./components/nav/drawer-nav";
import Header from "./components/header/header";
import CTABoxes from "./components/cta-box/cta-boxes";
import Lookbook from "./components/lookbook/lookbook";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="App">
      <Nav />
      <DrawerNav />
      <Header />
      <CTABoxes />
      <Lookbook />
      <Footer />
    </div>
  );
}

export default App;
