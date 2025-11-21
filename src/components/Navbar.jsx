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
    { name: 'Home', href: '/' },
    {
      name: 'About',
      href: '#about',
      dropdown: [
        { name: 'Our Campus (Pictures)', href: '/coming-soon' },
        { name: 'Our Academics', href: '/coming-soon' },
        { name: 'Our Mission and Vision', href: '/mission-vision' },
        { name: 'Our People', href: '/coming-soon' },
      ]
    },
    { name: 'Admissions', href: '/coming-soon' },
    {
      name: 'Families',
      href: '#families',
      dropdown: [
        { name: '2025-2026 School Calendar', href: 'https://www.schools.nyc.gov/calendar/2025-2026-school-year-calendar' },
        { name: 'NYC Schools Account', href: 'https://www.schoolsaccount.nyc/' },
        { name: 'Parent Handbook', href: '/coming-soon' },
        { name: 'PTA', href: '/coming-soon' },
        { name: 'SLT', href: '/coming-soon' },
      ]
    },
    {
      name: 'Partners',
      href: '#partners',
      dropdown: [
        { name: 'Beacon', href: 'https://www.scan-harbor.org/our-programs/' },
        { name: 'DMF Youth', href: 'https://dmfyouth.org/?gad_source=1&gad_campaignid=11038165362&gbraid=0AAAAACPQ653cdWjJ_6Vsp2EMvzzmioKv_&gclid=CjwKCAiAlfvIBhA6EiwAcErpyUeODX5obUWRXwFR18aUbcbur0yRpoZZ0HbOpqa2V3OmoQgnPFrTThoCyQIQAvD_BwE' },
        { name: 'Reading Partners', href: 'https://readingpartners.org/get-involved/where-how/new-york/?utm_source=google&utm_medium=cpc&gad_source=1&gad_campaignid=22557078719&gbraid=0AAAAADsbqKR2CbL6rwFv08CX3iFxuyLOc&gclid=CjwKCAiAlfvIBhA6EiwAcErpyVlbdxZg0DFPWi2w8OTxkecMJvW-YET-9_EbZl8Zh1coE8jTO5qIQhoCK50QAvD_BwE' },
        { name: '92nd St. Y', href: 'https://www.92ny.org/children-family/school-engagement-in-the-arts/school-based-residencies' },
      ]
    },
    {
      name: 'Students',
      href: '#students',
      dropdown: [
        { name: 'Google Classroom', href: 'http://classroom.google.com' },
        { name: 'School Foods Menu', href: 'https://www.schools.nyc.gov/school-life/food/menus' },
      ]
    },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-lg rounded-b-[2.5rem] py-3'
          : 'bg-transparent py-6'
      }`}
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-6 focus:py-3 focus:bg-white focus:text-blue-900 focus:rounded-full focus:shadow-xl focus:font-bold ring-2 ring-blue-600"
      >
        Skip to main content
      </a>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <nav className="flex items-center justify-between" aria-label="Global">
          {/* Logo */}
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5 flex items-center gap-3 group">
              <span className="sr-only">River East Elementary</span>
              <div className={`flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-900 to-blue-700 text-white shadow-lg transition-all duration-300 ${isScrolled ? 'h-10 w-10' : 'h-12 w-12'}`}>
                {/* Book Icon (Allowed Motif) */}
                <svg className={`transition-all duration-300 ${isScrolled ? 'h-5 w-5' : 'h-6 w-6'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div className={`flex flex-col transition-colors duration-300 ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
                <span className="font-bold text-lg leading-none tracking-tight">River East</span>
                <span className="text-xs font-medium tracking-wide opacity-90">Elementary</span>
              </div>
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex lg:gap-x-8">
            {navLinks.map((item) => (
              item.dropdown ? (
                <div
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => setOpenDropdown(item.name)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    className={`flex items-center gap-1 text-sm font-semibold leading-6 transition-colors duration-300 hover:text-cyan-400 ${
                      isScrolled ? 'text-gray-900' : 'text-white/90'
                    }`}
                  >
                    {item.name}
                    <svg
                      className={`h-4 w-4 transition-transform duration-200 ${openDropdown === item.name ? 'rotate-180' : ''}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openDropdown === item.name && (
                    <div className="absolute left-0 top-full pt-2 z-50">
                      <div className={`w-64 rounded-xl shadow-2xl ring-1 overflow-hidden ${
                        isScrolled
                          ? 'bg-white ring-gray-900/5'
                          : 'bg-white/95 backdrop-blur-xl ring-white/10'
                      }`}>
                        {item.dropdown.map((subItem, idx) => {
                          const isExternal = subItem.href.startsWith('http');
                          return (
                            <a
                              key={subItem.name}
                              href={subItem.href}
                              {...(isExternal && { target: '_blank', rel: 'noopener noreferrer' })}
                              className={`block px-5 py-3 text-sm font-semibold transition-colors ${
                                idx !== item.dropdown.length - 1 ? 'border-b border-gray-100' : ''
                              } ${
                                isScrolled
                                  ? 'text-gray-700 hover:bg-blue-50 hover:text-blue-700'
                                  : 'text-gray-800 hover:bg-blue-900 hover:text-white'
                              }`}
                            >
                              {subItem.name}
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-semibold leading-6 transition-colors duration-300 hover:text-cyan-400 ${
                    isScrolled ? 'text-gray-900' : 'text-white/90'
                  }`}
                >
                  {item.name}
                </a>
              )
            ))}
          </div>

          {/* CTA & Mobile Toggle */}
          <div className="flex flex-1 justify-end items-center gap-4">
            <a
              href="#enroll"
              className={`hidden rounded-full px-6 py-2.5 text-sm font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 lg:block ${
                isScrolled 
                  ? 'bg-blue-900 text-white hover:bg-blue-800' 
                  : 'bg-white text-blue-900 hover:bg-gray-50'
              }`}
            >
              Enroll Now
            </a>

            <button
              type="button"
              className={`-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 lg:hidden ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              {/* Using simple hamburger lines (CSS or SVG) - using SVG as preferred */}
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-50 lg:hidden ${isMobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
        {/* Backdrop */}
        <div 
          className={`fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0'}`} 
          onClick={() => setIsMobileMenuOpen(false)}
        />
        
        {/* Panel */}
        <div 
          className={`fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-900 text-white">
                 <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <span className="font-bold text-gray-900">River East</span>
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navLinks.map((item) => (
                  item.dropdown ? (
                    <div key={item.name} className="space-y-1">
                      <button
                        onClick={() => setOpenDropdown(openDropdown === item.name ? null : item.name)}
                        className="-mx-3 flex w-full items-center justify-between rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                        <svg
                          className={`h-5 w-5 transition-transform duration-200 ${openDropdown === item.name ? 'rotate-180' : ''}`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {openDropdown === item.name && (
                        <div className="pl-4 space-y-1">
                          {item.dropdown.map((subItem) => {
                            const isExternal = subItem.href.startsWith('http');
                            return (
                              <a
                                key={subItem.name}
                                href={subItem.href}
                                {...(isExternal && { target: '_blank', rel: 'noopener noreferrer' })}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-700"
                              >
                                {subItem.name}
                              </a>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  ) : (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  )
                ))}
              </div>
              <div className="py-6">
                <a
                  href="#enroll"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block rounded-lg bg-blue-900 px-3 py-2.5 text-center text-base font-semibold leading-7 text-white hover:bg-blue-800"
                >
                  Enroll Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
