import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
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
                <li className="menu">
                  <h3>To Do List</h3>
                </li>
                <li className="menu">
                  <h3>Calculator</h3>
                </li>
              </center>
            </div>
          </Grid>
          {/* <Grid item xs={9} sm={9} lg={9} className="header">
            <Grid item xs={11} sm={11} lg={11}>
              <div className="search">
                <div className="searchIcon">
                  <SearchIcon />
                  <InputBase placeholder="Search…" />
                </div>
              </div>
              <div className="user" style={{ float: "right" }}>
                <h3>HI USERNAME</h3>
              </div>
            </Grid>
          </Grid> */}
        </Grid>
      </div>
    );
  }
}
