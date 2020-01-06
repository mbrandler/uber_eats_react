import React from 'react'
import classes from './Language.module.css'
import world from '../../img/world.svg'
import arrow from '../../img/Restaurant/if_icon-ios7-arrow-back_211686.svg'


const Language = () => {
	return (
			<div className={classes.language}>
				<img src={world} className={classes.world}/>
				<p>Русский</p>
				<img src={arrow} className={classes.arrow}/>
			</div>
		)
}


export default Language