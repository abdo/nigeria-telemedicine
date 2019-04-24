import axios from 'axios';

const http = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  patch: axios.patch,
  delete: axios.delete,
};

export default http;

export const serverPath = 'http://192.168.43.107:3700';
export const submissionAPI = `${serverPath}/api/submission`;
