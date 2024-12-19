import { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  buttonText: string;
}

export function FeatureCard({ icon: Icon, title, description, href, buttonText }: FeatureCardProps) {
  return (
    <Card className="p-6 text-center">
      <Icon className="h-12 w-12 mx-auto mb-4" />
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-muted-foreground mb-4">{description}</p>
      <Link href={href}>
        <Button>{buttonText}</Button>
      </Link>
    </Card>
  );
}