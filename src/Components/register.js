import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { BrowserRouter as Route, Redirect } from "react-router-dom";
import FormLabel from "@material-ui/core/FormLabel";
import "../Assets/css/todo.css";
export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      User: [
        {
          email: "",
          password: "",
          name: ""
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
  getName(e) {
    this.state.User[0].name = e.target.value;
    this.setState({
      User: this.state.User
    });
    console.log(this.state.User[0].name);
  }

  submit() {
    if (
      this.state.User[0].name == "" &&
      this.state.User[0].email == "" &&
      this.state.User[0].password == ""
    ) {
      alert("All fields are required");
    } else {
      this.setState({
        redirect: true
      });
    }
  }

  render() {
    if (this.state.redirect === true) {
      return <Redirect to={{ pathname: "/login" }} />;
    } else {
      return (
        <div>
          <Grid>
            <div className="register">
              <h1 id="title1">Signup</h1>
              <FormLabel className="lab">Email</FormLabel>
              <center>
                <TextField
                  placeholder="Email"
                  type="email"
                  required
                  name="email"
                  className="textf"
                  autoComplete="email"
                  margin="normal"
                  variant="outlined"
                  onChange={this.getEmail.bind(this)}
                />
              </center>
              <FormLabel className="lab">Full Name</FormLabel>
              <center>
                <TextField
                  placeholder="Full Name"
                  type="text"
                  className="textf"
                  required
                  name="name"
                  margin="normal"
                  variant="outlined"
                  onChange={this.getName.bind(this)}
                />
              </center>
              <FormLabel className="lab">Password</FormLabel>
              <center>
                <TextField
                  placeholder="Password"
                  className="textf"
                  type="password"
                  name="password"
                  required
                  margin="normal"
                  variant="outlined"
                  onChange={this.getPassword.bind(this)}
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
