import React, {Component} from "react";
import LogBar from "./logBar";
import NavBar from "./navBar";
import {Link} from "react-router-dom";


const initialState = {
    email: '',
    password: '',
    password2: '',
    emailError: '',
    passwordError: '',
    password2Error: '',
    password2Error2: ''
};

class Registration extends Component {
    state = initialState;

    handleChange = e => {
        this.setState( {[e.target.name]: e.target.value});
        // console.log(this.state.email);
        // console.log(this.state.password);
        // console.log(this.state.password2)
    };

    validate = () => {
        let emailError = '';
        let passwordError = '';
        let password2Error = '';
        let password2Error2 = '';

        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.email)) {
            emailError = 'Podany adres email jest nieprawidłowy!'
        }
        if (this.state.password.length < 6) {
            passwordError = 'Hasło jest za krótkie!'
        }
        if (this.state.password2 !== this.state.password) {
            password2Error = 'Hasła różnią się od siebie!'
        }
        if (this.state.password2.length < 6) {
            password2Error2 = 'Hasło jest za krótkie!'
        }
        if (emailError || passwordError || password2Error || password2Error2) {
            this.setState({
                emailError, passwordError, password2Error, password2Error2
            });
            return false
        }
        return true
    };

    handleSubmit = e => {
        e.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            this.setState(initialState)
        }
    };

    render() {
        return (
            <div className="registrationContainer">
                <LogBar/>
                <NavBar/>
                <div className="logInBar">
                    <h2>Załóż konto</h2>
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
                        <label className="label">Powtórz hasło</label>
                        <input className='input'
                               type="password"
                               name='password2'
                               value={this.state.password2}
                               onChange={this.handleChange}
                        />
                        {this.state.password2Error ? (<span className="error">{this.state.password2Error}</span>) : null}
                        {this.state.password2Error2 ? (<span className="error">{this.state.password2Error2}</span>) : null}
                    </div>
                    <div className="logInButtons">
                        <Link className="button" to='/logowanie'>Zaloguj się</Link>
                        <button className="button" onClick={this.handleSubmit}>Załóż konto</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Registration;