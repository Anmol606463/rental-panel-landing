
import { Users, CreditCard, ShoppingCart, Sliders, Link2, Monitor, Target, Edit, Package } from 'lucide-react';

export const Features = () => {
  const features = [
    { 
      icon: <Users className="w-8 h-8" />, 
      title: 'A unique panel for the clients', 
      desc: 'Where they can order several services also on the other hand see the history of their given orders.' 
    },
    { 
      icon: <CreditCard className="w-8 h-8" />, 
      title: 'Accept online payments', 
      desc: 'Panel accepts bills via paypal, skrill, Auto Paytm, bitcoins and other crypto currency.' 
    },
    { 
      icon: <ShoppingCart className="w-8 h-8" />, 
      title: 'Orders processings', 
      desc: 'Connect any APIs for automated orders processing or manage orders manually.' 
    },
    { 
      icon: <Sliders className="w-8 h-8" />, 
      title: 'Easy customisation', 
      desc: 'Customization of this panel is of much worth while choosing certain languages of ones own choice.' 
    },
    { 
      icon: <Link2 className="w-8 h-8" />, 
      title: 'User API', 
      desc: 'Easy-to-integrate API for your customers.' 
    },
    { 
      icon: <Monitor className="w-8 h-8" />, 
      title: 'Powerful admin dashboard', 
      desc: 'It has a variety of services like editing of content and social engine optimization. The section of interest logs helps you to observe what your personnel are doing.' 
    },
    { 
      icon: <Target className="w-8 h-8" />, 
      title: 'Activity log', 
      desc: 'Lets you see what your staff are doing.' 
    },
    { 
      icon: <Edit className="w-8 h-8" />, 
      title: 'Template Selector', 
      desc: 'Available so many awesome themes.' 
    },
    { 
      icon: <Package className="w-8 h-8" />, 
      title: 'Subscriptions', 
      desc: 'Add-on for auto likes, auto views, auto retweets, etc.' 
    }
  ];

  return (
    <section id="features" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-4">Panel Features</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto rounded-full mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white p-10 rounded-3xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100/50 hover:shadow-[0_8px_30px_-4px_rgba(20,184,166,0.15)] hover:-translate-y-1 transition-all duration-300 group flex flex-col items-center text-center">
              <div className="text-cyan-400 group-hover:text-emerald-400 group-hover:scale-110 transition-all duration-300 mb-6 drop-shadow-sm">
                {feature.icon}
              </div>
              <h4 className="text-xl font-light text-gray-800 tracking-wide mb-4">{feature.title}</h4>
              <p className="text-gray-500 font-light leading-relaxed text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
