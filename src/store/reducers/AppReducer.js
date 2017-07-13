import {
  UPDATE_STUDIES,
  SELECT_STUDY,
  UPDATE_GROUPS,
  SELECT_GROUP,
} from '../actions/types';

const INITIAL_STATE = {
  studies: [],
  selectedStudy: null,
  groups: [],
  selectedGroup: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_STUDIES:
      return { ...state, studies: action.data };
    case SELECT_STUDY:
      return { ...state, selectedStudy: action.data };
    case UPDATE_GROUPS:
      return { ...state, groups: action.data };
    case SELECT_GROUP:
      return { ...state, selectedGroup: action.data };
    default:
      return state;
  }
};
