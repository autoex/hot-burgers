import React, {useEffect, useState} from 'react';
import firebase from "firebase/app";

const AuthUser = ({handleLogOut}) => {
    const [user, setUser] = useState({
    });


    useEffect(()=> {
        firebase.auth().onAuthStateChanged(user=>{
            if(user) authHandler({user})
        })

    }, [])

    const authHandler = async (authData) => {

        await setUser({...authData.user
        })
    };
    return (
        <div className="login-header">
            <div className="avatar">
                <img src={user.photoURL} alt=""/>
            </div>
            <button onClick={handleLogOut} className={'buttonLogout'}>Выйти</button>
        </div>
    );
};

export default AuthUser;