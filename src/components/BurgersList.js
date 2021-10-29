import React from 'react';
import BurgersItem from "./BurgersItem";
import PropTypes from 'prop-types';

const BurgersList = ({burgers, addToOrder}) => {

    return (
        <div>
            {Object.keys(burgers).map(burger=><BurgersItem key={burger} addToOrder={addToOrder} id={burger} details={burgers[burger]}/>)}
        </div>   );
};
BurgersList.propTypes = {
    burgers: PropTypes.shape({
        image:PropTypes.string,
        name:PropTypes.string,
        price:PropTypes.number,
        desc:PropTypes.string,
        status:PropTypes.string
    }),
    addToOrder: PropTypes.func
};
export default BurgersList;