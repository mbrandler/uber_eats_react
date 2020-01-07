import React, {Component} from 'react'
import Restaurants from './components/Restaurants.js'
import './App.css'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar.js'
import Footer from './components/Footer/Footer.js'



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        
        <Switch>
          <Route exact path="/" component={Restaurants}/>
          
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}



export default App;
