import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import FormLabel from "@material-ui/core/FormLabel";
import "../../Assets/css/todo.css";
import TextField from "@material-ui/core/TextField";
import { FormLabel } from "@material-ui/core";
import { TextField } from "material-ui";
export default class Screen extends Component {
  render() {
    return (
      <div>
        <Grid container>
          <h3>Add Task</h3>
          <FormLabel className="lab">Email</FormLabel>
          <center>
            <TextField
              placeholder="Title"
              type="text"
              className="todof"
              name="title"
              variant="outlined"
            />
          </center>
        </Grid>
      </div>
    );
  }
}
