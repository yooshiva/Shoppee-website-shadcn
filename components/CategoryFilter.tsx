"use client";

import { Button } from "@/components/ui/button";

type CategoryFilterProps = {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
};

const categories = [
  "All",
  "Manga",
  "Fantasy",
  "Fiction",
  "Mystery",
  "Non-Fiction",
  "Children's",
];

export default function CategoryFilter({
  selectedCategory,
  onCategoryChange,
}: CategoryFilterProps) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-6">
      <h2 className="mb-4 text-xl font-semibold">
        Categories
      </h2>

      <div className="flex flex-wrap gap-3">
        {categories.map((category) => (
          <Button
            key={category}
            variant={
              selectedCategory === category
                ? "default"
                : "outline"
            }
            onClick={() => onCategoryChange(category)}
          >
            {category}
          </Button>
        ))}
      </div>
    </section>
  );
}