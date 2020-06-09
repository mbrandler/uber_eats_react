import React from 'react'
import classes from './language.module.css'
import world from '../../img/world.svg'
import arrow from '../../img/stores/if_icon-ios7-arrow-back_211686.svg'

const Language = () => {
	return (
		<div className={classes.language}>
			<img src={world} alt='world' className={classes.world}/>
			<p>Русский</p>
			<img src={arrow} alt='arrow' className={classes.arrow}/>
		</div>
	)
};

export default Language;
