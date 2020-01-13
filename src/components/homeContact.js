import React, {Component} from "react";

const initialState = {
    name: '',
    email: '',
    message: '',
    nameError: '',
    emailError: '',
    messageError: ''
};

console.log(initialState)

class Contact extends Component {
    state = initialState;

    handleChange = e => {
        this.setState( {[e.target.name]: e.target.value})
    };

    validate = () => {
        let nameError = '';
        let emailError = '';
        let messageError = '';

        if (!/^\w+$/.test(this.state.name)) {
            nameError = 'Podane imię jest nieprawidłowe!'
        }
        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.email)) {
            emailError = 'Podany adres email jest nieprawidłowy!'
        }
        if (this.state.message.length < 120) {
            messageError = 'Wiadomość jest zbyt krótka!'
        }
        if (nameError || emailError || messageError) {
            this.setState({
                nameError, emailError, messageError
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
        console.log(this.state)
    };

    render() {
        return (
            <>
                <div className="contact" id='contact'>
                    <div className="contact2">
                        <div className="contactBox">
                            <h3>Skontaktuj się z nami</h3>
                            <span className="decoration"/>
                            <form>
                                <label className="label nameLabel" >Wpisz swoje imię</label>
                                <label className="label emailLabel" >Wpisz swój email</label>
                                <input className='input nameInput'
                                       type="text"
                                       placeholder='Stanisław'
                                       name='name'
                                       value={this.state.value}
                                       onChange={this.handleChange}
                                />
                                <input className='input'
                                       type="email"
                                       placeholder='abc@xyz.pl'
                                       name='email'
                                       value={this.state.email}
                                       onChange={this.handleChange}
                                />
                                {this.state.nameError ? (<span className="error">{this.state.nameError}</span>) : <span className="error"/>}
                                {this.state.emailError ? (<span className="error error-two">{this.state.emailError}</span>) : null}
                                <label className='label'>Wpisz swoją wiadomość</label>
                                <textarea id="message"
                                          cols="50"
                                          rows="4"
                                          placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                          incididunt ut labore et dolore magna aliqua.'
                                          name='message'
                                          value={this.state.message}
                                          onChange={this.handleChange}
                                />
                                {this.state.messageError ? (<span className="error error-three">{this.state.messageError}</span>) : null}
                                <input className='submit'
                                       type="submit"
                                       value='Wyślij'
                                       onClick={this.handleSubmit}
                                />
                            </form>
                        </div>
                        <div className="footer">
                            <p className="copyrights">Copyright by Coders Lab</p>
                            <div className="icons">
                                <a href="#"><i className="fab fa-facebook-square"/></a>
                                <a href=""><i className="fab fa-instagram"/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    };
}

export default Contact;