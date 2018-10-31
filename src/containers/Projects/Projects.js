import React from "react";
import { Route, Switch } from "react-router-dom";
import ProjectList from "../ProjectList/ProjectList";
import ProjectDetail from "../ProjectDetail/ProjectDetail";

const Projects = () => (
  <Switch>
    <Route exact path="/Projects" component={ProjectList} />
    <Route path="/Projects/:id" component={ProjectDetail} />
  </Switch>
);

export default Projects;
