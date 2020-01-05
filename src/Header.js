import React from 'react'
import logo from './img/Uber Eats/Restaurant/logo.svg'
import basket from './img/Uber Eats/Restaurant/basket.svg'

const Header = () => {
	return (
			<div className="container">
				<div className="row">
					<div className="col-lg-2 col-md-2 col-sm-2 col-xs-5">
						<div className="logo">
							<img src={logo} />
						</div>
					</div>

					<div className="col-lg-2 col-lg-offset-8 col-sm-3 col-sm-offset-7 col-xs-2 col-xs-offset-5">
						<button className="btn sign-in btn-default">Войти</button>
						<button className="btn btn-outline-light basket"><img src={basket} />
						</button>
					</div>
				</div>
			</div>
		)
}

export default Header