import React, { Component } from "react";

export default class Register extends Component {
    render() {
        return (
            <form>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>First Name</label>
                    <input type="text" className="form-control" placeholder="First Name" />
                </div>

                <div className="form-group">
                    <label>Last Name</label>
                    <input type="text" className="form-control" placeholder="Last Name" />
                </div>

                <div className="form-group">
                    <label>User</label>
                    <input type="text" className="form-control" placeholder="User" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Password" />
                </div>

                <div className="form-group">
                    <label>Re password</label>
                    <input type="password" className="form-control" placeholder="Re password" />
                </div>

                <button className="btn btn-primary float-left btn-md">Sign up</button>
                <button className="btn btn-primary float-right btn-md">Cancel</button>
            </form>
        )
    }
}