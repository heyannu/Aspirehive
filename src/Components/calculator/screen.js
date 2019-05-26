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
      total: 0,
      input1: "",
      inputdisp: ""
    };
  }
  inputchange(e) {
    // this.state.input = this.state.input + toString(e.target.value);
    this.setState({ input1: e.target.value });
  }
  one(num, e) {}
  two(num, e) {}
  three(num, e) {}
  four(num, e) {}
  five(num, e) {}
  six(num, e) {}
  seven(num, e) {}
  eight(num, e) {}
  nine(num, e) {}
  zero(num, e) {}

  plus(e) {
    this.state.inputdisp = this.state.inputdisp + this.state.input1 + "+";
    this.setState({
      inputdisp: this.state.inputdisp,
      input1: ""
    });
  }

  minus(e) {
    this.state.inputdisp = this.state.inputdisp + this.state.input1 + "-";
    this.setState({
      inputdisp: this.state.inputdisp,
      input1: ""
    });
  }

  divide(e) {
    this.state.inputdisp = this.state.inputdisp + this.state.input1 + "/";
    this.setState({
      inputdisp: this.state.inputdisp,
      input1: ""
    });
  }

  equal(e) {}

  clearall() {
    this.setState({
      input1: "",
      inputdisp: ""
    });
  }
  clear() {
    this.setState({
      input1: ""
    });
  }
  render() {
    return (
      <div>
        <div
          style={{
            width: "40em",
            padding: "2em",
            backgroundColor: "rgba(255, 255, 255, 0.7)",
            borderRadius: "1em"
          }}
          className="calc"
        >
          <div className="components">
            <div className="c_component">
              <input
                style={{ width: "100%", height: "100%" }}
                value={this.state.inputdisp}
                disabled
              />
            </div>
          </div>
          <div className="components">
            <div className="c_component">
              <input
                style={{ width: "100%", height: "100%" }}
                value={this.state.input1}
                onChange={this.inputchange.bind(this)}
              />
            </div>
          </div>

          <div className="components">
            <div className="box">
              <Button onClick={this.clearall.bind(this)} className="buttn">
                <h5>clearall</h5>
              </Button>
            </div>
            <div className="cbox">
              <Button onClick={this.clear.bind(this)} className="buttn">
                <h5>clear</h5>
              </Button>
            </div>
            <div className="c_component">
              <Button onClick={this.zero.bind(this)} className="buttn">
                <h5>0</h5>
              </Button>
            </div>
            <div className="sbox">
              <Button onClick={this.divide.bind(this)} className="buttn">
                <h5>/</h5>
              </Button>
            </div>
          </div>
          <div className="components">
            <div className="c_component">
              <Button onClick={this.seven.bind(this)} className="buttn">
                <h5>7</h5>
              </Button>
            </div>
            <div className="c_component">
              <Button onClick={this.eight.bind(this)} className="buttn">
                <h5>8</h5>
              </Button>
            </div>
            <div className="c_component">
              <Button onClick={this.nine.bind(this)} className="buttn">
                <h5>9</h5>
              </Button>
            </div>
            <div className="sym">
              <Button onClick={this.minus.bind(this)} className="buttn">
                <h5>-</h5>
              </Button>
            </div>
          </div>
          <div className="components">
            <div className="c_component">
              <Button onClick={this.four.bind(this)} className="buttn">
                <h5>4</h5>
              </Button>
            </div>
            <div className="c_component">
              <Button onClick={this.five.bind(this)} className="buttn">
                <h5>5</h5>
              </Button>
            </div>
            <div className="c_component">
              <Button onClick={this.six.bind(this)} className="buttn">
                <h5>6</h5>
              </Button>
            </div>
            <div className="sym">
              <Button onClick={this.plus.bind(this)} className="buttn">
                <h5>+</h5>
              </Button>
            </div>
          </div>
          <div className="components">
            <div className="c_component">
              <Button onClick={this.three.bind(this)} className="buttn">
                <h5>3</h5>
              </Button>
            </div>
            <div className="c_component">
              <Button onClick={this.two.bind(this)} className="buttn">
                <h5>2</h5>
              </Button>
            </div>
            <div className="c_component">
              <Button onClick={this.one.bind(this)} className="buttn">
                <h5>1</h5>
              </Button>
            </div>
            <div className="sym">
              <Button onClick={this.equal.bind(this)} className="buttn">
                <h5>=</h5>
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
