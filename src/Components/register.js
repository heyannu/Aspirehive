import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import FormLabel from "@material-ui/core/FormLabel";
import "../Assets/css/todo.css";
export default class Register extends Component {
  render() {
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
                name="email"
                className="textf"
                autoComplete="email"
                margin="normal"
                variant="outlined"
              />
            </center>
            <FormLabel className="lab">Full Name</FormLabel>
            <center>
              <TextField
                placeholder="Full Name"
                type="text"
                className="textf"
                name="name"
                margin="normal"
                variant="outlined"
              />
            </center>
            <FormLabel className="lab">Password</FormLabel>
            <center>
              <TextField
                placeholder="Password"
                className="textf"
                type="password"
                name="password"
                margin="normal"
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
