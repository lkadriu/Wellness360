import axios from 'axios';

const API_URL = 'http://localhost:5004/api/EmriUshqimit';

export const getEmratUshqimeve = () => axios.get(API_URL);

export const getEmriUshqimit = (ushqimi) => axios.get(`${API_URL}/${ushqimi}`);

export const createEmriUshqimit = (emriUshqimit) => axios.post(API_URL, emriUshqimit);

export const updateEmriUshqimit = (ushqimi, emriUshqimit) => axios.put(`${API_URL}/${ushqimi}`, emriUshqimit);

export const deleteEmriUshqimit = (ushqimi) => axios.delete(`${API_URL}/${ushqimi}`);
