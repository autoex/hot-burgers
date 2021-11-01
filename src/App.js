import React, {Component} from 'react';
import Header from "./components/Header";
import Order from "./components/Order";
import MenuAdmin from "./components/MenuAdmin";
import sampleBurgers from "./sample-burgers";
import BurgersList from "./components/BurgersList";
import base from "./Base";
import PropTypes from 'prop-types';
import SignIn from "./components/auth/SignIn";
import firebase from "firebase/app";

class App extends Component {
    state = {
        burgers: {},
        order: {}
    };
    static propTypes = {
        match: PropTypes.object
    };

    componentDidMount() {
        const {params} = this.props.match;
        const localstorageRef = localStorage.getItem(params.restURL);
        if (localstorageRef) this.setState({order: JSON.parse(localstorageRef)});
        this.ref = base.syncState(`${params.restURL}/burgers`, {
            context: this,
            state: 'burgers'
        });


    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const {params} = this.props.match;
        localStorage.setItem(params.restURL, JSON.stringify(this.state.order))

    }

    componentWillUnmount() {

        base.removeBinding(this.ref)
    }

    addBurger = (burger) => {
        const burgers = {...this.state.burgers};
        burgers[`burger${Date.now()}`] = burger;
        this.setState({burgers})
    };
    updateBurger = (key, burger) => {
        const burgers = {...this.state.burgers};
        burgers[key] = burger;
        this.setState({burgers});

    };
    deleteBurger = (key) => {
        const burgers = {...this.state.burgers};
        burgers[key] = null;
        this.setState({burgers});

    };
    addAllBurgers = () => this.setState({burgers: {...this.state.burgers, ...sampleBurgers}});
    addToOrder = (key) => {
        const order = {...this.state.order};
        order[key] = order[key] + 1 || 1;
        this.setState({...this.state, order});


    };
    deleteFromOrder = (key) => {
        const order = {...this.state.order};
        delete order[key];
        this.setState({order});
    };
    handleLogOut =async ()=> {
        firebase.auth().signOut()
        window.location.reload()
    }

    render() {
        return (
            <SignIn>
                <div className='burger-paradise'>
                    <div className="menu">
                        <Header title={'Hot Burgers'}/>
                        <BurgersList burgers={this.state.burgers} addToOrder={this.addToOrder}/>
                    </div>
                    <Order burgers={this.state.burgers}
                           order={this.state.order}
                           deleteFromOrder={this.deleteFromOrder}
                    />
                    <MenuAdmin addBurger={this.addBurger}
                               addAllBurgers={this.addAllBurgers}
                               burgers={this.state.burgers}
                               updateBurger={this.updateBurger}
                               deleteBurger={this.deleteBurger}
                               handleLogOut={this.handleLogOut}
                    user={this.state.user }/>

                </div>
            </SignIn>
        );
    }
}

export default App;