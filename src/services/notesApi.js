import { post, get, put } from './request';

export const createNote = note => post('/api/v1/notes', note);
export const getNotes = () => get('/api/v1/notes');
export const getNote = id => get(`/api/v1/notes/${id}`);
export const updateNote = note => put(`/api/v1/notes/${note._id}`, note);
