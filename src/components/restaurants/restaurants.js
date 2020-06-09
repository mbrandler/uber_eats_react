import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import classes from './restaurants.module.css'
import {connect} from 'react-redux'

const Card = props => {
    const topFunction = () => {
        document.body.scrollTop = 0;  //  для сафари
        document.documentElement.scrollTo({top: 0, behavior: "smooth"});  //  для хрома, фаерфокса и эксплорера
    };

    const cards = props.restaurantData.map((card) => {
        return (
            <div className="col-lg-4 col-sm-6 col-xs-12" key={card.id}>
                <Link to={"/menu/" + card.id} className={classes.card_link} onClick={() => {
                    topFunction()
                }}>
                    <div className={classes.card}>

                        <img src={card.img} className="card-img-top" alt={card.alt}/>
                        <div className="card-body">
                            <h5 className={classes.card_title}>{card.name}</h5>
                            <p className={classes.card_text}>{card.text}</p>
                            <p className={classes.card_time}>{card.time}</p>
                        </div>
                    </div>
                </Link>
            </div>
        )
    });
    return <div className='row'>{cards}</div>
};


class Restaurants extends Component {

    state = {
        inputValue: ''
    };

    search(restaurantData, inputValue) {

        if (inputValue === 0) {
            return restaurantData;
        }
        return restaurantData.filter(item => {
            return item.name.toLowerCase().indexOf(inputValue.toLowerCase()) > -1;
        });
    };

    onInputChange = (event) => {
        const inputValue = event.target.value;
        this.setState({inputValue});
    };

    render() {

        const {inputValue} = this.state;
        const {restaurantData} = this.props;
        const visibleRestaurants = this.search(restaurantData, inputValue);

        return (
            <div className='container'>
                <input
                    type="text"
                    className="search-form"
                    placeholder="Поиск по ресторанам и кухням"
                    value={inputValue}
                    onChange={this.onInputChange}
                />
                <h1 className={classes.rest}>Рестораны в Москве</h1>
                <Card restaurantData={visibleRestaurants}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        restaurantData: state.restaurantReducer.restaurantData
    }
};

export default connect(mapStateToProps)(Restaurants);
