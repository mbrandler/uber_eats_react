import React, {Component} from 'react'
import classes from './Menu.module.css'
import Name from './Name.js'
import Snacks from './Snacks.js'
import { connect } from 'react-redux'


class Menu extends Component {
  render() {

    const restaurantID = this.props.location.pathname.replace('/menu/', '')

    const menu = this.props.menu.filter(item => item.restaurant === restaurantID)
    const restaurant = this.props.restaurant.find(item => item.id === restaurantID)

    return (
        <div>
            <div className={classes.name}>
                <img  className={classes.background} src={restaurant.background} alt="restaurant's food" />
                <div className='container'>
                    <div className='col-md-5'>
                        <div className={classes.restaurant_card}>
                        <h1 className={classes.rest_name}>{restaurant.name}</h1>
                        <p className={classes.info}>{restaurant.text}
                            <span className={classes.time}>{restaurant.time}</span>
                        </p>
                    </div>
                    </div>
                </div>
            </div>

            <div className='container'>
                <div className='row'>
                    <div className='col-lg-8 col-md-10'>
                        <div className={classes.filter}>
                            <a href="#Закуски">Закуски</a>
                            <a href="#Салаты">Салаты</a>
                            <a href="#Супы">Супы</a>
                            <a href="#Горячее">Горячие блюда</a>
                            <a href="#Гарниры">Гарниры</a>
                            <a href="#Десерты">Десерты</a>
                        </div>                       
                    </div>
                </div>
            </div>

            <hr className={classes.menu_line}/>

            <div className='container'>
                <h1 className={classes.snacks}>Закуски</h1>
                <Snacks snackData={menu}/>
            </div>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
return {
    menu: state.snacksReducer.snackData,
    restaurant: state.restaurantReducer.restaurantData  // временно захардкодила только "пушкин"
    }
}

export default connect(mapStateToProps) (Menu)
