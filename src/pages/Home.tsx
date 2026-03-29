import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/services';
import { 
  Smartphone, 
  PenTool, 
  Globe, 
  Code, 
  ShoppingCart, 
  RefreshCw, 
  Zap, 
  Wrench, 
  Monitor, 
  Search,
  Mail,
  Phone,
  MapPin,
  Download,
  Star,
  Palette,
  Share2,
  MessageCircle,
  Users
} from 'lucide-react';

const ServiceCard = ({ id, icon: Icon, title, description }: { id: string, icon: any, title: string, description: string, key?: string }) => (
  <Link to={`/services/${id}`} target="_blank" rel="noopener noreferrer">
    <motion.div 
      whileHover={{ y: -5 }}
      className="glass-card p-8 flex flex-col gap-4 hover:border-brand-green/30 h-full"
    >
      <div className="w-12 h-12 rounded-lg bg-brand-green/10 flex items-center justify-center text-brand-green">
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-bold font-display">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </motion.div>
  </Link>
);

const SkillBar = ({ label, percentage }: { label: string, percentage: number }) => (
  <div className="mb-6">
    <div className="flex justify-between mb-2">
      <span className="text-sm font-medium">{label}</span>
      <span className="text-sm font-bold text-brand-green">{percentage}%</span>
    </div>
    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: `${percentage}%` }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="h-full bg-brand-green shadow-[0_0_10px_rgba(0,255,136,0.5)]"
      />
    </div>
  </div>
);

const ProjectCard = ({ image, category, title, description }: { image: string, category: string, title: string, description: string }) => (
  <motion.div 
    whileHover={{ scale: 1.02 }}
    className="relative group overflow-hidden rounded-2xl aspect-16/10"
  >
    <img 
      src={image} 
      alt={title} 
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      referrerPolicy="no-referrer"
    />
    <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-6">
      <span className="text-[9px] uppercase tracking-widest text-brand-green font-bold mb-2 bg-brand-green/10 w-fit px-2 py-1 rounded">{category}</span>
      <h3 className="text-xl font-bold font-display mb-1">{title}</h3>
      <p className="text-gray-300 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2">{description}</p>
    </div>
  </motion.div>
);

const BlogCard = ({ image, date, title, author, comments }: { image: string, date: string, title: string, author: string, comments: string }) => (
  <div className="glass-card overflow-hidden group">
    <div className="relative h-48 overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        referrerPolicy="no-referrer"
      />
      <div className="absolute top-4 right-4 bg-brand-green text-black px-3 py-1 rounded text-xs font-bold">
        {date}
      </div>
    </div>
    <div className="p-6">
      <h4 className="text-lg font-bold mb-4 group-hover:text-brand-green transition-colors">{title}</h4>
      <div className="flex items-center gap-4 text-xs text-gray-500">
        <span>{author}</span>
        <span>•</span>
        <span>{comments}</span>
      </div>
    </div>
  </div>
);

const MainHero = ({ heroImage }: { heroImage: string }) => (
  <section className="px-6 md:px-12 lg:px-24 flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-12 min-h-[calc(100vh-70px)] py-4 lg:py-0 overflow-hidden">
    <div className="flex-1 space-y-4 lg:space-y-6 z-10 text-center lg:text-left pt-4 lg:pt-0">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h1 className="text-4xl md:text-6xl xl:text-7xl font-bold font-display leading-[1.1] tracking-tight">
          Hey 👋, I'm <br />
          <span className="text-brand-green">Adnan Qaiser</span>
        </h1>
      </motion.div>
      
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-gray-400 text-sm md:text-base lg:text-lg max-w-lg mx-auto lg:mx-0 leading-relaxed"
      >
        I'm a creative designer based in Remote Developer, and I'm very passionate and dedicated to my work. Say Hello Helping businesses grow with high-converting & fast WordPress websites.
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="flex flex-wrap justify-center lg:justify-start gap-3 pt-2"
      >
        <div className="glass-card p-3 w-28 md:w-32 flex flex-col items-center gap-1.5 text-center hover:bg-white/5 cursor-default group">
          <span className="text-[8px] uppercase tracking-widest text-gray-500 font-bold">Services</span>
          <div className="flex gap-1">
            <Palette className="text-pink-500 group-hover:scale-110 transition-transform" size={14} />
            <Zap className="text-blue-500 fill-current group-hover:scale-110 transition-transform" size={14} />
          </div>
        </div>

        <div className="glass-card p-3 w-28 md:w-32 flex flex-col items-center gap-1.5 text-center hover:bg-white/5 cursor-default group">
          <span className="text-[8px] uppercase tracking-widest text-gray-500 font-bold">Projects</span>
          <div className="w-full h-5 bg-white/5 rounded overflow-hidden">
            <img src="https://picsum.photos/seed/proj/100/40" alt="Project" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
        </div>

        <div className="glass-card p-3 w-28 md:w-32 flex flex-col items-center gap-1.5 text-center hover:bg-white/5 cursor-default group">
          <span className="text-[8px] uppercase tracking-widest text-gray-500 font-bold">About</span>
          <span className="text-xl font-bold text-brand-green font-display group-hover:scale-110 transition-transform">A</span>
        </div>
      </motion.div>
    </div>

    <div className="flex-1 relative flex justify-center lg:justify-end items-center pb-6 lg:pb-0">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-75 h-[400px] lg:w-[350px] lg:h-[450px] pointer-events-none">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 350 450" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 50 Q300 100 300 225 Q300 350 50 400" stroke="#00FF88" strokeWidth="3" strokeLinecap="round" fill="none" className="opacity-60"></path>
          <path d="M30 80 Q280 130 280 255 Q280 380 30 430" stroke="#00FF88" strokeWidth="2" strokeLinecap="round" fill="none" className="opacity-40"></path>
        </svg>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10 w-[280px] h-[380px] lg:w-[320px] lg:h-[440px] group"
      >
        <img 
          src={heroImage} 
          alt="Adnan Qaiser" 
          className="w-full h-full object-contain object-bottom transition-all duration-1000 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
      </motion.div>
    </div>
  </section>
);

export default function Home() {
  const [heroImage] = useState("https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop");

  return (
    <>
      <MainHero heroImage={heroImage} />

      {/* Hero / Services Section */}
      <section id="services" className="section-padding text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">Solutions with 8+ Years of <br /> Experience</h2>
          <div className="w-20 h-1 bg-brand-green mx-auto mb-16 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {servicesData.map((service) => (
            <ServiceCard 
              key={service.id}
              id={service.id}
              icon={service.icon} 
              title={service.title} 
              description={service.description} 
            />
          ))}
          <div className="flex items-center justify-center">
            <motion.button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 255, 136, 0.2)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full border-2 border-brand-green text-brand-green font-bold text-xl uppercase tracking-[0.2em] font-display hover:bg-brand-green hover:text-black transition-all duration-500 relative overflow-hidden group"
            >
              <span className="relative z-10">HIRE ME</span>
              <div className="absolute inset-0 bg-brand-green translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </motion.button>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="section-padding grid grid-cols-1 lg:grid-cols-2 gap-16 items-center bg-white/2">
        <div className="relative">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-green/10 blur-3xl rounded-full" />
          <span className="text-brand-green font-bold text-xs uppercase tracking-widest mb-4 block">About Me</span>
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">I can develop <br /> that help people</h2>
          <p className="text-gray-400 leading-relaxed mb-8">
            I'm a creative designer based in Remote Developer, and I'm very passionate and dedicated to my work. Since all Webium templates are developed on the basis of a deep study of the niche and harmoniously combine the most current trends in web design, sometimes it's enough to simply choose a template, add your own unique content, and get a beautiful website with the perfect navigation for your type of business.
          </p>
          
<a 
  href="/Adnan-Qaiser-CV.pdf" 
  download="Adnan-Qaiser-CV.pdf"
  className="bg-brand-green text-black px-8 py-4 rounded-lg font-bold flex inline-flex items-center gap-2 hover:bg-opacity-90 transition-all w-fit"
>
  <Download size={20} />
  Download CV
</a>
        </div>

        <div className="glass-card p-8 relative">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-green text-black px-6 py-1 rounded-full text-xs font-bold">Biography</div>
          <div className="grid grid-cols-2 gap-y-8 mt-4">
            <div>
              <p className="text-gray-500 text-xs uppercase mb-1">Name</p>
              <p className="font-bold">Adnan Qaiser</p>
            </div>
            <div>
  <p className="text-gray-500 text-xs uppercase mb-1">Experience</p>
  <p className="font-bold">8+ Years</p>
</div>
            <div>
              <p className="text-gray-500 text-xs uppercase mb-1">Email</p>
              <p className="font-bold text-sm">qaiseradnan51@gmail.com</p>
            </div>
            <div>
  <p className="text-gray-500 text-xs uppercase mb-1">LinkedIn</p>
  <a 
    href="https://www.linkedin.com/in/adnan-qaiser-developer" 
    target="_blank" 
    className="font-bold hover:text-brand-green transition-colors"
  >
    adnan-qaiser
  </a>
</div>
          </div>
        </div>
      </section>

      {/* Skills & Education */}
      <section className="section-padding grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <div className="relative mb-12">
            <div className="absolute -top-4 left-0 bg-brand-green text-black px-6 py-1 rounded-full text-xs font-bold">Personal Skill</div>
          </div>
          <SkillBar label="WordPress & AI Development" percentage={95} />
          <SkillBar label="Custom HTML5 & CSS3" percentage={90} />
          <SkillBar label="JavaScript & Logic" percentage={75} />
          <SkillBar label="UI/UX & Responsive Design" percentage={85} />
          <SkillBar label="AI Integration (LLMs/Bots)" percentage={92} />
          <SkillBar label="Technical SEO & Optimization" percentage={90} />
          <SkillBar label="Database & Backend Management" percentage={88} />
        </div>

        <div>
          <div className="relative mb-12">
            <div className="absolute -top-4 left-0 bg-brand-green text-black px-6 py-1 rounded-full text-xs font-bold">Education</div>
          </div>
          <div className="space-y-12">
            <div className="relative pl-8 border-l border-brand-green/30">
              <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-brand-green shadow-[0_0_10px_rgba(0,255,136,1)]" />
              <h4 className="text-lg font-bold mb-1">Graduation</h4>
              <p className="text-brand-green text-xs font-bold mb-2 uppercase">University of Karachi</p>
              <p className="text-gray-500 text-xs mb-4">2008 - 2012</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Gained a solid foundation in computer science and software principles at the University of Karachi, focusing on web technologies and user experience design.
              </p>
            </div>
            <div className="relative pl-8 border-l border-brand-green/30">
              <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-brand-green shadow-[0_0_10px_rgba(0,255,136,1)]" />
              <h4 className="text-lg font-bold mb-1">Freelance WordPress Developer</h4>
              <p className="text-brand-green text-xs font-bold mb-2 uppercase">Self-Employed / Fiverr & Upwork</p>
              <p className="text-gray-500 text-xs mb-4">2017 - Present</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Specializing in building high-performance WordPress websites, custom landing pages, and providing AI-driven development solutions for global clients on Fiverr & Upwork and other.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="section-padding">
        <span className="text-brand-green font-bold text-xs uppercase tracking-widest mb-4 block">Recent Work</span>
        <h2 className="text-4xl md:text-5xl font-bold font-display mb-10">Showcasing My Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProjectCard 
            image="/images/custom-wordpress-solutions.png" 
            category="Custom WordPress Solutions" 
            title="High-performance, secure" 
            description="Custom built WordPress themes and plugins optimized for speed and security."
          />
          <ProjectCard 
            image="/images/AI-Driven Web Applications.png" 
            category="AI-Driven Web Applications" 
            title="Integrating cutting-edge AI technologies" 
            description="Leveraging LLMs and custom AI agents to automate business workflows."
          />
          <ProjectCard 
            image="/images/responsive-design.png"
            category="Responsive & Mobile-First Design" 
            title="Crafting pixel-perfect, responsive interfaces" 
            description="Ensuring your website looks stunning on every device and screen size."
          />
          <ProjectCard 
            image="/images/technical-seo-speed-optimization.png" 
            category="Technical SEO & Speed Optimization" 
            title="Enhancing website visibility and search" 
            description="Data-backed SEO strategies to rank your business on the first page."
          />
        </div>
      </section>

      {/* Why Choose Me */}
      <section className="section-padding text-center bg-white/2">
        <span className="text-brand-green font-bold text-xs uppercase tracking-widest mb-4 block">My Core Values</span>
        <h2 className="text-4xl md:text-5xl font-bold font-display mb-12">Why Choose Me?</h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="relative w-32 h-32 mx-auto mb-8">
            <div className="absolute inset-0 bg-brand-green rounded-full blur-2xl opacity-20" />
            <img 
              src="/images/core-values.png" 
              alt="Avatar" 
              className="w-full h-full rounded-full border-2 border-brand-green p-1 relative z-10"
              referrerPolicy="no-referrer"
            />
          </div>
          <p className="text-xl text-gray-300 italic mb-8 leading-relaxed">
            "With over 8 years of experience, my mission is to empower businesses with high-performance WordPress websites and innovative AI solutions. I focus on clean code, technical SEO, and user-centric designs to ensure every project is a global success."
          </p>
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => <Star key={i} className="text-yellow-500 fill-current" size={16} />)}
          </div>
          <h4 className="text-xl font-bold">Adnan Qaiser</h4>
          <p className="text-brand-green text-xs font-bold uppercase tracking-widest">Senior WordPress Developer</p>
        </div>
      </section>

      {/* Trust Logos */}
      <section className="py-12 border-y border-border overflow-hidden">
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-[1px] w-20 bg-border" />
          <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Thrusted By <span className="text-brand-green">10K+</span> Customers</span>
          <div className="h-[1px] w-20 bg-border" />
        </div>
        <div className="flex flex-wrap justify-center gap-12 opacity-30 grayscale">
          <span className="text-2xl font-bold">envato</span>
          <span className="text-2xl font-bold">Instagram</span>
          <span className="text-2xl font-bold">Bootstrap</span>
          <span className="text-2xl font-bold">dribbble</span>
          <span className="text-2xl font-bold">jQuery</span>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="section-padding">
        <span className="text-brand-green font-bold text-xs uppercase tracking-widest mb-4 block">Web Development & AI</span>
        <h2 className="text-4xl md:text-5xl font-bold font-display mb-16">Expert Insights for Modern <br /> Businesses</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <BlogCard 
            image="/images/web-dev-ai.jpg"
            date="12 Mar, 2026"
            title="Advanced Web Development with AI"
            author="Adnan Qaiser"
            comments="5 Comments"
          />
          <BlogCard 
            image="/images/wordpress-seo.jpg"
            date="10 Mar, 2026"
            title="WordPress SEO for Developers"
            author="Adnan Qaiser"
            comments="3 Comments"
          />
          <BlogCard 
            image="/images/fullstack-wordpress.jpg"
            date="08 Mar, 2026"
            title="Full-Stack WordPress Solutions"
            author="Adnan Qaiser"
            comments="7 Comments"
          />
          <BlogCard 
            image="/images/web-security.jpg"
            date="05 Mar, 2026"
            title="High-Performance Web Security"
            author="Adnan Qaiser"
            comments="4 Comments"
          />
        </div>
      </section>

      {/* Contact Section */}
      
      <section id="contact" className="py-12 bg-[#1A1A1A] border-t border-white/5">
  <div className="container mx-auto px-6 md:px-12 lg:px-24">
    {/* 2 columns on desktop */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      
      {/* Left Side: Text aur Image */}
      <div className="space-y-4">
        <div>
          <h2 className="text-[#00ff88] text-4xl md:text-5xl font-bold mb-2 tracking-tighter">
  Let's Talk
</h2>
          <p className="text-base text-zinc-300 font-medium leading-relaxed">
            Ready to start your next project with AI & Automation?
          </p>
        </div>

        {/* Image below text */}
        <div className="relative rounded-xl overflow-hidden border border-white/10 aspect-[16/10] shadow-lg">
          <img 
  src="/images/maintenance-contact.jpg" 
  alt="Let's Talk" 
  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
  referrerPolicy="no-referrer"
/>
          <div className="absolute inset-0 bg-emerald-500/5 mix-blend-overlay"></div>
        </div>
      </div>

      {/* Right Side: Form (Single Column Fields) */}
      <div className="bg-zinc-900/40 p-3 rounded-lg border border-white/10 backdrop-blur-xl shadow-lg">
        <form 
          name="contact-portfolio" 
          method="POST" 
          data-netlify="true" 
          className="flex flex-col gap-3"
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.currentTarget;
            const formData = new FormData(form);
            fetch("/", {
              method: "POST",
              headers: { "Content-Type": "application/x-www-form-urlencoded" },
              body: new URLSearchParams(formData as any).toString(),
            })
            .then(() => {
              alert("Message sent successfully!");
              form.reset();
            })
            .catch((error) => alert(error));
          }}
        >
          <input type="hidden" name="form-name" value="contact-portfolio" />
          
          {/* Name Field */}
          <div className="space-y-1">
            <label className="text-[9px] uppercase tracking-[0.2em] text-zinc-500 font-bold ml-1">Full Name</label>
            <input 
              name="name" 
              type="text" 
              placeholder="Enter your name" 
              className="w-full bg-zinc-950/50 border border-white/10 rounded-lg px-3 py-2 outline-none focus:border-emerald-500/50 transition-all placeholder:text-zinc-700 text-white" 
              required 
            />
          </div>

          {/* Email Field */}
          <div className="space-y-1">
            <label className="text-[9px] uppercase tracking-[0.2em] text-zinc-500 font-bold ml-1">Email Address</label>
            <input 
              name="email" 
              type="email" 
              placeholder="your@email.com" 
              className="w-full bg-zinc-950/50 border border-white/10 rounded-lg px-3 py-2 outline-none focus:border-emerald-500/50 transition-all placeholder:text-zinc-700 text-white" 
              required 
            />
          </div>

          {/* Phone Field */}
          <div className="space-y-1">
            <label className="text-[9px] uppercase tracking-[0.2em] text-zinc-500 font-bold ml-1">Phone Number</label>
            <input 
              name="phone" 
              type="tel" 
              placeholder="+92 300 0000000" 
              className="w-full bg-zinc-950/50 border border-white/10 rounded-lg px-3 py-2 outline-none focus:border-emerald-500/50 transition-all placeholder:text-zinc-700 text-white" 
            />
          </div>

          {/* Subject Field */}
          <div className="space-y-1">
            <label className="text-[9px] uppercase tracking-[0.2em] text-zinc-500 font-bold ml-1">Subject</label>
            <input 
              name="subject" 
              type="text" 
              placeholder="Project Inquiry" 
              className="w-full bg-zinc-950/50 border border-white/10 rounded-lg px-3 py-2 outline-none focus:border-emerald-500/50 transition-all placeholder:text-zinc-700 text-white" 
            />
          </div>

          {/* Message Field */}
          <div className="space-y-1">
            <label className="text-[9px] uppercase tracking-[0.2em] text-zinc-500 font-bold ml-1">Project Details</label>
            <textarea 
              name="message" 
              placeholder="Tell me about your project..." 
              rows={2} 
              className="w-full bg-zinc-950/50 border border-white/10 rounded-lg px-3 py-2 outline-none focus:border-emerald-500/50 transition-all placeholder:text-zinc-700 text-white resize-none" 
              required
            ></textarea>
          </div>

          <button 
            type="submit" 
            className="mt-2 w-full bg-[#00ff88] text-black font-bold py-2 rounded-lg hover:bg-emerald-400 transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20"
          >
            FREE CONSULTATION
          </button>
        </form>
      </div>

    </div>
  </div>
</section>

{/* Google Map Section */}
<section className="py-8 bg-[#1A1A1A]">
  <div className="container mx-auto px-6 md:px-12 lg:px-24">
    <div className="text-center mb-6">
      <h3 className="text-[#00ff88] text-xl md:text-2xl font-bold mb-2">Find Us Worldwide</h3>
      <p className="text-zinc-300 text-sm">Serving clients globally with remote development services</p>
    </div>
    
    <div className="bg-zinc-900/40 rounded-lg border border-white/10 overflow-hidden shadow-lg">
      <div className="aspect-[16/10] w-full">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d38719333.31638171!2d-74.0059413!3d40.7127753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ2LjAiTiA3NMKwMDAnMzIuMSJX!5e0!3m2!1sen!2sus!4v1647587222222!5m2!1sen!2sus"
          width="100%" 
          height="100%" 
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Worldwide Service Map"
        ></iframe>
      </div>
    </div>
    
    <div className="mt-6 text-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
        <div className="glass-card p-4">
          <div className="w-10 h-10 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green mx-auto mb-3">
            <MapPin size={20} />
          </div>
          <h4 className="text-base font-bold mb-1">Remote Services</h4>
          <p className="text-zinc-400 text-xs">Providing top-quality development services from anywhere in the world</p>
        </div>
        
        <div className="glass-card p-4">
          <div className="w-10 h-10 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green mx-auto mb-3">
            <Globe size={20} />
          </div>
          <h4 className="text-base font-bold mb-1">Global Clients</h4>
          <p className="text-zinc-400 text-xs">Working with businesses across multiple continents and time zones</p>
        </div>
        
        <div className="glass-card p-4">
          <div className="w-10 h-10 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green mx-auto mb-3">
            <Zap size={20} />
          </div>
          <h4 className="text-base font-bold mb-1">Fast Communication</h4>
          <p className="text-zinc-400 text-xs">Quick response times and efficient project management</p>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  );
}

{/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-6xl font-bold font-display text-brand-green mb-8">Let's Talk</h2>
            <div className="flex items-center gap-4 mb-12">
              <div className="w-12 h-12 rounded-full bg-brand-green flex items-center justify-center text-black">
                <Phone size={24} />
              </div>
              <span className="text-2xl font-bold">+92-300-4091441</span>
            </div>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <MapPin className="text-brand-green mt-1" size={20} />
                <div>
                  <p className="text-gray-500 text-xs uppercase font-bold mb-1">Location</p>
                  <p className="font-medium">Remote / Worldwide</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="text-brand-green mt-1" size={20} />
                <div>
                  <p className="text-gray-500 text-xs uppercase font-bold mb-1">Official Email</p>
                  <p className="font-medium">qaiseradnan51@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-12">
              {[Facebook, Twitter, Instagram, Linkedin, Github].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-brand-green hover:text-black transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div className="glass-card p-10">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="text" placeholder="Name" className="bg-white/5 border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-brand-green w-full" />
                <input type="email" placeholder="Email*" className="bg-white/5 border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-brand-green w-full" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="text" placeholder="Phone" className="bg-white/5 border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-brand-green w-full" />
                <input type="text" placeholder="Tell Us About Project *" className="bg-white/5 border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-brand-green w-full" />
              </div>
              <textarea placeholder="Tell Us About Project *" rows={4} className="bg-white/5 border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-brand-green w-full resize-none"></textarea>
              <button className="bg-brand-green text-black px-8 py-4 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-emerald-400 transition-colors w-full md:w-fit">
                <Zap size={20} className="fill-current" />
                FREE CONSULTATION
              </button>
            </form>
          </div>
        </div>... */}