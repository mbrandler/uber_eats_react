import mcd from '../../img/Stores/1-9.png'
import mcd_bg from '../../img/Uber Eats/Restaurant/mcd_bg.png'
import DimSum from '../../img/Stores/1-8.png'
import ДвижОК from '../../img/Stores/1-7.png'
import Ня from '../../img/Stores/1-6.png'
import дзы from '../../img/Stores/дзы.png'
import cinnabon from '../../img/Stores/cinnabon.png'
import Pizz from '../../img/Stores/PIZZELOVE.png'
import Zю from '../../img/Stores/Zю.png'
import bq from '../../img/Stores/bq.png'
import pushkin from '../../img/Uber Eats/Restaurant/pushkin_2.png'
import pushkin_bg from '../../img/Uber Eats/Restaurant/pushkin.png'

const restaurants = {
	restaurantData: [
	  { id: 'mcdonalds', background: mcd_bg, img: mcd, alt: 'Макдоналдс', name: 'Макдоналдс - Газетный', text: '₽₽ • Бургеры', time: '25 - 30 мин'},
	  { id: 'dimsum', img: DimSum, alt: 'DimSum & Co', name: 'DimSum & Co - ЦДМ', text: '₽ • Японская • Китайская • Азиатская', time: '40 - 50 мин' },
	  { id: 'dvizhok', img: ДвижОК, alt: 'ДвижОК', name: 'ДвижОК — Манежная', text: '₽ • Американская • Европейская', time: '35 - 45 мин' },
	  { id: 'nya', img: Ня, alt: 'Ня', name: 'НЯ - NHA', text: '₽₽ • Вьетнамская', time: '30 - 40 мин' },
	  { id: 'dzi', img: дзы, alt: 'Точка Дзы', name: 'Точка Дзы — Цветной', text: '₽₽ • Вьетнамская', time: '40 - 50 мин' },
	  { id: 'cinnabon', img: cinnabon, alt: 'Cinnabon', name: 'Cinnabon', text: '₽ • Выпечка • Десерты • Капкейки', time: '25 - 35 мин' },
	  { id: 'pizz', img: Pizz, alt: 'PIZZELOVE', name: 'PIZZELOVE', text: '₽₽ • Пицца', time: '15 - 25 мин' },
	  { id: 'zyu', img: Zю, alt: 'Zю кафе', name: 'Zю кафе — Тверская', text: '₽₽ • Японская', time: '25 - 35 мин' },
	  { id: 'bq', img: bq, alt: 'Bar BQ', name: 'Bar BQ Cafe — Манежная', text: '₽₽₽ • Европейская', time: '30 - 40 мин' },
	  { id: 'pushkin', background: pushkin_bg, img: pushkin, alt: 'Pushkin', name: 'Трактир «Пушкин»', text: '₽₽₽ • Русская', time: '30 - 40 мин' },
	],
}

const restaurantReducer= (state = restaurants, action) => {
   return state;
}


export default restaurantReducer;