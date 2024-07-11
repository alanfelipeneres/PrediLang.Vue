import apiClient from '../plugins/axios';

export default {
  getAll() {
    return apiClient.get('/Template');
   }
//   getUser(id) {
//     return apiClient.get(`/users/${id}`);
//   },
//   createUser(user) {
//     return apiClient.post('/users', user);
//   },
//   updateUser(id, user) {
//     return apiClient.put(`/users/${id}`, user);
//   },
//   deleteUser(id) {
//     return apiClient.delete(`/users/${id}`);
//   }
};