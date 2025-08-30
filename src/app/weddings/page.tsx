'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import InquirySection from '@/components/InquirySection';
import PortfolioSection from '@/components/PortfolioSection';
import AsSeenIn from '@/components/AsSeenIn';
import FAQSection from '@/components/FAQSection';
import { ScrollAnimation } from '@/components/ScrollAnimation';
import { PageTransition } from '@/components/PageTransition';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Plus } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function WeddingsPage() {
  const scrollToInquiry = () => {
    const inquirySection = document.getElementById('inquiry-section');
    if (inquirySection) {
      inquirySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToWelcome = () => {
    const welcomeSection = document.getElementById('welcome-section');
    if (welcomeSection) {
      welcomeSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const packages = [
    {
      title: 'Full Planning',
      price: 'Starting at $4,500',
      timeline: '9-12+ months before wedding',
      planning: [
        'Complete design creation',
        'Full vendor selection and management',
        'Budget creation and oversight',
        'Guest list management',
        'RSVP tracking',
        'Timeline and logistics planning',
        'Monthly meetings and unlimited communication'
      ],
      weddingDay: [
        'Two assistants on-site',
        'Full vendor coordination',
        'Timeline execution',
        'Guest management',
        'Emergency kit and troubleshooting'
      ]
    },
    {
      title: 'Partial Planning',
      price: 'Starting at $2,500',
      timeline: '4-6 months before wedding',
      planning: [
        'Design refinement and guidance',
        'Vendor recommendations and review',
        'Budget review and adjustments',
        'Timeline creation',
        'Logistics planning',
        'Bi-weekly meetings'
      ],
      weddingDay: [
        'One assistant on-site',
        'Vendor coordination',
        'Timeline management',
        'Ceremony and reception oversight'
      ]
    },
    {
      title: 'Month-of Coordination',
      price: 'Starting at $1,000',
      timeline: '4-6 weeks before wedding',
      planning: [
        'Final vendor confirmations',
        'Timeline finalization',
        'Rehearsal coordination',
        'Final detail review',
        'Two planning meetings'
      ],
      weddingDay: [
        'Day-of coordinator',
        'Vendor point of contact',
        'Timeline execution',
        'Setup oversight'
      ]
    },
    {
      title: 'Micro Weddings',
      price: 'Starting at $700',
      timeline: 'Under 50 guests',
      planning: [
        'Simplified planning support',
        'Vendor recommendations',
        'Timeline creation',
        'Design consultation',
        'One planning meeting'
      ],
      weddingDay: [
        'One assistant',
        'Complete coordination',
        'Vendor management',
        'Intimate celebration focus'
      ]
    }
  ];

  const addOns = [
    'Monogram design',
    'Signage creation',
    'Invitation and RSVP management',
    'Post-wedding brunch planning',
    'Additional assistants',
    'Decor rentals',
    'Rehearsal dinner planning',
    'Hotel block management'
  ];

  return (
    <>
      <Navigation />

      {/* Hero Section - Slimmer version */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-warm-white via-white to-champagne/20" />

        {/* Background image placeholder */}
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://marketplace.canva.com/EAGFdr5xrIY/1/0/1600w/canva-beige-and-brown-elegant-coming-soon-instagram-post-rCVKQbzDkrc.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        {/* Grey-green overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-sage-darkest/20 to-sage-darker/15" />

        <PageTransition className="relative z-10 text-center max-w-4xl mx-auto px-6 pt-24">
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            src="/golden-wheat-highvale.png"
            alt="Highvale Events"
            className="h-20 md:h-24 mx-auto mb-6"
          />
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl font-cormorant text-sage-darkest mb-4"
          >
            Signature Wedding Planning
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-sage-darker/80 max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            From full-service planning to day-of coordination, we bring your dream wedding to life with elegance, precision, and Colorado's natural beauty as your backdrop.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              onClick={scrollToInquiry}
              className="bg-champagne hover:bg-champagne/90 text-sage-darkest font-medium rounded-full px-8 py-3"
            >
              Contact Form
            </Button>
            <Button
              onClick={scrollToWelcome}
              className="bg-white/80 hover:bg-white text-sage-darkest border-2 border-sage-dark/20 font-medium rounded-full px-8 py-3"
            >
              Learn More
            </Button>
          </motion.div>
        </PageTransition>
      </section>

      {/* Welcome Section */}
      <section id="welcome-section" className="py-20 bg-white">
        <div className="max-w-[1180px] mx-auto px-6">
          <ScrollAnimation className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-cormorant text-sage-darkest mb-8">
              Welcome to Highvale Weddings
            </h2>
            <p className="text-lg text-sage-darker/70 leading-relaxed mb-6">
              We offer a variety of wedding planning packages to suit every couple's needs,
              along with customizable add-ons to enhance your experience. Every journey begins
              with a complimentary consultation where we'll discuss your vision, understand your
              needs, and determine the perfect level of support for your special day.
            </p>
            <Button
              onClick={scrollToInquiry}
              className="bg-champagne hover:bg-champagne/90 text-sage-darkest font-medium rounded-full px-8 py-3"
            >
              Schedule Your Free Consultation
            </Button>
          </ScrollAnimation>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 bg-warm-white">
        <div className="max-w-[1180px] mx-auto px-6">
          <ScrollAnimation className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-cormorant text-sage-darkest mb-4">
              Wedding Planning Packages
            </h2>
            <p className="text-lg text-sage-darker/70 max-w-2xl mx-auto">
              Choose the level of support that's right for your wedding journey
            </p>
          </ScrollAnimation>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {packages.map((pkg, index) => (
              <ScrollAnimation key={index} animation="fadeInUp" delay={index * 0.1}>
                <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <CardHeader className="border-b border-sage-dark/10">
                    <CardTitle className="text-3xl font-cormorant text-sage-darkest">
                      {pkg.title}
                    </CardTitle>
                    <CardDescription className="text-sage-dark text-xl font-semibold mt-2">
                      {pkg.price}
                    </CardDescription>
                    <p className="text-sage-darker/60 text-sm mt-1">
                      {pkg.timeline}
                    </p>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-cormorant text-lg font-semibold text-sage-darkest mb-3">
                          During Planning:
                        </h4>
                        <ul className="space-y-2">
                          {pkg.planning.map((item, i) => (
                            <li key={i} className="flex items-start">
                              <Check className="w-4 h-4 text-sage-dark mt-0.5 mr-2 flex-shrink-0" />
                              <span className="text-sage-darker/70 text-sm">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-cormorant text-lg font-semibold text-sage-darkest mb-3">
                          On Your Wedding Day:
                        </h4>
                        <ul className="space-y-2">
                          {pkg.weddingDay.map((item, i) => (
                            <li key={i} className="flex items-start">
                              <Check className="w-4 h-4 text-sage-dark mt-0.5 mr-2 flex-shrink-0" />
                              <span className="text-sage-darker/70 text-sm">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="pt-4">
                        <Button
                          onClick={scrollToInquiry}
                          className="w-full bg-champagne hover:bg-champagne/90 text-sage-darkest font-medium rounded-full"
                        >
                          Learn More
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Add-Ons Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1180px] mx-auto px-6">
          <ScrollAnimation className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-cormorant text-sage-darkest mb-4">
              Optional Add-Ons
            </h2>
            <p className="text-lg text-sage-darker/70 max-w-2xl mx-auto">
              Enhance your package with these additional services
            </p>
          </ScrollAnimation>

          <ScrollAnimation delay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {addOns.map((addon, index) => (
                <div
                  key={index}
                  className="bg-warm-white rounded-lg p-4 flex items-center space-x-3 hover:bg-champagne/10 transition-colors"
                >
                  <Plus className="w-5 h-5 text-sage-dark flex-shrink-0" />
                  <span className="text-sage-darkest text-sm">{addon}</span>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-sage-darker/70 mb-6 italic">
                All packages can be customized to meet your unique needs
              </p>
              <Button
                onClick={scrollToInquiry}
                className="bg-champagne hover:bg-champagne/90 text-sage-darkest font-medium rounded-full px-8 py-3"
              >
                Let's Discuss Your Wedding
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Portfolio Section */}
      <PortfolioSection />

      {/* As Seen In */}
      <AsSeenIn />

      {/* Inquiry Section */}
      <div id="inquiry-section">
        <InquirySection />
      </div>

      {/* FAQ Section */}
      <FAQSection />

      <Footer />
    </>
  );
}
