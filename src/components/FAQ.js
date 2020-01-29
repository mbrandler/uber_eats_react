import React from 'react'
import classes from './FAQ.module.css'

const FAQ = () => {
	return (
		<div className={classes.faq}>
			<div className='container'>
				<h1>Здравствуйте!</h1>
				<h6>Меня зовут Мария</h6>
				<p>Это мой первый учебный проект в области разработки сайтов.</p>
				<p>Здесь я постаралась применить полученные мной знания по HTML, CSS, Bootstrap, React, Redux и пр.</p>

				<a href="#">Ссылка на githab</a>
			</div>
		</div>
		)
}

export default FAQ