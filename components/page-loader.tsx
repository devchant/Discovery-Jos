'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useLoader } from './loader-provider';

export function PageLoader() {
  const { isLoading } = useLoader();
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (isLoading) {
      setShouldRender(true);
    } else {
      const timer = setTimeout(() => setShouldRender(false), 500); // Wait for exit animation
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  if (!shouldRender) return null;

  return (
    <div 
      className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center transition-all duration-500 ease-in-out ${
        isLoading ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}
    >
      {/* Blurred Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-2xl" />

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center gap-8 px-4">
        {/* Central Logo with Pulse Animation */}
        <div className="relative w-32 h-32 md:w-48 md:h-48 animate-pulse">
          <Image
            src="/logo.png"
            alt="Discovery Jos Logo"
            fill
            className="object-contain brightness-0 invert drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]"
          />
        </div>

        {/* Loading Message */}
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="text-2xl md:text-3xl font-black tracking-widest text-white uppercase animate-in fade-in slide-in-from-bottom duration-700">
            Preparing Your <span className="text-primary">Adventure</span>
          </h2>
          <div className="flex gap-2">
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]" />
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]" />
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" />
          </div>
        </div>
      </div>

      {/* Slide Animation CSS */}
      <style jsx global>{`
        @keyframes custom-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(0.95); }
        }
      `}</style>
    </div>
  );
}
