import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://62584f320c918296a49543e7.mockapi.io';

export const fetchTasks = createAsyncThunk('contacts/fetchAll', async () => {
  const response = await axios.get('/contacts');
  console.log(response);
  return response.data;
});
