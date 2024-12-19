"use client";

import { useLocalStorage } from "@/lib/hooks/use-local-storage";
import { Recipe } from "@/lib/types";
import { RecipeCard } from "@/components/recipes/recipe-card";
import { Heart } from "lucide-react";

export default function FavoritesPage() {
  const [favorites] = useLocalStorage<Recipe[]>("favorites", []);

  if (favorites.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <Heart className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
        <h1 className="text-3xl font-bold mb-4">No Favorites Yet</h1>
        <p className="text-muted-foreground">
          Start adding recipes to your favorites to see them here.
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Favorite Recipes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {favorites.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}