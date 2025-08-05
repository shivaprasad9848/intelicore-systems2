"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Animation variants with proper typing
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
} as const;

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 10
    }
  }
} as const;

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } }
} as const;

const ContactPage: React.FC = () => {
  const [activeMap, setActiveMap] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  const locations = [
    {
      id: 'india',
      title: 'India Office',
      company: 'IntelCore Systems Pvt. Ltd.',
      address: 'Nagayalanka, Andhra Pradesh, India',
      mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61343.14037538341!2d80.08975512312637!3d15.7891113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4b4d3e3a6a6a6f%3A0x9e4e3a6a6a6a6a6f!2sNagayalanka%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1718900000000"
    },
    {
      id: 'usa',
      title: 'USA Office',
      company: 'IntelCore Systems Inc.',
      address: 'San Francisco, California, USA',
      mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d201880.51115438552!2d-122.57768437848272!3d37.757617097271385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sus!4v1718900000000"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 pt-[130px]">
      {/* Updated Hero Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Left side with image */}
            <div className="lg:w-1/2">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="relative w-full h-96 rounded-xl overflow-hidden shadow-lg"
              >
                <Image
                  src="/images/business-person.png"
                  alt="AI Solutions"
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
            </div>

            {/* Right side with content */}
            <motion.div 
              className="lg:w-1/2 space-y-6"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              <motion.h1 
                variants={itemVariants}
                className="text-3xl md:text-6xl lg:text-5xl font-bold leading-tight text-gray-900"
              >
                Connect with Us 
              </motion.h1>
              <motion.h2 
                variants={itemVariants}
                className='text-orange-500 text-2xl'
              >
                Let&apos;s Build Your Next Solution Together
              </motion.h2>
              <motion.p 
                variants={itemVariants}
                className="text-base md:text-lg text-gray-600 max-w-lg"
              >
                Ready to explore AI, cybersecurity, or cloud computing solutions? Contact InteliCore 
                Systems today! We respond within 24 hours to tailor solutions to your needs.
              </motion.p> 
            </motion.div>
          </div>
        </div>
      </div>

      {/* Rest of the contact page content */}
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
        className="max-w-6xl mx-auto px-4 py-12 md:py-20"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Info Card */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300 border border-gray-100"
          >
            <motion.h2 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-2xl font-bold text-gray-800 mb-6"
            >
              Get In Touch
            </motion.h2>
            
            <div className="space-y-5 mb-8">
              {[
                {
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ),
                  title: "Email",
                  content: "info@intelcore.com",
                  description: "We respond to all inquiries within 24 hours"
                },
                {
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  ),
                  title: "Phone",
                  content: "+91-888-4455",
                  description: "Mon-Sat, 10 AM - 7 PM IST"
                },
                {
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                  title: "Global Offices",
                  content: (
                    <>
                      <p className="text-gray-600 text-sm">India: Nagayalanka, AP</p>
                      <p className="text-gray-600 text-sm">USA: San Francisco, CA</p>
                    </>
                  ),
                  description: null
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-start"
                >
                  <div className="bg-orange-50 p-2 rounded-lg mr-4 flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">{item.title}</h3>
                    <p className="text-gray-600">{item.content}</p>
                    {item.description && (
                      <p className="text-sm text-gray-500 mt-1">{item.description}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-orange-400 to-amber-400 hover:from-orange-500 hover:to-amber-500 text-white font-medium py-2 px-6 rounded-lg transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 flex items-center justify-center text-sm"
              >
                Sign Up Now
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white border border-orange-400 text-orange-400 hover:bg-orange-50 font-medium py-2 px-6 rounded-lg transition-all duration-300 flex items-center justify-center text-sm"
              >
                Join Waitlist
              </motion.button>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300 border border-gray-100"
          >
            <motion.h2 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-2xl font-bold text-gray-800 mb-6"
            >
              Send Us a Message
            </motion.h2>
            
            {submitSuccess && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mb-5 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg flex items-center text-sm"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Your message has been sent successfully! We&apos;ll contact you soon.
              </motion.div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-5">
              {[
                {
                  id: "name",
                  label: "Name",
                  type: "text",
                  placeholder: "Your name"
                },
                {
                  id: "email",
                  label: "Email",
                  type: "email",
                  placeholder: "Your email"
                },
                {
                  id: "message",
                  label: "How can we help you?",
                  type: "textarea",
                  placeholder: "Tell us about your project"
                }
              ].map((field, index) => (
                <motion.div 
                  key={field.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  <label htmlFor={field.id} className="block text-gray-700 mb-1 font-medium text-sm">
                    {field.label}
                  </label>
                  {field.type === "textarea" ? (
                    <textarea
                      id={field.id}
                      placeholder={field.placeholder}
                      className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-200 focus:border-orange-300 transition shadow-sm text-sm"
                      rows={4}
                      required
                      value={formData[field.id as keyof typeof formData]}
                      onChange={handleInputChange}
                    ></textarea>
                  ) : (
                    <input
                      type={field.type}
                      id={field.id}
                      placeholder={field.placeholder}
                      className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-200 focus:border-orange-300 transition shadow-sm text-sm"
                      required
                      value={formData[field.id as keyof typeof formData]}
                      onChange={handleInputChange}
                    />
                  )}
                </motion.div>
              ))}
              
              <motion.button 
                type="submit" 
                disabled={isSubmitting}
                whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                className={`w-full bg-gradient-to-r from-orange-400 to-amber-400 hover:from-orange-500 hover:to-amber-500 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 flex items-center justify-center text-sm ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </>
                ) : (
                  'Submit Your Inquiry'
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Locations Section */}
        <div className="mt-16">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Our Global Locations</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm">
              Visit our offices or connect with us virtually from anywhere in the world.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {locations.map((location, index) => (
              <motion.div 
                key={location.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.1 }}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100"
                onMouseEnter={() => setActiveMap(location.id)}
                onMouseLeave={() => setActiveMap(null)}
              >
                <div className="relative w-full h-60 mb-5 rounded-lg overflow-hidden border border-gray-200">
                  <iframe
                    src={location.mapSrc}
                    width="100%"
                    height="100%"
                    className={`absolute inset-0 transition-all duration-500 ${activeMap === location.id ? 'scale-110' : 'scale-100'}`}
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none transition-opacity duration-500 ${activeMap === location.id ? 'opacity-100' : 'opacity-0'}`}></div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-2">{location.title}</h3>
                <p className="text-gray-600 mb-1 font-medium text-sm">{location.company}</p>
                <p className="text-gray-600 mb-5 text-sm">{location.address}</p>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-orange-400 to-amber-400 hover:from-orange-500 hover:to-amber-500 text-white font-medium py-2 px-6 rounded-lg transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 flex items-center text-sm"
                >
                  Get Directions
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Compact Footer */}
      <motion.footer 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="bg-gray-800 text-white pt-16 pb-10"
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <motion.div
              variants={itemVariants}
            >
              <h3 className="text-xl font-bold mb-4 text-orange-300">IntelCoreAI</h3>
              <p className="text-gray-300 mb-4 text-sm">
                Revolutionizing the future with cutting-edge AI and cloud computing solutions.
              </p>
              <div className="flex space-x-3">
                {[
                  {
                    icon: (
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                      </svg>
                    )
                  },
                  {
                    icon: (
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    )
                  },
                  {
                    icon: (
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                      </svg>
                    )
                  },
                  {
                    icon: (
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                      </svg>
                    )
                  }
                ].map((social, i) => (
                  <motion.a 
                    key={i}
                    whileHover={{ y: -3 }}
                    href="#" 
                    className="bg-orange-400 hover:bg-orange-300 p-2 rounded-full transition"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
            
            {[
              {
                title: "Quick Links",
                items: [
                  "About Us",
                  "Services",
                  "Case Studies",
                  "Careers",
                  "Contact Us"
                ]
              },
              {
                title: "Our Services",
                items: [
                  "AI & Automation",
                  "Cybersecurity",
                  "Cloud Computing",
                  "Web & Mobile",
                  "Data Analytics"
                ]
              },
              {
                title: "Contact Us",
                items: [
                  {
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-orange-400 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    ),
                    text: "info@intelcore.com"
                  },
                  {
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-orange-400 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.042 11.042 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    ),
                    text: "+91-888-4455 (India)"
                  },
                  {
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-orange-400 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.042 11.042 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    ),
                    text: "+1-415-789-0123 (USA)"
                  }
                ]
              }
            ].map((section, sectionIndex) => (
              <motion.div 
                key={sectionIndex}
                variants={itemVariants}
                transition={{ delay: 0.1 * sectionIndex }}
              >
                <h3 className="text-lg font-bold mb-4 text-white">{section.title}</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  {section.items.map((item, itemIndex) => (
                    <motion.li 
                      key={itemIndex}
                      whileHover={{ x: 5 }}
                    >
                      {typeof item === 'string' ? (
                        <a href="#" className="hover:text-orange-300 transition flex items-center">
                          {item}
                        </a>
                      ) : (
                        <div className="flex items-start">
                          {item.icon}
                          {item.text}
                        </div>
                      )}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="pt-8 border-t border-gray-700 text-center text-gray-400 text-xs"
          >
            <p>
              © 2024 IntelCore Systems. All rights reserved. | 
              <a href="#" className="ml-1 mr-1 underline hover:text-orange-300">Privacy Policy</a> | 
              <a href="#" className="ml-1 underline hover:text-orange-300">Terms of Service</a>
            </p>
          </motion.div>
        </div>
      </motion.footer>
    </div>
  );
};

export default ContactPage;