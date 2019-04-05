import Axios from 'axios';
import auth from '@/logics/auth';

export const stories = characters => Axios.get(`/stories`, {
  params: {
    ...auth,
    characters,
    limit: 5,
    orderBy: 'modified',
  }
}).then(data => data.data.data.results);

export default stories;
