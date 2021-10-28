import React from 'react';
import Shipment from "./Shipment";

class Order extends React.Component {
    renderOrder = (item) => {
        const burger = this.props.burgers[item];
        const count = this.props.order[item];
        const isAvailable = burger && burger.status === 'available';
        if(!burger) return;
        if (!isAvailable) return <li key={item} className='unavailable'>`Извените, бургер не доступен`</li>;
        return <li key={item}>
                <span>
                    <span>{count} шт. </span>
                    <span>{burger.name} </span>
                    <span>{burger.price * count} ₽</span>
                    <button onClick={()=>this.props.deleteFromOrder(item)} className='cancelItem'>&times; </button>
                </span></li>
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
                <ul className='order'>
                    {orderIds.map(this.renderOrder)}
                </ul>
                {totalCost > 0 ?
                    <Shipment totalCost={totalCost}/>
                    :
                    (<div className='nothingSelected'>Выберите блюда и добавте к заказу</div> )  }
            </div>
        )
    }
}

export default Order;