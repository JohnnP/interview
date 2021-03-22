import axios from 'axios';

export default function getRepository(querie: any) {
  const response = axios.get('https://api.github.com/search/repositories', {
    params: {
      q: querie,
      per_page: 5
    } 
  });
  return response;
}