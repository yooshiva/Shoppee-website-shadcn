"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useCart } from "@/components/CartContext";
import type { Product } from "@/components/data/products";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <Card className="product-card group flex h-full min-h-[520px] flex-col overflow-hidden rounded-xl border bg-white">
      <CardContent className="flex h-full flex-col p-0">
        
        {/* Product Image */}
        <div className="product-image-wrapper relative h-64 shrink-0 overflow-hidden bg-gray-100">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="product-image object-cover"
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
          />

          {/* Rating */}
          <div className="product-badge">
            ⭐ {product.rating}
          </div>

          {/* Find Similar */}
          <div className="find-similar absolute bottom-0 left-0 right-0 translate-y-full p-2 text-center transition-transform duration-300 group-hover:translate-y-0">
            <button
              onClick={() => {
                console.log("Find similar:", product.category);
              }}
              className="text-sm font-semibold text-[#ee4d2d] hover:underline"
            >
              Find Similar
            </button>
          </div>
        </div>

        {/* Product Information */}
        <div className="flex flex-1 flex-col p-4">

          {/* Description */}
          <p className="mt-2 line-clamp-2 min-h-[36px] text-xs leading-5 text-gray-500">
            {product.description}
          </p>

          {/* Specification */}
          <p className="mt-1 line-clamp-1 min-h-[18px] text-[11px] text-gray-400">
            {product.specification}
          </p>

          {/* Categories */}
          <div className="mt-3 flex min-h-[28px] flex-wrap gap-1.5">
            {product.category.map((category) => (
              <span
                key={category}
                className="category-pill rounded-md px-2 py-1 text-[10px] font-medium"
              >
                {category}
              </span>
            ))}
          </div>

          {/* Price */}
          <div className="mt-3">
            <span className="product-price">
              ₱{product.price.toLocaleString()}
            </span>
          </div>

          {/* Rating + Stock */}
          <div className="mt-2 flex items-center justify-between">
            <span className="product-rating">
              ⭐ {product.rating}
            </span>

            <span className="product-stock">
              {product.quantity} available
            </span>
          </div>

          {/* Button always stays at bottom */}
          <div className="mt-auto pt-4">
            <Button
              className="add-cart-button w-full rounded-lg"
              onClick={() => addToCart(product)}
              disabled={product.quantity === 0}
            >
              {product.quantity === 0
                ? "Out of Stock"
                : "Add to Cart"}
            </Button>
          </div>

        </div>
      </CardContent>
    </Card>
  );
}