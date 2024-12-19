const SPOONACULAR_API_KEY = process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY;
const API_BASE_URL = 'https://api.spoonacular.com/recipes';

export async function searchRecipes(query: string, offset: number = 0) {
  const response = await fetch(
    `${API_BASE_URL}/complexSearch?apiKey=${SPOONACULAR_API_KEY}&query=${query}&offset=${offset}&number=12&addRecipeInformation=true`
  );
  return response.json();
}

export async function getRecipeById(id: string) {
  const response = await fetch(
    `${API_BASE_URL}/${id}/information?apiKey=${SPOONACULAR_API_KEY}`
  );
  return response.json();
}