import { UPDATE_STUDIES, UPDATE_GROUPS } from './types';

export const updateStudies = studies => ({
  type: UPDATE_STUDIES,
  data: studies,
});

export const updateGroups = groups => ({
  type: UPDATE_GROUPS,
  data: groups,
});
