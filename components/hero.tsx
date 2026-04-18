import { ArrowRight, MapPin, Users } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-background py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div>
              <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
                <span className="text-primary font-semibold text-sm">Discover Authentic Experiences</span>
              </div>
              <h1 className="text-5xl sm:text-6xl font-bold text-foreground leading-tight text-balance">
                Experience Jos Like Never Before
              </h1>
              <p className="mt-6 text-xl text-foreground/70">
                Join Timothy Kunat on immersive cultural tours, culinary adventures, and unforgettable experiences across Plateau State. Discover hidden gems and connect with authentic Nigeria.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-opacity-90 transition-all flex items-center justify-center gap-2 group">
                Book Your Adventure
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/5 transition-all">
                Watch Our Story
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div>
                <div className="text-3xl font-bold text-primary">1000+</div>
                <p className="text-sm text-foreground/60">Happy Travelers</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary">25+</div>
                <p className="text-sm text-foreground/60">Unique Tours</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">4.8★</div>
                <p className="text-sm text-foreground/60">Avg Rating</p>
              </div>
            </div>
          </div>

          {/* Right - Featured image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=600&fit=crop"
                alt="Jos city landscape"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent"></div>
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-xl max-w-xs">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <MapPin size={24} className="text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Plateau State</p>
                  <p className="text-sm text-foreground/60">Nigeria's tourism gem</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
