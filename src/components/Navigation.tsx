'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/weddings', label: 'Weddings' },
    { href: '/party-planning', label: 'Party Planning' },
    { href: '/about', label: 'About' },
    { href: '/process', label: 'Our Process' },
    { href: '/faq', label: 'FAQ' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'}`}
    >
      <div className="max-w-[1180px] mx-auto px-6">
        <div className="bg-sage-darkest/85 backdrop-blur-lg border border-white/10 rounded-2xl px-6 py-3 shadow-xl flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src="/light-sand-mountain.png"
              alt="Highvale Events"
              className="h-10 w-auto brightness-0 invert"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-white/90 hover:text-champagne transition-colors font-inter text-sm font-medium ${
                  pathname === link.href ? 'text-champagne border-b-2 border-champagne' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/say-hi">
              <Button className="bg-champagne hover:bg-champagne/90 text-sage-darkest font-medium rounded-full px-6">
                Say Hi!
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden absolute top-full left-0 right-0 mt-2 px-6"
          >
            <div className="bg-sage-darkest/95 backdrop-blur-lg border border-white/10 rounded-2xl p-6 shadow-xl">
              <div className="flex flex-col space-y-4">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className={`block text-white/90 hover:text-champagne transition-colors font-inter font-medium ${
                        pathname === link.href ? 'text-champagne' : ''
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.05 }}
                >
                  <Link href="/say-hi" onClick={() => setIsMenuOpen(false)}>
                    <Button className="w-full bg-champagne hover:bg-champagne/90 text-sage-darkest font-medium rounded-full transform transition-all hover:scale-105">
                      Say Hi!
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
