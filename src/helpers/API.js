import { create } from 'apisauce';
import { ACCESS_TOKEN, BASE_URL } from '../config';

const api = create({
  baseURL: BASE_URL,
  headers: { Authorization: ACCESS_TOKEN },
});

export const getStudies = () => api.get('/posts?per_page=100&order=asc');

export const getGroups = () => api.get('/job_listing?per_page=100&order=asc');

export const getStudiesPaginated = page => api.get(`/posts?per_page=10&page=${page}&order=asc`);

export const getGroupsPaginated = page => api.get(`/job_listing?per_page=10&page=${page}&order=asc`);
