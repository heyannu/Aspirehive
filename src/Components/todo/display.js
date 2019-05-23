import React, { Component } from "react";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DeleteForeverTwoToneIcon from "@material-ui/icons/DeleteForeverTwoTone";
import { BrowserRouter as Route, Link, Redirect } from "react-router-dom";
import "../../Assets/css/todo.css";

import SideNav from "../sidenav";
export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          title: "First Todo",
          description: "def"
        },
        {
          title: "Second Todo",
          description: "abc"
        }
      ],
      open: false,

      removed: ""
    };
  }
  componentDidMount() {
    console.log(this.props.location.state.todo);
    if (this.props.location.state.todo == "") {
      console.log("no new todos added");
    } else {
      this.state.todos.push(this.props.location.state.todo[0]);
      this.setState({
        todos: this.state.todos
      });
    }
  }
  confirm() {
    for (var i = 0; i < this.state.todos.length; i++) {
      if (this.state.todos[i].title == this.state.removed.title) {
        this.state.todos.splice(i, 1);
        this.setState({
          todos: this.state.todos
        });
      }
      console.log(this.state.todos);
    }
    this.setState({ open: false });
  }
  cancel() {
    this.setState({ open: false });
  }
  del(todo, e) {
    this.setState({ open: true, removed: todo });
  }
  render() {
    return (
      <div>
        <Dialog open={this.state.open}>
          <div style={{ padding: "5em" }}>
            <center>
              <h3>Delete Task?</h3>
              <h5>Do you want to delete the task permanently</h5>
              <div
                style={{
                  paddingLeft: "6em",
                  paddingRight: "6em",
                  marginTop: "2em"
                }}
              >
                <Button
                  style={{
                    background: "#fff",
                    color: "#b30000",
                    float: "left"
                  }}
                  className="btns"
                  onClick={this.confirm.bind(this)}
                >
                  <h4>Yes</h4>
                </Button>
                <Button
                  className="btns"
                  style={{
                    background: "#fff",
                    float: "right",
                    color: "#00b35a"
                  }}
                  onClick={this.cancel.bind(this)}
                >
                  <h4>No</h4>
                </Button>
              </div>
            </center>
          </div>
        </Dialog>

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
              style={{
                marginTop: "8em",
                marginLeft: "12em"
              }}
            >
              <Grid
                style={{ background: "rgba(255,255,255,0.4)", padding: "5em" }}
              >
                <Grid lg={12}>
                  <h3>
                    Todo List{" "}
                    <span>
                      <Link
                        to={{
                          pathname: "/add"
                        }}
                      >
                        <Button
                          variant="contained"
                          color="primary"
                          style={{ float: "right" }}
                        >
                          Add New Task
                        </Button>
                      </Link>
                    </span>
                  </h3>
                  <hr />
                </Grid>
                {this.state.todos.map(single => (
                  <div className="element" style={{ padding: "1em" }}>
                    <div>
                      <li>
                        {single.title}
                        <span>
                          <DeleteForeverTwoToneIcon
                            onClick={this.del.bind(this, single)}
                            className="ic"
                            style={{ float: "right" }}
                          />
                        </span>
                      </li>
                    </div>
                  </div>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}
