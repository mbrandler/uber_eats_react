import React from 'react'
import { Link } from 'react-router-dom'
import classes from './Navbar.module.css'
import basket from '../img/Uber Eats/Restaurant/basket.svg'
import logo from '../img/Uber Eats/Restaurant/logo.svg'

const Navbar = () => {
	return (
		<div className={classes.header}>
			<div className="container">
				<div className="row">
					<div className="col-lg-2 col-md-2 col-sm-2 col-xs-5">
						<div className={classes.logo}>
							<Link to="/"><img src={logo} alt='logo'/></Link>
						
						</div>
					</div>

					<div className="col-lg-2 offset-lg-8 col-sm-3 offset-sm-7 col-xs-2 offset-xs-5">
					<div className='row'>
					<div className={classes.sign}>
						<button className="btn sign-in btn-default">Войти</button>
					</div>
					<div className={classes.basket}>
						<button className="btn btn-outline-light basket"><img src={basket} alt='basket'/>
						</button>
					</div>
					</div>
					</div>
				</div>
			</div>
		</div>
		)
}

export default Navbar