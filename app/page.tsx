"use client";

import { useState } from "react";

import CategoryFilter from "@/components/CategoryFilter";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/navbar";
import ProductGrid from "@/components/ProductGrid";
import HeroBanner from "@/components/HeroBanner";
import CategorySection from "@/components/CategorySection";
import FlashSale from "@/components/FlashSale";
import DailyDiscover from "@/components/DailyDiscover";
import Footer from "@/components/Footer";

export default function Home() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const isSearching = search.trim() !== "";

  return (
    <main className="min-h-screen bg-gray-50">
      <TopBar />

      <Navbar
        search={search}
        onSearchChange={setSearch}
      />

      {isSearching ? (
        // SEARCH RESULTS
        <ProductGrid
          selectedCategory="All"
          search={search}
        />
      ) : (
        // NORMAL HOMEPAGE
        <>
          <HeroBanner />

          <CategorySection
            onCategoryClick={setSelectedCategory}
          />

          <FlashSale />

          <CategoryFilter
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />

          <ProductGrid
            selectedCategory={selectedCategory}
            search=""
          />

          <DailyDiscover />
        </>
      )}

      <Footer />
    </main>
  );
}

