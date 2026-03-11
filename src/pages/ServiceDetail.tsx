import React, { useEffect } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { servicesData } from '../data/services';
import { Star, ChevronRight, Zap } from 'lucide-react';

const ServiceDetail = () => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const service = servicesData.find(s => s.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  if (!service) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
        <h2 className="text-4xl font-bold mb-4">Service Not Found</h2>
        <Link to="/" className="text-brand-green hover:underline">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-[#0A0A0A] border-b border-white/5 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-green/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <div className="max-w-4xl">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="w-16 h-16 rounded-2xl bg-brand-green/10 flex items-center justify-center text-brand-green mb-8">
              <service.icon size={32} />
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold font-display leading-tight mb-8">{service.title}</h1>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 container mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Overview</h2>
            <p className="text-gray-400 text-lg mb-8">{service.longDescription}</p>
            <div className="space-y-6">
              {service.features.map((feature, index) => (
                <div key={index} className="flex gap-4 p-6 rounded-2xl bg-white/2 border border-white/5">
                  <div className="w-12 h-12 rounded-xl bg-brand-green/10 flex items-center justify-center text-brand-green shrink-0">
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
            <div className="relative rounded-3xl overflow-hidden border border-white/10 aspect-square">
              <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white/2">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Side */}
            <div className="relative rounded-3xl overflow-hidden border border-white/10 aspect-[4/5]">
              <img src="/images/maintenance-contact.jpg" alt="Contact Adnan" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-8 flex flex-col justify-end">
                <h3 className="text-3xl font-bold mb-2">Ready to start?</h3>
                <p className="text-gray-300">Let's build something great together.</p>
              </div>
            </div>

            {/* Form Side */}
            <div className="glass-card p-10 bg-white/5 rounded-2xl border border-white/10">
              <form name="contact-service" method="POST" data-netlify="true" className="space-y-6">
                <input type="hidden" name="form-name" value="contact-service" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input name="name" type="text" placeholder="Name" className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 w-full outline-none focus:border-brand-green" required />
                  <input name="email" type="email" placeholder="Email*" className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 w-full outline-none focus:border-brand-green" required />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input name="phone" type="text" placeholder="Phone Number" className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 w-full outline-none focus:border-brand-green" />
                  <input name="subject" type="text" defaultValue={service.title} className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 w-full outline-none focus:border-brand-green" />
                </div>
                <textarea name="message" placeholder="Project Details*" rows={4} className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 w-full outline-none focus:border-brand-green" required></textarea>
                <button type="submit" className="bg-brand-green text-black px-8 py-4 rounded-lg font-bold flex items-center justify-center gap-2 w-full md:w-fit hover:bg-emerald-400 transition-all">
                  <Zap size={20} className="fill-current" />
                  GET A FREE QUOTE
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