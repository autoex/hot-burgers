import React, {Component} from 'react';

class Shipment extends Component {
    render() {
        const total = this.props.totalCost;
        const shipping = total > 0 && total < 350 ? 500 : 99;
        return (
            <div className="total">
                <div className="total_wrap">

                    <div>
                        Доставка: <span
                        className={total > 499 ? 'font-effect-neon total_wrap-cheap' : null}>{shipping}</span>
                        {total < 499 &&
                        <div className="total_wrap-free">Закажите еще на {500 - total} ₽ для доставки за 99 ₽</div>}
                    </div>
                    <div className="total_wrap-final">
                        Итого: {total}

                    </div>
                </div>
            </div>
        );
    }
}

export default Shipment;