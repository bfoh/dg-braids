import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, ChevronDown } from 'lucide-react';
import { Service } from '../types';

const Services: React.FC = () => {
  const services: Service[] = [
    {
      id: '1',
      name: 'Knotless Box Braids',
      duration: '4 - 6 hours',
      price: 'From £40',
      description: 'A modern, tension-free braiding technique for a natural and seamless look.',
      category: 'adult',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBQaAEBtK-1U532mCLjmdYChrPGox3gMCQJ2N8uvOhbACpVQgYk70f9fK2e_X59T2XuyK0Wv7v5HvQprC6k0_l8FX6oQxlHHCNv_LsYuavlqLdWglD9MIEXnApnU31gfEjuivueBMnwF9tXwDlYSbKIiv3YJNv00UBVa2zbDzPI1wVr-xAg1zp1FoKyx6j7PKKzXMnMjQp8IYGziFCCfXzByNTI5XO8wpyLKsK2zVN5TGyI2_ZhXF1vLGN93rSBf5WLSlz9MfpatXI'
    },
    {
      id: '2',
      name: 'Stitch Cornrows',
      duration: '2 - 3 hours',
      price: 'From £40',
      description: 'Neat, defined cornrows created with the "stitch" technique for a sharp finish.',
      category: 'adult',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA7OzGfUzoKIh_WyxlCNRLZ0D915byHSQqpCa0Z4u9uxisOUL3Pjg2uTjsnqYu4tPIiUpWnshrL8C-6yalsGM6k3qSp12GDbgZolWdhl4vrta7W2kBxZg8U1QxULxibWeK7O69P9CR6SJOPKK79wdcuL-wdUNaqiy2dF5zglC_P0SaY6uNbgF4-2sIB2Iq00TJBfJQ5e2SaV6sKsXGoGZ2ikIpwTGuO0JaZZJTm_ohygGS9jGyjTX9ZR5qxLJxfklvfeSolCD580TA'
    },
    {
      id: '3',
      name: 'Fulani Braids',
      duration: '3 - 5 hours',
      price: 'From £40',
      description: 'A traditional style featuring a unique pattern of cornrows and box braids, often adorned with beads.',
      category: 'adult',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDv9wsxi57Un8CAXFoATsJYS2eUNUloouqQgQLsAMKlgiRJZJHYUhfQ2qnB_5DjMi896QYOrfX-CJjfghCkZb5shNd77-zkHPFzD89j7HyGL7rN48GWm4L6jeuH4RkMuWFb8yC0Jqft9uRUN93kaO9I-wU9odOzePbDa5Lc4HtiOX7vHt1TQQnWgkyoMqWWBrORavalmbmmubWDQoUe81By-DNon55Mo66jKl2IJ9CmWZMrTJGdeu4XDm-iMYy0TY3AjDXgvTp_lM8'
    },
    {
      id: '4',
      name: 'Kids Braids',
      duration: '2 - 3 hours',
      price: 'From £30',
      description: 'Gentle and stylish braiding techniques perfect for children of all ages.',
      category: 'kids',
      image: '/images/kids-braids.jpg'
    },
    {
      id: '5',
      name: 'Braid Extensions',
      duration: '4 - 6 hours',
      price: 'From £50',
      description: 'Add length and volume with high-quality braid extensions for a fuller look.',
      category: 'extension',
      image: '/images/braid-extensions.jpg'
    },
    {
      id: '6',
      name: 'Senegalese Twists',
      duration: '5 - 7 hours',
      price: 'From £40',
      description: 'Elegant rope-like twists that offer a sophisticated and protective style.',
      category: 'adult',
      image: '/images/twists.jpg'
    },
    {
      id: '7',
      name: 'Micro Links',
      duration: '3 - 5 hours',
      price: 'From £50',
      description: 'A strand-by-strand extension method for a full, seamless and versatile look.',
      category: 'extension',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDZzfdnq7sKqgjTu9weYpl5SxNdTmObGXV8hfybf5aSqryjbL4dkVQa8AdXLogz6tRfa7eFY_v7th97ojKukalOgM91_rsvrEmxWOsiTUE073qLmDfIP8Rdk0a6G-5VX3ikI2z3KkOiMZh6HDzBI99asNK7QRJkVi2D5Cs7uk1L3tb0xBbsGOzhkZN1IdetK9FgKemmFEE4eeF_ywncGLkMlgyr4kNkFhwVbh6Rilqmm3ychBwgKmua0gzuVq2oso0ojHyO8k73p5g'
    },
    {
      id: '8',
      name: 'Wig Installation',
      duration: '2 hours',
      price: 'From £50',
      description: 'Professional installation of lace front or full lace wigs for a flat, natural-looking finish.',
      category: 'extension',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuABX0Z7JHi-BjpwMZ3ROnBafQpT-J1TqywBaGOKbS25tAAlxDPymLItvwyNmGc_aE7lqGfXry3w24kI-pwfqvqSu07cf4OU08at7VABEcgF0hcCq_X-j8rQLvYJ0Ci3B7WlpFPLiedMooBJ2BIa-bt9oBJyWtcMMtipAchpysYaPPJLSCaWbl595nWX0jGDJIaZfwYV3QBf-gmDne3OQtP900EQtczb86J8Eajuy_yNJIKJ4NcsrppvPJNKTMLqi7Q5pteREJJhsbY'
    },
    {
      id: '9',
      name: 'Kids\' Cornrows',
      duration: '2 hours',
      price: 'From £30',
      description: 'Simple and stylish cornrow designs perfect for kids.',
      category: 'kids',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBbBLEerfp6nFPzRE_JlNBcmrst1coDAKP4hTsdnWl23sjw01amxu0BAztBgJd3lTlnY_aAKEtgymvoQFRJxyFPy1rAFQA58wPwJS62Z5h_z45Ect-CNS2wg0hl6bRlWZ6Wb8gpR27PjIei6wqqCarqrenfHmJjGqYSm8Wg6muzIPDxW0VAcMcSoLpk4bq79MXI0ET4W4djTERWQGjfaMbd5np4I9X-pmmOG9jFqls-MVoaRR3RoZfO1-fZuY_WE0rcS5IJhUSvZ3A'
    }
  ];

  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <section className="text-center max-w-4xl mx-auto px-4 mb-20">
        <h1 className="text-5xl md:text-6xl font-display font-bold text-gray-900 dark:text-white mb-6">Our Services</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Discover our range of bespoke braiding services, crafted with precision and artistry.
        </p>
      </section>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        {['adult', 'extension', 'kids'].map((cat) => {
          const categoryServices = services.filter(s => s.category === cat);
          if (categoryServices.length === 0) return null;

          return (
            <div key={cat} className="mb-16">
              <h2 className="text-3xl font-display font-bold text-gray-900 dark:text-white mb-8 capitalize">
                {cat === 'adult' ? 'Adult Styles' : cat === 'extension' ? 'Hair Extension Services' : "Kids' Braids"}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {categoryServices.map(service => (
                  <div key={service.id} className="bg-surface-light dark:bg-surface-dark rounded-xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-shadow group">
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.name}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="font-display text-2xl font-semibold">{service.name}</h3>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-center mb-4 text-sm">
                        <span className="flex items-center text-gray-600 dark:text-gray-400">
                          <Clock className="w-4 h-4 mr-1" />
                          {service.duration}
                        </span>
                        <span className="text-lg font-semibold text-primary">{service.price}</span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 h-10">{service.description}</p>
                      <Link
                        to={`/booking?service=${encodeURIComponent(service.name)}`}
                        className="block w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors text-center"
                      >
                        Book Now
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-display font-bold text-center text-gray-900 dark:text-white mb-12">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            { q: "Do I need to pay a deposit?", a: "Yes, a non-refundable deposit is required to secure all bookings. The deposit amount will be deducted from your final bill." },
            { q: "How should I prepare my hair?", a: "Please arrive with your hair washed, detangled, and thoroughly blow-dried straight from root to tip, with no products." },
            { q: "What is your late policy?", a: "We have a strict 15-minute grace period. If you are more than 15 minutes late, your appointment will be cancelled." },
            { q: "How can I maintain my braids?", a: "Sleep with a silk or satin scarf. Moisturise your scalp regularly with a light oil to prevent dryness." }
          ].map((faq, idx) => (
            <details key={idx} className="group bg-surface-light dark:bg-surface-dark p-6 rounded-lg border border-gray-200 dark:border-gray-800">
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <span className="font-semibold text-lg text-gray-900 dark:text-white group-hover:text-primary transition-colors">{faq.q}</span>
                <ChevronDown className="w-5 h-5 text-gray-500 transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-4 text-gray-600 dark:text-gray-400 leading-relaxed">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
