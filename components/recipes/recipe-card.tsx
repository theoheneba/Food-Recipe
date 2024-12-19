"use client";

import { Recipe } from "@/lib/types";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { useLocalStorage } from "@/lib/hooks/use-local-storage";
import Image from "next/image";

interface RecipeCardProps {
  recipe: Recipe;
}

export function RecipeCard({ recipe }: RecipeCardProps) {
  const [favorites, setFavorites] = useLocalStorage<Recipe[]>("favorites", []);
  const isFavorite = favorites.some((fav) => fav.id === recipe.id);

  const toggleFavorite = () => {
    if (isFavorite) {
      setFavorites(favorites.filter((fav) => fav.id !== recipe.id));
    } else {
      setFavorites([...favorites, recipe]);
    }
  };

  return (
    <Card>
      <CardHeader>
        <div className="relative h-48 w-full mb-4">
          <Image
            src={recipe.image}
            alt={recipe.title}
            fill
            className="object-cover rounded-md"
          />
        </div>
        <CardTitle className="line-clamp-2">{recipe.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground line-clamp-3">
          {recipe.summary.replace(/<[^>]*>/g, '')}
        </p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={toggleFavorite}>
          <Heart
            className={`mr-2 h-4 w-4 ${isFavorite ? "fill-current text-red-500" : ""}`}
          />
          {isFavorite ? "Saved" : "Save"}
        </Button>
        <Button variant="secondary" asChild>
          <a href={recipe.sourceUrl} target="_blank" rel="noopener noreferrer">
            View Recipe
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}