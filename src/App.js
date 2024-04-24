// import logo from './logo.svg';
// import './App.css';

import Header from "./components/header/Header";
import Hero from "./components/header/Hero";
import Card1 from "./components/projects/Card1";
import Middle from "./components/titles/Middle";
import Middle2 from "./components/titles/Middle2";
import Contact from "./components/contact/Contact"
import Footer from "./components/header/Footer";
import About from "./components/about/About";  
import Middle3 from "./components/titles/Middle3";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";

// import AboutApp from "./About Page/AboutApp";

function App() {
  return (
    <div>
      
      <Header />
      <Hero />
      <Middle3 />
      <About />
      <Middle />
      <Card1 />
      <Middle2 />
      <Contact />
      <Footer />
    </div>
  )
}

export default App;
