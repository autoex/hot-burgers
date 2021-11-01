import React from 'react';
import PropTypes from 'prop-types'


const Login = ({authenticate}) => {
    return (
        <div className={'login-container'}>
            <nav className="login">
                <h2>Авторизация</h2>
                <p>Введите логин и пароль вашего эккаунта GitHub </p>
                <button onClick={()=>authenticate()}>Войти</button>
            </nav>

        </div>
    );
};

Login.propTypes = {
    authenticate: PropTypes.func.isRequired
};

export default Login;