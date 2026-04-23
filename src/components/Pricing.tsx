import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export const Pricing = () => {
  const plans = [
    {
      name: 'Starter Panel',
      price: '5.00',
      btnText: 'Start Now',
      listTitle: 'Includes:',
      features: ['0-1000 orders', 'Unlimited API', 'Shared Hosting', '7 Themes', 'Normal Support', 'Daily Backup', 'Weekly update']
    },
    {
      name: 'Premium Plan',
      price: '10.00',
      btnText: 'Start Now',
      listTitle: 'Covers:',
      features: ['1000-5000 orders', 'Unlimited API', 'Premium Hosting', '15+ Themes', '24*7 Support', 'Daily Backup', 'Weekly update']
    },
    {
      name: 'Business Plan',
      price: '25.00',
      btnText: 'Start Now',
      listTitle: 'Offers:',
      features: ['5000 - 15000 orders', 'Unlimited API', 'Business Hosting', '20+ Themes', '24*7 Priority Support', 'Daily Backup', 'Weekly update', 'On Page SEO', 'DDoS Protection']
    },
    {
      name: 'Economy Plan',
      price: '50.00',
      btnText: 'Buy Now',
      listTitle: 'Contains:',
      features: ['Unlimited Orders', 'Unlimited API', 'VPS Server', 'All Themes', '24*7 Priority Support', 'Daily Backup', 'Weekly update', 'On Page SEO', 'DDoS protection', 'Free Domain (.online)', 'Business Email & SMTP']
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-slate-50 relative">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-4">Panel Pricing Plans</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-gray-500 font-light leading-relaxed">
            Explore our affordable pricing plans tailored to suit your needs. Choose the perfect plan!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col hover:-translate-y-1 transition-all duration-300">
              <div className="text-center mb-8 border-b border-gray-100 pb-8">
                <h4 className="text-xl font-bold text-teal-600 mb-4">{plan.name}</h4>
                <div className="flex items-end justify-center">
                  <span className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">${plan.price}</span>
                  <span className="text-gray-400 font-light ml-1 mb-1">/mo</span>
                </div>
              </div>
              
              <button className="w-full bg-gradient-to-r from-emerald-400 to-cyan-400 hover:from-teal-400 hover:to-cyan-500 text-white font-semibold py-3.5 rounded-xl transition-all shadow-md hover:shadow-lg mb-8">
                {plan.btnText}
              </button>

              <div className="flex-grow">
                <p className="text-teal-600 font-medium text-sm mb-4 tracking-wide uppercase">{plan.listTitle}</p>
                <ul className="space-y-4">
                  {plan.features.map((ft, i) => (
                    <li key={i} className="flex items-start text-gray-600 text-[15px]">
                      <CheckCircle2 className="w-5 h-5 text-teal-400 mr-3 shrink-0 mt-0.5" />
                      <span className="font-light">{ft}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
