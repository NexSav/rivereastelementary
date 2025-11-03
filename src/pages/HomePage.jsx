import React from 'react';
import Navbar from '../components/Navbar';

// SVG Icons
const CalendarIcon = ({ className = "h-5 w-5" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const UserIcon = ({ className = "h-5 w-5" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const BookIcon = ({ className = "h-5 w-5" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
);

const HeartIcon = ({ className = "h-5 w-5" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);

const MapPinIcon = ({ className = "h-5 w-5" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const PhoneIcon = ({ className = "h-5 w-5" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const MailIcon = ({ className = "h-5 w-5" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const ExternalLinkIcon = ({ className = "h-5 w-5" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

const ClockIcon = ({ className = "h-5 w-5" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const HomePage = () => {
  // Quick Access Links
  const quickLinks = [
    { name: 'Calendar', icon: CalendarIcon, href: 'https://www.schools.nyc.gov/calendar/2025-2026-school-year-calendar' },
    { name: 'Parent Portal', icon: UserIcon, href: 'https://www.schoolsaccount.nyc/' },
    { name: 'Staff Directory', icon: UserIcon, href: '#staff' },
    { name: 'Enroll', icon: BookIcon, href: '#enroll' },
    { name: 'Remind', icon: MailIcon, href: '#remind' },
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
      icon: <BookIcon className="h-6 w-6" />,
      title: 'Academic Excellence',
      description: 'Double-digit gains on ELA and Math State exams demonstrate our commitment to student success.',
    },
    {
      icon: <HeartIcon className="h-6 w-6" />,
      title: 'Community First',
      description: 'A small, tight-knit school community where every student is known, valued, and supported.',
    },
    {
      icon: <UserIcon className="h-6 w-6" />,
      title: 'Dedicated Staff',
      description: 'Experienced educators and support staff committed to nurturing every child\'s potential.',
    },
  ];

  // Statistics
  const stats = [
    { value: 'PK3-5th', label: 'Grade Levels' },
    { value: '8:20 AM', label: 'School Starts' },
    { value: '2:40 PM', label: 'Dismissal' },
    { value: '6:00 PM', label: 'After School Until' },
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
    <div className="min-h-screen bg-white">
      <Navbar />

      <main id="main-content">
        {/* Hero Section */}
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-700">
          {/* Background Image Placeholder */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-15"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1920&q=80)',
            }}
            data-temp="ui-enhancement"
            aria-hidden="true"
          />

          {/* Gradient Overlay */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-800/85 to-cyan-700/80"
            aria-hidden="true"
          />

          {/* Content */}
          <div className="relative z-10 mx-auto max-w-5xl px-6 py-32 text-center sm:px-8 lg:px-12">
            <h1 className="text-5xl font-bold tracking-tighter text-white drop-shadow-xl sm:text-6xl md:text-7xl lg:text-8xl">
              River East Elementary
            </h1>
            <p className="mt-8 text-xl font-semibold text-white/95 drop-shadow-lg sm:text-2xl md:text-3xl">
              A small PK3-5th Grade Elementary School in East Harlem
            </p>
            <p className="mt-5 text-lg font-medium text-white/90 drop-shadow-md sm:text-xl">
              Where every student is known, valued, and inspired to achieve
            </p>

            <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row sm:gap-6">
              <a
                href="mailto:mpanetta@schools.nyc.gov"
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-blue-900 shadow-2xl transition-all duration-200 hover:scale-105 hover:shadow-2xl hover:bg-blue-50 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/50 focus-visible:ring-offset-4 focus-visible:ring-offset-blue-800"
              >
                Schedule a Visit
              </a>
              <a
                href="#about"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/90 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-md transition-all duration-200 hover:border-white hover:bg-white/20 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/50 focus-visible:ring-offset-4 focus-visible:ring-offset-blue-800"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 motion-safe:animate-bounce" aria-hidden="true">
            <svg className="h-7 w-7 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </section>

        {/* Quick Access Row */}
        <section className="border-b border-gray-200/60 bg-gradient-to-b from-gray-50 to-white py-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="group inline-flex items-center gap-2.5 rounded-full border border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-gray-700 shadow-sm transition-all duration-200 hover:scale-105 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-800 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
                >
                  <link.icon className="h-4 w-4 transition-transform duration-200 group-hover:scale-110" />
                  <span>{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
              {/* Image */}
              <div className="relative overflow-hidden rounded-3xl bg-gray-100 shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&q=80"
                  alt="Students learning in a bright, modern classroom"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  data-temp="ui-enhancement"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center">
                <h2 className="text-4xl font-bold tracking-tighter text-gray-900 sm:text-5xl">
                  Welcome to River East Elementary
                </h2>
                <p className="mt-8 text-lg leading-relaxed text-gray-700">
                  Located in the heart of East Harlem, River East Elementary (PS 37) serves students from Pre-K through 5th grade.
                  Our small school community ensures that every child receives personalized attention and support from dedicated educators.
                </p>
                <p className="mt-5 text-lg leading-relaxed text-gray-700">
                  We're proud of our students' achievements, with double-digit gains on state exams and a curriculum that balances
                  academic rigor with social-emotional learning. From swim instruction to after-school programs, we offer enriching
                  experiences that prepare students for success.
                </p>
                <div className="mt-10">
                  <a
                    href="mailto:mpanetta@schools.nyc.gov"
                    className="group inline-flex items-center gap-2 text-base font-semibold text-blue-800 transition-all duration-200 hover:text-cyan-600 hover:gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 rounded-md px-1"
                  >
                    Contact us to learn more
                    <ExternalLinkIcon className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Information Grid */}
        <section id="info" className="bg-gradient-to-b from-gray-50 to-white py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <div className="text-center">
              <h2 className="text-4xl font-bold tracking-tighter text-gray-900 sm:text-5xl">
                Essential Information
              </h2>
              <p className="mt-5 text-lg text-gray-600 max-w-2xl mx-auto">
                Everything you need to know about our school day and contact information
              </p>
            </div>

            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {/* School Hours */}
              <div className="group rounded-2xl border border-gray-200 bg-white p-8 shadow-md transition-all duration-200 hover:shadow-xl hover:border-blue-300 hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-800 to-blue-700 shadow-md">
                    <ClockIcon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">School Hours</h3>
                    <ul className="mt-4 space-y-2.5 text-sm text-gray-700">
                      <li className="flex justify-between gap-4">
                        <span>Doors open:</span>
                        <span className="font-semibold text-gray-900">7:45 AM</span>
                      </li>
                      <li className="flex justify-between gap-4">
                        <span>School starts:</span>
                        <span className="font-semibold text-gray-900">8:20 AM</span>
                      </li>
                      <li className="flex justify-between gap-4">
                        <span>Dismissal:</span>
                        <span className="font-semibold text-gray-900">2:40 PM</span>
                      </li>
                      <li className="flex justify-between gap-4">
                        <span>After School:</span>
                        <span className="font-semibold text-gray-900">Until 6:00 PM</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="group rounded-2xl border border-gray-200 bg-white p-8 shadow-md transition-all duration-200 hover:shadow-xl hover:border-cyan-300 hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-600 to-cyan-500 shadow-md">
                    <PhoneIcon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">Contact Us</h3>
                    <ul className="mt-4 space-y-3 text-sm text-gray-700">
                      <li className="flex items-center gap-2">
                        <PhoneIcon className="h-4 w-4 text-cyan-600" />
                        <a href="tel:+12128023035" className="transition-colors duration-150 hover:text-blue-800 font-medium">(212) 802-3035</a>
                      </li>
                      <li className="flex items-center gap-2">
                        <MailIcon className="h-4 w-4 text-cyan-600" />
                        <a href="mailto:mpanetta@schools.nyc.gov" className="transition-colors duration-150 hover:text-blue-800 font-medium break-all">
                          mpanetta@schools.nyc.gov
                        </a>
                      </li>
                      <li className="flex items-start gap-2">
                        <MapPinIcon className="h-4 w-4 mt-0.5 text-cyan-600 flex-shrink-0" />
                        <span className="font-medium">2351 1st Avenue<br />New York, NY 10035</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Remind */}
              <div className="group rounded-2xl border border-gray-200 bg-white p-8 shadow-md transition-all duration-200 hover:shadow-xl hover:border-blue-300 hover:-translate-y-1 sm:col-span-2 lg:col-span-1">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-800 to-blue-700 shadow-md">
                    <MailIcon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">Stay Connected</h3>
                    <p className="mt-3 text-sm text-gray-700">
                      Join Remind for school updates:
                    </p>
                    <p className="mt-3 rounded-lg bg-blue-50 px-3 py-2 font-mono text-sm font-semibold text-blue-900">
                      Text @rivereaste to 81010
                    </p>
                    <a
                      href="https://www.remind.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-800 transition-all duration-200 hover:text-cyan-600 hover:gap-2"
                    >
                      Visit Remind.com
                      <ExternalLinkIcon className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values & Statistics */}
        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            {/* Values */}
            <div className="text-center">
              <h2 className="text-4xl font-bold tracking-tighter text-gray-900 sm:text-5xl">
                Our Values
              </h2>
            </div>
            <div className="mt-16 grid gap-8 md:grid-cols-3">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="group rounded-2xl border border-gray-200 bg-white p-8 shadow-md transition-all duration-200 hover:shadow-xl hover:border-blue-300 hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-800 to-cyan-600 text-white shadow-md transition-transform duration-200 group-hover:scale-110">
                      {value.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900">{value.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-gray-600">{value.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Statistics */}
            <div className="mt-20 rounded-3xl bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-700 p-10 shadow-2xl sm:p-16">
              <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-4xl font-bold text-white sm:text-5xl">{stat.value}</div>
                    <div className="mt-3 text-sm font-semibold uppercase tracking-wide text-white/80">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Staff Section */}
        <section id="staff" className="bg-gradient-to-b from-gray-50 to-white py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <div className="text-center">
              <h2 className="text-4xl font-bold tracking-tighter text-gray-900 sm:text-5xl">
                People to Know
              </h2>
              <p className="mt-5 text-lg text-gray-600 max-w-2xl mx-auto">
                Our dedicated team is here to support your child's educational journey
              </p>
            </div>

            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {keyStaff.map((person) => (
                <div
                  key={person.email}
                  className="group rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-md transition-all duration-200 hover:shadow-xl hover:border-blue-300 hover:-translate-y-1"
                >
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-blue-800 to-cyan-600 text-white shadow-lg transition-transform duration-200 group-hover:scale-110">
                    <UserIcon className="h-10 w-10" />
                  </div>
                  <h3 className="mt-6 text-base font-bold text-gray-900">{person.name}</h3>
                  <p className="mt-2 text-sm font-medium text-gray-600">{person.role}</p>
                  <a
                    href={`mailto:${person.email}`}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-800 transition-all duration-200 hover:text-cyan-600 hover:gap-2"
                  >
                    <MailIcon className="h-4 w-4" />
                    Contact
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Announcements / News */}
        <section id="news" className="py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <div className="text-center">
              <h2 className="text-4xl font-bold tracking-tighter text-gray-900 sm:text-5xl">
                Latest Announcements
              </h2>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {announcements.map((announcement) => (
                <article
                  key={announcement.title}
                  className="group flex flex-col rounded-2xl border border-gray-200 bg-white p-8 shadow-md transition-all duration-200 hover:shadow-xl hover:border-blue-300 hover:-translate-y-1"
                >
                  <div className="text-xs font-bold uppercase tracking-wider text-cyan-600">
                    {announcement.date}
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-gray-900 leading-snug">
                    {announcement.title}
                  </h3>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-gray-600">
                    {announcement.excerpt}
                  </p>
                  <a
                    href={announcement.link}
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-800 transition-all duration-200 hover:text-cyan-600 hover:gap-2"
                  >
                    Learn more
                    <ExternalLinkIcon className="h-4 w-4" />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Events */}
        <section id="events" className="bg-gradient-to-b from-gray-50 to-white py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
              <div>
                <h2 className="text-4xl font-bold tracking-tighter text-gray-900 sm:text-5xl">
                  Upcoming Events
                </h2>
                <p className="mt-3 text-lg text-gray-600">
                  Mark your calendars for these important dates
                </p>
              </div>
              <a
                href="https://www.schools.nyc.gov/calendar/2025-2026-school-year-calendar"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-gray-900 shadow-md ring-1 ring-gray-200 transition-all duration-200 hover:bg-gray-50 hover:shadow-lg hover:ring-gray-300 sm:inline-flex"
              >
                View Full Calendar
                <ExternalLinkIcon className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {events.map((event, idx) => (
                <div
                  key={idx}
                  className="group rounded-2xl border border-gray-200 bg-white p-8 shadow-md transition-all duration-200 hover:shadow-xl hover:border-blue-300 hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-16 w-16 flex-shrink-0 flex-col items-center justify-center rounded-xl bg-gradient-to-br from-blue-800 to-blue-700 text-white shadow-md">
                      <div className="text-xs font-bold uppercase tracking-wide">{event.date.month}</div>
                      <div className="text-2xl font-bold">{event.date.day}</div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm font-bold text-gray-900 leading-snug">{event.title}</h3>
                      <p className="mt-2 text-xs text-gray-600">{event.description}</p>
                      <div className="mt-3 flex items-center gap-1.5 text-xs font-medium text-gray-500">
                        <ClockIcon className="h-3.5 w-3.5" />
                        {event.time}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center sm:hidden">
              <a
                href="https://www.schools.nyc.gov/calendar/2025-2026-school-year-calendar"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-gray-900 shadow-md ring-1 ring-gray-200 transition-all duration-200 hover:bg-gray-50 hover:shadow-lg"
              >
                View Full Calendar
                <ExternalLinkIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Community Invite CTA */}
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-700 py-24 sm:py-32">
          <div className="absolute inset-0 bg-grid-white/5" aria-hidden="true" />
          <div className="relative mx-auto max-w-4xl px-6 text-center sm:px-8 lg:px-12">
            <h2 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl">
              You Belong Here
            </h2>
            <p className="mt-8 text-xl font-medium text-white/95 sm:text-2xl">
              Join the River East Elementary family. We're enrolling students for the 2025-2026 school year.
            </p>
            <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row sm:gap-6">
              <a
                href="mailto:mpanetta@schools.nyc.gov"
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-blue-900 shadow-2xl transition-all duration-200 hover:scale-105 hover:shadow-2xl hover:bg-blue-50 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/50 focus-visible:ring-offset-4 focus-visible:ring-offset-blue-800"
              >
                Schedule a Visit
              </a>
              <a
                href="mailto:mslaurapc@rivereastelementary.org"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/90 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-md transition-all duration-200 hover:border-white hover:bg-white/20 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/50 focus-visible:ring-offset-4 focus-visible:ring-offset-blue-800"
              >
                Enroll Now
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-gray-300 bg-gradient-to-b from-gray-50 to-gray-100">
          <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12">
            <div className="grid gap-12 lg:grid-cols-3">
              {/* Brand */}
              <div>
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-800 to-cyan-600 shadow-md">
                    <BookIcon className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <div className="text-base font-bold text-gray-900">River East Elementary</div>
                    <div className="text-sm font-medium text-gray-600">PS 37 • East Harlem</div>
                  </div>
                </div>
                <p className="mt-5 text-sm leading-relaxed text-gray-600">
                  A small PK3-5th Grade Elementary School committed to academic excellence and community.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900">Quick Links</h3>
                <ul className="mt-5 space-y-3">
                  <li>
                    <a href="#about" className="text-sm font-medium text-gray-600 transition-colors duration-150 hover:text-blue-800">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#staff" className="text-sm font-medium text-gray-600 transition-colors duration-150 hover:text-blue-800">
                      Staff Directory
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.schools.nyc.gov/calendar/2025-2026-school-year-calendar"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-gray-600 transition-colors duration-150 hover:text-blue-800"
                    >
                      School Calendar
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.schoolsaccount.nyc/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-gray-600 transition-colors duration-150 hover:text-blue-800"
                    >
                      Parent Portal
                    </a>
                  </li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900">Contact</h3>
                <ul className="mt-5 space-y-4 text-sm text-gray-600">
                  <li className="flex items-start gap-2.5">
                    <MapPinIcon className="h-4 w-4 mt-0.5 flex-shrink-0 text-cyan-600" />
                    <span className="font-medium">2351 1st Avenue<br />New York, NY 10035</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <PhoneIcon className="h-4 w-4 flex-shrink-0 text-cyan-600" />
                    <a href="tel:+12128023035" className="font-medium transition-colors duration-150 hover:text-blue-800">(212) 802-3035</a>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <MailIcon className="h-4 w-4 flex-shrink-0 text-cyan-600" />
                    <a href="mailto:mpanetta@schools.nyc.gov" className="font-medium transition-colors duration-150 hover:text-blue-800 break-all">
                      mpanetta@schools.nyc.gov
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 border-t border-gray-300 pt-10">
              <p className="text-center text-sm font-medium text-gray-500">
                © {new Date().getFullYear()} River East Elementary School (PS 37). Part of the New York City Department of Education.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default HomePage;
