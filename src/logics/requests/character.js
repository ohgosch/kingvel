import Axios from 'axios';
import auth from '@/logics/auth';

export const character = id => Axios.get(`/characters/${id}`, {
  params: {
    ...auth,
  }
}).then(data => data.data.data.results[0]);

export default character;
