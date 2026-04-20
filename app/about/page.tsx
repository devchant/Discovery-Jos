import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Users, Heart, Globe, Award } from 'lucide-react';

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: 'Authentic Experiences',
      description: 'We believe in genuine connections with local culture and communities',
    },
    {
      icon: Users,
      title: 'Community First',
      description: 'Supporting local guides, artists, and businesses is at our core',
    },
    {
      icon: Globe,
      title: 'Cultural Preservation',
      description: 'Celebrating and preserving the rich heritage of Plateau State',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Delivering exceptional quality in every experience we create',
    },
  ];

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gray-50 py-16 sm:py-24 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-4 text-balance">
            About DiscoverJos
          </h1>
          <p className="text-xl text-foreground/60 max-w-2xl">
            Your gateway to authentic Jos and Plateau State experiences
          </p>
        </div>
      </section>

      {/* Timothy's Story */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Meet Timothy Kunat
              </h2>
              <div className="space-y-4 text-foreground/70 text-lg">
                <p>
                  Timothy Kunat is a passionate tourism guide, content creator, and cultural enthusiast dedicated to showcasing the hidden gems of Jos and Plateau State.
                </p>
                <p>
                  With years of experience exploring local communities, cuisine, and traditions, Timothy has become a trusted voice in authentic Nigerian tourism. Through DiscoverJos, he connects travelers with genuine experiences that go beyond typical tourist attractions.
                </p>
                <p>
                  Beyond tours, Timothy hosts the "Just Start with Timothy Kunat" podcast, where he discusses business, leadership, culture, and the entrepreneurial journey of building DiscoverJos.
                </p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl h-96">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop"
                alt="Timothy Kunat"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 sm:py-24 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              What drives everything we do at DiscoverJos
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => {
              const Icon = value.icon;
              return (
                <div key={idx} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-foreground/20 rounded-full mb-4">
                    <Icon size={32} className="text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-primary-foreground/80">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-primary mb-2">1000+</div>
              <p className="text-foreground/60">Happy Travelers</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-secondary mb-2">25+</div>
              <p className="text-foreground/60">Unique Experiences</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-primary mb-2">4.8★</div>
              <p className="text-foreground/60">Average Rating</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-secondary mb-2">50+</div>
              <p className="text-foreground/60">Local Partners</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 sm:py-24 bg-secondary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl text-white/90 leading-relaxed">
            To transform how people experience Jos and Plateau State by creating authentic, sustainable tourism that celebrates local culture, empowers communities, and creates unforgettable memories for travelers from around the world.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
