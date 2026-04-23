import React from 'react';
import { Star, StarHalf } from 'lucide-react';

export const Testimonials = () => {
  const testimonials = [
    {
      name: 'Dr Dharmendr Gautam',
      role: 'Owner, Superpanels',
      quote: "I launched my panel in under 7 minutes! Hosting, theme, and support were all ready.",
      rating: 4.5
    },
    {
      name: 'Husnain Khan',
      role: 'Panel Reseller',
      quote: "After 2 months, I've completed 15,000+ orders. The performance is great, and their support is fast.",
      rating: 5
    },
    {
      name: 'Rani Gautam',
      role: 'Marketing Agency Owner',
      quote: "Tried many SMM panels before — but this rental system saved me time, money, and hosting headaches.",
      rating: 4
    }
  ];

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < 5; i++) {
       if (i < fullStars) {
         stars.push(<Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />);
       } else if (i === fullStars && hasHalfStar) {
         stars.push(<StarHalf key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />);
       } else {
         stars.push(<Star key={i} className="w-5 h-5 text-amber-400" />);
       }
    }
    return stars;
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-4">What Our Clients Say</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-gray-500 font-light leading-relaxed">
            Trusted by resellers and agencies worldwide. See how we helped them succeed.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
             <div key={idx} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] flex flex-col justify-between hover:-translate-y-1 transition-all duration-300">
               <div>
                 <div className="flex space-x-1 mb-6">
                   {renderStars(item.rating)}
                 </div>
                 <p className="text-gray-600 italic font-light leading-relaxed mb-8">
                   "{item.quote}"
                 </p>
               </div>
               <div>
                 <h4 className="text-lg font-bold text-gray-900">{item.name}</h4>
                 <p className="text-sm text-gray-500">{item.role}</p>
               </div>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
};
