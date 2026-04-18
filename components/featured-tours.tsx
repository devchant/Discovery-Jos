'use client';

import { tours } from '@/lib/data';
import { Clock, MapPin, Star, Users, ArrowRight } from 'lucide-react';

export function FeaturedTours() {
  const featuredTours = tours.slice(0, 3);

  return (
    <section id="tours" className="py-20 sm:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-secondary/10 rounded-full">
            <span className="text-secondary font-semibold text-sm">Curated Experiences</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
            Explore Our Featured Tours
          </h2>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
            Hand-picked adventures that showcase the best of Jos and Plateau State
          </p>
        </div>

        {/* Tour Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {featuredTours.map((tour) => (
            <div
              key={tour.id}
              className="group rounded-xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
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
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="text-secondary text-sm font-semibold mb-1">{tour.category}</p>
                    <h3 className="text-xl font-bold text-foreground">{tour.title}</h3>
                  </div>
                </div>

                <p className="text-foreground/60 text-sm mb-4">{tour.description}</p>

                {/* Details */}
                <div className="grid grid-cols-2 gap-3 mb-6 py-4 border-y border-border">
                  <div className="flex items-center gap-2 text-sm">
                    <Clock size={16} className="text-secondary" />
                    <span className="text-foreground/70">{tour.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin size={16} className="text-secondary" />
                    <span className="text-foreground/70">{tour.difficulty}</span>
                  </div>
                </div>

                {/* Rating & CTA */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className={i < 4 ? 'fill-primary text-primary' : 'text-border'}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-foreground/70 ml-2">
                      {tour.reviews} reviews
                    </span>
                  </div>
                </div>

                <button className="w-full mt-4 px-4 py-2 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-opacity-90 transition-all">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center">
          <button className="px-8 py-4 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/5 transition-all inline-flex items-center gap-2">
            View All {tours.length} Tours
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
