import React, {Component} from 'react'
import classes from './Menu.module.css'
import Name from './Name.js'
import Snacks from './Snacks.js'
import { connect } from 'react-redux'

import seld from '../../img/Uber Eats/Restaurant/seld.png'
import gribi from '../../img/Uber Eats/Restaurant/gribi.png'
import semga from '../../img/Uber Eats/Restaurant/semga.png'
import solenia from '../../img/Uber Eats/Restaurant/solenia.png'
import salo from '../../img/Uber Eats/Restaurant/salo.png'
import yazik from '../../img/Uber Eats/Restaurant/yazik.png'

import pushkin from '../../img/Uber Eats/Restaurant/pushkin.png'

class Menu extends Component {

  render() {

    console.log('menu',  this.props)

    
    // {img: pushkin, text: 'Макдоналдс'},
    // {img: pushkin, text: 'DimSum & Co'},
    // {img: pushkin, text: 'ДвижОК'},
    // {img: pushkin, text: 'Ня'},
    // {img: pushkin, text: 'Cinnabon'},
    // {img: pushkin, text: 'PIZZELOVE'},
    // {img: pushkin, text: 'Zю кафе'},
    // {img: pushkin, text: 'Bar BQ'},
  
    console.log('foobar' , this.props )

    const menu = this.props.menu

    // const restaurant = {img: pushkin, text: 'Трактир «Пушкин»'}
    const restaurant = this.props.restaurant
    return (
        <div>
            <Name nameData={restaurant}/>
            <div className='container'>
                <div className={classes.menu}>
                    <h3>Закуски</h3>
                    <Snacks snackData={menu}/>
                </div>
            </div>
        </div>
      
    );
  }
}

const mapStateToProps = (state)=>{
return {
    menu: state.snacksReducer.snackData[10],
    restaurant: state.restaurantReducer.restaurantData[9]
    }
}

export default connect(mapStateToProps) (Menu)
// export default Menu

