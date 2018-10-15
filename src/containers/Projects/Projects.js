import React, { Component } from "react";
import { connect } from "react-redux";
import Project from "../../components/Project/Project";
import * as actions from "../../store/actions/index";
import NavigationItems from "../../components/Navigation/NavigationItems";
import Header from "../../components/Header/Header";
import { Grid } from "semantic-ui-react";

class Projects extends Component {
  componentDidMount() {
    this.props.onFetchProjects();
  }

  render() {
    let projects = this.props.projects.map(project => (
      <Grid.Column width={8}>
        <Project
          avatar={project.fields.projectAvatar.fields.file.url}
          description={project.fields.projectDescription}
          name={project.fields.projectName}
          key={project.id}
        />
      </Grid.Column>
    ));

    return (
      <div className="ProjectsContainer">
        <Header />
        <NavigationItems page="projects" />
        <Grid>{projects}</Grid>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    projects: state.project.projects,
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
)(Projects);
