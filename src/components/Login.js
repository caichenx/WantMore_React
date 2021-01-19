import React, { Component } from "react";
import Link from "./Link";
import "./style/login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  handleChange = (e) => {
    // ES6 computed property name syntax
    // put an expression in the bracket, that will be computed and used as the property name
    this.setState({ [e.target.name]: e.target.value, error: "" });

    console.log(this.state.password);
  };

  login = (e) => {
    e.preventDefault();

    const { username, password } = this.state;
    if (!username || !password) {
      return this.setState({ error: "Please Fill all fields!" });
    }
    this.props.login(username, password).then((loggedIn) => {
      if (!loggedIn) {
        this.setState({ error: "Invalid Credentails" });
      }
    });
  };

  render() {
    // check if the user's credentials exists in local storage
    return !this.props.user ? (
      <div className="container">
        <form onSubmit={this.login}>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="username"
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              name="password"
              onChange={this.handleChange}
            />
          </div>
          <div className="text-danger form-text">
            {this.state.error ? this.state.error : null}
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    ) : (
      <div className="info-block">
        <h3>You have successfully logged In.</h3>
        <Link href="/">
          <button type="button" className="btn btn-success">
            OK
          </button>
        </Link>
      </div>
    );
  }
}

export default Login;
