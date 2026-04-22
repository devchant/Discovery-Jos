'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X, Instagram, Facebook, Music, Linkedin, ArrowRight } from 'lucide-react';

import { useLoader } from './loader-provider';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { startLoading } = useLoader();

  const handleLinkClick = () => {
    startLoading();
    setIsOpen(false);
  };

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const links = [
    { href: '/', label: 'Home' },
    { href: '/tours', label: 'Tours' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  const socials = [
    { href: 'https://instagram.com/discover_jos', icon: Instagram, label: 'Instagram' },
    { href: 'https://facebook.com/discover_jos', icon: Facebook, label: 'Facebook' },
    { href: '#', icon: Music, label: 'TikTok' },
    { href: '#', icon: Linkedin, label: 'LinkedIn' },
  ];

  return (
    <nav className={`sticky top-0 transition-shadow duration-300 ${isOpen ? 'z-40 shadow-none' : 'z-40 shadow-sm'} bg-white/80 backdrop-blur-md border-b border-border h-20`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          {/* Logo */}
          <Link href="/" className="flex items-center group" onClick={handleLinkClick}>
            <Image
              src="/logo.png"
              alt="Discover Jos Logo"
              width={180}
              height={64}
              className="h-14 w-auto group-hover:scale-105 transition-transform duration-300"
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 h-full">
            {links.map(link => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  className={`h-full flex items-center text-base font-bold tracking-tight transition-colors relative group ${isActive ? 'text-primary' : 'text-black hover:text-primary/80'}`}
                >
                  {link.label}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                </Link>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex gap-4">
            <Link href="/book" onClick={handleLinkClick}>
              <button className="px-5 py-1.5 rounded-full bg-primary text-primary-foreground text-sm font-bold shadow-sm hover:shadow-md hover:scale-105 transition-all">
                Book a Tour
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden p-2 text-black hover:bg-black/5 rounded-lg transition-colors"
          >
            <Menu size={22} />
          </button>
        </div>
      </div>

      {/* Full-Screen Mobile Navigation Overlay */}
      <aside
        className={`fixed inset-0 w-full h-[100dvh] bg-white text-black z-[99999] transition-all duration-500 ease-in-out md:hidden flex flex-col ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}
      >
        {/* Full-Screen Header */}
        <div className="p-6 flex justify-between items-center border-b border-border/50">
          <Link href="/" className="flex items-center" onClick={() => setIsOpen(false)}>
            <Image
              src="/logo.png"
              alt="Discover Jos Logo"
              width={140}
              height={50}
              className="h-10 w-auto"
            />
          </Link>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 text-black/50 hover:text-black hover:bg-black/5 rounded-full transition-all"
          >
            <X size={28} />
          </button>
        </div>

        {/* Left-Aligned Navigation Links (No Icons) */}
        <div className="flex-1 flex flex-col items-start justify-start space-y-1 py-8 px-6 overflow-y-auto">
          {links.map((link, index) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`w-full py-4 px-6 rounded-xl text-lg font-bold transition-all transform hover:bg-black/5 ${isOpen ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}
                style={{
                  transitionDelay: `${index * 50}ms`,
                  color: isActive ? '#ee8913' : '#000000'
                }}
                onClick={handleLinkClick}
              >
                <span>{link.label}</span>
              </Link>
            );
          })}
        </div>

        {/* Full-Screen Footer */}
        <div className="p-10 flex flex-col items-center gap-8 bg-gray-50/50 border-t border-border/50">
          <Link href="/book" className="w-full max-w-sm" onClick={handleLinkClick}>
            <button className="w-full py-4 bg-primary text-primary-foreground text-lg font-bold rounded-xl shadow-md flex items-center justify-center gap-2 active:scale-95 transition-all">
              Book Your Adventure
              <ArrowRight size={20} />
            </button>
          </Link>

          <div className="flex gap-8">
            {socials.map(social => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black/40 hover:text-primary hover:scale-125 transition-all"
                aria-label={social.label}
              >
                <social.icon size={26} />
              </a>
            ))}
          </div>
        </div>
      </aside>
    </nav>
  );
}
