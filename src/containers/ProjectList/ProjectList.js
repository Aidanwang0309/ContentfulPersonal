import React, { Component } from "react";
import { connect } from "react-redux";
import Project from "../../components/Project/Project";
import * as actions from "../../store/actions/index";
import NavigationItems from "../../components/Navigation/NavigationItems";
import Header from "../../components/Header/Header";
import { Grid } from "semantic-ui-react";
// import { Route, Switch } from "react-router-dom";
// import ProjectDetail from "../ProjectDetail/ProjectDetail";

class ProjectList extends Component {
  componentDidMount() {
    this.props.onFetchProjects();
  }

  render() {
    let projects = this.props.projects.map(project => (
      <Grid.Column width={4} key={project.id}>
        <Project
          avatar={project.fields.projectAvatar.fields.file.url}
          description={project.fields.projectDescription}
          name={project.fields.projectName}
          key={project.id}
        />
      </Grid.Column>
    ));

    // console.log(this.props.projectDetail);

    return (
      <div className="ProjectsContainer">
        <Header />
        <NavigationItems page="projects" />
        <Grid>
          <Grid.Column width={2} />
          {projects}
          <Grid.Column width={2} />
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    projects: state.project.projects,
    projectDetail: state.project.projectDetail,
    loading: state.project.loading
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onFetchProjects: () => dispatch(actions.fetchProjects())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectList);
