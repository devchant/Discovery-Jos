import { membershipPlans } from '@/lib/data';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Check, Users, Gift, Star, Zap } from 'lucide-react';

export default function MembershipPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gray-50 py-16 sm:py-24 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-4 text-balance">
            Join Discover Jos Inner Circle
          </h1>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
            Unlock exclusive experiences, discounts, and insider access to the best of Jos
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Gift size={32} className="text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Exclusive Access</h3>
              <p className="text-foreground/60">Early access to new tours and experiences</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full mb-4">
                <Zap size={32} className="text-secondary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Special Discounts</h3>
              <p className="text-foreground/60">Save up to 40% on all tours and experiences</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Users size={32} className="text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Community</h3>
              <p className="text-foreground/60">Connect with fellow culture enthusiasts</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full mb-4">
                <Star size={32} className="text-secondary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">VIP Treatment</h3>
              <p className="text-foreground/60">Priority booking and personalized service</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Choose Your Plan</h2>
            <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
              Select the membership tier that best fits your exploration style
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {membershipPlans.map((plan) => (
              <div
                key={plan.id}
                className={`rounded-xl overflow-hidden transition-all duration-300 ${
                  plan.popular
                    ? 'ring-2 ring-primary shadow-2xl scale-105'
                    : 'shadow-lg hover:shadow-xl'
                }`}
              >
                {plan.popular && (
                  <div className="bg-primary text-primary-foreground text-center py-2 font-semibold">
                    Most Popular
                  </div>
                )}

                <div className={`p-8 ${plan.popular ? 'bg-primary/5' : 'bg-white'}`}>
                  {/* Plan Header */}
                  <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <p className="text-foreground/60 text-sm mb-6">{plan.description}</p>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="text-5xl font-bold text-primary">
                      ₦{(plan.price / 1000).toFixed(0)}k
                    </div>
                    <p className="text-foreground/60 text-sm">{plan.period}</p>
                  </div>

                  {/* CTA Button */}
                  <button
                    className={`w-full py-3 rounded-lg font-semibold mb-8 transition-all ${
                      plan.popular
                        ? 'bg-primary text-primary-foreground hover:bg-opacity-90'
                        : 'border-2 border-primary text-primary hover:bg-primary/5'
                    }`}
                  >
                    Get Started
                  </button>

                  {/* Features */}
                  <div className="space-y-4">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <Check size={20} className="text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground/80 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-24 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {[
              {
                q: 'Can I change my membership tier?',
                a: 'Yes! You can upgrade or downgrade your membership at any time. Changes take effect at the start of your next billing cycle.',
              },
              {
                q: 'Is there a cancellation fee?',
                a: 'No cancellation fees. You can cancel your membership anytime with no penalties.',
              },
              {
                q: 'Do discounts apply to all tours?',
                a: 'Yes, membership discounts apply to all regular tours. Some special events may have different terms.',
              },
              {
                q: 'Can I pay upfront for a longer period?',
                a: 'Absolutely! Contact us about annual billing options and get an additional discount.',
              },
            ].map((faq, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-lg font-bold text-foreground mb-2">{faq.q}</h3>
                <p className="text-foreground/70">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Join?</h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Start your membership today and unlock a world of exclusive experiences
          </p>
          <button className="px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-opacity-90 transition-all">
            Become a Member
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
