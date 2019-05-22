import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import FormLabel from "@material-ui/core/FormLabel";
import "../Assets/css/todo.css";
export default class Login extends Component {
  render() {
    return (
      <div>
        <Grid>
          <div className="login">
            <h1 id="title">LOGIN</h1>
            <FormLabel className="lab">Email</FormLabel>
            <center>
              <TextField
                label="Email"
                type="email"
                className="textf"
                name="email"
                autoComplete="email"
                margin="normal"
                variant="outlined"
              />
            </center>
            <FormLabel className="lab">Password</FormLabel>
            <center>
              <TextField
                label="Password"
                type="password"
                name="password"
                className="textf"
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
