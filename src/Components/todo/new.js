import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import FormLabel from "@material-ui/core/FormLabel";
import "../../Assets/css/todo.css";
import TextField from "@material-ui/core/TextField";
import { BrowserRouter as Route, Link, Redirect } from "react-router-dom";
export default class Screen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: [
        {
          title: "",
          description: ""
        }
      ]
    };
  }
  getTitle(e) {
    this.state.todo[0].title = e.target.value;
    this.setState({
      title: this.state.title
    });
  }
  getDesc(e) {
    this.state.todo[0].description = e.target.value;
    this.setState({
      todo: this.state.todo
    });
  }
  submit() {
    if (this.state.todo[0].title == "") {
      alert("All fields are required");
    } else {
      this.setState({
        redirect: true
      });
    }
  }

  render() {
    if (this.state.redirect == true) {
      return (
        <Redirect
          to={{
            pathname: "/todo",
            state: { todo: this.state.todo }
          }}
        />
      );
    } else {
      return (
        <div>
          <Grid
            container
            style={{ background: "rgba(255,255,255,0.4)", padding: "5em" }}
          >
            <Grid lg={12}>
              <h3>Add Task</h3>
            </Grid>
            <Grid lg={12}>
              <FormLabel className="addd"> Title</FormLabel>
              <br />

              <TextField
                placeholder="Title"
                type="text"
                className="todof"
                name="title"
                variant="outlined"
                onChange={this.getTitle.bind(this)}
              />
            </Grid>

            <Grid lg={12}>
              <FormLabel className="addd">Description</FormLabel>
              <br />

              <TextField
                multiline
                rows="7"
                placeholder="Title"
                type="text"
                className="todof"
                name="title"
                variant="outlined"
                onChange={this.getDesc.bind(this)}
              />
            </Grid>
            <Grid lg={12}>
              <Button
                variant="contained"
                color="primary"
                style={{ marginTop: "1em", float: "right" }}
                onClick={this.submit.bind(this)}
              >
                Add
              </Button>
            </Grid>
          </Grid>
        </div>
      );
    }
  }
}
