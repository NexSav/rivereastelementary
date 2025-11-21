import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';

const BookIcon = ({ className = "h-6 w-6" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
);

const ClockIcon = ({ className = "h-6 w-6" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const PhoneIcon = ({ className = "h-6 w-6" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const ComingSoonPage = () => {
  const location = useLocation();
  const pageName = location.state?.pageName || 'This Page';

  return (
    <div className="min-h-screen bg-gray-50 font-sans selection:bg-cyan-200 selection:text-blue-900">
      <Navbar />

      <main id="main-content">
        {/* Hero Section */}
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-900">
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 z-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>
          </div>

          {/* Content */}
          <div className="relative z-10 mx-auto max-w-4xl px-6 py-24 text-center sm:px-8 lg:px-12">
            {/* Icon */}
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 animate-ping rounded-full bg-cyan-400 opacity-20"></div>
                <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 shadow-2xl">
                  <ClockIcon className="h-12 w-12 text-white" />
                </div>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-5xl font-bold tracking-tighter text-white sm:text-6xl md:text-7xl lg:text-8xl">
              Coming <span className="text-cyan-400">Soon</span>
            </h1>

            {/* Subtitle */}
            <p className="mt-6 text-xl font-medium leading-relaxed text-blue-50 sm:text-2xl">
              {pageName} is currently under construction
            </p>

            <p className="mt-4 text-lg leading-relaxed text-blue-100 max-w-2xl mx-auto">
              We're working hard to bring you this content. Check back soon or contact us for more information.
            </p>

            {/* Action Buttons */}
            <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href="/"
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-blue-900 shadow-xl transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <BookIcon className="h-5 w-5" />
                Back to Home
              </a>
              <a
                href="mailto:mpanetta@schools.nyc.gov"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <PhoneIcon className="h-5 w-5" />
                Contact Us
              </a>
            </div>

            {/* Info Cards */}
            <div className="mt-16 grid gap-6 sm:grid-cols-3 max-w-4xl mx-auto">
              <div className="rounded-2xl bg-white/10 backdrop-blur-sm p-6 ring-1 ring-white/20 transition-transform hover:scale-105">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-400/20 text-cyan-300 mb-4 mx-auto">
                  <PhoneIcon className="h-5 w-5" />
                </div>
                <h3 className="text-sm font-bold text-white mb-2">Need Help?</h3>
                <p className="text-sm text-blue-100">Contact our office for assistance</p>
                <a href="tel:+12128023035" className="mt-2 text-xs font-semibold text-cyan-400 hover:text-cyan-300">
                  (212) 802-3035
                </a>
              </div>

              <div className="rounded-2xl bg-white/10 backdrop-blur-sm p-6 ring-1 ring-white/20 transition-transform hover:scale-105">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-400/20 text-cyan-300 mb-4 mx-auto">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-sm font-bold text-white mb-2">Email Us</h3>
                <p className="text-sm text-blue-100">Get in touch with our team</p>
                <a href="mailto:mpanetta@schools.nyc.gov" className="mt-2 text-xs font-semibold text-cyan-400 hover:text-cyan-300 block truncate">
                  mpanetta@schools.nyc.gov
                </a>
              </div>

              <div className="rounded-2xl bg-white/10 backdrop-blur-sm p-6 ring-1 ring-white/20 transition-transform hover:scale-105">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-400/20 text-cyan-300 mb-4 mx-auto">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-sm font-bold text-white mb-2">Visit Us</h3>
                <p className="text-sm text-blue-100">Come see our school</p>
                <p className="mt-2 text-xs font-semibold text-cyan-400">
                  2351 1st Avenue, NY 10035
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-white border-t border-gray-100">
          <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
            <div className="flex justify-center space-x-6 md:order-2">
              <a href="#main-content" className="text-gray-400 hover:text-gray-500">Back to Top</a>
            </div>
            <div className="mt-8 md:order-1 md:mt-0">
              <p className="text-center text-xs leading-5 text-gray-500">
                &copy; {new Date().getFullYear()} River East Elementary School (PS 37). All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default ComingSoonPage;
