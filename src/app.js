const css = require('./app.scss');

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux"
import { BrowserRouter as Router, Link, Route } from "react-router-dom"
import Login from "./components/Login"
import store from "./store"
import Validate from "./components/Validate"
import Header from "./components/Header"
import Table from "./components/MetsahaldurViewTable"
import MetsCard from "./components/MetsCard"
import DetailsWrapper from "./components/DetailsWrapper";
import MetsahaldurViewTable from "./components/MetsahaldurViewTable"
import Modal from "./components/Modal"
import ClientLanding from "./components/ClientLanding"

class App extends React.Component {

    render() {
        let sampleContract = {
            "status":"accept",
            "msg": "",
            "data": [
                { //Lepinguobjekt
                    "contractId": "LEPING-FF-3124486234",
                    "cadastral": "3421341:67864234",
                    "propertyName": "Paks Must Mets",
                    "status": "active",
                    "documents": {
                        "contracts":[
                            {
                                "filename":"leping1.pdf",
                                "filepath":"filepath",
                                "datestamp":"00-00-0000",
                                "author":"Tagametsa Toomas"
                            },
                            {
                                "filename":"leping1_lisa.pdf",
                                "filepath":"filepath",
                                "datestamp":"00-00-0000",
                                "author":"Tagametsa Toomas"
                            }
                        ],
                        "prices": {
                            "reference": "some kind of internal MongoDB ref?",
                            "datestamp": "00-00-0000"
                        },
                        "metsateatis": {
                            "filename":"teatis1.pdf",
                            "filepath":"filepath",
                            "datestamp":"00-00-0000",
                            "author":"Tagametsa Toomas"
                        },
                        "koondakt": {
                            "filename":"akt1.pdf",
                            "filepath":"filepath",
                            "datestamp":"00-00-0000",
                            "author":"Tagametsa Toomas"
                        }
                    }
                },
                { //Lepinguobjekt
                    "contractId": "LEPING-FF-3124486234",
                    "cadastral": "3421341:67864234",
                    "propertyName": "Paks Must Mets",
                    "status": "active",
                    "documents": {
                        "contracts":[
                            {
                                "filename":"leping1.pdf",
                                "filepath":"filepath",
                                "datestamp":"00-00-0000",
                                "author":"Tagametsa Toomas"
                            }
                        ],
                        "prices": {
                            "reference": "some kind of internal MongoDB ref?",
                            "datestamp": "00-00-0000"
                        },
                        "metsateatis?": {
                            "filename":"teatis1.pdf",
                            "filepath":"filepath",
                            "datestamp":"00-00-0000",
                            "author":"Tagametsa Toomas"
                        },
                        "koondakt": {
                            "filename":"akt1.pdf",
                            "filepath":"filepath",
                            "datestamp":"00-00-0000",
                            "author":"Tagametsa Toomas"
                        }
                    }
                }
            ]
        }

        return (
            <Router>

                <div className="main__wrapper">

                    <Link to={'/login'}>Login</Link>
                    <Link to={'/newuser'}>Kasutaja valideerimine</Link>
                    <Route path="/login" component={Login}/>
                    <Route path="/newuser" component={Validate}/>
                    <Route path="/" exact={true} render={()=>(
                        <MetsCard {...sampleContract}>
                            <DetailsWrapper/>
                            <MetsahaldurViewTable/>
                        </MetsCard>)



                        <ClientLanding {...sampleContract}/>
                    )
                    }/>
                    <Modal/>

                </div>
            </Router>
        );
    }
}


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'));
