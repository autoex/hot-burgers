import React, {Component} from 'react';
import Header from "./components/Header";
import Order from "./components/Order";
import MenuAdmin from "./components/MenuAdmin";

class App extends Component {
    render() {
        return (
            <div className='burger-paradise'>
                <div className="menu">
                    <Header/>
                </div>
                <Order/>
                <MenuAdmin/>

            </div>
        );
    }
}

export default App;