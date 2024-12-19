export interface Recipe {
  id: string;
  title: string;
  image: string;
  readyInMinutes: number;
  servings: number;
  sourceUrl: string;
  summary: string;
  instructions: string;
  ingredients: Ingredient[];
}

export interface Ingredient {
  id: number;
  name: string;
  amount: number;
  unit: string;
}

export interface SearchResults {
  results: Recipe[];
  offset: number;
  number: number;
  totalResults: number;
}