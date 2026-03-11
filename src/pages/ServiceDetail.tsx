import React, { useEffect } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { servicesData } from '../data/services';
import { Star, Zap, Mail, Phone as PhoneIcon } from 'lucide-react';

const ServiceDetail = () => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const service = servicesData.find(s => s.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  if (!service) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6 bg-[#0A0A0A] text-white">
        <h2 className="text-4xl font-bold mb-4">Service Not Found</h2>
        <Link to="/" className="text-emerald-500 hover:underline">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="overflow-hidden bg-[#0A0A0A] text-white font-sans">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-[#0A0A0A] border-b border-white/5 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <div className="max-w-4xl">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} 
              animate={{ opacity: 1, scale: 1 }} 
              className="w-16 h-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 mb-8"
            >
              <service.icon size={32} />
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8">{service.title}</h1>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 container mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Overview</h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">{service.longDescription}</p>
            <div className="space-y-6">
              {service.features.map((feature, index) => (
                <div key={index} className="flex gap-4 p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-emerald-500/30 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 shrink-0">
                    <Star size={20} className="fill-current" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
                    <p className="text-gray-400 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 aspect-square shadow-2xl shadow-emerald-500/5">
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                referrerPolicy="no-referrer" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Updated Contact Section */}
      <section id="contact" className="py-24 bg-[#0A0A0A] border-t border-white/5">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Side: Content & Image */}
            <div className="space-y-8">
              <div>
                <h2 className="text-6xl md:text-7xl font-bold text-emerald-500 mb-6 tracking-tighter">
                  Let's Talk
                </h2>
                <p className="text-xl text-zinc-300 font-medium max-w-md leading-snug">
                  Ready to start your next project with AI & Automation?
                </p>
              </div>

              {/* Image below text */}
              <div className="relative rounded-3xl overflow-hidden border border-white/10 aspect-[16/10] shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1000" 
                  alt="Collaboration" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-emerald-500/5 mix-blend-overlay"></div>
              </div>

              {/* Quick Contact Info */}
              <div className="flex flex-wrap gap-8 pt-4">
                <div className="flex items-center gap-3 text-zinc-400">
                  <Mail size={18} className="text-emerald-500" />
                  <span className="text-sm">hello@adnanqaiser.com</span>
                </div>
                <div className="flex items-center gap-3 text-zinc-400">
                  <PhoneIcon size={18} className="text-emerald-500" />
                  <span className="text-sm">+92 300 0000000</span>
                </div>
              </div>
            </div>

            {/* Right Side: Form (Single Column Fields) */}
            <div className="bg-zinc-900/40 p-8 md:p-10 rounded-[2.5rem] border border-white/10 backdrop-blur-xl shadow-2xl">
              <form name="contact-service" method="POST" data-netlify="true" className="flex flex-col gap-5">
                <input type="hidden" name="form-name" value="contact-service" />
                
                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold ml-1">Full Name</label>
                  <input 
                    name="name" 
                    type="text" 
                    placeholder="Enter your name" 
                    className="w-full bg-zinc-950/50 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-emerald-500/50 transition-all placeholder:text-zinc-700" 
                    required 
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold ml-1">Email Address</label>
                  <input 
                    name="email" 
                    type="email" 
                    placeholder="your@email.com" 
                    className="w-full bg-zinc-950/50 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-emerald-500/50 transition-all placeholder:text-zinc-700" 
                    required 
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold ml-1">Phone Number</label>
                  <input 
                    name="phone" 
                    type="tel" 
                    placeholder="+92 300 0000000" 
                    className="w-full bg-zinc-950/50 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-emerald-500/50 transition-all placeholder:text-zinc-700" 
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold ml-1">Subject</label>
                  <input 
                    name="subject" 
                    type="text" 
                    defaultValue={service.title} 
                    className="w-full bg-zinc-950/50 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-emerald-500/50 transition-all placeholder:text-zinc-700" 
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold ml-1">Project Details</label>
                  <textarea 
                    name="message" 
                    placeholder="Tell me about your project..." 
                    rows={4} 
                    className="w-full bg-zinc-950/50 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-emerald-500/50 transition-all placeholder:text-zinc-700 resize-none" 
                    required
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="mt-4 w-full bg-emerald-500 text-black font-black py-5 rounded-2xl hover:bg-emerald-400 transition-all flex items-center justify-center gap-3 shadow-lg shadow-emerald-500/20 group"
                >
                  FREE CONSULTATION
                  <Zap size={18} className="fill-current group-hover:scale-110 transition-transform" />
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;