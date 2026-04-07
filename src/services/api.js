import axios from 'axios';

const API_KEY = import.meta.env.VITE_SPOONACULAR_API_KEY;
const BASE_URL = 'https://api.spoonacular.com/recipes';

export const cercaRicetteVeg = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}/complexSearch`, {
      params: {
        apiKey: API_KEY,
        query: query,
        diet: 'vegetarian',
      }
    });
    return response.data.results;
  } catch (error) {
    console.error("Errore API:", error.response ? error.response.status : error.message);
    return [];
  }
};

export const ottieniDettagliRicetta = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/${id}/information`, {
      params: {
        apiKey: API_KEY
      }
    });
    return response.data; // Questo restituisce l'oggetto con ingredienti e istruzioni
  } catch (error) {
    console.error("Errore API Dettagli:", error.response ? error.response.status : error.message);
    return null;
  }
};