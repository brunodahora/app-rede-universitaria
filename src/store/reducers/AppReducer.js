import {
  UPDATE_STUDIES,
  SELECT_STUDY,
  ADD_STUDIES,
  UPDATE_GROUPS,
  SELECT_GROUP,
  ADD_GROUPS,
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
    case ADD_STUDIES:
      return { ...state, studies: state.studies.concat(action.data) };
    case UPDATE_GROUPS:
      return { ...state, groups: action.data };
    case SELECT_GROUP:
      return { ...state, selectedGroup: action.data };
    case ADD_GROUPS:
      return { ...state, groups: state.groups.concat(action.data) };
    default:
      return state;
  }
};
