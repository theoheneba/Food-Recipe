import Link from "next/link";
import { UtensilsCrossed } from "lucide-react";
import { Button } from "@/components/ui/button";

export function MainNav() {
  return (
    <div className="mr-4 flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <UtensilsCrossed className="h-6 w-6" />
        <span className="font-bold text-xl">Culinary Canvas</span>
      </Link>
      <nav className="flex items-center space-x-6 text-sm font-medium">
        <Link href="/search">
          <Button variant="ghost">Search</Button>
        </Link>
        <Link href="/favorites">
          <Button variant="ghost">Favorites</Button>
        </Link>
        <Link href="/collections">
          <Button variant="ghost">Collections</Button>
        </Link>
      </nav>
    </div>
  );
}