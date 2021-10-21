import React, {Component} from 'react';
import Header from "./components/Header";
import Order from "./components/Order";
import MenuAdmin from "./components/MenuAdmin";
import sampleBurgers from "./sample-burgers";
import BurgersList from "./components/BurgersList";

class App extends Component {
    state = {
        burgers: {},
        order: {}
    };
    addBurger = (burger) => {
        const burgers = {...this.state.burgers};
        burgers[`burger${Date.now()}`] = burger;
        this.setState({burgers})
    };
    addAllBurgers = () => this.setState({burgers: {...this.state.burgers, ...sampleBurgers}});
    addToOrder = (key) => {
        const order = {...this.state.order};
        order[key] = order[key] + 1 || 1;
        this.setState({...this.state, order})


    }

    render() {
        return (
            <div className='burger-paradise'>
                <div className="menu">
                    <Header/>
                    <BurgersList burgers={this.state.burgers} addToOrder={this.addToOrder}/>
                </div>
                <Order burgers={this.state.burgers}
                       order={this.state.order}
                />
                <MenuAdmin addBurger={this.addBurger} addAllBurgers={this.addAllBurgers}/>

            </div>
        );
    }
}

export default App;