import React from 'react';

const BurgersItem = ({details}) => {
    const {image, name, price, desc, status} = details;
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
                <button className="buttonOrder">Заказать</button>
            </div>
        </li>
    );
};

export default BurgersItem;