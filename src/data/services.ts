import { 
  Wrench, 
  Share2, 
  PenTool, 
  Zap, 
  Palette, 
  Search, 
  Smartphone,
  Globe,
  Code,
  ShoppingCart,
  RefreshCw,
  Monitor,
  Layout
} from 'lucide-react';

export interface ServiceDetail {
  id: string;
  title: string;
  description: string;
  icon: any;
  features: {
    title: string;
    description: string;
  }[];
  longDescription: string;
  image: string;
}

export const servicesData: ServiceDetail[] = [
  {
    id: 'website-maintenance',
    title: 'Website Maintenance & Tech Support',
    description: 'Reliable technical support, proactive monitoring, and continuous maintenance for uninterrupted performance.',
    icon: Wrench,
    features: [
      { title: 'Security Updates', description: 'Regular security patches and updates to keep your site safe.' },
      { title: 'Performance Monitoring', description: '24/7 monitoring to ensure your website is always fast and responsive.' },
      { title: 'Technical Support', description: 'Expert help whenever you encounter technical issues or need changes.' }
    ],
    longDescription: 'Our website maintenance and tech support services ensure your digital presence remains robust, secure, and up-to-date. We handle everything from plugin updates and security patches to performance tuning and emergency troubleshooting, allowing you to focus on your core business.',
    image: "/images/maintenance-overview.jpg"
  },
  {
    id: 'social-media-marketing',
    title: 'Social Media Marketing & Management',
    description: 'Strategic social media management to grow your brand presence and engage with your audience effectively.',
    icon: Share2,
    features: [
      { title: 'Content Strategy', description: 'Tailored content plans designed to resonate with your target audience.' },
      { title: 'Community Management', description: 'Active engagement with your followers to build a loyal community.' },
      { title: 'Ad Campaigns', description: 'Data-driven social media advertising to maximize your ROI.' }
    ],
    longDescription: 'Elevate your brand with our comprehensive social media marketing services. We create engaging content, manage your online community, and run targeted ad campaigns across platforms like Facebook, Instagram, LinkedIn, and Twitter to drive growth and engagement.',
    image: "/images/social-media-management.jpg"
  },
  {
    id: 'content-copywriting',
    title: 'Professional Content & Copywriting',
    description: 'High-quality, persuasive content and copywriting that tells your brand story and converts visitors into customers.',
    icon: PenTool,
    features: [
      { title: 'SEO Copywriting', description: 'Content optimized for search engines to improve your organic visibility.' },
      { title: 'Brand Storytelling', description: 'Compelling narratives that connect your brand with your audience.' },
      { title: 'Conversion Focus', description: 'Persuasive copy designed to drive specific actions and conversions.' }
    ],
    longDescription: 'Words have power. Our professional content and copywriting services help you communicate your value proposition clearly and persuasively. From website copy and blog posts to marketing emails and product descriptions, we deliver content that engages and converts.',
    image: '/images/maintenance-contact.jpg'
  },
  {
    id: 'website-speed-optimization',
    title: 'Website Speed & Performance Optimization',
    description: 'Advanced performance optimization to ensure lightning-fast loading times and superior user experience.',
    icon: Zap,
    features: [
      { title: 'Core Web Vitals', description: 'Optimization focused on Google\'s Core Web Vitals for better rankings.' },
      { title: 'Image Optimization', description: 'Advanced compression techniques to reduce load times without losing quality.' },
      { title: 'Code Minification', description: 'Streamlining your website\'s code for maximum efficiency and speed.' }
    ],
    longDescription: 'A slow website is a lost opportunity. We specialize in deep performance optimization, tackling everything from server-side bottlenecks to front-end rendering issues. Our goal is to make your website lightning-fast, improving both user satisfaction and SEO rankings.',
    image: '/images/speed-optimization.jpg'
  },
  {
    id: 'graphic-designing',
    title: 'Professional Graphic Designing',
    description: 'Creative and impactful graphic design solutions that visually communicate your brand\'s identity and message.',
    icon: Palette,
    features: [
      { title: 'Brand Identity', description: 'Logo design and brand guidelines that define your visual presence.' },
      { title: 'Marketing Materials', description: 'Eye-catching designs for brochures, flyers, and social media posts.' },
      { title: 'UI/UX Elements', description: 'Custom icons and graphics that enhance your website\'s user interface.' }
    ],
    longDescription: 'Visual communication is key to a strong brand. Our graphic design services cover everything from logo creation and brand identity to marketing collateral and digital assets. We combine creativity with strategy to deliver designs that leave a lasting impression.',
    image: '/images/graphic-design-overview.jpg'
  },
  {
    id: 'seo-optimization',
    title: 'Search Engine Optimization (SEO)',
    description: 'Comprehensive SEO strategies to improve search visibility, drive targeted organic traffic, and grow your business.',
    icon: Search,
    features: [
      { title: 'On-Page SEO', description: 'Optimizing individual pages to rank higher and earn more relevant traffic.' },
      { title: 'Technical SEO', description: 'Improving the backend structure of your site for better search engine crawling.' },
      { title: 'Keyword Research', description: 'Identifying the most valuable search terms for your business growth.' }
    ],
    longDescription: 'Get found by the right people at the right time. Our SEO services are data-driven and focused on long-term results. We optimize your website\'s content, structure, and authority to ensure you rank higher on search engines and attract qualified leads.',
    image: '/images/seo-overview.jpg'
  },
  {
    id: 'app-development',
    title: 'App Development',
    description: 'Scalable and high-performance web & mobile applications engineered to deliver seamless digital experiences.',
    icon: Smartphone,
    features: [
      { title: 'Custom Solutions', description: 'Tailor-made applications built to solve your specific business challenges.' },
      { title: 'Cross-Platform', description: 'Apps that work beautifully on both iOS and Android devices.' },
      { title: 'Scalable Tech', description: 'Built with modern frameworks that grow alongside your business.' }
    ],
    longDescription: 'Transform your ideas into powerful digital products. We develop custom web and mobile applications that are user-friendly, performant, and scalable. Our development process focuses on delivering high-quality code and exceptional user experiences.',
    image: '/images/app-development-overview.jpg'
  },
  {
    id: 'ecommerce-development',
    title: 'E-Commerce & Online Store Development',
    description: 'Complete online store solutions with secure payments and easy product management to grow your global sales.',
    icon: ShoppingCart,
    features: [
      { title: 'Product Setup', description: 'Uploading your products with high-quality images, descriptions, and category management.' },
      { title: 'Payment Gate Integration', description: 'Integrating secure payment methods like PayPal, Stripe, or local bank transfers for safe shopping.' },
      { title: 'Shopping Cart Optimization', description: 'Ensuring a smooth and fast checkout process to reduce cart abandonment and increase sales.' }
    ],
    longDescription: 'I create a complete online store for your business where you can sell your products worldwide. With secure payment methods and easy product management, your business will stay online 24/7.',
    image: '/images/ecommerce-overview.jpg'
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design Services',
    description: 'Intuitive and user-friendly interface designs focused on clean layouts, smooth navigation, and conversion.',
    icon: Layout,
    features: [
      { title: 'Wireframing', description: 'Planning the structure of your website before we build it.' },
      { title: 'Prototyping', description: 'Creating interactive designs to see how the final site will feel.' },
      { title: 'User Research', description: 'Understanding your audience to design what they actually need.' }
    ],
    longDescription: 'A great website is more than just looks—it\'s about how it works. I design intuitive and user-friendly interfaces that make it easy for your visitors to become customers, focusing on clean layouts and smooth navigation.',
    image: '/images/ui-ux-overview.jpg'
  }
];
