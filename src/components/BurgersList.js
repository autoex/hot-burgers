import React from 'react';
import BurgersItem from "./BurgersItem";

const BurgersList = ({burgers}) => {

    return (
        <div>
            {Object.keys(burgers).map(burger=><BurgersItem key={burger} details={burgers[burger]}/>)}
        </div>   );
};

export default BurgersList;