import axios from 'axios';

const http = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  patch: axios.patch,
  delete: axios.delete,
};

export default http;

export const serverPath = 'http://46.101.170.117/telemedicine';
export const submissionAPI = `${serverPath}/api/submission`;
