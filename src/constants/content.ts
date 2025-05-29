export const companyInfo = {
  name: "Infinity Haul Logistics",
  email: "infinityhaullogistics@gmail.com",
  phone: "+1 774 507 0061",
  address: "1326 S Miami Ave, Miami, FL 33130, USA",
  socialMedia: {
    facebook: "https://facebook.com/infinityhaullogistics",
    instagram: "https://instagram.com/infinityhaullogistics",
    linkedin: "https://linkedin.com/company/infinityhaullogistics",
  },
  yearFounded: 2020,
};

export const navigationLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Why Choose Us", href: "#why-choose-us" },
  { label: "Contact", href: "#contact" },
];

export const heroContent = {
  heading: "The Premier Dispatch Solution For Your Trucking Business",
  subheading: "Your Trusted Partner In Transportation And Dispatch Services",
  cta: "Get a Free Quote",
};

// constants/content.ts

export const servicesContent = {
  heading: 'Our Services',
  subheading: 'Comprehensive dispatch solutions designed to streamline your operations and maximize your profitability.',
  services: [
    {
      icon: 'Truck',
      title: 'Load Matching',
      description: 'Strategic freight matching to ensure consistent, high-paying loads that align with your routes and equipment specifications.',
    },
    {
      icon: 'DollarSign',
      title: 'Rate Negotiation',
      description: 'Expert rate negotiation to secure the best possible prices for every load, maximizing your revenue potential.',
    },
    {
      icon: 'Phone',
      title: '24/7 Support',
      description: 'Round-the-clock dispatch support ensuring smooth operations and immediate assistance whenever you need it.',
    },
    {
      icon: 'FileText',
      title: 'Paperwork Management',
      description: 'Complete handling of all documentation including rate confirmations, invoicing, and necessary permits.',
    },
    {
      icon: 'Navigation',
      title: 'Route Optimization',
      description: 'Strategic planning of routes to minimize deadhead miles and maximize earning potential for every trip.',
    },
    {
      icon: 'Users',
      title: 'Broker Relations',
      description: 'Strong relationships with reliable brokers ensuring access to premium loads and favorable payment terms.',
    },
  ],
};


export const aboutContent = {
  heading: "About Infinity Haul Logistics",
  subheading: "Your trusted partner in logistics excellence",
  paragraphs: [
    "At Infinity Haul Logistics, we're dedicated to providing top-notch dispatch services for trucking companies. With years of experience in the industry, we understand the complexities of logistics and transportation. Our team of expert dispatchers work tirelessly to ensure that your trucks are loaded and on the road, maximizing efficiency and profitability.",
  ],
  values: [
    { title: "Reliability", description: "We deliver on our promises, ensuring your shipments arrive safely and on schedule." },
    { title: "Transparency", description: "Clear communication and real-time updates throughout the shipping process." },
    { title: "Excellence", description: "Continuously raising our standards to exceed customer expectations." },
    { title: "Innovation", description: "Embracing new technologies to improve efficiency and service quality." },
  ],
};

export const whyChooseUsContent = {
  heading: "Why Choose Infinity Haul Logistics",
  subheading: "What sets us apart in the logistics industry",
  sections: [
    {
      heading: "Our Mission",
      content: "Our mission is to be the trusted partner for trucking companies, providing reliable, efficient, and personalized dispatch services that meet the unique needs of each client. We're committed to building long-term relationships with our partners, helping them succeed in the competitive world of trucking."
    },
    {
      heading: "What We Do",
      content: [
        "Expert dispatch services for trucking companies",
        "Load planning and coordination",
        "Real-time tracking and updates",
        "Personalized support and communication"
      ]
    },
    {
      heading: "Why Choose Us",
      content: [
        "Experienced team of dispatchers with industry expertise",
        "Personalized service and support",
        "Proven track record of success",
        "Commitment to building long-term relationships"
      ]
    }
  ]
};

export const statContent = {
  stats: [
    { value: "98%", label: "On-Time Delivery" },
    { value: "1M+", label: "Miles Covered" },
    { value: "500+", label: "Satisfied Clients" },
    { value: "0", label: "Cargo Loss Claims" },
  ],
};

export const contactContent = {
  heading: "Contact Us",
  subheading: "Get in touch with our team",
  formFields: [
    { name: "name", label: "Your Name", type: "text", placeholder: "Enter your full name", required: true },
    { name: "email", label: "Email Address", type: "email", placeholder: "Enter your email address", required: true },
    { name: "phone", label: "Phone Number", type: "tel", placeholder: "Enter your phone number", required: false },
    { 
      name: "service", 
      label: "Service Interested In", 
      type: "select", 
      options: [
        "Flatbed",
        "Reefer",
        "Dry Van",
        "Power Only",
        "Step Deck",
        "Hot Shot",
        "Box Truck",
      ],
      required: true 
    },
    { name: "message", label: "Message", type: "textarea", placeholder: "Tell us about your dispatch needs", required: true },
  ],
  submitButton: "Send Message",
  contactInfo: [
    { label: "Email", value: "infinityhaullogistics@gmail.com", icon: "Mail" },
    { label: "Phone", value: "+1 774 507 0061", icon: "Phone" },
    { label: "Address", value: "1326 S Miami Ave, Miami, FL 33130, USA", icon: "MapPin" },
  ],
};

export const ctaContent = {
  heading: "Ready To Optimize Your Trucking Business?",
  subheading: "Let us handle your headache while you focus on growing your business",
  buttonText: "Request a Quote",
  buttonLink: "#contact",
};

export const footerContent = {
  tagline: "Your Trusted Partner in Transportation and Dispatch Services",
  copyright: `© ${new Date().getFullYear()} Infinity Haul Logistics. All rights reserved.`,
  sections: [
    {
      title: "Quick Links",
      links: [
        { label: "Home", href: "#home" },
        { label: "Services", href: "#services" },
        { label: "About", href: "#about" },
        { label: "Why Choose Us", href: "#why-choose-us" },
        { label: "Contact", href: "#contact" },
      ],
    },
    {
      title: "Services",
      links: [
        { label: "Paperwork Management", href: "#services" },
        { label: "Load Matching", href: "#services" },
        { label: "Broker Relations", href: "#services" },
        { label: "Rate Negotiation", href: "#services" },
        { label: "Route Optimization", href: "#services" },
        { label: "24/7 Customer Support", href: "#services" },
      ],
    },
    {
      title: "Contact",
      links: [
        { label: "infinityhaullogistics@gmail.com", href: "mailto:infinityhaullogistics@gmail.com" },
        { label: "+1 774 507 0061", href: "tel:+17745070061" },
        { label: "1326 S Miami Ave, Miami, FL 33130, USA", href: "#" },
      ],
    },
  ],
};