'use client';

import { podcastEpisodes, blogPosts } from '@/lib/data';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Play, Calendar, Clock } from 'lucide-react';
import { useState } from 'react';

export default function PodcastPage() {
  const [activeTab, setActiveTab] = useState<'podcast' | 'blog'>('podcast');

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gray-50 py-16 sm:py-24 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-4 text-balance">
            Podcast & Stories
          </h1>
          <p className="text-xl text-foreground/60 max-w-2xl">
            Dive into conversations about culture, travel, business, and the Discover Jos journey
          </p>
        </div>
      </section>

      {/* Tabs & Content */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tabs */}
          <div className="flex gap-4 mb-12 border-b border-border">
            <button
              onClick={() => setActiveTab('podcast')}
              className={`px-6 py-4 font-semibold transition-all ${
                activeTab === 'podcast'
                  ? 'text-primary border-b-2 border-primary'
                  : 'text-foreground/60 hover:text-foreground'
              }`}
            >
              Podcast Episodes
            </button>
            <button
              onClick={() => setActiveTab('blog')}
              className={`px-6 py-4 font-semibold transition-all ${
                activeTab === 'blog'
                  ? 'text-primary border-b-2 border-primary'
                  : 'text-foreground/60 hover:text-foreground'
              }`}
            >
              Blog & Guides
            </button>
          </div>

          {/* Podcast Episodes */}
          {activeTab === 'podcast' && (
            <div className="space-y-6">
              {podcastEpisodes.map((episode) => (
                <div
                  key={episode.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  <div className="flex flex-col md:flex-row gap-6 p-6">
                    {/* Image */}
                    <div className="md:flex-shrink-0 md:w-40 h-40 rounded-lg overflow-hidden">
                      <img
                        src={episode.image}
                        alt={episode.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        {episode.title}
                      </h3>
                      <p className="text-foreground/60 mb-4">{episode.description}</p>

                      {/* Meta */}
                      <div className="flex flex-wrap gap-4 mb-4">
                        <div className="flex items-center gap-2 text-sm text-foreground/60">
                          <Calendar size={16} className="text-secondary" />
                          {new Date(episode.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-foreground/60">
                          <Clock size={16} className="text-secondary" />
                          {episode.duration}
                        </div>
                      </div>

                      <button className="px-6 py-2 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-opacity-90 transition-all flex items-center gap-2">
                        <Play size={18} />
                        Listen Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Blog Posts */}
          {activeTab === 'blog' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <div
                  key={post.id}
                  className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  {/* Image */}
                  <div className="overflow-hidden h-48">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-semibold text-secondary bg-secondary/10 px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                      <span className="text-sm text-foreground/60">
                        {new Date(post.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                        })}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {post.title}
                    </h3>
                    <p className="text-foreground/60 text-sm mb-4">{post.excerpt}</p>

                    <button className="text-primary font-semibold hover:text-opacity-80 transition-colors flex items-center gap-2">
                      Read More
                      <span>→</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Subscribe to Our Podcast</h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Get notified when new episodes drop. Join our growing community of culture enthusiasts.
          </p>
          <button className="px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-opacity-90 transition-all">
            Subscribe Now
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
