
import { Mail, Phone } from 'lucide-react';

export const Contact = () => {
  const socials = [
    {
      name: 'Twitter',
      content: (
        <svg viewBox="0 0 24 24" className="w-[16px] h-[16px] fill-current" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 4.01c-1 .49-2.13.82-3.28.97a5.64 5.64 0 0 0 2.5-3.13 11.2 11.2 0 0 1-3.56 1.36 5.6 5.6 0 0 0-9.54 5.1A15.86 15.86 0 0 1 2.37 2.65a5.59 5.59 0 0 0 1.73 7.42 5.57 5.57 0 0 1-2.53-.7v.08a5.61 5.61 0 0 0 4.5 5.5 5.56 5.56 0 0 1-2.54.1 5.6 5.6 0 0 0 5.23 3.9A11.26 11.26 0 0 1 1 20.89a15.83 15.83 0 0 0 8.6 2.52c10.3 0 15.93-8.52 15.93-15.92v-.72A11.3 11.3 0 0 0 22 4.01Z" />
        </svg>
      )
    },
    {
      name: 'Facebook',
      content: (
        <svg viewBox="0 0 24 24" className="w-[16px] h-[16px] fill-current" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      )
    },
    {
      name: 'Instagram',
      content: (
        <svg viewBox="0 0 24 24" className="w-[16px] h-[16px]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      )
    },
    {
      name: 'GooglePlus',
      content: (
         <span className="text-[14px] font-bold leading-none pl-[2px] pt-[1px]">G+</span>
      )
    },
    {
      name: 'LinkedIn',
      content: (
        <svg viewBox="0 0 24 24" className="w-[16px] h-[16px] fill-current" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      )
    }
  ];

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-12 gap-10 items-start">
          
          {/* Brand & Socials (Col 1) */}
          <div className="md:col-span-4 flex flex-col space-y-5">
             <div className="flex items-center space-x-3 mb-1">
               <img src="/logo.png" alt="Smart Rental Logo" className="w-9 h-9 object-contain opacity-90" />
               <h2 className="text-2xl md:text-3xl font-light tracking-[0.15em] text-[#1ce1c2]">SMART RENTAL PANEL</h2>
             </div>
             <p className="text-gray-400 font-light text-[15px] leading-relaxed">
               We are providing the best SMM panel in the world.
             </p>
             <div className="flex space-x-3 pt-3">
                {socials.map((social, idx) => (
                   <a key={idx} href="#" aria-label={social.name} className="w-[38px] h-[38px] rounded-full border border-[#1ce1c2] text-[#1ce1c2] flex items-center justify-center hover:bg-[#1ce1c2] hover:text-white transition-all duration-300">
                      {social.content}
                   </a>
                ))}
             </div>
          </div>

          {/* Contact Info (Col 2) */}
          <div className="md:col-span-3 flex flex-col space-y-8 md:pt-4">
            <div className="flex items-center space-x-4 text-[#1ce1c2] font-light text-[15px]">
               <Mail className="w-6 h-6 stroke-[1.5]" />
               <a href="mailto:rentalpanel.com@gmail.com" className="hover:text-teal-600 transition-colors">rentalpanel.com@gmail.com</a>
            </div>
            <div className="flex items-center space-x-4 text-[#1ce1c2] font-light text-[15px]">
               <Phone className="w-6 h-6 stroke-[1.5]" />
               <a href="tel:+916395606463" className="hover:text-teal-600 transition-colors">+91 6395606463</a>
            </div>
          </div>

          {/* Form (Col 3) */}
          <div className="md:col-span-5 md:pt-2">
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="Your Name" className="w-full px-4 py-3 bg-white border border-gray-200 text-gray-700 text-sm focus:outline-none focus:border-[#1ce1c2] transition-colors placeholder:text-gray-400 placeholder:font-light" />
                <input type="email" placeholder="Your Email" className="w-full px-4 py-3 bg-white border border-gray-200 text-gray-700 text-sm focus:outline-none focus:border-[#1ce1c2] transition-colors placeholder:text-gray-400 placeholder:font-light" />
              </div>
              <input type="text" placeholder="Subject" className="w-full px-4 py-3 bg-white border border-gray-200 text-gray-700 text-sm focus:outline-none focus:border-[#1ce1c2] transition-colors placeholder:text-gray-400 placeholder:font-light" />
              <textarea rows={5} placeholder="Message" className="w-full px-4 py-3 bg-white border border-gray-200 text-gray-700 text-sm focus:outline-none focus:border-[#1ce1c2] transition-colors resize-none placeholder:text-gray-400 placeholder:font-light"></textarea>
              <div className="flex justify-end pt-2">
                <button onClick={(e) => e.preventDefault()} className="bg-[#1ce1c2] hover:bg-teal-400 text-white font-medium py-3 px-8 rounded-full transition-all shadow-md hover:shadow-lg">
                  Send Message
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};
