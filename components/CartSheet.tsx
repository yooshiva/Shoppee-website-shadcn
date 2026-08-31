"use client";

import { Minus, Plus, ShoppingCart, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from "@/components/ui/sheet";
import { useCart } from "@/components/CartContext";

export default function CartSheet() {
  const { cart, removeFromCart, updateQuantity, cartCount, cartTotal } =
    useCart();

  return (
    <Sheet>
      <SheetTrigger
        render={
          <Button variant="ghost" className="relative h-12 w-12">
            <ShoppingCart className="h-12 w-12" />
            {cartCount > 0 && (
              <Badge className="absolute -right-1 -top-1 h-5 min-w-5 rounded-full bg-[#ee4d2d] px-1">
                {cartCount}
              </Badge>
            )}
          </Button>
        }
      />

      <SheetContent>
        <SheetHeader>
          <SheetTitle>Your Cart</SheetTitle>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto px-4">
          {cart.length === 0 ? (
            <p className="py-10 text-center text-sm text-gray-500">
              Your cart is empty.
            </p>
          ) : (
            <div className="flex flex-col gap-4">
              {cart.map((item) => (
                <div key={item.id} className="flex gap-3 border-b pb-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-16 w-16 shrink-0 rounded object-cover"
                  />

                  <div className="flex flex-1 flex-col gap-1">
                    <p className="line-clamp-1 text-sm font-medium">
                      {item.name}
                    </p>

                    <span className="text-sm font-bold text-[#ee4d2d]">
                      ₱{item.price.toLocaleString()}
                    </span>

                    <div className="mt-1 flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="icon-sm"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                      >
                        <Minus className="h-3 w-3" />
                      </Button>

                      <span className="w-6 text-center text-sm">
                        {item.quantity}
                      </span>

                      <Button
                        variant="outline"
                        size="icon-sm"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                      >
                        <Plus className="h-3 w-3" />
                      </Button>

                      <Button
                        variant="ghost"
                        size="icon-sm"
                        className="ml-auto text-gray-400 hover:text-red-500"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cart.length > 0 && (
          <SheetFooter>
            <div className="flex items-center justify-between text-sm font-medium">
              <span>Total</span>
              <span className="text-lg font-bold text-[#ee4d2d]">
                ₱{cartTotal.toLocaleString()}
              </span>
            </div>

            <Button className="w-full">Checkout</Button>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  );
}
