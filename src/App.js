import React, {useEffect} from 'react';
import { BrowserRouter, Form } from 'react-router-dom';
import "aos/dist/aos.css"
import NavBar from './section/NavBar';
import Home from './section/Home';
import './App.css';
import AboutUs from './section/AboutUs';
import Work from './section/Work';
import ContactForm from './section/ContactForm';
import Footer from './section/Footer';
import Aos from 'aos';
import "aos/dist/aos.css"

const App = () => {

  useEffect(()=>{
    Aos.init({
      duration: 700,
      delay: 100,
      easing: "ease-in-out"
    })
  },[])

  return (
    <BrowserRouter>
    <NavBar/>
    <Home/>
    <AboutUs/>
    <Work/>
    <ContactForm/>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
