import React from 'react';
import PropTypes from 'prop-types';

const BurgersItem = ({details, addToOrder,id}) => {
    const {image, name, price, desc, status} = details;
    const isAvailable = status === 'available';
    return (
        <li className='menu-burger'>
            <div className="image-container">
                <img src={image} alt={name}/>
            </div>
            <div className="burger-details">
                <h3 className="burger-name">
                    {name}
                    <span className="price">
                    {price}₽
                </span>
                </h3>
                <p>
                    {desc}
                </p>
                <button onClick={()=>addToOrder(id)} className="buttonOrder" disabled={!isAvailable}>{!isAvailable ?  'Временно нет' : 'Заказать'}</button>
            </div>
        </li>
    );
};
BurgersItem.propTypes = {
    details: PropTypes.shape({
        image:PropTypes.string,
        name:PropTypes.string,
        price:PropTypes.number,
        desc:PropTypes.string,
        status:PropTypes.string
    }),
    addToOrder: PropTypes.func,
    id: PropTypes.string
};
export default BurgersItem;