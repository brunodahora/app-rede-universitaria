import { create } from 'apisauce';
import { ACCESS_TOKEN, BASE_URL } from '../config';

const api = create({
  baseURL: BASE_URL,
  headers: { Authorization: ACCESS_TOKEN },
});

export const getStudies = () => api.get('/posts');

export const getGroups = () => api.get('/job_listing');
