import React from 'react';
import AddBurgerForm from "./AddBurgerForm";
import EditBurgerForm from "./EditBurgerForm";
import PropTypes from 'prop-types';

class MenuAdmin extends React.Component {
    static propTypes = {
        burgers: PropTypes.object,
        idx: PropTypes.string,
        updateBurger: PropTypes.func,
        deleteBurger: PropTypes.func

    };
    render() {
        return (
            <div className='menu-admin'>
                <h2>Управление меню</h2>
                {Object.keys(this.props.burgers).map(key => <EditBurgerForm key={key}
                                                                            idx ={key}
                                                                            burger={this.props.burgers[key]}
                                                                            updateBurger={this.props.updateBurger}
                                                                            deleteBurger={this.props.deleteBurger} />)}
                <AddBurgerForm addBurger={this.props.addBurger}/>
                <button onClick={this.props.addAllBurgers}>Загрузить бургеры</button>


            </div>
        )
    }
}

export default MenuAdmin;