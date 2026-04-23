

export const Stats = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
      
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {[
            { value: '5,000+', label: 'Active Panels' },
            { value: '99.9%', label: 'Uptime SLA' },
            { value: '10M+', label: 'Orders Processed' },
            { value: '24/7', label: 'Expert Support' }
          ].map((stat, idx) => (
            <div key={idx} className="text-center group transition-all duration-300 hover:-translate-y-2">
              <div className="text-5xl md:text-6xl font-bold text-white mb-3 tracking-tight drop-shadow-md">
                {stat.value}
              </div>
              <div className="text-white/90 font-light text-lg uppercase tracking-widest drop-shadow-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
