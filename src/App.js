import React, {Component} from 'react'
import './App.css'
import Restaurants from './components/Restaurants/Restaurants.js'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar.js'
import Footer from './components/Footer/Footer.js'
import Menu from './components/Menu/Menu.js'
import Basket from './components/Basket/Basket.js'
import FAQ from './components/FAQ/FAQ.js'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />        
        <Switch>
          <Route exact path="/" component={Restaurants}/>
          <Route exact path="/menu/:id" component={Menu}/>
          <Route exact path="/basket" component={Basket}/>
          <Route exact path="/faq" component={FAQ}/>
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}



export default App;
