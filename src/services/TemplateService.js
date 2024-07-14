import apiClient from '../plugins/axios';

export default {
  getAll() {
    return apiClient.get('/Template');
  },
  async getDefault() {
    var template = await this.getAll();
    if (template) {
      return template.data.data[0];
    }
  },
  async getById(id) {
    var template = await apiClient.get('/Template/' + id)
    if (template) {
      return template.data.data;
    }
  },
  put(data) {
    return apiClient.put("/Template", data);
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