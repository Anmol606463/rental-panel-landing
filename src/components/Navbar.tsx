import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar = ({ bannerVisible }: { bannerVisible: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`absolute w-full z-50 transition-all duration-300 ${bannerVisible ? 'top-[60px] sm:top-[68px] md:top-[60px]' : 'top-0'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center h-24 relative">
          <div className="flex justify-between items-center w-full">
            <div className="flex-shrink-0 flex items-center cursor-pointer space-x-2 sm:space-x-3 max-w-[75%]">
              <img src="/logo.png" alt="Smart Rental Logo" className="w-8 h-8 sm:w-10 sm:h-10 object-contain rounded-md shrink-0" />
              <span className="text-lg sm:text-2xl lg:text-3xl font-light tracking-[0.1em] sm:tracking-[0.15em] text-white truncate">
                SMART RENTAL PANEL
              </span>
            </div>

            <div className="hidden lg:flex items-center space-x-10 text-[15px] text-white shrink-0">
              {['Home', 'Features', 'Pricing', 'Demo', 'FAQ', 'Contact Us'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-white/80 transition-colors font-normal">
                  {item}
                </a>
              ))}
              <a href="#login" className="hover:text-white/80 transition-colors uppercase font-normal">
                LOG IN
              </a>
            </div>

            <div className="lg:hidden flex items-center pt-2 shrink-0">
              <button onClick={() => setIsOpen(!isOpen)} className="text-white p-1">
                {isOpen ? <X className="h-7 w-7 sm:h-8 sm:w-8" /> : <Menu className="h-7 w-7 sm:h-8 sm:w-8" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-teal-800 absolute w-full left-0 top-full shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {['Home', 'Features', 'Pricing', 'Demo', 'FAQ', 'Contact Us', 'LOG IN'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="block px-3 py-3 text-base font-medium text-white/90 hover:text-white hover:bg-white/10 rounded-lg">
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
