import axios from 'axios';

export default function getRepository(querie: string, page: number) {
  const response = axios.get('https://api.github.com/search/repositories', {
    params: {
      q: querie,
      per_page: 5,
      page
    } 
  });
  return response;
}