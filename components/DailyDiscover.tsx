import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";

const discoverProducts = [
  {
    id: 101,
    name: "The Alchemist",
    category: ["Fiction"],
    description: "A young shepherd follows his dreams in search of treasure.",
    specification: "Paperback • 208 pages",
    rating: 9.0,
    price: 580,
    quantity: 15,
    image: "https://i.pinimg.com/1200x/49/7f/22/497f22527c6c0b20fb0bbe814ab918b2.jpg",
  },
  {
    id: 102,
    name: "1984",
    category: ["Fiction", "Mystery"],
    description: "George Orwell's classic dystopian novel.",
    specification: "Paperback • 328 pages",
    rating: 9.2,
    price: 620,
    quantity: 12,
    image: "https://i.pinimg.com/1200x/43/75/b7/4375b7d9bf24b88aa53744b417227485.jpg",
  },
  {
    id: 103,
    name: "The Little Prince",
    category: ["Fiction", "Children's"],
    description: "A timeless story about friendship, love, and imagination.",
    specification: "Hardcover • 96 pages",
    rating: 9.4,
    price: 450,
    quantity: 20,
    image: "https://i.pinimg.com/736x/20/c8/4b/20c84b4c7b0a238c94e24e7c3720d7c5.jpg",
  },
  {
    id: 104,
    name: "Norwegian Wood",
    category: ["Fiction", "Romance"],
    description: "Haruki Murakami's emotional story of love and growing up.",
    specification: "Paperback • 298 pages",
    rating: 9.1,
    price: 750,
    quantity: 10,
    image: "https://i.pinimg.com/736x/d4/09/a8/d409a8f5e0c3278a777888062604ceec.jpg",
  },
  {
    id: 105,
    name: "The Midnight Library",
    category: ["Fiction", "Fantasy"],
    description: "A magical library offers endless possibilities for different lives.",
    specification: "Hardcover • 304 pages",
    rating: 9.3,
    price: 820,
    quantity: 14,
    image: "https://i.pinimg.com/1200x/62/ae/d8/62aed8a0b105b2d0ccdcf98c341f0f0e.jpg",
  },
];

export default function DailyDiscover() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-8">
      <div className="mb-5 border-b">
        <h2 className="inline-block border-b-2 border-[#ee4d2d] pb-4 text-2xl font-bold text-[#ee4d2d]">
          DAILY DISCOVER
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {discoverProducts.map((product) => (
          <div key={product.id} className="group relative">
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <Button variant="outline" className="bg-white px-10">
          See More
        </Button>
      </div>
    </section>
  );
}

