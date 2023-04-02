import * as React from 'react';
import './contactsPage.styles.css';
import MailTo from '../components/MailTo';
import {Link} from 'react-router-dom';

const ContactsPage = () => {
    return (
        <div className="container contactsPage">
            {/*popis*/}
            <div className="p-2">
                <h3>TJ Sokol škola športovej gymnastiky Poly-Trade, Jarková ul. č. 47, 080 01
                    Prešov
                </h3>
            </div>
            {/* kontakty*/}
            <div>
                <h3>Kontaktné osoby</h3>
            </div>
            {/*martin povysil*/}
            <div className="p-2">
                <h3>Martin Povýšil</h3>
                <div className="h6 p-2">
                    <span className="p-2"><i className="bi bi-telephone-fill"/> </span>
                    <span>09085 615 184</span>
                </div>
                <div>
                    <span className="p-3">
                        <MailTo email="povysil@centrum.sk" subject="Predmet správy" body="Vaša správa">
                            <i className="bi bi-envelope-fill"/>
                        </MailTo>
                    </span>
                    <span>povisil@centrum.sk</span></div>
            </div>
            {/*    marek gadzinovsky*/}
            <div className="p-2">
                <h3>Mgr. Marek Gadžinovský</h3>
                <div className="h6 p-2">
                    <span className="p-2"><i className="bi bi-telephone-fill"/> </span>
                    <span>0918 823 837</span>
                </div>
                <div>
                    <span className="p-3">
                        <MailTo email="m.gadzinovsky292@gmail.com" subject="Predmet správy" body="Vaša správa">
                            <i className="bi bi-envelope-fill"/>
                        </MailTo>
                    </span>
                    <span>m.gadzinovsky292@gmail.com</span></div>
            </div>
            <div>
                {/*email*/}
                <div className="h6 p-2">
                 <span className="p-3">
                        <MailTo email="ssgpolytrade@gmail.com" subject="Predmet správy" body="Vaša správa">
                            <i className="bi bi-envelope-at-fill"/>
                        </MailTo>
                    </span>
                    <span>ssgpolytrade@gmail.com</span>
                </div>
                {/*fb*/}
                {/*todo: open url link in a new tab*/}
                <div className="h6 p-2">
                    <span className="p-3"><Link to="http://www.google.sk" target="_blank"><i className="bi bi-facebook"/></Link></span>
                    <span>ŠŠG Poly-Trade Prešov</span>
                </div>
                {/*insta*/}
                <div className="h6 p-2">
                    <span className="p-3"><Link to="http://www.google.sk" target="_blank"><i className="bi bi-instagram"/></Link></span>
                    <span>ssg_poly_trade_presov</span>
                </div>
            </div>
        </div>
    );
}

export default ContactsPage;
