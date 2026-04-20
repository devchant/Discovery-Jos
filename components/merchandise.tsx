'use client';

import Image from 'next/image';
import { ShoppingCart, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

const products = [
  {
    id: 1,
    name: "Discovery Jos Signature T-Shirt",
    price: 8500,
    image: "/tshirt.png",
    description: "Premium cotton, breathable and stylish. Wear the spirit of Jos.",
  },
  {
    id: 2,
    name: "Adventurer's Essential Mug",
    price: 4500,
    image: "/mug.png",
    description: "High-quality ceramic. Perfect for your morning coffee or tea.",
  },
];

export function Merchandise() {
  return (
    <section className="py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
          <div className="space-y-4">
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-foreground">
              Discovery Jos <span className="text-primary">Gear</span>
            </h2>
            <p className="text-lg text-foreground/60 max-w-xl">
              Take a piece of your adventure home. Our exclusive merchandise is designed for the modern explorer.
            </p>
          </div>
          <Button variant="outline" className="group border-primary text-primary hover:bg-primary hover:text-white transition-all">
            View All Shop Items <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {products.map((product) => (
            <div key={product.id} className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-border/50">
              <div className="relative aspect-square rounded-2xl overflow-hidden mb-8 bg-gray-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">{product.name}</h3>
                    <p className="text-foreground/60 leading-relaxed">{product.description}</p>
                  </div>
                  <span className="text-2xl font-black text-primary whitespace-nowrap">
                    ₦{product.price.toLocaleString()}
                  </span>
                </div>
                <div className="pt-4 flex gap-4">
                  <Button className="flex-1 h-14 bg-foreground text-white hover:bg-foreground/90 rounded-2xl text-lg font-bold transition-all">
                    Buy Now
                  </Button>
                  <Button variant="outline" size="icon" className="h-14 w-14 rounded-2xl border-2 hover:bg-primary/10 transition-all">
                    <ShoppingCart className="w-6 h-6" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
