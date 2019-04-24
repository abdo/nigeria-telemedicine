import * as actionTypes from '../actions/actionTypes';

const INITIAL_STATE = {
  submissions: [],
  isGettingSubmissions: false,
  isSubmittingSubmission: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.GET_SUBMISSIONS_START:
      return {
        ...state,
        isGettingSubmissions: true,
      };

    case actionTypes.GET_SUBMISSIONS_END:
      return {
        ...state,
        submissions: action.payload,
        isGettingSubmissions: false,
      };

    case actionTypes.SUBMIT_SUBMISSION_START:
      return {
        ...state,
        isSubmittingSubmission: true,
      };

    case actionTypes.SUBMIT_SUBMISSION_END:
      return {
        ...state,
        isSubmittingSubmission: false,
      };

    default:
      return state;
  }
};
