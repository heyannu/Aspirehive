import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { BrowserRouter as Route, Link, Redirect } from "react-router-dom";
import Logo from "../Assets/logo.jpg";
import "../Assets/css/todo.css";

export default class SideNav extends Component {
  render() {
    return (
      <div>
        <Grid container>
          <Grid item xs={12} md={12} lg={12} className="side_nav">
            <Grid container justify="flex-start" alignItems="center" />
            <div>
              <img
                className="card-img-top cit action logo"
                src={Logo}
                alt="ASPIREHIVE"
              />
            </div>
            <div style={{ padding: "1em" }}>
              <center>
                <Link
                  to={{
                    pathname: "/todo",
                    state: { todo: "" }
                  }}
                >
                  <li className="menu">
                    <h3>To Do List</h3>
                  </li>
                </Link>
                <Link
                  to={{
                    pathname: "/calculator"
                  }}
                >
                  <li className="menu">
                    <h3>Calculator</h3>
                  </li>
                </Link>
              </center>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}
