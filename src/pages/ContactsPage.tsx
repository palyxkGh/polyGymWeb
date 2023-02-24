import * as React from 'react';
import './contactsPage.styles.css';
import MailTo from '../components/MailTo';

const ContactsPage = () => {
    return (
        <div className="container contactsPage">
            {/*headline popis*/}
            <div className="row">
                <div className="col h4">TJ Sokol škola športovej gymnastiky Poly-Trade, Jarková ul. č. 47, 080 01
                    Prešov
                </div>
            </div>

            {/*body content*/}
            <div className="row">
                <div className="column p-3">
                    <div className="row">
                        <span className="h2">Kontaktné osoby:</span>
                    </div>
                    <div className="row">
                        <div className="column">
                            <div className="row h4">
                                <span>Martin Pospíšil</span>
                            </div>
                            <div className="column h5 p-2"><span><i className="bi bi-telephone-fill"/></span><span>0905 615 184</span>
                            </div>
                            <div className="column h5 p-2"><span><i className="bi bi-envelope-at-fill"/></span>
                                <span><MailTo email="povysil@centrum.sk" subject="Predmet správy"
                                              body="Vaša správa">povysil@centrum.sk</MailTo></span></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="column">
                            <div className="row h4">
                                <span>Mgr. Marek Gadžinovský</span>
                            </div>
                            <div className="column h5 p-2">
                                <span><i className="bi bi-telephone-fill"/></span>
                                <span>0918 823 837</span>
                            </div>
                            <div className="column h5 p-2">
                                <span><i className="bi bi-envelope-at-fill"/></span>
                                <span><MailTo email="povysil@centrum.sk" subject="Predmet správy"
                                              body="Vaša správa">m.gadzinovsky292@gmail.com</MailTo></span>
                            </div>
                            <div className="column h5 p-2">
                                <span><i className="bi bi-facebook"></i></span>
                                <span>ŠŠG Poly-Trade Prešov</span>
                            </div>
                            <div className="column h5 p-2">
                                <span><i className="bi bi-facebook"></i></span>
                                <span>ssg_poly_trade_presov</span>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="column">
                    {/*    right column*/}
                </div>
            </div>
            <div className="column">
                {/*<div className="column">*/}

                {/*<div className="row">Mgr. Marek Gadžinovský</div>*/}
                {/*<div className="row">0918 615 184</div>*/}
                {/*<div className="row">Mgr. Marek Gadžinovský</div>*/}
                {/*<div className="row">Mgr. Marek Gadžinovský</div>*/}
                {/*<div className="row">Mgr. Marek Gadžinovský</div>*/}
            </div>
        </div>
    );
}

export default ContactsPage;
