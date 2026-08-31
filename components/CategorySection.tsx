import { Card, CardContent } from "@/components/ui/card";

const categories = [
  { name: "Fiction", icon: "📖" },
  { name: "Manga", icon: "🎌" },
  { name: "Fantasy", icon: "🐉" },
  { name: "Mystery", icon: "🔍" },
  { name: "Romance", icon: "💕" },
  { name: "Sci-Fi", icon: "🚀" },
  { name: "Non-Fiction", icon: "📘" },
  { name: "Children's", icon: "🧸" },
];

type CategorySectionProps = {
  onCategoryClick: (category: string) => void;
};

export default function CategorySection({
  onCategoryClick,
}: CategorySectionProps) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8">
      {categories.map((category) => (
        <button
          key={category.name}
          type="button"
          onClick={() => onCategoryClick(category.name)}
          className="text-left"
        >
          <Card className="cursor-pointer transition-all hover:-translate-y-1 hover:shadow-md">
            <CardContent className="flex flex-col items-center justify-center p-6">
              <div className="text-3xl">{category.icon}</div>

              <p className="mt-3 text-center">
                {category.name}
              </p>
            </CardContent>
          </Card>
        </button>
      ))}
    </div>
  );
}