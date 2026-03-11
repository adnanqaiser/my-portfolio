import React, { useEffect } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { servicesData } from '../data/services';
import { Star, ChevronRight, Zap, Mail, Phone, MapPin } from 'lucide-react';

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
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-green/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-brand-green/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2" />
        
        <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-16 h-16 rounded-2xl bg-brand-green/10 flex items-center justify-center text-brand-green mb-8"
            >
              <service.icon size={32} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 text-brand-green text-xs font-bold uppercase tracking-widest mb-6"
            >
              <Link to="/" className="hover:underline">Home</Link>
              <ChevronRight size={14} />
              <span>Services</span>
              <ChevronRight size={14} />
              <span className="text-white/60">{service.title}</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold font-display leading-tight mb-8"
            >
              {service.title}
            </motion.h1>
          </div>
        </div>

        {/* Decorative Elements 
        <div className="absolute top-1/2 right-24 -translate-y-1/2 opacity-[0.02] pointer-events-none hidden lg:block">
          <Star size={400} className="fill-current text-white" />
        </div>*/}
      </section>

      {/* Content Section */}
      <section className="py-20 container mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">Overview</h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              {service.longDescription}
            </p>
            
            <div className="space-y-6">
              {service.features.map((feature, index) => (
                <div key={index} className="flex gap-4 p-6 rounded-2xl bg-white/2 border border-white/5 hover:border-brand-green/30 transition-colors group">
                  <div className="w-12 h-12 rounded-xl bg-brand-green/10 flex items-center justify-center text-brand-green group-hover:bg-brand-green group-hover:text-black transition-colors shrink-0">
                    <Star size={20} className="fill-current" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
                    <p className="text-gray-400 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-brand-green/10 blur-3xl rounded-full" />
            <div className="relative rounded-3xl overflow-hidden border border-white/10 aspect-square">
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section - Reused from Home but with service context */}
      <section id="contact" className="py-20 bg-white/2">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-brand-green/10 blur-3xl rounded-full" />
              <div className="relative rounded-3xl overflow-hidden border border-white/10 aspect-[4/5]">
                <img 
                  src="/images/maintenance-contact.jpg" 
                  alt="Contact" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
                  <h3 className="text-3xl font-bold font-display mb-2">Ready to start?</h3>
                  <p className="text-gray-300">Let's discuss your project and see how we can help your business grow.</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card p-10"
            >
              <form 
  name="contact-service" 
  method="POST" 
  data-netlify="true" 
  className="space-y-6"
>
  {/* Ye hidden input Netlify ke liye zaroori hai */}
  <input type="hidden" name="form-name" value="contact-service" />

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <input name="name" type="text" placeholder="Name" className="bg-white/5 border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-brand-green w-full" required />
    <input name="email" type="email" placeholder="Email*" className="bg-white/5 border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-brand-green w-full" required />
  </div>
  
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <input name="phone" type="text" placeholder="Phone" className="bg-white/5 border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-brand-green w-full" />
    <input name="subject" type="text" defaultValue={service.title} className="bg-white/5 border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-brand-green w-full" />
  </div>

  <textarea name="message" placeholder="Tell Us About Your Project *" rows={4} className="bg-white/5 border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-brand-green w-full resize-none" required></textarea>
  
  <button type="submit" className="bg-brand-green text-black px-8 py-4 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-emerald-400 transition-colors w-full md:w-fit">
    <Zap size={20} className="fill-current" />
    GET A FREE QUOTE
  </button>
</form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
