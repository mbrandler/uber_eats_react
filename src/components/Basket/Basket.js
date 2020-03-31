import React from 'react'
import classes from './Basket.module.css'
import {connect} from 'react-redux'
import {addToCart, subFromCart, removeItem} from '../actions/cartActions.js'
import plus from '../../img/plus.svg'
import minus from '../../img/dash.svg'
import delete_btn from '../../img/x.svg'
import {ToastProvider, useToasts} from 'react-toast-notifications';


const Basket = props => (

    <ToastProvider autoDismissTimeout={2000}>
        <BasketItems items={props}/>
    </ToastProvider>
)


const BasketItems = props => {
    props = props.items  //  переназначила пропс
    const {addToast} = useToasts()
    console.log('12344', props)

    const handleClick = (id) => {
        props.addToCart(id);
        addToast('Добавлено в корзину 1 шт: ' + props.snacks.find(item => id === item.id).name, {
            appearance: 'success',
            autoDismiss: true,
        })
    }

    const handleRemove = (id) => {
        props.removeItem(id);
        addToast('Удалено из корзины: ' + props.snacks.find(item => id === item.id).name, {
            appearance: 'error',
            autoDismiss: true,
        })
    }

    const handleSubtractQuantity = (id) => {
        props.subFromCart(id);
        addToast('Удалено из корзины 1 шт: ' + props.snacks.find(item => id === item.id).name, {
            appearance: 'warning',
            autoDismiss: true,
        })
    }

    const addedSnacks = props.snacks.length ?
        (
            props.snacks.map(({name, id, img, quantity, price}) => {
                return (
                    <div key={id}>
                        <div className='row'>

                            <div className='col-lg-1 col-md-1'>
                                <div className={classes.padding_top_40}>
                                    <img src={delete_btn} title="Удалить" alt='Удалить из корзины' onClick={() => {
                                        handleRemove(id)
                                    }}/>
                                </div>
                            </div>

                            <div className='col-lg-4 col-md-4'>
                                <div className={classes.centred}>
                                    <img src={img} alt='Фото'/>
                                </div>
                            </div>

                            <div className='col-lg-3 col-md-3'>
                                <div className={classes.padding_top_40}>
                                    {name}
                                </div>
                            </div>

                            <div className='col-lg-2 col-md-2'>
                                <div className={classes.padding_top_40}>
                                    <img src={plus} alt="" width="32" height="32" title="Добавить" onClick={() => {
                                        handleClick(id)
                                    }}/>
                                    {quantity}
                                    <img src={minus} alt="" width="32" height="32" title="Убавить" onClick={() => {
                                        handleSubtractQuantity(id)
                                    }}/>
                                </div>
                            </div>

                            <div className='col-lg-2 col-md-2'>
                                <div className={classes.padding_top_40}>
                                    {price * quantity} руб.
                                </div>
                            </div>

                        </div>
                        <hr className={classes.gray_hr}/>

                    </div>
                )
            })
        ) :
        (
            <p>Пусто</p>
        )

    return (

        <div className="container">
            <div className={classes.basket2}>
                <h1>Ваш заказ</h1>
                {addedSnacks}
                <h2>Итого: {props.total} руб.</h2>
            </div>
        </div>

    )
}


const mapStateToProps = (state) => {
    return {
        snacks: state.snacksReducer.addedSnacks,
        total: state.snacksReducer.total
    }
}

const mapDispatchToProps = {
    addToCart,
    subFromCart,
    removeItem
}


export default connect(mapStateToProps, mapDispatchToProps)(Basket)
