import React from 'react';
import Navbar from '../components/Navbar';

const BookIcon = ({ className = "h-6 w-6" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
);

const HeartIcon = ({ className = "h-6 w-6" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);

const MissionVisionPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans selection:bg-cyan-200 selection:text-blue-900">
      <Navbar />

      <main id="main-content">
        {/* Hero Section */}
        <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden bg-blue-900">
          {/* Background with Gradient Overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1920&q=80&auto=format"
              alt="Students learning together"
              className="h-full w-full object-cover opacity-30 mix-blend-overlay"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-blue-900/60 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-transparent" />
          </div>

          {/* Content */}
          <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 text-center sm:px-8 lg:px-12">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl font-bold tracking-tighter text-white sm:text-6xl md:text-7xl">
                Our Mission & <br />
                <span className="text-cyan-400">Vision</span>
              </h1>
              <p className="mt-6 text-xl font-medium leading-relaxed text-blue-50 sm:text-2xl">
                Building a community of lifelong learners
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-24 sm:py-32 bg-white">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-100 text-blue-700 mb-6">
                <BookIcon className="h-8 w-8" />
              </div>
              <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
                Our Mission
              </h2>
            </div>

            <div className="prose prose-lg mx-auto">
              <div className="rounded-3xl bg-gradient-to-br from-blue-50 to-cyan-50 p-8 sm:p-12 shadow-xl ring-1 ring-gray-900/5">
                <p className="text-lg leading-relaxed text-gray-800">
                  The mission of River East Elementary School is to support a dynamic and nurturing community of learners that draws upon its own creative talents and the resources of its community. We work as a collaborative unit of parents, faculty, and staff to ensure that all students read well, write and speak effectively, and reason with competence and confidence. We have high standards for all students and we honor their individual learning styles and interests. We value the learning process in providing an inclusive, child-centered environment that inspires and challenges all of our students to become critical thinkers and problem solvers through exploration and discussion. Our educational program is designed to foster personal resourcefulness and integrity, a sense of social responsibility, self-confidence, and a lifelong appreciation of learning.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-24 sm:py-32 bg-gray-50">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-cyan-100 text-cyan-700 mb-6">
                <HeartIcon className="h-8 w-8" />
              </div>
              <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
                Our Vision
              </h2>
            </div>

            <div className="space-y-8">
              {/* School Motto */}
              <div className="rounded-3xl bg-gradient-to-br from-cyan-50 to-blue-50 p-8 sm:p-12 shadow-xl ring-1 ring-gray-900/5 text-center">
                <p className="text-2xl sm:text-3xl font-bold text-blue-900 italic leading-relaxed">
                  "We are a part of something much greater than ourselves."
                </p>
                <p className="mt-4 text-sm font-semibold text-gray-600 uppercase tracking-wider">
                  Our School Motto
                </p>
              </div>

              {/* Vision Statement */}
              <div className="rounded-3xl bg-white p-8 sm:p-12 shadow-xl ring-1 ring-gray-900/5">
                <p className="text-lg leading-relaxed text-gray-800">
                  Our students will read vigorously, write and speak in a unique and strong voice, and manipulate numbers with competence and confidence. Our students will also explore art, music, dance, and theater in an effort to find at least one they are passionate about for life.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-blue-900 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ready to Join Our Community?
              </h2>
              <p className="mt-4 text-lg leading-8 text-blue-100">
                Discover how River East Elementary can help your child thrive.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="mailto:mpanetta@schools.nyc.gov"
                  className="rounded-full bg-white px-8 py-4 text-base font-semibold text-blue-900 shadow-xl transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Schedule a Visit
                </a>
                <a
                  href="/"
                  className="text-base font-semibold leading-7 text-white hover:text-cyan-400 transition-colors"
                >
                  Back to Home <span aria-hidden="true">→</span>
                </a>
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

export default MissionVisionPage;
