import React from 'react';
import './App.css';
import{BrowserRouter,Route,Switch} from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './components/Login'
import Home from './components/Home'
function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar/>
          <Switch>
            <Route path ="/" exact component ={Home}/>
            <Route path ="/login" component ={Login}/>
          </Switch>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
