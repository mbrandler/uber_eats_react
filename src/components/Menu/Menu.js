import React, {Component} from 'react'
import classes from './Menu.module.css'
import Name from './Name.js'
import Snacks from './Snacks.js'
import { connect } from 'react-redux'

class Menu extends Component {
  render() {

    const restaurantID = this.props.location.pathname.substr(6)
    const menu = this.props.menu.filter(item => item.restaurant === restaurantID)

    console.log('menu',  this.props.menu)
    const restaurant = this.props.restaurant.find(item => item.id === restaurantID)
    return (
        <div>
            <Name nameData={restaurant}/>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-8 col-md-10'>
                        <div className={classes.filter}>
                            <a href="#">Закуски</a>
                            <a href="#">Салаты</a>
                            <a href="#">Супы</a>
                            <a href="#">Горячие блюда</a>
                            <a href="#">Гарниры</a>
                            <a href="#">Десерты</a>
                        </div>                       
                    </div>
                </div>
            </div>

            <hr className={classes.menu_line}/>

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
    menu: state.snacksReducer.snackData,
    restaurant: state.restaurantReducer.restaurantData  // временно захардкодила только "пушкин"
    }
}

export default connect(mapStateToProps) (Menu)
