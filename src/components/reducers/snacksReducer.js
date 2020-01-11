import seld from '../../img/Uber Eats/Restaurant/seld.png'
import gribi from '../../img/Uber Eats/Restaurant/gribi.png'
import semga from '../../img/Uber Eats/Restaurant/semga.png'
import solenia from '../../img/Uber Eats/Restaurant/solenia.png'
import salo from '../../img/Uber Eats/Restaurant/salo.png'
import yazik from '../../img/Uber Eats/Restaurant/yazik.png'



const snacks = {
	snackData: [
		{img: seld, name: 'Сельдь на бородинском хлебе', price: '240 ₽', alt: 'Селёдка'},
		{img: gribi, name: 'Грибы маринованные', price: '300 ₽', alt: 'Грибы'},
		{img: semga, name: 'Малосольная семга', price: '390 ₽', alt: 'Сёмга'},
		{img: solenia, name: 'Соленья ассорти', price: '320 ₽', alt: 'Соленья'},
		{img: salo, name: 'Сало домашнее с горчицей', price: '320 ₽', alt: 'Сало'},
		{img: yazik, name: 'Язык говяжий с хреном', price: '350 ₽', alt: 'Язык говяжий'},
	]
}

const snacksReducer= (state = snacks,action)=>{
    
    return state;

}
export default snacksReducer;