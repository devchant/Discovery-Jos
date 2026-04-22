'use client';

import Link from 'next/link';
import { ArrowRight, Play } from 'lucide-react';
import { useLoader } from './loader-provider';

export function Hero() {
  const { startLoading } = useLoader();

  return (
    <section id="home" className="relative min-h-[90vh] md:min-h-[90vh] h-auto py-16 md:py-0 flex items-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="https://res.cloudinary.com/dlctwbems/video/upload/q_auto/f_auto/v1776576598/134997-760679970_medium_mg5hir.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="space-y-8 max-w-4xl mx-auto">


          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black leading-tight tracking-tight drop-shadow-2xl flex flex-wrap justify-center items-center gap-x-6 gap-y-4">
            <span>Experience</span>
            <span className="inline-flex items-center">
              <img
                src="/logo.png"
                alt="Discover Jos"
                className="h-[1.2em] w-auto object-contain brightness-0 invert"
              />
            </span>
            <span className="w-full lg:w-auto">Like Never Before</span>
          </h1>

          <p className="mt-8 text-xl sm:text-2xl text-white/90 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-lg">
            Join Timothy Kunat on immersive cultural tours, culinary adventures, and unforgettable experiences across Plateau State.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <Link href="/book" onClick={startLoading}>
              <button className="px-10 py-5 bg-primary text-primary-foreground text-lg font-bold rounded-full hover:scale-105 transition-all shadow-2xl flex items-center justify-center gap-3 group">
                Book Your Adventure
                <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <a 
              href="instagram://user?username=discover_jos" 
              onClick={(e) => {
                // If it's a mobile device, the protocol might not be handled. 
                // We attempt to open the app, and if it fails or doesn't redirect fast enough, we fall back.
                const timeout = setTimeout(() => {
                  window.location.href = "https://instagram.com/discover_jos";
                }, 1000);
                
                // If the app opens, the page might hidden/blur
                window.addEventListener('blur', () => clearTimeout(timeout), { once: true });
              }}
              target="_blank" 
              rel="noopener noreferrer"
              className="px-10 py-5 bg-white/10 backdrop-blur-md border border-white/30 text-white text-lg font-bold rounded-full hover:bg-white/20 transition-all flex items-center justify-center gap-3"
            >
              <Play size={22} fill="currentColor" />
              Watch Our Story
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-70">
        <div className="w-low h-12 bg-primary rounded-full" style={{ width: '2px' }} />
      </div>
    </section>
  );
}
