import React, {Component} from 'react';
import restaurants from "../sample-restaurants";

class Landing extends Component {

    state = {
        display: false,
        title: '',
        url: ''
    };
    displayList = () => {
        this.setState({
            display: !this.state.display
        })
    };
    setCurrentRestaurant=(restName, restUrl)=> {


        this.setState({
            title: restName,
            url: restUrl,
            display: false
        });

    };
    goToRestaurant =(restUrl)=> {
        this.props.history.push(`/restaurant/${restUrl}`)
    };

    render() {
        return (<>
                <div className='restaurant_select'>
                    <div className='restaurant_select_top'>
                        <div className='restaurant_select_top-header font-effect-outline'
                             onClick={this.displayList}>
                            {this.state.title ? this.state.title : `Выбери ресторан`}
                        </div>
                        <div className="arrow_picker">
                            <div className="arrow_picker-up"></div>
                            <div className="arrow_picker-down"></div>
                        </div>
                    </div>
                    {this.state.display && <div className="restaurant_select_bottom">
                        <ul>
                            {restaurants.map(rest => <li key={rest.id} onClick={()=>this.setCurrentRestaurant(rest.title , rest.url)}>{rest.title}</li>)}
                        </ul>
                    </div>}
                    {(this.state.title && !this.state.display)  && <button onClick={()=>this.goToRestaurant(this.state.url)}>Перейти в ресторан</button>}
                </div>
            </>
        );
    }
}

export default Landing;