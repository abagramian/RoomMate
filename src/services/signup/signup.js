import axios from 'axios';
const baseUrl = '/api/users';

const signup = async information => {
  const response = await axios.post(baseUrl, information);
  return response.data;
}

export const signupServices = { signup };