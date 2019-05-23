import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { BrowserRouter as Route, Redirect } from "react-router-dom";
import FormLabel from "@material-ui/core/FormLabel";
import "../Assets/css/todo.css";
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      User: [
        {
          email: "",
          password: ""
        }
      ],
      redirect: false
    };
  }
  getEmail(e) {
    this.state.User[0].email = e.target.value;
    this.setState({
      User: this.state.User
    });
    console.log(this.state.User[0].email);
  }
  getPassword(e) {
    this.state.User[0].password = e.target.value;
    this.setState({
      User: this.state.User
    });
    console.log(this.state.User[0].password);
  }
  submit() {
    if (this.state.User[0].email == "" && this.state.User[0].password == "") {
      alert("All fields are required");
    } else {
      this.setState({
        redirect: true
      });
    }
  }
  render() {
    if (this.state.redirect === true) {
      return (
        <Redirect
          to={{
            pathname: "/todo",
            state: { todo: "" }
          }}
        />
      );
    } else {
      return (
        <div>
          <Grid>
            <div className="login">
              <h1 id="title">LOGIN</h1>
              <FormLabel className="lab">Email</FormLabel>
              <center>
                <TextField
                  placeholder="Email"
                  type="email"
                  className="textf"
                  name="email"
                  autoComplete="email"
                  margin="normal"
                  required
                  variant="outlined"
                  onChange={this.getPassword.bind(this)}
                />
              </center>
              <FormLabel className="lab">Password</FormLabel>
              <center>
                <TextField
                  onChange={this.getPassword.bind(this)}
                  placeholder="Password"
                  type="password"
                  name="password"
                  className="textf"
                  margin="normal"
                  required
                  variant="outlined"
                />
              </center>
              <center>
                <Button
                  variant="contained"
                  size="large"
                  style={{
                    marginTop: "1em",
                    marginBottom: "1em",
                    background: "#2F4F4F",
                    color: "#fff"
                  }}
                  onClick={this.submit.bind(this)}
                >
                  Submit
                </Button>
              </center>
            </div>
          </Grid>
        </div>
      );
    }
  }
}
