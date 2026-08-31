import ProductCard from "@/components/ProductCard";
import products, { type Product } from "@/components/data/products";

type ProductGridProps = {
  selectedCategory: string;
  search: string;
};

export default function ProductGrid({
  selectedCategory,
  search,
}: ProductGridProps) {
  const filteredProducts: Product[] = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "All" ||
      product.category.includes(selectedCategory);

    const searchTerm = search.trim().toLowerCase();

    const matchesSearch =
      searchTerm === "" ||
      product.name.toLowerCase().includes(searchTerm) ||
      product.category.some((category) =>
        category.toLowerCase().includes(searchTerm)
      );

    // THIS LINE WAS MISSING
    return matchesCategory && matchesSearch;
  });

  console.log("SEARCH VALUE:", search);
  console.log("FILTERED PRODUCTS:", filteredProducts);

  return (
    <section
      id="products"
      className="mx-auto max-w-7xl px-6 py-10"
    >
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {filteredProducts.map((product: Product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <p className="py-10 text-center text-gray-500">
          No products found.
        </p>
      )}
    </section>
  );
}