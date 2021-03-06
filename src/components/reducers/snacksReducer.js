import item_1 from '../../img/uber-eats/Restaurant/seld.png'
import item_2 from '../../img/uber-eats/Restaurant/gribi.png'
import item_3 from '../../img/uber-eats/Restaurant/semga.png'
import item_4 from '../../img/uber-eats/Restaurant/solenia.png'
import item_5 from '../../img/uber-eats/Restaurant/salo.png'
import item_6 from '../../img/uber-eats/Restaurant/yazik.png'
import item_7 from '../../img/uber-eats/Restaurant/chikenburger.png'
import item_8 from '../../img/uber-eats/Restaurant/cheeseburger.png'
import item_9 from '../../img/uber-eats/Restaurant/bigmac.png'
import item_10 from '../../img/uber-eats/Restaurant/bigtasty.png'
import item_11 from '../../img/uber-eats/Restaurant/potato.png'
import { ADD_TO_CART, SUB_FROM_CART, REMOVE_ITEM } from '../actions/action-types/cart-actions.js'

const snacks = {
	snackData:
    [
      {id:0 ,img: item_1, name: 'Сельдь на бородинском хлебе', text: 'С яйцом и огурцом', price: 240, alt: 'Селёдка', restaurant: 'pushkin'},
      {id:1 ,img: item_2, name: 'Грибы маринованные', price: 300, alt: 'Грибы', restaurant: 'pushkin'},
      {id:2 ,img: item_3, name: 'Малосольная семга', price: 390, alt: 'Сёмга', restaurant: 'pushkin'},
      {id:3 ,img: item_4, name: 'Соленья ассорти', price: 320, alt: 'Соленья', restaurant: 'pushkin'},
      {id:4 ,img: item_5, name: 'Сало домашнее с горчицей', price: 320, alt: 'Сало', restaurant: 'pushkin'},
      {id:5 ,img: item_6, name: 'Язык говяжий с хреном', price: 350, alt: 'Язык говяжий', restaurant: 'pushkin'},
      {id:6 ,img: item_7, name: 'Чикенбургер', text: 'С яйцом и огурцом', price: 50, alt: 'Чикенбургер', restaurant: 'mcdonalds'},
      {id:7 ,img: item_8, name: 'Чизбургер', text: 'С яйцом и огурцом', price: 50, alt: 'Чизбургер', restaurant: 'mcdonalds'},
      {id:8 ,img: item_9, name: 'Биг Мак', text: 'С яйцом и огурцом', price: 160, alt: 'Биг Мак', restaurant: 'mcdonalds'},
      {id:9 ,img: item_10, name: 'Биг Тейсти', text: 'С яйцом и огурцом', price: 190, alt: 'Биг Тейсти', restaurant: 'mcdonalds'},
      {id:10 ,img: item_11, name: 'Картофель по-деревенски', text: 'С яйцом и огурцом', price: 70, alt: 'Картофель по-деревенски', restaurant: 'mcdonalds'},
    ],
	addedSnacks: [],
	total: 0
};

const snacksReducer= (state = snacks, action) => {

  if(action.type === ADD_TO_CART){

    let addedSnack = state.snackData.find(snack => snack.id === action.id);
    let existed_snack = state.addedSnacks.find(snack => action.id === snack.id);

    if(existed_snack) {
      addedSnack.quantity += 1;
      return{
        ...state,
        total: state.total + addedSnack.price
      }
  	}
    else{
      addedSnack.quantity = 1;

      let newTotal = state.total + addedSnack.price;

      return{
        ...state,
        addedSnacks: [...state.addedSnacks, addedSnack],
        total : newTotal
      }
    }
  }

  if(action.type === SUB_FROM_CART) {

  	let addedSnack = state.snackData.find(snack => snack.id === action.id);

    if(addedSnack.quantity === 1){

      let new_snacks = state.addedSnacks.filter(snack => snack.id !== action.id);
      let newTotal = state.total - addedSnack.price;

      return{
        ...state,
        addedSnacks: new_snacks,
        total: newTotal
      }
    } else {
        addedSnack.quantity -= 1;
        let newTotal = state.total - addedSnack.price;
      return{
        ...state,
        total: newTotal
      }
    }
  }

  if(action.type === REMOVE_ITEM) {

    let itemToRemove = state.snackData.find(snack=> action.id === snack.id);
    let new_items = state.addedSnacks.filter(snack=> action.id !== snack.id);
    let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity );

    return{
      ...state,
      addedSnacks: new_items,
      total: newTotal
    }
  }
  else{
    return state
  }
};

export default snacksReducer;
