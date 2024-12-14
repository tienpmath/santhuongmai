"use client";
import { ProductCard } from "@/components/product-card";

const products = [
  {
    id: "1",
    name: "Product 1",
    price: 19.99,
    imageUrl:
      "https://file.raovatlamdong.vn/images/unnamed.png?height=300&width=400",
  },
  {
    id: "2",
    name: "Product 2",
    price: 29.99,
    imageUrl: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "3",
    name: "Product 3",
    price: 39.99,
    imageUrl: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "4",
    name: "Product 4",
    price: 49.99,
    imageUrl: "/placeholder.svg?height=300&width=400",
  },
];

export default function ProductGrid() {
  const handleAddToCart = (id: string) => {
    console.log(`Added product ${id} to cart`);
    // Implement your add to cart logic here
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            imageUrl={product.imageUrl}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
}
