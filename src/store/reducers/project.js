import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  projects: [],
  projectDetail: [],
  loading: false
};

const fetchProjectsStart = (state, action) => {
  return updateObject(state, { loading: true });
};

const fetchProjectsFail = (state, action) => {
  return updateObject(state, { loading: false });
};

const fetchProjectsSuccess = (state, action) => {
  return updateObject(state, { projects: action.projects, loading: false });
};

const fetchProjectDetailSuccess = (state, action) => {
  return updateObject(state, { projectDetail: action.projectDetail });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PROJECTS_START:
      return fetchProjectsStart(state, action);
    case actionTypes.FETCH_PROJECTS_SUCCESS:
      return fetchProjectsSuccess(state, action);
    case actionTypes.FETCH_PROJECTS_FAIL:
      return fetchProjectsFail(state, action);
    case actionTypes.FETCH_PROJECTSDETAIL_SUCCESS:
      return fetchProjectDetailSuccess(state, action);
    default:
      return state;
  }
};

export default reducer;
