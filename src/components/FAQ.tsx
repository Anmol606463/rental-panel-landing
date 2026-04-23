import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export const FAQ = () => {
  const faqs = [
    { q: "Is there a setup fee??", a: "No, there are absolutely no setup fees. The activation is completely free and instant once you select your desired plan." },
    { q: "Do I need to use my own domain name?", a: "Yes, you can use your own domain name. We provide a seamless integration process to connect any custom domain to your rental panel instantly." },
    { q: "Do I need a web host?", a: "No, you do not need to purchase a separate web host. We fully host the panel for you on our high-performance, secure, and DDoS-protected enterprise servers." },
    { q: "Do you sell followers or likes?", a: "No, we strictly provide the panel software and hosting infrastructure. You will need to connect to an API provider of your choice to automatically source those services." }
  ];

  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-4 tracking-tight">Frequently Asked Questions</h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto mb-8"></div>
        </div>

        <div className="space-y-0">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border-b border-gray-100 last:border-0 relative">
              <button 
                onClick={() => setOpen(open === idx ? null : idx)}
                className="w-full py-6 pr-8 flex justify-between items-center focus:outline-none text-left"
              >
                <span className="font-light text-lg text-gray-700">{faq.q}</span>
                <div className="absolute right-0 top-6 text-gray-800">
                  {open === idx ? <Minus className="w-5 h-5 stroke-[1.5]" /> : <Plus className="w-5 h-5 stroke-[1.5]" />}
                </div>
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${open === idx ? 'max-h-40 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-gray-500 font-light leading-relaxed pr-8">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
