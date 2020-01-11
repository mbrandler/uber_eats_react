import React from 'react'
import { connect } from 'react-redux'
import classes from './Snacks.module.css'


const Snacks = props => {

	console.log('snacks',props)
	const snacks = props.snackData.map((snack, index) => {

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


