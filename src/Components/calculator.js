import React, { Component } from "react";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import Screen from "./calculator/screen.js";
import Grid from "@material-ui/core/Grid";
import "../Assets/css/todo.css";
import SideNav from "./sidenav";

export default class Calculator extends Component {
  render() {
    return (
      <div>
        <Grid container>
          <Grid item xs={3} md={3} lg={3} className="side_nav">
            <SideNav />
          </Grid>
          <Grid item xs={9} sm={9} lg={9} className="header">
            <Grid item xs={11} sm={11} lg={11}>
              <div className="search">
                <div className="searchIcon">
                  <SearchIcon />
                  <InputBase placeholder="Search…" />
                </div>
              </div>
              <div className="user" style={{ float: "right" }}>
                <h3>
                  HI USERNAME
                  <span style={{ marginLeft: "1em" }}>
                    <i className="fa fa-user" />
                  </span>
                </h3>
              </div>
            </Grid>

            <Grid
              item
              xs={9}
              sm={9}
              lg={9}
              className="body_content"
              style={{ marginTop: "7em", marginLeft: "24em" }}
            >
              <b>
                <h1 style={{ fontFamily: "Rajdhani", marginLeft: "5.4em" }}>
                  CALCULATOR
                </h1>
              </b>
              <Grid>
                <Screen />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}
