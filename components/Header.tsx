'use client';

import { useState, useEffect } from 'react';
import { Search, ShoppingCart, User, Menu, X } from 'lucide-react';
import { useApp } from '@/app/providers';
import Cart from './Cart';
import AuthModal from './AuthModal';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const { state } = useApp();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const cartItemsCount = state.cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-morphism py-4' : 'bg-transparent py-6'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 gold-gradient rounded-lg flex items-center justify-center">
                <span className="font-playfair font-bold text-black text-xl">R</span>
              </div>
              <span className="font-playfair font-bold text-2xl gold-text-gradient">
                Royalwood
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#home" className="hover:text-yellow-400 transition-colors">Home</a>
              <a href="#products" className="hover:text-yellow-400 transition-colors">Products</a>
              <a href="#about" className="hover:text-yellow-400 transition-colors">About</a>
              <a href="#contact" className="hover:text-yellow-400 transition-colors">Contact</a>
            </nav>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                <Search size={20} />
              </button>
              
              <button 
                onClick={() => setIsCartOpen(true)}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors relative"
              >
                <ShoppingCart size={20} />
                {cartItemsCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-yellow-400 text-black text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold">
                    {cartItemsCount}
                  </span>
                )}
              </button>
              
              <button 
                onClick={() => setIsAuthOpen(true)}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              >
                <User size={20} />
              </button>
              
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 glass-morphism-dark mx-4 rounded-lg p-6">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="hover:text-yellow-400 transition-colors">Home</a>
              <a href="#products" className="hover:text-yellow-400 transition-colors">Products</a>
              <a href="#about" className="hover:text-yellow-400 transition-colors">About</a>
              <a href="#contact" className="hover:text-yellow-400 transition-colors">Contact</a>
            </nav>
          </div>
        )}
      </header>

      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
    </>
  );
};

export default Header;