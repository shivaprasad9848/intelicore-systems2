// src/app/page.tsx
import React from 'react';

const IntelicorePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 pt-[70px]">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-orange-500">Intelicore Systems</div>
          <div className="hidden md:flex space-x-8">
            <a href="#story" className="text-gray-600 hover:text-orange-400">Our Story</a>
            <a href="#mission" className="text-gray-600 hover:text-orange-400">Mission</a>
            <a href="#journey" className="text-gray-600 hover:text-orange-400">Journey</a>
          </div>
          <button className="md:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="py-20 bg-gradient-to-r from-orange-200 to-orange-200 text-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Building Tomorrow's Technology Today
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-10">
            Founded in 2025, Intelicore Systems Private Limited is a dynamic startup dedicated to innovation.
            Our passionate team of experts leverages AI, cybersecurity, and cloud computing to craft software
            solutions that solve real-world challenges.
          </p>
          <button className="bg-orange-200 hover:bg-orange-300 text-gray-800 font-bold py-3 px-8 rounded-full transition duration-300">
            Learn More About Our Services
          </button>
        </div>
      </header>

      {/* Our Story Section */}
      <section id="story" className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Story</h2>
          <div className="space-y-6">
            <p className="text-gray-600 text-lg">
              Founded in 2025, Intelicore Systems Private Limited is a dynamic startup dedicated to innovation.
              Our passionate team of experts leverages AI, cybersecurity, and cloud computing to craft software
              solutions that solve real-world challenges.
            </p>
            <p className="text-gray-600 text-lg">
              We believe in the power of technology to transform businesses and enhance lives. With our
              cutting-edge solutions, we're helping organizations navigate the digital landscape with
              confidence and security.
            </p>
          </div>
          <div className="text-center mt-10">
            <button className="border-2 border-orange-200 text-orange-500 hover:bg-orange-200 hover:text-gray-800 font-bold py-2 px-6 rounded-full transition duration-300">
              Learn More About Our Services
            </button>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section id="mission" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Mission & Values</h2>
          <div className="text-center mb-16">
            <p className="text-gray-600 text-xl italic">
              At Intelicore Systems, we're on a mission to deliver secure, scalable, and intelligent
              technology for businesses and individuals. Our work is guided by core values that define who we are.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold mb-4 text-orange-500">Our Mission</h3>
              <p className="text-gray-600">
                Deliver secure, scalable, and intelligent technology for businesses and individuals.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold mb-4 text-orange-500">Our Expertise</h3>
              <p className="text-gray-600">
                Cutting-edge app and web development with a focus on user experience.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-200 to-orange-300 text-gray-800 p-8 rounded-xl mt-12 text-center">
            <h3 className="text-2xl font-bold mb-4">Our Promise</h3>
            <p className="text-xl mb-6">
              High-quality solutions backed by innovation and trust.
            </p>
            <p className="text-lg mb-8">
              Discover how we can elevate your digital journey
            </p>
            <button className="bg-white text-orange-500 hover:bg-orange-100 font-bold py-3 px-8 rounded-full transition duration-300">
              Learn More About Our Services
            </button>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="journey" className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">Our Journey</h2>

          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-orange-200 before:to-transparent">
            {/* Timeline Item 1 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-orange-200 text-gray-800 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <span className="font-bold">2025</span>
              </div>

              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-gray-50 p-4 rounded border border-gray-200 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-orange-500">Company Founded</span>
                </div>
                <p className="mt-3 text-gray-600">
                  Intelligence Systems was established with a vision to revolutionize software development
                  through AI, cybersecurity, and cloud solutions.
                </p>
              </div>
            </div>

            {/* Timeline Item 2 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-orange-200 text-gray-800 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <span className="font-bold">2025</span>
              </div>

              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-gray-50 p-4 rounded border border-gray-200 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-orange-500">First Major Clients</span>
                </div>
                <p className="mt-3 text-gray-600">
                  Secured our first major partnerships and began developing innovative solutions for
                  businesses across sectors.
                </p>
              </div>
            </div>

            {/* Timeline Item 3 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-orange-200 text-gray-800 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <span className="font-bold">Soon</span>
              </div>

              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-gray-50 p-4 rounded border border-gray-200 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-orange-400">AI Career Solution Launch</span>
                </div>
                <p className="mt-3 text-gray-600">
                  Our revolutionary AI career platform will launch, transforming how professionals
                  approach career development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="text-2xl font-bold mb-4">Intelicore Systems</div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Private Limited | Building innovative software solutions with AI, cybersecurity, and cloud computing
          </p>
          <div className="mt-8 text-gray-500">
            © {new Date().getFullYear()} Intelicore Systems. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default IntelicorePage;
