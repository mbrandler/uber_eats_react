import React, {Component} from 'react'
import './App.css'
import Restaurants from './components/restaurants/restaurants.js'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Navbar from './components/navbar/navbar.js'
import Footer from './components/footer/footer.js'
import Menu from './components/menu/menu.js'
import Basket from './components/basket/basket.js'
import PopUp from './components/popup/popup.js'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <PopUp />
        <Navbar />
        <Switch>
          <Route exact path="/" component={Restaurants}/>
          <Route exact path="/menu/:id" component={Menu}/>
          <Route exact path="/basket" component={Basket}/>
          <Route exact path="/uber_eats_react/" component={Restaurants} /> {/*для github.io*/}
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
