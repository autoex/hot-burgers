import React, {useState} from 'react';
import restaurants from "../sample-restaurants";
import PropTypes from 'prop-types';

const Landing =(props)=> {
    const [state, setState] = useState({
        display: false,
        title: '',
        url: ''
    });

    const displayList = () => {
        setState({
            display: !state.display
        })
    };
   const setCurrentRestaurant=(restName, restUrl)=> {


        setState({
            title: restName,
            url: restUrl,
            display: false
        });

    };
    const goToRestaurant =(restUrl)=> {
        props.history.push(`/restaurant/${restUrl}`)
    };


        return (<>
                <div className='restaurant_select'>
                    <div className='restaurant_select_top'>
                        <div className='restaurant_select_top-header font-effect-outline'
                             onClick={displayList}>
                            {state.title ? state.title : `Выбери ресторан`}
                        </div>
                        <div className="arrow_picker" onClick={displayList}>
                            <div className="arrow_picker-up"></div>
                            <div className="arrow_picker-down"></div>
                        </div>
                    </div>
                    {state.display && <div className="restaurant_select_bottom">
                        <ul>
                            {restaurants.map(rest => <li key={rest.id} onClick={()=>setCurrentRestaurant(rest.title , rest.url)}>{rest.title}</li>)}
                        </ul>
                    </div>}
                    {(state.title && !state.display)  && <button onClick={()=>goToRestaurant(state.url)}>Перейти в ресторан</button>}
                </div>
            </>
        );

};

Landing.propTypes = {
    history: PropTypes.object
};

export default Landing;