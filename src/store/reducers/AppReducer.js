import { UPDATE_STUDIES, UPDATE_GROUPS } from '../actions/types';

const INITIAL_STATE = {
  studies: [],
  groups: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_STUDIES:
      return { ...state, studies: action.data };
    case UPDATE_GROUPS:
      return { ...state, groups: action.data };
    default:
      return state;
  }
};
