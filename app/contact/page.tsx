"use client";
import React, { useState } from 'react';

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
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-400 to-orange-400 text-white py-20 md:py-28 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05]"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
            Connect with Us
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-orange-200 max-w-2xl mx-auto">
            Let's Build Your Next Solution Together
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-2xl mx-auto">
            <p className="text-lg text-orange-100">
              Ready to explore AI, cybersecurity, or cloud computing solutions? Contact IntelCore Systems. 
              We respond within 24 hours.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Get In Touch</h2>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-start">
                <div className="bg-orange-50 p-3 rounded-lg mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 text-lg">Email</h3>
                  <p className="text-gray-600">info@intelcore.com</p>
                  <p className="text-sm text-gray-500 mt-2">We respond to all inquiries within 24 hours</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-orange-50 p-3 rounded-lg mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 text-lg">Phone</h3>
                  <p className="text-gray-600">+91-888-4455</p>
                  <p className="text-sm text-gray-500 mt-2">Mon-Sat, 10 AM - 7 PM IST</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-orange-50 p-3 rounded-lg mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 text-lg">Global Offices</h3>
                  <p className="text-gray-600 mb-1">India: Nagayalanka, AP</p>
                  <p className="text-gray-600">USA: San Francisco, CA</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-orange-600 to-amber-700 hover:from-orange-700 hover:to-amber-800 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                </svg>
                Sign Up Now
              </button>
              <button className="bg-white border border-orange-600 text-orange-600 hover:bg-orange-50 font-medium py-3 px-8 rounded-lg transition-all duration-300 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1.323l3.954.784a1 1 0 01.636 1.479l-2.97 4.727a1 1 0 01-.686.428L10 12.618V16h4a1 1 0 110 2H6a1 1 0 110-2h4v-3.382l-1.934-.387a1 1 0 01-.686-.428L4.41 6.586a1 1 0 01.636-1.479L9 4.323V3a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
                Join Waitlist
              </button>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Send Us a Message</h2>
            
            {submitSuccess && (
              <div className="mb-6 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Your message has been sent successfully! We'll contact you soon.
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2 font-medium">Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your name"
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-300 focus:border-orange-500 transition shadow-sm"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2 font-medium">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your email"
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-300 focus:border-orange-500 transition shadow-sm"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2 font-medium">How can we help you?</label>
                <textarea
                  id="message"
                  placeholder="Tell us about your project"
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-300 focus:border-orange-500 transition shadow-sm"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`w-full bg-gradient-to-r from-orange-600 to-amber-700 hover:from-orange-700 hover:to-amber-800 text-white font-medium py-4 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center justify-center ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </>
                ) : (
                  'Submit Your Inquiry'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Location Section */}
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Global Locations</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Visit our offices or connect with us virtually from anywhere in the world.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {locations.map((location) => (
            <div 
              key={location.id}
              className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
              onMouseEnter={() => setActiveMap(location.id)}
              onMouseLeave={() => setActiveMap(null)}
            >
              <div className="relative w-full h-72 mb-6 rounded-xl overflow-hidden border border-gray-200">
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
                <div className={`absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none transition-opacity duration-500 ${activeMap === location.id ? 'opacity-100' : 'opacity-0'}`}></div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-3">{location.title}</h3>
              <p className="text-gray-600 mb-2 font-medium">{location.company}</p>
              <p className="text-gray-600 mb-6">{location.address}</p>
              <button className="bg-gradient-to-r from-orange-600 to-amber-700 hover:from-orange-700 hover:to-amber-800 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                Get Directions
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-20 pb-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-orange-400">IntelCoreAI</h3>
              <p className="text-gray-400 mb-6">
                Revolutionizing the future with cutting-edge AI and cloud computing solutions.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="bg-orange-700 hover:bg-orange-600 p-3 rounded-full transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="bg-orange-700 hover:bg-orange-600 p-3 rounded-full transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="bg-orange-700 hover:bg-orange-600 p-3 rounded-full transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="bg-orange-700 hover:bg-orange-600 p-3 rounded-full transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-6 text-white">Quick Links</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-orange-400 transition flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-orange-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  About Us</a></li>
                <li><a href="#" className="hover:text-orange-400 transition flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-orange-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  Services</a></li>
                <li><a href="#" className="hover:text-orange-400 transition flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-orange-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  Case Studies</a></li>
                <li><a href="#" className="hover:text-orange-400 transition flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-orange-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  Careers</a></li>
                <li><a href="#" className="hover:text-orange-400 transition flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-orange-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  Contact Us</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-6 text-white">Our Services</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-orange-400 transition flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-orange-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  AI & Automation Solutions</a></li>
                <li><a href="#" className="hover:text-orange-400 transition flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-orange-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  Cybersecurity Services</a></li>
                <li><a href="#" className="hover:text-orange-400 transition flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-orange-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  Cloud Computing</a></li>
                <li><a href="#" className="hover:text-orange-400 transition flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-orange-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  Web & Mobile Platforms</a></li>
                <li><a href="#" className="hover:text-orange-400 transition flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-orange-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  Data Analytics</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-6 text-white">Contact Us</h3>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-orange-500 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  info@intelcore.com
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-orange-500 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  +91-888-4455 (India)
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-orange-500 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  +1-415-789-0123 (USA)
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-orange-500 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p>Nagayalanka, Andhra Pradesh, India</p>
                    <p>San Francisco, California, USA</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-10 border-t border-gray-800 text-center text-gray-500">
            <p>
              © 2024 IntelCore Systems. All rights reserved. | 
              <a href="#" className="ml-1 mr-1 underline hover:text-orange-400">Privacy Policy</a> | 
              <a href="#" className="ml-1 underline hover:text-orange-400">Terms of Service</a> | 
              <a href="#" className="ml-1 underline hover:text-orange-400">Cookie Policy</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;