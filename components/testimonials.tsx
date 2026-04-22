'use client';

import { testimonials } from '@/lib/data';
import { Star } from 'lucide-react';

export function Testimonials() {
  return (
    <section className="py-20 sm:py-32 bg-primary text-primary-foreground overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-secondary/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-balance">
            What Travelers Say About Us
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Real stories from real travelers who discovered Jos with Discover Jos
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/15 transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-secondary text-secondary"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-lg mb-6 text-primary-foreground/90 italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-primary-foreground/30"
                />
                <div>
                  <p className="font-bold text-primary-foreground">{testimonial.name}</p>
                  <p className="text-sm text-primary-foreground/70">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
