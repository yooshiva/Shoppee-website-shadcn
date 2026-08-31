import { Button } from "@/components/ui/button";

export default function HeroBanner() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-6">
      <div className="relative overflow-hidden rounded-lg bg-[#ee4d2d]">
        <div className="flex min-h-[280px] items-center px-12 py-10 text-white">
          <div>
            <p className="mb-2 text-sm font-medium uppercase tracking-wide">
              Featured Reads
            </p>

            <h2 className="text-4xl font-bold md:text-5xl">
              Great Books, Great Prices!
            </h2>

            <p className="mt-4 max-w-lg text-lg text-white/90">
              Discover bestsellers, hidden gems, and manga favorites
              at prices you&apos;ll love.
            </p>

            <Button className="mt-6 bg-white font-semibold text-[#ee4d2d] hover:bg-gray-100">
              Shop Now
            </Button>
          </div>

          <div className="ml-auto hidden text-[120px] md:block">
            📚
          </div>
        </div>
      </div>
    </section>
  );
}