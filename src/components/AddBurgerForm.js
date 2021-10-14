import React, {Component} from 'react';

class AddBurgerForm extends Component {
    createBurger =(event)=> {
        event.preventDefault();
    }
    render() {
        return <form className='burger-edit' onClick={this.createBurger}>
            <input name='name' type='text' placeholder='Name' autoComplete='off'/>
            <input name='price' type='text' placeholder='Price' autoComplete='off'/>
            <select className='status' name='status' type='text'>
                <option value='available'>Доступно</option>
                <option value='unavailable'>Убрать из меню</option>

            </select>
            <textarea name='desc' placeholder='Desc'/>
            <input name='image' type='text' placeholder='Image' autoComplete='off'/>
            <button type='submit'>Добавить в меню</button>
        </form>;
    }
}

export default AddBurgerForm;