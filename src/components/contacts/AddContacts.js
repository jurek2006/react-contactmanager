import React, { Component } from "react";

class AddContacts extends Component {
    state = {
        name: "",
        email: "",
        phone: ""
    };
    render() {
        const { name, email, phone } = this.state;
        return (
            <div className="card mb-3">
                <div className="card-header">Add contact</div>
                <div className="card-body">
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                name="name"
                                className="form-control form-control-lg"
                                placeholder="Enter Name..."
                                value={name}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                name="email"
                                className="form-control form-control-lg"
                                placeholder="Enter Email..."
                                value={email}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input
                                type="tel"
                                name="phone"
                                className="form-control form-control-lg"
                                placeholder="Enter Phone..."
                                value={phone}
                            />
                        </div>
                        <input
                            type="submit"
                            value="Add Contact"
                            className="btn btn-light btn-block"
                        />
                    </form>
                </div>
            </div>
        );
    }
}

export default AddContacts;
