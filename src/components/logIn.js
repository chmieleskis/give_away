import React, {Component} from "react";
import LogBar from "./logBar";
import NavBar from "./navBar";
import {Link} from "react-router-dom";

const initialState = {
    email: '',
    password: '',
    emailError: '',
    passwordError: ''
}

class LogIn extends Component {
    state = initialState

    handleChange = e => {
        this.setState( {[e.target.name]: e.target.value});
        // console.log(this.state.email);
        // console.log(this.state.password)
    };


    validate = () => {
        let emailError = '';
        let passwordError = '';

        if (!this.state.email.includes('@')) {
            emailError = 'Podany adres email jest nieprawidłowy!'
        }
        if (this.state.password.length < 7) {
            passwordError = 'Hasło jest za krótkie!'
        }
        if (emailError || passwordError) {
            this.setState({
                emailError, passwordError
            });
            return false
        };


        return true
    };

    handleSubmit = e => {
        e.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            this.setState(initialState)
        }
        // console.log(this.state)
    };

    render() {
        return (
            <div className="logInContainer">
                <LogBar/>
                <NavBar/>
                <div className="logInBar">
                    <h2>Zaloguj się</h2>
                    <span className="decoration"/>
                    <div className="logInInputs">
                        <label className="label">Email</label>
                        <input className='input'
                               type="email"
                               name='email'
                               value={this.state.email}
                               onChange={this.handleChange}
                        />
                        {this.state.emailError ? (<span className="error">{this.state.emailError}</span>) : null}
                        <label className="label">Hasło</label>
                        <input className='input'
                               type="password"
                               name='password'
                               value={this.state.password}
                               onChange={this.handleChange}
                        />
                        {this.state.passwordError ? (<span className="error">{this.state.passwordError}</span>) : null}
                    </div>
                    <div className="logInButtons">
                        <Link className="button" to='/rejestracja'>Załóż konto</Link>
                        <button className="button" onClick={this.handleSubmit}>Zaloguj się</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default LogIn;