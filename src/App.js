import React, { Component } from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import Layout from "./utils/Layout/Layout";
import Home from "./containers/Home/Home";
import Projects from "./containers/Projects/Projects";
import ProjectDetail from "./containers/ProjectDetail/ProjectDetail";
import * as actions from "./store/actions/index";

class App extends Component {
  render() {
    let routes = (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/projects" component={Projects} />
        <Route path="/projectDetail" component={ProjectDetail} />
        <Redirect to="/" />
      </Switch>
    );

    return <div>{routes}</div>;
  }
}

export default withRouter(App);
