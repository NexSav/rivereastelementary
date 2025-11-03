import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    {
      name: 'Home',
      href: '/'
    },
    {
      name: 'About',
      href: '#about',
      submenu: [
        { name: 'Our Campus (Pictures)', href: '#campus' },
        { name: 'Our Academics', href: '#academics' },
        { name: 'Our Mission and Vision', href: '#mission-vision' },
        { name: 'Our People', href: '#people' },
      ],
    },
    {
      name: 'Admissions',
      href: '#admissions',
    },
    {
      name: 'Families',
      href: '#families',
      submenu: [
        { name: '2025-2026 School Calendar', href: 'https://www.schools.nyc.gov/calendar/2025-2026-school-year-calendar' },
        { name: 'NYC Schools Account', href: 'https://www.schoolsaccount.nyc/' },
        { name: 'Parent Handbook', href: '#parent-handbook' },
        { name: 'PTA', href: '#pta' },
        { name: 'SLT', href: '#slt' },
      ],
    },
    {
      name: 'Partners',
      href: '#partners',
      submenu: [
        { name: 'Beacon', href: '#beacon' },
        { name: 'DMF Youth', href: '#dmf-youth' },
        { name: 'Reading Partners', href: '#reading-partners' },
        { name: '92nd St. Y', href: '#92nd-st-y' },
      ],
    },
    {
      name: 'Students',
      href: '#students',
      submenu: [
        { name: 'Google Classroom', href: 'https://classroom.google.com/' },
        { name: 'School Foods Menu', href: '#school-foods-menu' },
      ],
    },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-blue-800 focus:rounded-lg focus:shadow-lg focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
      >
        Skip to main content
      </a>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav
          className={`relative mt-4 rounded-3xl border transition-all duration-300 ease-smooth ${
            isScrolled
              ? 'bg-white shadow-lg border-gray-200/80'
              : 'bg-white/70 backdrop-blur-xl shadow-md border-white/20'
          }`}
          aria-label="Primary navigation"
        >

          <div className="flex items-center justify-between px-6 py-5">
            {/* Logo and School Name */}
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-800 to-cyan-600">
                <svg
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-semibold tracking-tighter text-gray-900">
                  River East Elementary
                </span>
                <span className="hidden text-xs font-medium text-gray-500 sm:block">
                  PS 37 • East Harlem
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-6 md:flex">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => link.submenu && setOpenDropdown(link.name)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <a
                    href={link.href}
                    className="flex items-center gap-1 text-sm font-medium text-gray-700 transition-colors duration-200 hover:text-blue-800 focus:outline-none focus-visible:text-blue-800 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 rounded-md px-1 py-0.5"
                  >
                    {link.name}
                    {link.submenu && (
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </a>

                  {/* Dropdown Menu */}
                  {link.submenu && openDropdown === link.name && (
                    <div className="absolute left-0 top-full mt-2 w-56 rounded-xl border border-gray-100 bg-white/95 backdrop-blur-lg py-2 shadow-xl animate-fade-in">
                      {link.submenu.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          target={item.href.startsWith('http') ? '_blank' : undefined}
                          rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="block px-4 py-2.5 text-sm text-gray-700 transition-all duration-150 hover:bg-blue-50 hover:text-blue-800 hover:pl-5"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="flex items-center gap-4">
              <a
                href="#enroll"
                className="hidden rounded-full bg-gradient-to-r from-blue-800 to-cyan-600 px-6 py-2.5 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:scale-105 hover:shadow-lg hover:from-blue-900 hover:to-cyan-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 sm:inline-flex"
              >
                Enroll Now
              </a>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center rounded-lg p-2 text-gray-700 transition-colors duration-200 hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 md:hidden"
                aria-expanded={isMobileMenuOpen}
                aria-label="Toggle navigation menu"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  {isMobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="border-t border-gray-100 px-6 py-4 md:hidden">
              <div className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <div key={link.name}>
                    {link.submenu ? (
                      <div>
                        <button
                          onClick={() =>
                            setOpenDropdown(openDropdown === link.name ? null : link.name)
                          }
                          className="flex w-full items-center justify-between text-base font-medium text-gray-700 transition-colors hover:text-blue-800"
                        >
                          {link.name}
                          <svg
                            className={`h-5 w-5 transition-transform ${
                              openDropdown === link.name ? 'rotate-180' : ''
                            }`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        {openDropdown === link.name && (
                          <div className="mt-2 ml-4 flex flex-col gap-2 border-l-2 border-blue-100 pl-4">
                            {link.submenu.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                target={item.href.startsWith('http') ? '_blank' : undefined}
                                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-sm text-gray-600 transition-colors hover:text-blue-800"
                              >
                                {item.name}
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <a
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block text-base font-medium text-gray-700 transition-colors hover:text-blue-800"
                      >
                        {link.name}
                      </a>
                    )}
                  </div>
                ))}
                <a
                  href="#enroll"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="mt-2 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-800 to-cyan-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:scale-105 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
                >
                  Enroll Now
                </a>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
