import React from 'react'
import { Link } from 'react-router-dom'
import classes from './Navbar.module.css'
import basket from '../../img/Uber Eats/Stores/basket.svg'
import logo from '../../img/Uber Eats/Stores/logo.svg'

const Navbar = () => {

	const topFunction = () => {
		document.body.scrollTop = 0;  //  для сафари
		document.documentElement.scrollTo({top: 0, behavior: "smooth"});  //  для хрома, фаерфокса и эксплорера
	}

	return (
		<div className={classes.header}>
			<div className="container">
				<div className="row">
					<div className={classes.logo}>
						<Link to="/"><img src={logo} alt='logo' onClick={() => {topFunction()}}></img></Link>
					</div>

					<div className={classes.navbar_items}>		
						<button className={classes.sign_in}>Войти</button>
						<Link to="/basket"><img title="Корзина" className={classes.basket} src={basket} alt='basket' onClick={() => {topFunction()}} /></Link>	  
					</div>

				</div>
		  </div>
	  </div>

		)
}

export default Navbar