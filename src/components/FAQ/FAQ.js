import React from 'react'
import classes from './FAQ.module.css'

const FAQ = () => {
	return (
		<div className={classes.faq}>
			<div className='container'>
				<h2>Привет!</h2>
				<p>Меня зовут Мария. Это мой учебный проект.</p>
				<p>В данном проекте используются ReactJS, Redux, React Router, Bootstrap. Шаблон верстки был взят <a href="https://www.figma.com/file/8lxQ3PGYTHQsCgTXnEJre8/Uber-Eats?node-id=0%3A1" rel="noopener noreferrer" target="_blank" >отсюда</a>.</p>
				<p>Приложение позволяет смотреть меню ресторанов и добавлять заказы в корзину. На данный момент заполнены только первые два ресторана, остальные используются для демонстрации верстки. Рестораны и меню находятся в двух разных редьюсерах, соединенных в один.</p>
				<p>Здесь можно ознакомиться с <a href="https://github.com/mbrandler/uber_eats_react" rel="noopener noreferrer" target="_blank">репозиторием проекта</a>.</p>
				<p>А здесь можно посмотреть <a href="https://hh.ru/resume/61e415a1ff0750dc180039ed1f704132535a71" rel="noopener noreferrer" target="_blank">резюме</a>.</p>
				<p>Со мной можно связаться через телеграм <a href="https://t.me/m_brandler" rel="noopener noreferrer" target="_blank">m_brandler</a>, буду рада любым отзывам и предложениям.</p>
				<p>Чтобы продолжить работу с приложением, нажмите на <strong>лого UberEats</strong>, чтобы вернуться на эту страницу, перейдите в раздел <strong>FAQ</strong> внизу страницы.</p>
				<h6>Спасибо за уделенное время!</h6>
			</div>
		</div>
		)
}

export default FAQ