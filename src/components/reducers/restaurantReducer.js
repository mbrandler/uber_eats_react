import mcd from '../../img/Stores/1-9.png'
import DimSum from '../../img/Stores/1-8.png'
import ДвижОК from '../../img/Stores/1-7.png'
import Ня from '../../img/Stores/1-6.png'
import дзы from '../../img/Stores/дзы.png'
import cinnabon from '../../img/Stores/cinnabon.png'
import Pizz from '../../img/Stores/PIZZELOVE.png'
import Zю from '../../img/Stores/Zю.png'
import bq from '../../img/Stores/bq.png'

const restaurants = {
	restaurantData: [
	  { id: 1, img: mcd, alt: 'Макдоналдс', name: 'Макдоналдс - Газетный', text: '₽₽ • Бургеры', time: '25 - 30 мин'},
	  { id: 2, img: DimSum, alt: 'DimSum & Co', name: 'DimSum & Co - ЦДМ', text: '₽ • Японская • Китайская • Азиатская', time: '40 - 50 мин' },
	  { id: 3, img: ДвижОК, alt: 'ДвижОК', name: 'ДвижОК — Манежная', text: '₽ • Американская • Европейская', time: '35 - 45 мин' },
	  { id: 4, img: Ня, alt: 'Ня', name: 'НЯ - NHA', text: '₽₽ • Вьетнамская', time: '30 - 40 мин' },
	  { id: 5, img: дзы, alt: 'Точка Дзы', name: 'Точка Дзы — Цветной', text: '₽₽ • Вьетнамская', time: '40 - 50 мин' },
	  { id: 6, img: cinnabon, alt: 'Cinnabon', name: 'Cinnabon', text: '₽ • Выпечка • Десерты • Капкейки', time: '25 - 35 мин' },
	  { id: 7, img: Pizz, alt: 'PIZZELOVE', name: 'PIZZELOVE', text: '₽₽ • Пицца', time: '15 - 25 мин' },
	  { id: 8, img: Zю, alt: 'Zю кафе', name: 'Zю кафе — Тверская', text: '₽₽ • Японская', time: '25 - 35 мин' },
	  { id: 9, img: bq, alt: 'Bar BQ', name: 'Bar BQ Cafe — Манежная', text: '₽₽₽ • Европейская', time: '30 - 40 мин' },
	  { id: 10, img: bq, alt: 'Pushkin', name: 'Ресторан Пушкин', text: '₽₽₽ • Русская', time: '30 - 40 мин' },

	],
}

const restaurantReducer= (state = restaurants,action)=>{
    
    return state;

}

export default restaurantReducer;