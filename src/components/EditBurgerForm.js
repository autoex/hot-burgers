import React, {Component} from 'react';

class EditBurgerForm extends Component {
    handleChange =(e)=> {

        const updateBurger = {...this.props.burger, [e.currentTarget.name]: e.currentTarget.value};
        this.props.updateBurger(this.props.idx,updateBurger);
    };
    render() {
       const {burger} = this.props;
        return (
            <div className={'burger-edit'}>
                <input onChange={this.handleChange} name='name' type='text' placeholder='Name' autoComplete='off' value={burger.name}/>
                <input onChange={this.handleChange} name='price' type='text' placeholder='Price' autoComplete='off' value={burger.price}/>
                <select onChange={this.handleChange} className='status' name='status' value={burger.status}>
                    <option value='available'>Доступно</option>
                    <option value='unavailable'>Убрать из меню</option>

                </select>
                <textarea onChange={this.handleChange} name='desc' placeholder='Desc' value={burger.desc}/>
                <input onChange={this.handleChange} name='image' type='text' placeholder='Image' autoComplete='off' value={burger.image}/>
                <button type='submit' onClick={()=>this.props.deleteBurger(this.props.idx)}>Удалить из меню</button>
            </div>
        );
    }
}

export default EditBurgerForm;