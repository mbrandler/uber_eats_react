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

    
    // {img: pushkin, text: 'Макдоналдс'},
    // {img: pushkin, text: 'DimSum & Co'},
    // {img: pushkin, text: 'ДвижОК'},
    // {img: pushkin, text: 'Ня'},
    // {img: pushkin, text: 'Cinnabon'},
    // {img: pushkin, text: 'PIZZELOVE'},
    // {img: pushkin, text: 'Zю кафе'},
    // {img: pushkin, text: 'Bar BQ'},
  

    const menu =  [
        {img: seld, name: 'Сельдь на бородинском хлебе', price: '240 ₽', alt: 'Селёдка'},
        {img: gribi, name: 'Грибы маринованные', price: '300 ₽', alt: 'Грибы'},
        {img: semga, name: 'Малосольная семга', price: '390 ₽', alt: 'Сёмга'},
        {img: solenia, name: 'Соленья ассорти', price: '320 ₽', alt: 'Соленья'},
        {img: salo, name: 'Сало домашнее с горчицей', price: '320 ₽', alt: 'Сало'},
        {img: yazik, name: 'Язык говяжий с хреном', price: '350 ₽', alt: 'Язык говяжий'},
      ]

    const restaurant = {img: pushkin, text: 'Трактир «Пушкин»', menu}

    return (
        <div className='container'>
          <div className={classes.menu}>
            <Name nameData={restaurant}/>
            <h3>Закуски</h3>
            <Snacks snackData={restaurant.menu}/>
          </div>
        </div>
    );
  }
}

const mapStateToProps1 = (state)=>{
return {
    snackData: state.snackData
     }
}

export default connect(mapStateToProps1) (Menu)
// export default Menu