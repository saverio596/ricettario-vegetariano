import axios from 'axios';

const API_KEY = import.meta.env.VITE_SPOONACULAR_API_KEY;
const BASE_URL = 'https://api.spoonacular.com/recipes';


const apiClient = axios.create({
  baseURL: 'https://api.spoonacular.com/recipes',
  params: {
    apiKey: 'API_KEY'
  }
});

export const cercaRicetteVeg = async (query) => {
  const response = await apiClient.get('/complexSearch', {
    params: { query, diet: 'vegetarian' }
  });
  return response.data.results;
};

export const ottieniDettagliRicetta = async (id) => {
  const response = await apiClient.get(`/${id}/information`); // Solo l'endpoint specifico
  return response.data;
};