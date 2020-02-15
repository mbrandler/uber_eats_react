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

      const topFunction = () => {
    document.body.scrollTop = 0;  //  для сафари
    document.documentElement.scrollTo({top: 0, behavior: "smooth"});  //  для хрома, фаерфокса и эксплорера
  }

    return (
      <BrowserRouter>
        <Navbar />        
        <Switch>
          <Route exact path="/" component={Restaurants} onClick={() => {topFunction()}}/>
          <Route exact path="/menu/:id" component={Menu} onClick={() => {topFunction()}}/>
          <Route exact path="/basket" component={Basket} onClick={() => {topFunction()}}/>
          <Route exact path="/faq" component={FAQ} onClick={() => {topFunction()}}/>
          <Route exact path="/uber_eats_react/" component={Restaurants} />   {/*для github.io*/}
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}



export default App;
