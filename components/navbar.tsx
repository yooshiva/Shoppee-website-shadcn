"use client";

import { useState } from "react";

import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import CartSheet from "@/components/CartSheet";

type NavbarProps = {
  search: string;
  onSearchChange: (value: string) => void;
};

export default function Navbar({
  search,
  onSearchChange,
}: NavbarProps) {
  const [inputValue, setInputValue] = useState(search ?? "");

  const handleSearch = () => {
    onSearchChange(inputValue);
  };

  return (
    <nav className="bg-white">
      <div className="flex items-center gap-4 px-6 py-4">
        <div className="flex flex-1 gap-2">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                handleSearch();
              }
            }}
            placeholder="Search books or genres..."
            className="flex-1"
          />

          <Button
            type="button"
            onClick={handleSearch}
            className="bg-[#ee4d2d] hover:bg-[#d63d22]"
          >
            <Search className="h-5 w-5" />
            Search
          </Button>
        </div>

        <CartSheet />
      </div>
    </nav>
  );
}

