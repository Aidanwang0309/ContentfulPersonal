import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";

class ProjectDetail extends Component {
  componentDidMount() {
    this.props.onFetchProjects();
  }
  render() {
    console.log(this.props.projectDetail);

    return <h1>Test</h1>;
  }
}
const mapStateToProps = state => {
  return {
    projectDetail: state.project.projectDetail
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
)(ProjectDetail);
