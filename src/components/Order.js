import React from 'react';
import Shipment from "./Shipment";
import {CSSTransition, TransitionGroup} from "react-transition-group";

class Order extends React.Component {
    renderOrder = (item) => {
        const burger = this.props.burgers[item];
        const count = this.props.order[item];
        const isAvailable = burger && burger.status === 'available';
        if (!burger) return;
        if (!isAvailable) {
            return <CSSTransition key={item} timeout={500} classNames="order">
                <li key={item} className='unavailable'>`Извените, бургер не доступен`</li>
            </CSSTransition>
        }

        return <CSSTransition key={item} timeout={500} classNames="order">
            <li key={item}>
                <TransitionGroup component={'span'} className={'count'}>
                    <CSSTransition classNames={'count'} key={count} timeout={500}>
                        <span>{count}</span></CSSTransition>
                </TransitionGroup>
                <span>шт. {burger.name}&nbsp;</span>
                <span>{burger.price * count} ₽</span>
                <button onClick={() => this.props.deleteFromOrder(item)} className='cancelItem'>&times; </button>
            </li>
        </CSSTransition>
    };

    render() {
        const orderIds = Object.keys(this.props.order);
        const totalCost = orderIds.reduce((prevTotal, key) => {
            const burger = this.props.burgers[key];
            const count = this.props.order[key];
            const isAvailable = burger && burger.status === 'available';
            if (isAvailable) return prevTotal + burger.price * count;

            return prevTotal;
        }, 0);
        return (
            <div className='order-wrap'>
                <h2>Ваш заказ</h2>
                <TransitionGroup component={'ul'} className='order'>
                    {orderIds.map(this.renderOrder)}
                </TransitionGroup>
                {totalCost > 0 ?
                    <Shipment totalCost={totalCost}/>
                    :
                    (<div className='nothingSelected'>Выберите блюда и добавте к заказу</div>)}
            </div>
        )
    }
}

export default Order;