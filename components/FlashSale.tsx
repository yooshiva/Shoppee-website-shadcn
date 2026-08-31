"use client";

import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const flashProducts = [
  {
    id: 1,
    name: "Dune",
    price: 550,
    originalPrice: 850,
    discount: "35% OFF",
    image: "https://i.pinimg.com/736x/1b/83/b7/1b83b7fd9aba1bc0a5087968dbe4ce70.jpg",
  },
  {
    id: 2,
    name: "Atomic Habits",
    price: 450,
    originalPrice: 690,
    discount: "35% OFF",
    image: "https://i.pinimg.com/736x/82/ef/67/82ef67a4a955556570943d7757f26a57.jpg",
  },
  {
    id: 3,
    name: "The Complete Sherlock Holmes",
    price: 950,
    originalPrice: 1450,
    discount: "34% OFF",
    image: "https://i.pinimg.com/1200x/37/85/68/3785681da1e840c91c58b8537c1b0faa.jpg",
  },
  {
    id: 4,
    name: "Harry Potter and the Sorcerer's Stone",
    price: 580,
    originalPrice: 900,
    discount: "36% OFF",
    image: "https://i.pinimg.com/1200x/89/37/87/89378762a36b5f3a22e8cbdf08fdc693.jpg",
  },
  {
    id: 5,
    name: "One Piece",
    price: 7900,
    originalPrice: 12000,
    discount: "34% OFF",
    image: "https://i.pinimg.com/1200x/01/3e/4c/013e4cac57424c5bc78ab44ce423c102.jpg",
  },
];

export default function FlashSale() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-8">
      <div className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h2 className="text-2xl font-bold text-[#ee4d2d]">
            FLASH SALE
          </h2>

          <span className="rounded bg-[#ee4d2d] px-3 py-1 text-sm font-semibold text-white">
            ENDS SOON
          </span>
        </div>

        <Button variant="link" className="text-[#ee4d2d]">
          See More →
        </Button>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
        {flashProducts.map((product) => (
          <Card
            key={product.id}
            className="overflow-hidden transition hover:-translate-y-1 hover:shadow-md"
          >
            <CardContent className="p-0">
              {/* Book Image */}
              <div className="relative h-40 bg-gray-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain"
                />

                <Badge className="absolute right-2 top-2 bg-[#ee4d2d]">
                  {product.discount}
                </Badge>
              </div>

              {/* Product Information */}
              <div className="p-4">
                <h3 className="truncate font-medium">
                  {product.name}
                </h3>

                <div className="mt-2">
                  <span className="text-lg font-bold text-[#ee4d2d]">
                    ₱{product.price.toLocaleString()}
                  </span>

                  <span className="ml-2 text-sm text-gray-400 line-through">
                    ₱{product.originalPrice.toLocaleString()}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

