import React, {Component} from 'react'
import Restaurants from './components/Restaurants.js'
import './App.css'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar.js'
import Footer from './components/Footer/Footer.js'
import Menu from './components/Menu/Menu.js'
import Basket from './components/Basket/Basket.js'



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />

        {/*<Menu />*/}
        
        <Switch>
          <Route exact path="/" component={Restaurants}/>
          <Route exact path="/menu" component={Menu}/>
          <Route exact parh="/basket" component={Basket}/>
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}



export default App;
