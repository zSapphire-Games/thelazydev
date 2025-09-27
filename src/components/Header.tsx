import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-green-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">🦥</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Sloth AI</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-green-600 transition-colors">Features</a>
            <a href="#how-it-works" className="text-gray-700 hover:text-green-600 transition-colors">How It Works</a>
            <a href="#pricing" className="text-gray-700 hover:text-green-600 transition-colors">Pricing</a>
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
              Start Napping
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-green-100">
            <div className="flex flex-col space-y-4">
              <a href="#features" className="text-gray-700 hover:text-green-600 transition-colors">Features</a>
              <a href="#how-it-works" className="text-gray-700 hover:text-green-600 transition-colors">How It Works</a>
              <a href="#pricing" className="text-gray-700 hover:text-green-600 transition-colors">Pricing</a>
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors w-fit">
                Start Napping
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}