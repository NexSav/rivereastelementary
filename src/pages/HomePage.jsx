import React from 'react';
import Navbar from '../components/Navbar';

// --- ALLOWED ICONS ONLY ---
// heart, book, handshake, calendar, user, phone, map-pin

const CalendarIcon = ({ className = "h-6 w-6" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const UserIcon = ({ className = "h-6 w-6" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

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

const MapPinIcon = ({ className = "h-6 w-6" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const PhoneIcon = ({ className = "h-6 w-6" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const HomePage = () => {
  // Quick Access Links
  const quickLinks = [
    { name: 'Calendar', icon: CalendarIcon, href: 'https://www.schools.nyc.gov/calendar/2025-2026-school-year-calendar' },
    { name: 'Parent Portal', icon: UserIcon, href: 'https://www.schoolsaccount.nyc/' },
    { name: 'Staff Directory', icon: UserIcon, href: '#staff' },
    { name: 'Enroll', icon: BookIcon, href: '#enroll' },
    { name: 'Remind', icon: PhoneIcon, href: '#remind' }, // Changed from Mail to Phone (communication)
  ];

  // Staff Information
  const keyStaff = [
    { name: 'Michael Panetta', role: 'Principal', email: 'mpanetta@schools.nyc.gov' },
    { name: 'Ayo Mendez-Torres', role: 'Assistant Principal', email: 'amendeztorres@schools.nyc.gov' },
    { name: 'Laura White', role: 'Parent Coordinator', email: 'mslaurapc@rivereastelementary.org' },
    { name: 'Maura Kyne', role: 'Guidance Counselor', email: 'msmaura@rivereastelementary.org' },
  ];

  // Values
  const values = [
    {
      icon: <BookIcon className="h-8 w-8" />,
      title: 'Academic Excellence',
      description: 'Double-digit gains on ELA and Math State exams demonstrate our commitment to student success.',
    },
    {
      icon: <HeartIcon className="h-8 w-8" />,
      title: 'Community First',
      description: 'A small, tight-knit school community where every student is known, valued, and supported.',
    },
    {
      icon: <UserIcon className="h-8 w-8" />,
      title: 'Dedicated Staff',
      description: 'Experienced educators and support staff committed to nurturing every child\'s potential.',
    },
  ];

  // Statistics
  const stats = [
    { value: 'PK3-5th', label: 'Grade Levels' },
    { value: '8:20 AM', label: 'School Starts' },
    { value: '2:40 PM', label: 'Dismissal' },
    { value: '6:00 PM', label: 'After School' },
  ];

  // Announcements
  const announcements = [
    {
      title: 'Enrollment Information for 2025-2026',
      date: 'October 2025',
      excerpt: 'Interested in enrolling your child in grades PK-3 to 5? Contact Mr. Panetta and Ms. Laura for more information.',
      link: 'mailto:mpanetta@schools.nyc.gov',
    },
    {
      title: 'Principal\'s October Letter',
      date: 'October 1, 2025',
      excerpt: 'We\'re thrilled that the launch of the 2025-2026 school year was a huge success! Read about our achievements and upcoming events.',
      link: '#news',
    },
    {
      title: 'New Swim Program for Grades 2-5',
      date: 'October 2025',
      excerpt: 'All grade 2-5 students will participate in swim instruction with Asphalt Green. Each student receives a free bathing suit and goggles.',
      link: '#programs',
    },
  ];

  // Events
  const events = [
    {
      date: { month: 'Nov', day: '6' },
      title: 'Parent-Teacher Conferences',
      description: 'Virtual conferences scheduled',
      time: 'Various Times',
    },
    {
      date: { month: 'Oct', day: '2' },
      title: 'Yom Kippur',
      description: 'School Closed',
      time: 'All Day',
    },
    {
      date: { month: 'Oct', day: '13' },
      title: 'Italian Heritage/Indigenous Peoples\' Day',
      description: 'School Closed',
      time: 'All Day',
    },
    {
      date: { month: 'Oct', day: '20' },
      title: 'Diwali',
      description: 'School Closed',
      time: 'All Day',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans selection:bg-cyan-200 selection:text-blue-900">
      <Navbar />

      <main id="main-content">
        {/* Hero Section - Cinematic & Minimal */}
        <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-blue-900">
          {/* Background with Gradient Overlay */}
          <div className="absolute inset-0 z-0">
             <img
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1920&q=80&auto=format"
              alt="School hallway"
              className="h-full w-full object-cover opacity-40 mix-blend-overlay"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-blue-900/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-transparent" />
          </div>

          {/* Content */}
          <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 text-center sm:px-8 lg:px-12 lg:text-left">
            <div className="max-w-3xl">
              <h1 className="text-5xl font-bold tracking-tighter text-white sm:text-6xl md:text-7xl lg:text-8xl">
                River East <br />
                <span className="text-cyan-400">Elementary</span>
            </h1>
              <p className="mt-6 text-xl font-medium leading-relaxed text-blue-50 sm:text-2xl">
                A small PK3-5th Grade school in East Harlem where every student is known, valued, and inspired.
              </p>
              
              <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
              <a
                href="mailto:mpanetta@schools.nyc.gov"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-blue-900 shadow-xl transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Schedule a Visit
              </a>
              <a
                href="#about"
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Learn More
              </a>
            </div>
          </div>
          </div>
        </section>

        {/* Quick Access - Floating Dock */}
        <section className="relative z-20 -mt-12 px-4 sm:px-6 pb-12">
          <div className="mx-auto max-w-5xl">
            <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-6 rounded-3xl bg-white px-8 py-6 shadow-2xl ring-1 ring-gray-200/50">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="group flex items-center gap-3 text-sm font-bold text-gray-700 transition-all hover:text-blue-700"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-blue-600 transition-all group-hover:bg-blue-600 group-hover:text-white group-hover:scale-110 shadow-sm">
                    <link.icon className="h-5 w-5" />
                  </div>
                  <span>{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* About Section - Asymmetric Layout */}
        <section id="about" className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-16 lg:grid-cols-12 lg:gap-24 items-center">
              <div className="lg:col-span-5 order-2 lg:order-1">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Small Community, <br />
                  <span className="text-blue-700">Big Impact</span>
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Located in the heart of East Harlem, River East Elementary (PS 37) serves students from Pre-K through 5th grade.
                  Our intimate environment ensures that every child receives personalized attention.
                </p>
                <p className="mt-4 text-lg leading-8 text-gray-600">
                  We're proud of our students' achievements, with double-digit gains on state exams and a curriculum that balances
                  academic rigor with social-emotional learning.
                </p>
                <div className="mt-8">
                  <a href="mailto:mpanetta@schools.nyc.gov" className="text-sm font-semibold leading-6 text-blue-700 hover:text-blue-900 flex items-center gap-1">
                    Contact us to learn more <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
              
              {/* Mixed Geometry Image */}
              <div className="lg:col-span-7 order-1 lg:order-2 relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-[2rem] opacity-20 blur-2xl -z-10" />
                <img
                  src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&q=80"
                  alt="Students learning"
                  className="rounded-[2rem] shadow-2xl object-cover w-full h-full transform transition-transform hover:scale-[1.01] duration-500"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats & Values - Bento Grid */}
        <section className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Core Values</h2>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {/* Stats Card (Large) */}
              <div className="rounded-3xl bg-blue-900 p-8 sm:p-10 text-white sm:col-span-2 lg:col-span-3 lg:flex lg:items-center lg:justify-around relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-cyan-900 opacity-50" />
                {stats.map((stat) => (
                  <div key={stat.label} className="relative z-10 text-center py-4 lg:py-0">
                    <div className="text-4xl font-bold tracking-tight sm:text-5xl">{stat.value}</div>
                    <div className="mt-1 text-sm font-medium text-blue-100 uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Value Cards */}
              {values.map((value, idx) => (
                <div key={value.title} className={`rounded-3xl p-8 ring-1 ring-gray-200 transition-all hover:shadow-lg hover:-translate-y-1 ${idx === 1 ? 'bg-blue-50 ring-blue-100' : 'bg-white'}`}>
                  <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/10 text-blue-700">
                    {value.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{value.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Info & Events - Asymmetric Grid */}
        <section id="info" className="py-24 bg-gray-50">
           <div className="mx-auto max-w-7xl px-6 lg:px-8">
             <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
               
               {/* Events Column */}
               <div className="lg:col-span-2 space-y-8">
                 <div className="flex items-end justify-between">
                   <h2 className="text-3xl font-bold tracking-tight text-gray-900">Upcoming Events</h2>
                   <a href="https://www.schools.nyc.gov/calendar/2025-2026-school-year-calendar" className="text-sm font-semibold text-blue-700 hover:text-blue-900">
                     View Calendar <span aria-hidden="true">&rarr;</span>
              </a>
            </div>

                 <div className="grid gap-4 sm:grid-cols-2">
              {events.map((event, idx) => (
                     <div key={idx} className="relative flex flex-col gap-4 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-900/5 transition-shadow hover:shadow-md">
                        <div className="flex items-center gap-4">
                          <div className="flex-none rounded-lg bg-blue-50 px-3 py-2 text-center">
                            <div className="text-xs font-bold uppercase text-blue-700">{event.date.month}</div>
                            <div className="text-xl font-bold text-gray-900">{event.date.day}</div>
                    </div>
                          <div>
                            <h3 className="text-base font-semibold text-gray-900 leading-snug">{event.title}</h3>
                            <div className="mt-1 flex items-center gap-1.5 text-xs text-gray-500 font-medium">
                              <CalendarIcon className="h-3.5 w-3.5" />
                        {event.time}
                      </div>
                    </div>
                  </div>
                        <p className="text-sm text-gray-600 pl-16 -mt-2">{event.description}</p>
                </div>
              ))}
                 </div>
            </div>

               {/* Announcements / News Column */}
               <div className="lg:col-span-1">
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">Latest News</h2>
                  <div className="space-y-4">
                    {announcements.map((item) => (
                      <article key={item.title} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-900/5 transition-shadow hover:shadow-md">
                        <time className="text-xs font-bold uppercase text-cyan-600">{item.date}</time>
                        <h3 className="mt-2 text-lg font-bold text-gray-900 leading-tight">{item.title}</h3>
                        <p className="mt-2 text-sm text-gray-600 line-clamp-3">{item.excerpt}</p>
                        <a href={item.link} className="mt-4 inline-block text-sm font-semibold text-blue-700 hover:text-blue-900">
                          Read more <span aria-hidden="true">&rarr;</span>
                        </a>
                      </article>
                    ))}
            </div>
          </div>

            </div>
          </div>
        </section>

        {/* Staff & Contact - Dark/Light Contrast */}
        <section id="staff" className="relative overflow-hidden bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2">
              
              {/* Staff List */}
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">People to Know</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {keyStaff.map((person) => (
                    <div key={person.email} className="rounded-2xl border border-gray-100 bg-gray-50 p-6 transition-colors hover:bg-white hover:shadow-md hover:border-blue-100">
                <div className="flex items-center gap-3">
                         <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                           <UserIcon className="h-5 w-5" />
                  </div>
                  <div>
                           <h3 className="text-sm font-bold text-gray-900">{person.name}</h3>
                           <p className="text-xs text-gray-600">{person.role}</p>
                         </div>
                       </div>
                       <a href={`mailto:${person.email}`} className="mt-4 block text-xs font-semibold text-blue-700 hover:text-blue-900">
                         {person.email}
                       </a>
                  </div>
                  ))}
                </div>
              </div>

              {/* Contact Info Card */}
              <div className="relative rounded-3xl bg-gray-900 px-6 py-10 shadow-xl sm:px-12 lg:py-12 overflow-hidden">
                 <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-cyan-900 opacity-90" />
                 <div className="relative z-10">
                   <h3 className="text-2xl font-bold text-white">Contact Us</h3>
                   <ul className="mt-6 space-y-6 text-white/80">
                      <li className="flex items-start gap-4">
                        <PhoneIcon className="h-6 w-6 flex-shrink-0 text-cyan-400" />
              <div>
                          <p className="font-semibold text-white">Phone</p>
                          <a href="tel:+12128023035" className="mt-1 block hover:text-white transition-colors">(212) 802-3035</a>
                        </div>
                  </li>
                      <li className="flex items-start gap-4">
                         <MapPinIcon className="h-6 w-6 flex-shrink-0 text-cyan-400" />
                         <div>
                           <p className="font-semibold text-white">Address</p>
                           <p className="mt-1">2351 1st Avenue<br/>New York, NY 10035</p>
                         </div>
                  </li>
                      <li className="flex items-start gap-4">
                         <div className="h-6 w-6 flex items-center justify-center">
                            <span className="text-cyan-400 font-bold">@</span>
              </div>
              <div>
                           <p className="font-semibold text-white">Email</p>
                           <a href="mailto:mpanetta@schools.nyc.gov" className="mt-1 block hover:text-white transition-colors break-all">mpanetta@schools.nyc.gov</a>
                         </div>
                  </li>
                </ul>
              </div>
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

export default HomePage;
