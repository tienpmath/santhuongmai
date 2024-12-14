"use client";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  onAddToCart: (id: string) => void;
}

export function ProductCard({
  id,
  name,
  price,
  imageUrl,
  onAddToCart,
}: ProductCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-0">
        <AspectRatio ratio={4 / 3}>
          <Image
            src={imageUrl}
            alt={name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </AspectRatio>
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="line-clamp-1">{name}</CardTitle>
        <p className="text-sm text-muted-foreground mt-2">
          ${price.toFixed(2)}
        </p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button onClick={() => onAddToCart(id)} className="w-full">
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}
