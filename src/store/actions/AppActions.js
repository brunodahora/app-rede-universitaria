import {
  UPDATE_STUDIES,
  SELECT_STUDY,
  SELECT_GROUP,
  UPDATE_GROUPS,
} from './types';

export const updateStudies = studies => ({
  type: UPDATE_STUDIES,
  data: studies,
});

export const selectStudy = study => ({
  type: SELECT_STUDY,
  data: study,
});

export const selectGroup = group => ({
  type: SELECT_GROUP,
  data: group,
});

export const updateGroups = groups => ({
  type: UPDATE_GROUPS,
  data: groups,
});
