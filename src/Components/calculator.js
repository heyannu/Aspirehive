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
            <Grid item xs={11} sm={11} lg={11} className="hi">
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

            <Grid
              item
              xs={9}
              sm={9}
              lg={9}
              className="body_content"
              style={{ marginTop: "5em", marginLeft: "3em" }}
            >
              <h1>Calculator</h1>
              <Grid container className="calc">
                <Screen />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}
