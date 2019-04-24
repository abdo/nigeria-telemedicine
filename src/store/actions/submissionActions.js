import * as actionTypes from './actionTypes';
import http, { submissionAPI } from '../../assets/utils/httpService';

export const createSubmission = (submissionData, callback) => (dispatch) => {
  dispatch({
    type: actionTypes.CREATE_SUBMISSION_START,
  });
  http
    .post(submissionAPI, submissionData)
    .then(() => {
      if (callback) callback();
      dispatch({
        type: actionTypes.CREATE_SUBMISSION_END,
      });
    })
    .catch(() => {
      dispatch({
        type: actionTypes.CREATE_SUBMISSION_END,
      });
    });
};

export const getAllSubmissions = callback => (dispatch) => {
  dispatch({
    type: actionTypes.GET_SUBMISSIONS_START,
  });
  http
    .get(`${submissionAPI}/all`)
    .then((res) => {
      if (callback) callback();
      dispatch({
        type: actionTypes.GET_SUBMISSIONS_END,
        payload: res.data,
      });
    })
    .catch(() => {
      dispatch({
        type: actionTypes.GET_SUBMISSIONS_END,
      });
    });
};
