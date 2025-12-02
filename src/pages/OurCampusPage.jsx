import React, { useState } from 'react';
import Navbar from '../components/Navbar';

const CameraIcon = ({ className = "h-6 w-6" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
  </svg>
);

const PlayIcon = ({ className = "h-6 w-6" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
  </svg>
);

const OurCampusPage = () => {
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [filter, setFilter] = useState('all'); // 'all', 'images', 'videos'

  // List all media files
  const mediaFiles = [
    { type: 'image', src: '/assets/images/Our Campus/1B3E6131-87F5-43C9-9C9D-47E488410D5C_1_102_o.jpg', alt: 'Campus view 1' },
    { type: 'video', src: '/assets/images/Our Campus/6941eb70-0917-d9b2-1696-8d8f66cede3b_custom.mov', alt: 'Campus tour video' },
    { type: 'image', src: '/assets/images/Our Campus/B4075AD0-8C30-4EEC-B84E-81FCE629A9FB_1_102_o.jpg', alt: 'Campus view 2' },
    { type: 'image', src: '/assets/images/Our Campus/IMG_9113.jpg', alt: 'Campus facilities' },
    { type: 'video', src: '/assets/images/Our Campus/IMG_9114.mov', alt: 'Campus activities video' },
    { type: 'image', src: '/assets/images/Our Campus/IMG_9116.jpg', alt: 'Classroom view' },
    { type: 'image', src: '/assets/images/Our Campus/IMG_9118.jpg', alt: 'Student activities' },
    { type: 'image', src: '/assets/images/Our Campus/IMG_9121.jpg', alt: 'Campus grounds' },
    { type: 'image', src: '/assets/images/Our Campus/IMG_9122.jpg', alt: 'Learning spaces' },
    { type: 'image', src: '/assets/images/Our Campus/IMG_9123.jpg', alt: 'Campus building' },
    { type: 'image', src: '/assets/images/Our Campus/IMG_9124.jpg', alt: 'Outdoor areas' },
    { type: 'image', src: '/assets/images/Our Campus/IMG_9125.jpg', alt: 'Campus environment' },
    { type: 'image', src: '/assets/images/Our Campus/IMG_9126.jpg', alt: 'School facilities' },
    { type: 'image', src: '/assets/images/Our Campus/IMG_9127.jpg', alt: 'Campus view 3' },
    { type: 'image', src: '/assets/images/Our Campus/IMG_9128.jpg', alt: 'Student spaces' },
    { type: 'image', src: '/assets/images/Our Campus/IMG_9129.jpg', alt: 'Campus area' },
    { type: 'image', src: '/assets/images/Our Campus/IMG_9130.jpg', alt: 'Learning environment' },
    { type: 'image', src: '/assets/images/Our Campus/IMG_9131.jpg', alt: 'Campus view 4' },
    { type: 'video', src: '/assets/images/Our Campus/IMG_9132.mov', alt: 'Campus walkthrough video' },
    { type: 'image', src: '/assets/images/Our Campus/IMG_9134.jpg', alt: 'School grounds' },
    { type: 'image', src: '/assets/images/Our Campus/IMG_9135.jpg', alt: 'Campus view 5' },
    { type: 'image', src: '/assets/images/Our Campus/IMG_9136.jpg', alt: 'Facilities view' },
    { type: 'image', src: '/assets/images/Our Campus/IMG_9137.jpg', alt: 'Campus area 2' },
    { type: 'video', src: '/assets/images/Our Campus/IMG_9138.mov', alt: 'Campus overview video' },
    { type: 'image', src: '/assets/images/Our Campus/IMG_9139.jpg', alt: 'Campus view 6' },
    { type: 'image', src: '/assets/images/Our Campus/IMG_9140.jpg', alt: 'School environment' },
    { type: 'image', src: '/assets/images/Our Campus/IMG_9141.jpg', alt: 'Campus spaces' },
    { type: 'image', src: '/assets/images/Our Campus/IMG_9142.jpg', alt: 'Campus view 7' },
  ];

  const filteredMedia = mediaFiles.filter(media => {
    if (filter === 'all') return true;
    if (filter === 'images') return media.type === 'image';
    if (filter === 'videos') return media.type === 'video';
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans selection:bg-cyan-200 selection:text-blue-900">
      <Navbar />

      <main id="main-content">
        {/* Hero Section */}
        <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden bg-blue-900">
          {/* Background with Gradient Overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src="/assets/images/Our Campus/IMG_9123.jpg"
              alt="Our beautiful campus"
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
                Our Campus
              </h1>
              <p className="mt-6 text-xl font-medium leading-relaxed text-blue-50 sm:text-2xl">
                A vibrant learning environment where students thrive
              </p>
            </div>
          </div>
        </section>

        {/* Filter Buttons */}
        <section className="bg-white border-b border-gray-200 sticky top-0 z-30">
          <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => setFilter('all')}
                className={`rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-300 ${
                  filter === 'all'
                    ? 'bg-blue-900 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All Media
              </button>
              <button
                onClick={() => setFilter('images')}
                className={`rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                  filter === 'images'
                    ? 'bg-blue-900 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <CameraIcon className="h-4 w-4" />
                Photos Only
              </button>
              <button
                onClick={() => setFilter('videos')}
                className={`rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                  filter === 'videos'
                    ? 'bg-blue-900 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <PlayIcon className="h-4 w-4" />
                Videos Only
              </button>
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16 sm:py-24 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredMedia.map((media, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-gray-900/5 transition-all duration-300 hover:shadow-2xl hover:scale-105 cursor-pointer"
                  onClick={() => setSelectedMedia(media)}
                >
                  <div className="aspect-square overflow-hidden">
                    {media.type === 'image' ? (
                      <img
                        src={media.src}
                        alt={media.alt}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                    ) : (
                      <div className="relative h-full w-full bg-gray-900">
                        <video
                          src={media.src}
                          className="h-full w-full object-cover"
                          muted
                          playsInline
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                          <div className="rounded-full bg-white/90 p-4 shadow-xl">
                            <PlayIcon className="h-8 w-8 text-blue-900" />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <p className="text-sm font-semibold text-white">{media.alt}</p>
                  </div>
                </div>
              ))}
            </div>

            {filteredMedia.length === 0 && (
              <div className="text-center py-16">
                <p className="text-lg text-gray-500">No media found for this filter.</p>
              </div>
            )}
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-blue-900 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Want to See Our Campus in Person?
              </h2>
              <p className="mt-4 text-lg leading-8 text-blue-100">
                Schedule a tour to experience the River East Elementary difference.
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

      {/* Lightbox Modal */}
      {selectedMedia && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={() => setSelectedMedia(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={() => setSelectedMedia(null)}
          >
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="max-w-7xl max-h-[90vh] overflow-auto" onClick={(e) => e.stopPropagation()}>
            {selectedMedia.type === 'image' ? (
              <img
                src={selectedMedia.src}
                alt={selectedMedia.alt}
                className="max-w-full max-h-[85vh] object-contain rounded-lg"
              />
            ) : (
              <video
                src={selectedMedia.src}
                controls
                autoPlay
                className="max-w-full max-h-[85vh] rounded-lg"
              />
            )}
            <p className="text-white text-center mt-4 text-lg">{selectedMedia.alt}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default OurCampusPage;
