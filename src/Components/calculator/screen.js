import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import "../../Assets/css/todo.css";
export default class Screen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input1: ""
    };
  }
  inputchange(e) {
    // this.state.input = this.state.input + toString(e.target.value);
    this.setState({ input1: e.target.value });
  }
  one(num) {
    this.state.input1 = this.state.input1 + "1";
    this.setState({
      input1: this.state.input1
    });
  }
  two(num) {
    this.state.input1 = this.state.input1 + "2";
    this.setState({
      input1: this.state.input1
    });
  }
  three(num) {
    this.state.input1 = this.state.input1 + "3";
    this.setState({
      input1: this.state.input1
    });
  }
  four(num) {
    this.state.input1 = this.state.input1 + "4";
    this.setState({
      input1: this.state.input1
    });
  }
  five(num) {
    this.state.input1 = this.state.input1 + "5";
    this.setState({
      input1: this.state.input1
    });
  }
  six(num) {
    this.state.input1 = this.state.input1 + "6";
    this.setState({
      input1: this.state.input1
    });
  }
  seven(num) {
    this.state.input1 = this.state.input1 + "7";
    this.setState({
      input1: this.state.input1
    });
  }
  eight(num) {
    this.state.input1 = this.state.input1 + "8";
    this.setState({
      input1: this.state.input1
    });
  }
  nine(num) {
    this.state.input1 = this.state.input1 + "9";
    this.setState({
      input1: this.state.input1
    });
  }
  zero(num) {
    this.state.input1 = this.state.input1 + "0";
    this.setState({
      input1: this.state.input1
    });
  }

  plus(e) {
    const temp = this.state.input1 + "+";
    this.setState({
      input1: temp
    });
  }

  minus(e) {
    const temp = this.state.input1 + "-";
    this.setState({
      input1: temp
    });
  }

  divide(e) {
    const temp = this.state.input1 + "/";
    this.setState({
      input1: temp
    });
  }

  equal(e) {
    var exprsn = this.state.input1;
    var output = eval(exprsn);
    this.setState({
      input1: output
    });
  }
  decimal(e) {
    this.state.input1 = this.state.input1 + ".";
    this.setState({
      input1: this.state.input1
    });
  }
  clearall() {
    this.setState({
      input: ""
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
                value={this.state.input1}
                onChange={this.inputchange.bind(this)}
              />
            </div>
          </div>

          <div className="components">
            <div className="box">
              <Button onClick={this.clear.bind(this)} className="buttn">
                <h5>CLEAR</h5>
              </Button>
            </div>
            <div className="c_component">
              <Button onClick={this.zero.bind(this)} className="buttn">
                <h5>0</h5>
              </Button>
            </div>
            <div className="c_component">
              <Button onClick={this.decimal.bind(this)} className="buttn">
                <h5>.</h5>
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
