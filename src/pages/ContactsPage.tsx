import * as React from 'react';
import './contactsPage.styles.css';
import MailTo from '../components/MailTo';
const ContactsPage = () => {
    return (
        <div className="container contactsPage">
            <div className="row">
                <div className="col h4">TJ Sokol škola športovej gymnastiky Poly-Trade, Jarková ul. č. 47, 080 01 Prešov</div>
            </div>
            <div className="row">
                <div className="column">
                    <span>Kontaktné osoby:</span>
                </div>
                <div className="column">
                    <div className="row">Martin Pospíšil</div>
                    <div className="row"><span></span>0905 615 184</div>
                    <div className="row"><MailTo email="povysil@centrum.sk" subject="Predmet správy" body="Vaša správa">povysil@centrum.sk</MailTo></div>
                </div>
                <div className="column">

                    <div className="row">Mgr. Marek Gadžinovský</div>
                    <div className="row">0918 615 184</div>
                    <div className="row">Mgr. Marek Gadžinovský</div>
                    <div className="row">Mgr. Marek Gadžinovský</div>
                    <div className="row">Mgr. Marek Gadžinovský</div>
                </div>
            </div>
        </div>
    );
}

export default ContactsPage;
