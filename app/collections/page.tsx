"use client";

import { useState } from "react";
import { useLocalStorage } from "@/lib/hooks/use-local-storage";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, FolderOpen } from "lucide-react";
import { CollectionCard } from "@/components/collections/collection-card";

interface Collection {
  id: string;
  name: string;
  recipes: string[];
}

export default function CollectionsPage() {
  const [collections, setCollections] = useLocalStorage<Collection[]>("collections", []);
  const [newCollectionName, setNewCollectionName] = useState("");

  const handleCreateCollection = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCollectionName.trim()) return;

    const newCollection: Collection = {
      id: Date.now().toString(),
      name: newCollectionName,
      recipes: [],
    };

    setCollections([...collections, newCollection]);
    setNewCollectionName("");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Recipe Collections</h1>

      <form onSubmit={handleCreateCollection} className="flex gap-4 mb-8">
        <Input
          type="text"
          placeholder="New collection name..."
          value={newCollectionName}
          onChange={(e) => setNewCollectionName(e.target.value)}
          className="max-w-md"
        />
        <Button type="submit">
          <Plus className="mr-2 h-4 w-4" />
          Create Collection
        </Button>
      </form>

      {collections.length === 0 ? (
        <div className="text-center">
          <FolderOpen className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
          <h2 className="text-xl font-semibold mb-2">No Collections Yet</h2>
          <p className="text-muted-foreground">
            Create your first collection to start organizing your recipes.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {collections.map((collection) => (
            <CollectionCard key={collection.id} collection={collection} />
          ))}
        </div>
      )}
    </div>
  );
}