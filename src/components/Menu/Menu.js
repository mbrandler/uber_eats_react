import React, {Component} from 'react'
import classes from './Menu.module.css'
import Name from './Name.js'
import Snacks from './Snacks.js'
import { connect } from 'react-redux'

class Menu extends Component {

  render() {

    console.log('menu',  this.props)
  
    const menu = this.props.menu

    const restaurant = this.props.restaurant
    return (
        <div>
            <Name nameData={restaurant}/>
            <div className={classes.filter}>
                <div className='container'>
                    <a href="#">Закуски</a>
                    <a href="#">Салаты</a>
                    <a href="#">Супы</a>
                    <a href="#">Горячие блюда</a>
                    <a href="#">Гарниры</a>
                    <a href="#">Десерты</a>
                </div>
            </div>
            <div className='container'>
                <div>
                    <h1 className={classes.snacks}>Закуски</h1>
                    <Snacks snackData={menu}/>
                </div>
            </div>
        </div>
      
    );
  }
}

const mapStateToProps = (state)=>{
return {
    menu: state.snacksReducer.snackData.pushkin,
    restaurant: state.restaurantReducer.restaurantData.find(item => item.id === 'pushkin')  // временно захардкодила только "пушкин"
    }
}

export default connect(mapStateToProps) (Menu)
