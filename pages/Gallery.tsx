import React, { useState } from 'react';
import { GalleryItem } from '../types';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState('all');
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const images: GalleryItem[] = [
    { id: '1', category: 'knotless', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCd9dcmzYEpgHbIUhnArg4omDbrsQZgbgrzlBtX-12sLn-0hM_StZmeW2A6Xes5hBWiMYzP7WU1uz3gmqaZJgryZHQvGfpZ053KdkvRcrQDEX5rxv5GkPMHhAHZQ62fEGEU0lA_886bQS86lFGhV5KepTF3d-lXrb1mX7u65iUuqLDS6ZC9W2q7uR6LRqC4IeFFOwrV4lcpx_nwnexQyhxI4KYA9xgUfBRhRiBxUNDdL-L309m2KWcMaMnW5NBS1dIKOWy7nItlYJA', alt: 'Knotless braids' },
    { id: '2', category: 'box', src: '/images/booking-image.jpg', alt: 'Box braids' },
    { id: '3', category: 'cornrows', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCyuJpr3Oox7bB-D-gAJCtay7e7T_vRAS794dZAkoKiytnL55Q1Wp_6GR-1LrKl28ELL5x5ON-izDXX2s-F7iJP8OsC4YiZjp5pJbnanIRZoMpE0xz7_ztqGuO99wRZ5j1BQnMwGSmb41zn3mjkPizg8716u-s11W76FFPYY_qjPvychZMYSfFn8oTBGvbJ-iOi-QJGSQ5oohpLreZT3UzUMu3q9D5OglwyDwjQkmsXdKJyN6_3TNN9FV3wDcHeSD9uMHUiLHq7KFM', alt: 'Cornrows' },
    { id: '4', category: 'kids', src: '/images/kids-braids.jpg', alt: 'Kids braids' },
    { id: '5', category: 'twists', src: '/images/twists.jpg', alt: 'Senegalese Twists' },
    { id: '6', category: 'box', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBKpRFWGQR3vfSCxCHaHkc3a4FSiNS1P4WjShsFXnmvjrdTNcpZWA054XYQR6rd27FyFdP8FS2JaS46xHk91brTINywnn6Xh0KfazEvFrXucFL1thsa3pMbwaGLCMKc13NzWqzGr8JwcuUtf-zSkXb9us2gv8wbk1x6nLx6I-vbeUNWYob0F95YvAc0ZlW3l2XFc2Ag1AdAaMO7X1HZiNMVETUdoQRhTkaboUyygb68tvlajBvePwKZjKMDuvkadbMHvFgiCFMrqVE', alt: 'Box braids pony' },
    { id: '7', category: 'knotless', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAWGSMc_w5TQPaLKz2ARWeQ2EZ5FFTrLLYTmN8Yr3lU275_yVkHFI8E8nwpTSV8CY2rqid617VMnyDXpUJVY1rEuB6ZIeZqmZxTFk0n5MEQqk6DE7mdiHIcKy6mF9W7CHy2wchuPjHTcF6Li3JZl1EHZtwz7OTgQikdn-Gu7UhDeTfksLzOqUAqImY_eAcgRtQTJwZXnR1Y22bCq7zaZwvAQ-qu7pMtlxQ7VB_Q9PLfSoCJ5NPwOpWAoC--qSN1nmD2i0dVRIHXk2Y', alt: 'Knotless medium' },
    { id: '8', category: 'twists', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAdWG1BL1n4ywpmyz6xiUSBsuV7fJ2iMLCHiFoWtwCU0rM0-g2SHdDD1xEY5FwMbNf9I-Ix1LKN4MgOhMMFdiiXXrA6jXSsPuACcGA6aDvVb36y7hSz61sbMKuDZw11LpxZ_MdmeC644oQVAM7S0wd7srT9DtQUWsNTTtIy79F-DZmtLue4tjlJIzBJZSLTvX0xyNRyPbeTLTIPaY96ufzjWuYwXNIUQ6zjGBC0-zdIBp66vVF-epTvq-QgaetQRitzDP3YDT2HnSs', alt: 'Passion twists' },
    { id: '9', category: 'kids', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBYfPCSl58Owvn5fEGQ0hZh9KOLm8iWqvffCYU4wrDi4yXsqqtYEXyiq4lA-yAq7cNfQEFbtsk1D9D0BUDK0Rss4Q56VScaG-GXHYXYIJrHHJFCII37P8OjXc0QZYTjj8gZW4iraLzO1rjiow5a6UKVxvsrFzCYr9Ucl9IsWiVJ95kZBaLR-dveTnWEv7sAjmydwhABCdEGI4uAvB9RSVzyxZ7c0Qo9Z0nAvD-HfBzpQe6uPtyyH5uIo4PLyWeQmTOUSDKH9UzMW_Y', alt: 'Kids creative' },
    { id: '10', category: 'cornrows', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBLl88XktZ_myxUciFOOYcFiNFxI4zw4Y-fXLcnYDY3E0RfapTNDXbgB1QJVSK2Y978CESJP9hdoJrMVmatmfO8QzHZFIaJKS3UJl3oefto4p-xpSNxMyqA4jjHjq9r5Ayc1dRTKQfw8MdtaZH1JyKVBNHo137_JnfREDSBIlPTr0EinLsxGn3Zaehiwa4SFcMs7RD82QR7mNAgve8Ey66uTpFHIB2dhnkb9MBkfvAXPGfWVZ8ZYQJ3AzSo3U-5UQNY6OJUwUvsKhM', alt: 'Cornrows updo' },
    { id: '11', category: 'box', src: '/images/braid-extensions.jpg', alt: 'Braid Extensions' },
  ];

  const filteredImages = filter === 'all' ? images : images.filter(img => img.category === filter);

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'knotless', label: 'Knotless' },
    { id: 'box', label: 'Box Braids' },
    { id: 'kids', label: 'Kids' },
    { id: 'twists', label: 'Twists' },
    { id: 'cornrows', label: 'Cornrows' },
  ];

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % filteredImages.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + filteredImages.length) % filteredImages.length);
    }
  };

  return (
    <div className="pt-24 pb-20 min-h-screen">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-display font-bold text-gray-900 dark:text-white mb-4">Our Gallery</h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Explore our portfolio of intricate styles and beautiful transformations.
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-3 mb-12 px-4">
        {filters.map(f => (
          <button
            key={f.id}
            onClick={() => setFilter(f.id)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${filter === f.id
                ? 'bg-primary text-white shadow-md transform scale-105'
                : 'bg-white dark:bg-surface-dark text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800'
              }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {filteredImages.map((img, index) => (
            <div
              key={img.id}
              className="break-inside-avoid relative group rounded-xl overflow-hidden cursor-pointer"
              onClick={() => setSelectedImageIndex(index)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4"
          onClick={() => setSelectedImageIndex(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 z-50 p-2"
            onClick={() => setSelectedImageIndex(null)}
          >
            <X className="w-8 h-8" />
          </button>

          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 p-2 bg-black/50 rounded-full md:bg-transparent"
            onClick={handlePrev}
          >
            <ChevronLeft className="w-10 h-10" />
          </button>

          <img
            src={filteredImages[selectedImageIndex].src}
            alt={filteredImages[selectedImageIndex].alt}
            className="max-h-[90vh] max-w-full rounded-lg shadow-2xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 p-2 bg-black/50 rounded-full md:bg-transparent"
            onClick={handleNext}
          >
            <ChevronRight className="w-10 h-10" />
          </button>

          <div className="absolute bottom-6 text-white font-medium text-lg bg-black/50 px-4 py-2 rounded-full">
            {selectedImageIndex + 1} / {filteredImages.length}
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
