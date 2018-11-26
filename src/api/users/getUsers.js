import api from 'api/api';

export const getUsers = () => api.get('users')
  .then(response => response)

export default getUsers;
