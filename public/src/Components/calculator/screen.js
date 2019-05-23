import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import "../../Assets/css/todo.css";
export default class Screen extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Grid lg={12} style={{ border: "1px solid black" }}>
            <div style={{ width: "66.5em" }}>
              <TextField className="output" placeholder="0" />
            </div>
          </Grid>
          <Grid container lg={12}>
            <Grid style={{ border: "1px solid black" }} lg={9}>
              <center>
                <Button className="nums">
                  <h4>CLEAR</h4>
                </Button>
              </center>
            </Grid>
            <Grid style={{ border: "1px solid black" }} lg={3}>
              <center>
                <Button className="nums">
                  <h4>/</h4>
                </Button>
              </center>
            </Grid>
          </Grid>
          <Grid style={{ border: "1px solid black" }} container item lg={12}>
            <Grid style={{ border: "1px solid black" }} lg={3}>
              <center>
                <Button className="nums">
                  <h4>7</h4>
                </Button>
              </center>
            </Grid>
            <Grid style={{ border: "1px solid black" }} lg={3}>
              <center>
                <Button className="nums">
                  <h4>8</h4>
                </Button>
              </center>
            </Grid>
            <Grid style={{ border: "1px solid black" }} lg={3}>
              <center>
                <Button className="nums">
                  <h4>9</h4>
                </Button>
              </center>
            </Grid>
            <Grid style={{ border: "1px solid black" }} lg={3}>
              <center>
                <Button className="nums">
                  <h4>-</h4>
                </Button>
              </center>
            </Grid>
          </Grid>
          <Grid style={{ border: "1px solid black" }} container item lg={12}>
            <Grid style={{ border: "1px solid black" }} lg={3}>
              <center>
                <Button className="nums">
                  <h4>4</h4>
                </Button>
              </center>
            </Grid>
            <Grid style={{ border: "1px solid black" }} lg={3}>
              <center>
                <Button className="nums">
                  <h4>5</h4>
                </Button>
              </center>
            </Grid>
            <Grid style={{ border: "1px solid black" }} lg={3}>
              <center>
                <Button className="nums">
                  <h4>6</h4>
                </Button>
              </center>
            </Grid>
            <Grid style={{ border: "1px solid black" }} lg={3}>
              <center>
                <Button className="nums">
                  <h4>+</h4>
                </Button>
              </center>
            </Grid>
          </Grid>
          <Grid style={{ border: "1px solid black" }} container item lg={12}>
            <Grid style={{ border: "1px solid black" }} lg={3}>
              <center>
                <Button className="nums">
                  <h4>1</h4>
                </Button>
              </center>
            </Grid>
            <Grid style={{ border: "1px solid black" }} lg={3}>
              <center>
                <Button className="nums">
                  <h4>2</h4>
                </Button>
              </center>
            </Grid>
            <Grid style={{ border: "1px solid black" }} lg={3}>
              <center>
                <Button className="nums">
                  <h4>3</h4>
                </Button>
              </center>
            </Grid>
            <Grid style={{ border: "1px solid black" }} lg={3}>
              <center>
                <Button className="nums">
                  <h4>=</h4>
                </Button>
              </center>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}
