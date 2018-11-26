import api from 'api/api';

export const getUsers = () => api.get('users')
  .then(response => {
    return response }).catch(error => {
      debugger
    });

export default getUsers;
