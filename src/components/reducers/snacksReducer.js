import seld from '../../img/Uber Eats/Restaurant/seld.png'
import gribi from '../../img/Uber Eats/Restaurant/gribi.png'
import semga from '../../img/Uber Eats/Restaurant/semga.png'
import solenia from '../../img/Uber Eats/Restaurant/solenia.png'
import salo from '../../img/Uber Eats/Restaurant/salo.png'
import yazik from '../../img/Uber Eats/Restaurant/yazik.png'
import { ADD_TO_CART, SUB_FROM_CART, REMOVE_ITEM } from '../actions/action-types/cart-actions.js'

const snacks = {
	snackData: {
		pushkin: [
			{id:0 ,img: seld, name: 'Сельдь на бородинском хлебе', text: 'С яйцом и огурцом', price: 240, alt: 'Селёдка'},
			{id:1 ,img: gribi, name: 'Грибы маринованные', price: 300, alt: 'Грибы'},
			{id:2 ,img: semga, name: 'Малосольная семга', price: 390, alt: 'Сёмга'},
			{id:3 ,img: solenia, name: 'Соленья ассорти', price: 320, alt: 'Соленья'},
			{id:4 ,img: salo, name: 'Сало домашнее с горчицей', price: 320, alt: 'Сало'},
			{id:5 ,img: yazik, name: 'Язык говяжий с хреном', price: 350, alt: 'Язык говяжий'},
		]
	}	,
	addedSnacks: [],
	total: 0
}

const snacksReducer= (state = snacks,action)=>{
    
  if(action.type === ADD_TO_CART){	
    let addedSnack = state.snackData['pushkin'].find(snack => snack.id === action.id)  // временно захардкодила меню только одного ресторана
    let existed_snack = state.addedSnacks.find(snack => action.id === snack.id)
    if(existed_snack)
    {
      addedSnack.quantity += 1 
       return{
          ...state,
          total: state.total + addedSnack.price 
            }
  	}
    else{
      addedSnack.quantity = 1;

      let newTotal = state.total + addedSnack.price 
      
      return{
          ...state,
          addedSnacks: [...state.addedSnacks, addedSnack],
          total : newTotal
      }
    }
  }
  
  if(action.type === SUB_FROM_CART) {
  	let addedSnack = state.snackData['pushkin'].find(snack => snack.id === action.id) 
    if(addedSnack.quantity === 1){
        let new_snacks = state.addedSnacks.filter(snack => snack.id !== action.id)
        let newTotal = state.total - addedSnack.price
        return{
            ...state,
            addedSnacks: new_snacks,
            total: newTotal
        }
     }
    else {
      addedSnack.quantity -= 1
      let newTotal = state.total - addedSnack.price
      return{
          ...state,
          total: newTotal
      }
  	}
		}

	if(action.type === REMOVE_ITEM) {
	  let itemToRemove = state.addedSnacks.find(snack=> action.id === snack.id)
    let new_items = state.addedItems.filter(snack=> action.id !== snack.id)
    let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
    return{
      ...state,
      addedSnacks: new_items,
      total: newTotal
    } 
	}
  else{
      return state
  }

}
export default snacksReducer;
