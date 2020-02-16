import React, {Component} from 'react'
import classes from './Menu.module.css'
import Snacks from './Snacks.js'
import { connect } from 'react-redux'
import { ToastProvider } from 'react-toast-notifications';


class Menu extends Component {
  render() {

    const restaurantID = this.props.location.pathname.replace('/menu/', '')

    const menu = this.props.menu.filter(item => item.restaurant === restaurantID)
    const restaurant = this.props.restaurant.find(item => item.id === restaurantID)

    return (
        <ToastProvider autoDismissTimeout={2000}>
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
                        <div className={classes.filter_items}>
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
        </ToastProvider>
    );
  }
}

const mapStateToProps = (state) => {
return {
    menu: state.snacksReducer.snackData,
    restaurant: state.restaurantReducer.restaurantData
    }
}

export default connect(mapStateToProps) (Menu)
