import {
  UPDATE_STUDIES,
  SELECT_STUDY,
  ADD_STUDIES,
  SELECT_GROUP,
  UPDATE_GROUPS,
  ADD_GROUPS,
} from './types';

export const updateStudies = studies => ({
  type: UPDATE_STUDIES,
  data: studies,
});

export const selectStudy = study => ({
  type: SELECT_STUDY,
  data: study,
});

export const addStudies = studies => ({
  type: ADD_STUDIES,
  data: studies,
});

export const selectGroup = group => ({
  type: SELECT_GROUP,
  data: group,
});

export const updateGroups = groups => ({
  type: UPDATE_GROUPS,
  data: groups,
});

export const addGroups = groups => ({
  type: ADD_GROUPS,
  data: groups,
});
