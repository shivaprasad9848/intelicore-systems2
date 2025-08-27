import React from 'react';

const PrimarySolutions = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4 py-10">
      {/* Header with PrimarySolutions branding */}
      <div className="mb-12 text-center max-w-3xl">
        <h1 className="text-4xl font-bold mb-3 text-orange-600 animate-fade-in-up">
          Our Primary Solutions
        </h1>
        <p className="text-lg text-gray-600 mb-8 animate-fade-in-up delay-100">
          We specialize in three core areas designed to help students, job seekers, and professionals achieve career success. 
          From building ATS-friendly resumes to preparing for virtual interviews, our solutions bridge the gap between education and employment.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* AI & Automation Development Card */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden w-full h-[640px] flex flex-col relative border-t-8 border-blue-500 transform transition-all duration-500 hover:scale-105 hover:shadow-xl">
          {/* Circle on right side */}
          <div className="absolute top-6 right-6 w-30 h-30 bg-blue-100 rounded-full flex items-center justify-center shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 极8.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          
          {/* Circular icon */}
          <div className="flex justify-center mt-14 mb-6">
            <div className="w-30 h-30 bg-white rounded-full flex items-center justify-center p-2 shadow-lg border-2 border-blue-100">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
          </div>
          
          <div className="px-8 py-6 text-center flex-grow flex极 flex-col">
            <h2 className="text-2xl font-bold text-gray-800 mb-5 animate-fade-in-up delay-200">AI & Automation Development</h2>
            <p className="text-gray-600 text-base mb-8 flex-grow animate-fade-in-up delay-300">
              Unlock the power of intelligence and efficiency with our AI-driven solutions. At Intelicore Systems, we design smart applications that harness data, deliver actionable insights, and automate complex workflows. Our automation-first approach helps businesses improve efficiency, reduce costs, and make faster, smarter decisions.
            </p>
          </div>
          
          <div className="px-8 pb-8 text-center animate-fade-in-up delay-400">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-10 rounded-full text-base transition-colors duration-300 shadow-md transform hover:scale-105">
              Learn More
            </button>
          </div>
        </div>

        {/* Cloud Computing Services Card */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden w-full h-[640px] flex flex-col relative border-t-8 border-green-500 transform transition-all duration-500 hover:scale-105 hover极-shadow-xl">
          {/* Circle on right side */}
          <div className="absolute top-6 right-6 w-30 h-30 bg-green-100 rounded-full flex items-center justify-center shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
            </svg>
          </div>
          
          {/* Circular icon */}
          <div className="flex justify-center mt-14 mb-6">
            <div className="w-30 h-30 bg-white rounded-full flex items-center justify-center p-2 shadow-lg border-2 border-green-100">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 极 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
              </svg>
            </div>
          </div>
          
          <div className="px-8 py-6 text-center flex-grow flex flex-col">
            <h2 className="text-2xl font-bold text-gray-800 mb-5 animate-fade-in-up delay-200">Cloud Computing Services</h2>
            <p className="text-gray-600 text-base mb-8 flex-grow animate-fade-in-up delay-300">
              Power your career platform with scalable, cloud-based solutions. At Intelicore Systems, we build secure and flexible cloud infrastructures that ensure global accessibility, seamless performance, and reliable support—perfect for education, career-building, and job-matching platforms.
            </p>
          </div>
          
          <div className="px-8 pb-8 text-center animate-fade-in-up delay-400">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-10 rounded-full text-base transition-colors duration-300 shadow-md transform hover:scale-105">
              Learn More
            </button>
          </div>
        </div>

        {/* Cybersecurity Solutions Card */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden w-full h-[640px] flex flex-col relative border-t-8 border-red-500 transform transition-all duration-500 hover:scale-105 hover:shadow-xl">
          {/* Circle on right side */}
          <div className="absolute top-6 right-6 w-30 h-30 bg-red-100 rounded-full flex items-center justify-center shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.极76-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          
          {/* Circular icon */}
          <div className="flex justify-center mt-14 mb-6">
            <div className="w-30 h-30 bg-white rounded-full flex items-center justify-center p-2 shadow-lg border-2 border-red-100">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
          </div>
          
          <div className="px-8 py-6 text-center flex-grow flex flex-col">
            <h2 className="text-2xl font-bold text-gray-800 mb-5 animate-fade-in-up delay-200">Cybersecurity Solutions</h2>
            <p className="text-gray-600 text-base mb-8 flex-grow animate-fade-in-up delay-300">
              Keep your career platform and user data safe. At Intelicore Systems, we provide advanced security measures—including encrypted data protection, secure APIs, and real-time threat detection—to ensure a trusted and reliable environment for students, professionals, and employers.
            </p>
          </div>
          
          <div className="px-8 pb-8 text-center animate-fade-in-up delay-400">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-10 rounded-full text-base transition-colors duration-300 shadow-md transform hover:scale-105">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Add custom CSS for animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        .delay-100 {
          animation-delay: 0.1s;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
        .delay-300 {
          animation-delay: 0.3s;
        }
        .delay-400 {
          animation-delay: 0.4s;
        }
      `}</style>
    </div>
  );
};

export default PrimarySolutions;