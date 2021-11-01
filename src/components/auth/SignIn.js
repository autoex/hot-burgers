import React, {Component} from 'react';
import Login from "./Login";
import {firebaseApp} from "../../Base";
import firebase from "firebase/app";

class SignIn extends Component {
    state = {
        user: ''
    };
    componentDidMount() {
        firebase.auth().onAuthStateChanged(user=>{
            if(user) this.authHandler({user})
        })
    }

    authHandler = async (authData) => {

        await this.setState({
            user: authData.user
        })
    };
    authenticate = () => {
        const authProvider = new firebase.auth.GithubAuthProvider();
        firebaseApp
            .auth()
            .signInWithPopup(authProvider)
            .then(this.authHandler)
    };

    render() {
        if (!this.state.user) return <Login authenticate={this.authenticate}/>
        return this.props.children
    }
}

export default SignIn;