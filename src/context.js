import React, { Component } from "react";

const Context = React.createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case "DELETE_CONTACT":
            return {
                ...state,
                contacts: state.contacts.filter(
                    contact => contact.id !== action.payload
                )
            };
        case "ADD_CONTACT":
            console.log(action.payload);
            return {
                ...state,
                contacts: [action.payload, ...state.contacts]
            };
        default:
            return state;
    }
};

export class Provider extends Component {
    state = {
        contacts: [
            {
                id: 1,
                name: "John Doe",
                email: "john@gmail.com",
                phone: "555-555-555"
            },
            {
                id: 2,
                name: "Karen Smith",
                email: "karen@gmail.com",
                phone: "111-555-555"
            },
            {
                id: 3,
                name: "Franek Dolas",
                email: "franek@gmail.com",
                phone: "777-555-555"
            }
        ],
        dispatch: action => this.setState(state => reducer(state, action))
    };

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        );
    }
}

export const Consumer = Context.Consumer;
