import React, {Component} from 'react'
import classes from './Menu.module.css'
import Name from './Name.js'
import Snacks from './Snacks.js'
import { connect } from 'react-redux'

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
  
    const menu = this.props.menu
    console.log('menu',  menu)

    const restaurant = this.props.restaurant
    return (
        <div className={classes.menu}>
          <Name />
          <h3>Закуски</h3>
          <Snacks />
        </div>
        
  
    );
  }
}

const mapStateToProps = (state)=>{
return {
    snackData: state.snackData
     }
}

export default connect(mapStateToProps) (Menu)
// export default Menu
