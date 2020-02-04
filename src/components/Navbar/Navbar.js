import React from 'react'
import { Link } from 'react-router-dom'
import classes from './Navbar.module.css'
import basket from '../../img/Uber Eats/Stores/basket.svg'
import logo from '../../img/Uber Eats/Stores/logo.svg'

const Navbar = () => {
	return (
		<div className={classes.header}>
			<div className="container">
				<div className="row">
					<div className="col-lg-2  col-md-2  col-sm-5 ">
						<div className={classes.logo}>
							<Link to="/"><img src={logo} alt='logo'></img></Link>
						</div>
					</div>

					<div className="col-lg-1 offset-lg-8 col-md-2 offset-md-7 col-sm-4 offset-sm-3">
						{/*<div className='row'>*/}
						<button className={classes.sign_in}>Войти</button>
					</div>
					<div className="col-lg-1 col-md-1 col-sm-0">
						<Link to="/basket"><img className={classes.basket} src={basket} alt='basket'/></Link>
					</div>
				</div>
			</div>
		</div>
		// </div>
		)
}

export default Navbar