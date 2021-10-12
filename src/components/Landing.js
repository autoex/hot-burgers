import React, {Component} from 'react';
import restaurants from "../sample-restaurants";

class Landing extends Component {
    render() {
        return (<>
                <div className='restaurant_select'>
                    <div className='restaurant_select_top'>
                        <div className='restaurant_select_top-header font-effect-outline'>Выбери ресторан</div>
                        <div className="arrow_picker">
                            <div className="arrow_picker-up"></div>
                            <div className="arrow_picker-down"></div>
                        </div>
                    </div>
                    <div className="restaurant_select_bottom">
                        <ul>
                            {restaurants.map(rest=><li key={rest.id}>{rest.title}</li>)}
                        </ul>
                    </div>
                    <button>Перейти в ресторан</button>
                </div>
            </>
        );
    }
}

export default Landing;