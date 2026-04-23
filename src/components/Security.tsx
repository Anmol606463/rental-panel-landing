
import { Droplet, Server, Globe2, BarChart2 } from 'lucide-react';

export const Security = () => {
  const items = [
    {
      icon: <Droplet className="w-6 h-6" fill="currentColor" />,
      title: 'DDoS Protection',
      desc: 'Experience stable performance with robust protection against DDoS attacks.'
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: 'Regular Backup',
      desc: 'All your data will remain securely stored, even in the event of an emergency.'
    },
    {
      icon: <Globe2 className="w-6 h-6" />,
      title: 'Your Own Domain',
      desc: 'Use your Own domain or let us assist you in purchasing one.'
    },
    {
      icon: <BarChart2 className="w-6 h-6" />,
      title: 'Free SSL Certificate',
      desc: 'Every panel comes with a complimentary 256-bit SSL certificate.'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-4">Platform Security & Server Reliability</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-gray-500 font-light leading-relaxed">
            The Official Rental Panel provides reliable security and high-performance servers to ensure stable rental panel operation and data protection.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {items.map((item, idx) => (
            <div key={idx} className="flex flex-col text-left group">
              <div className="w-14 h-14 bg-teal-50 text-teal-400 rounded-full flex items-center justify-center mb-6 group-hover:bg-teal-500 group-hover:text-white transition-colors duration-300 shadow-sm">
                {item.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h4>
              <p className="text-gray-500 font-light leading-relaxed text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
