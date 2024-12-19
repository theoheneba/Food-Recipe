"use client";

import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Moon, Sun, UtensilsCrossed } from "lucide-react";
import Link from "next/link";

export function Navbar() {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="border-b">
      <div className="flex h-16 items-center px-4 container mx-auto">
        <Link href="/" className="flex items-center space-x-2">
          <UtensilsCrossed className="h-6 w-6" />
          <span className="font-bold text-xl">Culinary Canvas</span>
        </Link>
        
        <div className="ml-auto flex items-center space-x-4">
          <Link href="/search">
            <Button variant="ghost">Search</Button>
          </Link>
          <Link href="/favorites">
            <Button variant="ghost">Favorites</Button>
          </Link>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </div>
    </nav>
  );
}