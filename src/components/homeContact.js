import React, {Component} from "react";

class Contact extends Component {
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
                                <input className='input nameInput' type="text" placeholder='Stanisław'/>
                                <input className='input' type="email" placeholder='abc@xyz.pl'/>
                                <label className='label'>Wpisz swoją wiadomość</label>
                                <textarea minLength='120' name="message" id="message" cols="50" rows="4" placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'/>
                                <input className='submit' type="submit" value='Wyślij'/>
                            </form>
                        </div>
                        <div className="footer">
                            <p className="copyrights">Copyright by Coders Lab</p>
                            <div className="icons">
                                <i className="fab fa-facebook-square"/>
                                <i className="fab fa-instagram"/>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Contact;