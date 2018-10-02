import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Contacts from "./components/contacts/Contacts";
import Header from "./components/layout/Header";
import AddContacts from "./components/contacts/AddContacts";
import About from "./components/pages/About";

import { Provider } from "./context";
import NotFound from "./components/pages/NotFound";

class App extends Component {
    render() {
        return (
            <Provider>
                <Router>
                    <div className="App">
                        <Header branding="Contact Manager" />
                        <div className="container">
                            <Switch>
                                <Route exact path="/" component={Contacts} />
                                <Route
                                    exact
                                    path="/contact/add"
                                    component={AddContacts}
                                />
                                <Route exact path="/about" component={About} />
                                <Route component={NotFound} />
                            </Switch>
                        </div>
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
