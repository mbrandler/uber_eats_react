import React from 'react'
import classes from './Social.module.css'
import facebook from '../../img/Stores/ic/24/social/facebook.svg'
import twitter from '../../img/Stores/ic/24/social/twitter.svg'
import instagram from '../../img/Stores/ic/24/social/instagram.svg'



const Social = () => {
	return (
			<div className={classes.social}>
				<p><span style={{color:'#49A144'}}>#</span>UberEats</p>
				<div className={classes.icons}>
					<img src={facebook} />
					<img src={twitter} />
					<img src={instagram} />
				</div>
			</div>
		)
}


export default Social