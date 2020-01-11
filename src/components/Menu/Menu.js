import React, {Component} from 'react'
import classes from './Menu.module.css'
import Name from './Name.js'
import Snacks from './Snacks.js'
import { connect } from 'react-redux'

class Menu extends Component {

  render() {

    console.log('menu',  this.props)
    return (
        <div className='container'>
          <div className={classes.menu}>
            <Name />
            <h3>Закуски</h3>
            <Snacks />
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