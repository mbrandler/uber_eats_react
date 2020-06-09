import React from 'react'
import classes from './faq.module.css'

const FAQ = () => {
	return (
		<div className={classes.faq}>
			<div className='container'>
				<h2>Привет!</h2>
				<p>Это мой первый учебный проект.</p>
				<p>В данном проекте используются ReactJS, Redux, React Router, Bootstrap. Макет верстки <a href="https://www.figma.com/file/wggTnoDPY4tGDrnwmbJFvQ/Uber-Eats" rel="noopener noreferrer" target="_blank" >здесь</a>.</p>
				<p>Приложение позволяет осуществлять поиск по ресторанам, смотреть меню ресторанов и добавлять заказы в корзину. На данный момент меню есть только у первых двух ресторанов. Рестораны и меню находятся в двух разных редьюсерах, соединенных в один.</p>
				<p>Здесь можно ознакомиться с <a href="https://github.com/mbrandler/uber_eats_react" rel="noopener noreferrer" target="_blank">репозиторием проекта</a>.</p>
				<p>А здесь можно посмотреть <a href="https://hh.ru/resume/61e415a1ff0750dc180039ed1f704132535a71" rel="noopener noreferrer" target="_blank">резюме</a>.</p>
				<p>Со мной можно связаться через телеграм <a href="https://t.me/m_brandler" rel="noopener noreferrer" target="_blank">m_brandler</a>.</p>
				<p>Чтобы продолжить работу с приложением, нажмите на <strong>лого UberEats</strong>, чтобы вернуться на эту страницу, перейдите в раздел <strong>FAQ</strong> внизу страницы.</p>
				<h6>Спасибо за уделенное время!</h6>
			</div>
		</div>
		)
}

export default FAQ
