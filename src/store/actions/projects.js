import * as actionTypes from './actionTypes';
import * as contentful from 'contentful';

export const fetchProjectsStart = () => {
  return {
    type: actionTypes.FETCH_PROJECTS_START
  };
};

export const fetchProjectsSuccess = projects => {
  return {
    type: actionTypes.FETCH_PROJECTS_SUCCESS,
    projects: projects
  };
};

export const fetchProjectsFail = error => {
  return {
    type: actionTypes.FETCH_PROJECTS_FAIL,
    error: error
  };
};

export const fetchProjects = () => {
  return dispatch => {
    dispatch(fetchProjectsStart());

    const client = contentful.createClient({
      space: 'ffulpz3v1e5c',
      accessToken:
        '3a96c2c4368c521600164ceef531737673c99344b0fa7f5c2a287f52bd8f8371'
    });

    client
      .getEntries()
      .then(response => {
        let fetchedProjects = [];
        for (let key in response.items) {
          fetchedProjects.push({
            ...response.items[key],
            id: key
          });
        }
        console.log(fetchedProjects);
        dispatch(fetchProjectsSuccess(fetchedProjects));
      })
      .catch(err => {
        dispatch(fetchProjectsFail(err));
      });
  };
};
