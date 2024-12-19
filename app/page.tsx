import { UtensilsCrossed, Search, Heart, BookOpen } from "lucide-react";
import { FeatureCard } from "@/components/home/feature-card";

const features = [
  {
    icon: Search,
    title: "Search Recipes",
    description: "Browse through thousands of recipes from various cuisines and dietary preferences.",
    href: "/search",
    buttonText: "Start Searching"
  },
  {
    icon: Heart,
    title: "Save Favorites",
    description: "Keep track of your favorite recipes and access them anytime, anywhere.",
    href: "/favorites",
    buttonText: "View Favorites"
  },
  {
    icon: BookOpen,
    title: "Recipe Collections",
    description: "Organize your recipes into collections for easy access and meal planning.",
    href: "/collections",
    buttonText: "Browse Collections"
  }
];

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <div className="flex justify-center mb-4">
          <UtensilsCrossed className="h-16 w-16" />
        </div>
        <h1 className="text-4xl font-bold mb-4">Welcome to Culinary Canvas</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Discover, save, and organize your favorite recipes. From quick weekday meals to gourmet weekend feasts.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {features.map((feature) => (
          <FeatureCard key={feature.href} {...feature} />
        ))}
      </div>
    </div>
  );
}