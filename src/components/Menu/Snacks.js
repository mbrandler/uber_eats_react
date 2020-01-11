import React from 'react'

import { connect } from 'react-redux'
import classes from './Snacks.module.css'

import seld from '../../img/Uber Eats/Restaurant/seld.png'
import gribi from '../../img/Uber Eats/Restaurant/gribi.png'
import semga from '../../img/Uber Eats/Restaurant/semga.png'
import solenia from '../../img/Uber Eats/Restaurant/solenia.png'
import salo from '../../img/Uber Eats/Restaurant/salo.png'
import yazik from '../../img/Uber Eats/Restaurant/yazik.png'


const Snacks = props => {
	const snack1 = {
	snackData: [
		{img: seld, name: 'Сельдь на бородинском хлебе', price: '240 ₽', alt: 'Селёдка'},
		{img: gribi, name: 'Грибы маринованные', price: '300 ₽', alt: 'Грибы'},
		{img: semga, name: 'Малосольная семга', price: '390 ₽', alt: 'Сёмга'},
		{img: solenia, name: 'Соленья ассорти', price: '320 ₽', alt: 'Соленья'},
		{img: salo, name: 'Сало домашнее с горчицей', price: '320 ₽', alt: 'Сало'},
		{img: yazik, name: 'Язык говяжий с хреном', price: '350 ₽', alt: 'Язык говяжий'},
	]
}
	console.log(props)
	const snacks = snack1.snackData.map((snack, index) => {

		return (
			<div className='col-lg-6'>
				<div className="card mb-3" key={index}>
				  <div className="row no-gutters">
				    
				    <div className="col-md-8">
				      <div className="card-body">
				        <h5 className="card-title">{snack.name}</h5>
				        <p className="card-text">{snack.text}</p>
				        <p className="card-text">{snack.price}</p>
				      </div>
				    </div>

				    <div className="col-md-4" >
				      <img src={snack.img} className="card-img" alt={snack.alt} />
				    </div>
				    
				  </div>
				</div>
			</div>
		)
	})

		return <div className='row'>{snacks}</div>
}

// const mapStateToProps1 = (state)=>{
// return {
//     snackData: state.snackData
//      }
// }

// export default connect(mapStateToProps1) (Snacks)
export default Snacks


