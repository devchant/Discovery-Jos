import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Music } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-foreground font-bold">
                DJ
              </div>
              <span className="font-bold text-lg">DiscoverJos</span>
            </div>
            <p className="text-sm text-primary-foreground/80">
              Your gateway to authentic Jos and Plateau State experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/tours" className="hover:text-secondary transition-colors">Tours</a></li>
              <li><a href="/podcast" className="hover:text-secondary transition-colors">Podcast</a></li>
              <li><a href="/podcast" className="hover:text-secondary transition-colors">Blog</a></li>
              <li><a href="/membership" className="hover:text-secondary transition-colors">Membership</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-secondary transition-colors">Guided Tours</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Food Experiences</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Workshops</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Custom Trips</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/discover_jos"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com/discover_jos"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary transition-colors"
                aria-label="TikTok"
              >
                <Music size={20} />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <p>&copy; {currentYear} DiscoverJos. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-secondary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-secondary transition-colors">Terms of Service</a>
              <a href="/contact" className="hover:text-secondary transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
