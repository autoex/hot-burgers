import React, {Component} from 'react';
import Header from "./components/Header";
import Order from "./components/Order";
import MenuAdmin from "./components/MenuAdmin";

class App extends Component {
    state = {
        burgers: {},
        order: {}
    };
    addBurger =(burger)=> {
        const burgers = {...this.state.burgers};
        burgers[`burger-${Date.now()}`] = burger;
        this.setState({burgers})
    };
    render() {
        return (
            <div className='burger-paradise'>
                <div className="menu">
                    <Header/>
                </div>
                <Order/>
                <MenuAdmin addBurger={this.addBurger}/>

            </div>
        );
    }
}

export default App;