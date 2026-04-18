'use client';

import { useState } from 'react';
import { tours } from '@/lib/data';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Clock, MapPin, Star } from 'lucide-react';

export default function ToursPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...new Set(tours.map(t => t.category))];
  const filteredTours = selectedCategory === 'All'
    ? tours
    : tours.filter(t => t.category === selectedCategory);

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Header */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-4 text-balance">
            All Tours & Experiences
          </h1>
          <p className="text-xl text-foreground/60 max-w-2xl">
            Discover our complete collection of hand-curated experiences across Jos and Plateau State
          </p>
        </div>
      </section>

      {/* Filters & Tours */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="mb-12">
            <h2 className="text-lg font-semibold text-foreground mb-4">Filter by Category</h2>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-foreground hover:bg-border'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Tours Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTours.map((tour) => (
              <div
                key={tour.id}
                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Image */}
                <div className="relative overflow-hidden h-64">
                  <img
                    src={tour.image}
                    alt={tour.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    ₦{(tour.price / 1000).toFixed(0)}k
                  </div>
                  <div className="absolute top-4 left-4 bg-secondary text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {tour.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">{tour.title}</h3>
                  <p className="text-foreground/60 text-sm mb-4">{tour.description}</p>

                  {/* Details */}
                  <div className="space-y-3 mb-6 py-4 border-y border-border">
                    <div className="flex items-center gap-2 text-sm">
                      <Clock size={16} className="text-secondary" />
                      <span className="text-foreground/70">{tour.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin size={16} className="text-secondary" />
                      <span className="text-foreground/70">{tour.difficulty}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={14}
                            className={i < 4 ? 'fill-primary text-primary' : 'text-border'}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-foreground/70">
                        {tour.rating} • {tour.reviews} reviews
                      </span>
                    </div>
                  </div>

                  <button className="w-full px-4 py-2 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-opacity-90 transition-all">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredTours.length === 0 && (
            <div className="text-center py-16">
              <p className="text-lg text-foreground/60">No tours found in this category.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
