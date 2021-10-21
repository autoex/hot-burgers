import React from 'react';
import BurgersItem from "./BurgersItem";

const BurgersList = ({burgers, addToOrder}) => {

    return (
        <div>
            {Object.keys(burgers).map(burger=><BurgersItem key={burger} addToOrder={addToOrder} id={burger} details={burgers[burger]}/>)}
        </div>   );
};

export default BurgersList;