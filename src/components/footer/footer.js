import React from 'react'
import { Link } from 'react-router-dom'
import classes from './footer.module.css'
import logo from '../../img/logo.svg'
import Language from './language.js'
import Social from './social.js'
import Gplay from '../../img/stores/en_badge_web_generic-cf6dad406f-2.png'
import AppStore from '../../img/stores/download.svg'
import arrow from '../../img/stores/arrow.svg'

const Footer = () => {
	const topFunction = () => {
		document.body.scrollTop = 0;  //  для сафари
		document.documentElement.scrollTo({top: 0, behavior: "smooth"});  //  для хрома, фаерфокса и эксплорера
	};
	return (
		<div className={classes.footer}>
			<div className='container'>
				<Link to="/"><img className={classes.logo} src={logo} alt='logo' onClick={() => {topFunction()}}/></Link>

				<hr />

				<div className='row'>
					<div className='col-lg-4 col-md-4'>
						<Language />
						<Social />
					</div>

					<div className='col-lg-4 col-md-4'>
						<p>Об UberEats</p>
						<p>Станьте партнёром по доставке</p>
						<p>Станьте партнёром-рестораном</p>
					</div>

					<div className='col-lg-4 col-md-2'>
						<p>Все города</p>
						<p>Цены</p>
						<p>Помощь</p>
						<p>FAQs</p>
					</div>
				</div>

				<hr />

				<div className={classes.badges}>
					<div className='row'>
						<a className={classes.app_store} href="">
							<img src={AppStore} alt='AppStore'/>
						</a>
						<a className={classes.google_play} href="">
							<img src={Gplay} alt='GooglePlay'/>
						</a>
					</div>
				</div>

				<hr />

				<div className={classes.bottom}>
					<p>© 2017 Uber Technologies Inc.</p>
					<p>Обработка персональных данных</p>
					<p>Пользовательское соглашение</p>
					<button className={classes.top_button} onClick={() => {topFunction()}}>
						<img className={classes.arrow} src={arrow} alt='arrow' />
					</button>
				</div>
			</div>
		</div>
	)
};

export default Footer;
