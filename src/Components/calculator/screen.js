import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import "../../Assets/css/todo.css";
export default class Screen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      a: "",
      sym: "",
      total: 0
    };
  }
  one(num, e) {
    this.state.a += num;
    this.setState({
      a: this.state.a
    });
  }
  two(num, e) {
    this.state.a += num;
    this.setState({
      a: this.state.a
    });
  }
  three(num, e) {
    this.state.a += num;
    this.setState({
      a: this.state.a
    });
  }
  four(num, e) {
    this.state.a += num;
    this.setState({
      a: this.state.a
    });
  }
  five(num, e) {
    this.state.a += num;
    this.setState({
      a: this.state.a
    });
  }
  six(num, e) {
    this.state.a += num;
    this.setState({
      a: this.state.a
    });
  }
  seven(num, e) {
    this.state.a += num;
    this.setState({
      a: this.state.a
    });
  }
  eight(num, e) {
    this.state.a += num;
    this.setState({
      a: this.state.a
    });
  }
  nine(num, e) {
    this.state.a += num;
    this.setState({
      a: this.state.a
    });
  }
  plus(e) {
    const b = parseInt(this.state.a);
    this.setState({
      total: b,
      a: "",
      sym: "+"
    });
  }
  clear() {
    this.setState({
      a: ""
    });
  }
  minus(e) {
    const b = parseInt(this.state.a);
    this.setState({
      total: b,
      sym: "-",
      a: ""
    });
  }
  divide(e) {
    const b = parseInt(this.state.a);
    this.setState({
      total: parseInt(this.state.a),
      sym: "/",
      a: ""
    });
  }
  equal(e) {
    if (this.state.sym == "+") {
      const b = this.state.total + parseInt(this.state.a);
      this.setState({
        total: b,
        a: ""
      });
    } else if (this.state.sym == "-") {
      const b = this.state.total - parseInt(this.state.a);
      this.setState({
        total: b,
        a: ""
      });
    } else if (this.state.sym == "/") {
      const b = this.state.total / parseInt(this.state.a);
      this.setState({
        total: b,
        a: ""
      });
    }
  }
  clearall() {
    this.setState({
      a: "",
      total: 0
    });
  }

  render() {
    return (
      <div>
        <Grid style={{ background: "#00364c", color: "#fff" }}>
          <Grid lg={12} style={{ border: "0.5px solid white" }}>
            <div style={{ width: "66.5em" }}>
              <TextField
                className="output"
                InputProps={{
                  readOnly: true
                }}
                value={this.state.total}
                style={{ justifyContent: "right", background: "#fff" }}
              />
            </div>
          </Grid>
          <Grid lg={12} style={{ border: "1px solid white" }}>
            <div style={{ width: "66.5em" }}>
              <TextField
                className="output"
                InputProps={{
                  readOnly: true
                }}
                value={this.state.a}
                style={{ justifyContent: "right", background: "#fff" }}
              />
            </div>
          </Grid>
          <Grid container lg={12}>
            <Grid style={{ border: "1px solid white" }} lg={4}>
              <center>
                <Button className="nums" onClick={this.clear.bind(this)}>
                  <h4 style={{ color: "#fff" }}>CLEAR</h4>
                </Button>
              </center>
            </Grid>
            <Grid style={{ border: "1px solid white" }} lg={4}>
              <center>
                <Button className="nums" onClick={this.clearall.bind(this)}>
                  <h4 style={{ color: "#fff" }}>CLEAR ALL</h4>
                </Button>
              </center>
            </Grid>
            <Grid style={{ border: "1px solid white" }} lg={4}>
              <center>
                <Button className="nums" onClick={this.divide.bind(this)}>
                  <h4 style={{ color: "#fff" }}>/</h4>
                </Button>
              </center>
            </Grid>
          </Grid>
          <Grid style={{ border: "1px solid white" }} container item lg={12}>
            <Grid style={{ border: "1px solid white" }} lg={3}>
              <center>
                <Button className="nums" onClick={this.seven.bind(this, 7)}>
                  <h4 style={{ color: "#fff" }}>7</h4>
                </Button>
              </center>
            </Grid>
            <Grid style={{ border: "1px solid white" }} lg={3}>
              <center>
                <Button className="nums" onClick={this.eight.bind(this, 8)}>
                  <h4 style={{ color: "#fff" }}>8</h4>
                </Button>
              </center>
            </Grid>
            <Grid style={{ border: "1px solid white" }} lg={3}>
              <center>
                <Button className="nums" onClick={this.nine.bind(this, 9)}>
                  <h4 style={{ color: "#fff" }}>9</h4>
                </Button>
              </center>
            </Grid>
            <Grid style={{ border: "1px solid white" }} lg={3}>
              <center>
                <Button className="nums" onClick={this.minus.bind(this)}>
                  <h4 style={{ color: "#fff" }}>-</h4>
                </Button>
              </center>
            </Grid>
          </Grid>
          <Grid style={{ border: "1px solid white" }} container item lg={12}>
            <Grid style={{ border: "1px solid white" }} lg={3}>
              <center>
                <Button className="nums" onClick={this.four.bind(this, 4)}>
                  <h4 style={{ color: "#fff" }}>4</h4>
                </Button>
              </center>
            </Grid>
            <Grid style={{ border: "1px solid white" }} lg={3}>
              <center>
                <Button className="nums" onClick={this.five.bind(this, 5)}>
                  <h4 style={{ color: "#fff" }}>5</h4>
                </Button>
              </center>
            </Grid>
            <Grid style={{ border: "1px solid white" }} lg={3}>
              <center>
                <Button className="nums" onClick={this.six.bind(this, 6)}>
                  <h4 style={{ color: "#fff" }}>6</h4>
                </Button>
              </center>
            </Grid>
            <Grid style={{ border: "1px solid white" }} lg={3}>
              <center>
                <Button className="nums" onClick={this.plus.bind(this)}>
                  <h4 style={{ color: "#fff" }}>+</h4>
                </Button>
              </center>
            </Grid>
          </Grid>
          <Grid style={{ border: "1px solid white" }} container item lg={12}>
            <Grid style={{ border: "1px solid white" }} lg={3}>
              <center>
                <Button className="nums" onClick={this.one.bind(this, 1)}>
                  <h4 style={{ color: "#fff" }}>1</h4>
                </Button>
              </center>
            </Grid>
            <Grid style={{ border: "1px solid white" }} lg={3}>
              <center>
                <Button className="nums" onClick={this.two.bind(this, 2)}>
                  <h4 style={{ color: "#fff" }}>2</h4>
                </Button>
              </center>
            </Grid>
            <Grid style={{ border: "1px solid white" }} lg={3}>
              <center>
                <Button className="nums" onClick={this.three.bind(this, 3)}>
                  <h4 style={{ color: "#fff" }}>3</h4>
                </Button>
              </center>
            </Grid>
            <Grid style={{ border: "1px solid white" }} lg={3}>
              <center>
                <Button className="nums" onClick={this.equal.bind(this)}>
                  <h4 style={{ color: "#fff" }}>=</h4>
                </Button>
              </center>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}
