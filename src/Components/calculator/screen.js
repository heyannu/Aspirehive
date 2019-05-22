import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";

export default class Screen extends Component {
  render() {
    return (
      <div>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <p>HI</p>
          </Grid>
          <Grid item xs={12} sm={6}>
            <p>hi</p>
          </Grid>
          <Grid item xs={12} sm={6}>
            <p>HI</p>
          </Grid>
          <Grid item xs={6} sm={3}>
            <p>HI</p>
          </Grid>
          <Grid item xs={6} sm={3}>
            <p>HI</p>
          </Grid>
          <Grid item xs={6} sm={3}>
            <p>HI</p>
          </Grid>
          <Grid item xs={6} sm={3}>
            <p>HI</p>
          </Grid>
        </Grid>
      </div>
    );
  }
}
