import React from 'react'
import classes from './Footer.module.css'
import logo from '../../img/logo.svg'
import Language from './Language.js'
import Social from './Social.js'
import Gplay from '../../img/Stores/en_badge_web_generic-cf6dad406f.png'
import AppStore from '../../img/Stores/download.svg'
import arrow from '../../img/Stores/arrow.svg'

const Footer = () => {
	return (
			<div className={classes.footer}>
				<div className='container'>
					<img className={classes.logo} src={logo} alt='logo'/>

					<hr />

					<div className='row'>
						<div className='col-lg-4'>
							<Language />
							<Social />
						</div>
						
						<div className='col-lg-4'>
							<p>Об UberEats</p>
							<p>Станьте партнёром по доставке</p>
							<p>Станьте партнёром-рестораном</p>
						</div>

						<div className='col-lg-4'>
							<p>Все города</p>
							<p>Цены</p>
							<p>Помощь</p>
							<p>FAQs</p>
						</div>
					</div>

						<hr />

						<div className={classes.badges}>
							<div className='row'>
								<img className='col-lg-6' src={AppStore} alt='AppStore'/>
								<img className='col-lg-6' src={Gplay} alt='GooglePlay'/>
							</div>
						</div>

						<hr />

						<div className={classes.bottom}>
							<p>© 2017 Uber Technologies Inc.</p>
							<p>Обработка персональных данных</p>
							<p>Пользовательское соглашение</p>
							<button className={classes.topbutton}>
								<img src={arrow} alt='arrow' />
							</button>
						</div>

					</div>
				</div>
		)
}


export default Footer