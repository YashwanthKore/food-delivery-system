import React from 'react';
import './App.css';
import{BrowserRouter,Route,Switch} from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './components/Login'
import Home from './components/Home'
import Logo from './components/Logo'
import Contact from './components/Contact'
import About from './components/About'
import Services from './components/Services'
function App() {
  return (
    <BrowserRouter>
      <div>
        <Logo/>
        <Navbar/>
          <Switch>
            <Route path ="/" exact component ={Home}/>
            <Route path ="/contact" component ={Contact}/>
            <Route path ="/about" component ={About}/>
            <Route path ="/services" component ={Services}/>
            <Route path ="/login" component ={Login}/>
          </Switch>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
