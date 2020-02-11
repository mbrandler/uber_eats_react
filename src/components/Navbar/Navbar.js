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

					<div className="col-lg-2  col-md-2  col-sm-1">
						<div className={classes.logo}>
							<Link to="/"><img src={logo} alt='logo'></img></Link>
						</div>
					</div>

					<div className="col-lg-2 offset-lg-8 col-md-3 offset-md-2 col-sm-2">
						<div className='row'>
								
								<div className='col-6 col-sm-0'>	
									<button className={classes.sign_in}>Войти</button>
								</div>
								
								<div className='col-6'>	
									<Link to="/basket"><img title="Корзина" className={classes.basket} src={basket} alt='basket'/></Link>
								</div>
							  
						</div>
					</div>

				</div>
		  </div>
	  </div>

		)
}

export default Navbar