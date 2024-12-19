import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FolderOpen } from "lucide-react";

interface CollectionCardProps {
  collection: {
    id: string;
    name: string;
    recipes: string[];
  };
}

export function CollectionCard({ collection }: CollectionCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FolderOpen className="h-5 w-5" />
          {collection.name}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          {collection.recipes.length} recipes
        </p>
      </CardContent>
    </Card>
  );
}