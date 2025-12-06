import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Plus, Clock } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import TeamCard from '../components/TeamCard';

const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden bg-primary-dark">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-background.jpg"
            alt="Hero background"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 via-primary-dark/40 to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-6 md:px-12 pt-20">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-medium text-white mb-8 leading-tight">
              Get Hair Style <br />
              <span className="italic">You Deserve</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-xl font-light leading-relaxed">
              Discover a world of sophistication and personalized beauty at DG Braids.
              Our salon is more than just a place for haircuts; it's a haven where your unique style takes center stage.
            </p>
            <Link
              to="/booking"
              className="inline-block bg-accent text-white px-10 py-4 rounded-full text-lg font-medium hover:bg-accent/90 transition-all transform hover:scale-105 shadow-lg shadow-accent/20"
            >
              Book appointment
            </Link>
          </div>
        </div>


      </section>

      {/* Services Section */}
      <section className="py-24 bg-background-light">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h2 className="text-5xl md:text-6xl font-display font-bold text-primary-dark mb-6">Our Services</h2>
            <p className="text-lg text-gray-600">
              Discover our range of bespoke braiding services, crafted with precision and artistry.
            </p>
          </div>

          {/* Adult Styles */}
          <div className="mb-16">
            <h3 className="text-3xl font-display font-bold text-primary-dark mb-8">Adult Styles</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-shadow group">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQaAEBtK-1U532mCLjmdYChrPGox3gMCQJ2N8uvOhbACpVQgYk70f9fK2e_X59T2XuyK0Wv7v5HvQprC6k0_l8FX6oQxlHHCNv_LsYuavlqLdWglD9MIEXnApnU31gfEjuivueBMnwF9tXwDlYSbKIiv3YJNv00UBVa2zbDzPI1wVr-xAg1zp1FoKyx6j7PKKzXMnMjQp8IYGziFCCfXzByNTI5XO8wpyLKsK2zVN5TGyI2_ZhXF1vLGN93rSBf5WLSlz9MfpatXI"
                    alt="Knotless Box Braids"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="font-display text-2xl font-semibold">Knotless Box Braids</h4>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4 text-sm">
                    <span className="flex items-center text-gray-600">
                      <Clock className="w-4 h-4 mr-1" />
                      4 - 6 hours
                    </span>
                    <span className="text-lg font-semibold text-primary">From £40</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-6 h-10">A modern, tension-free braiding technique for a natural and seamless look.</p>
                  <Link to="/booking?service=Knotless%20Box%20Braids" className="block w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors text-center">
                    Book Now
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-shadow group">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7OzGfUzoKIh_WyxlCNRLZ0D915byHSQqpCa0Z4u9uxisOUL3Pjg2uTjsnqYu4tPIiUpWnshrL8C-6yalsGM6k3qSp12GDbgZolWdhl4vrta7W2kBxZg8U1QxULxibWeK7O69P9CR6SJOPKK79wdcuL-wdUNaqiy2dF5zglC_P0SaY6uNbgF4-2sIB2Iq00TJBfJQ5e2SaV6sKsXGoGZ2ikIpwTGuO0JaZZJTm_ohygGS9jGyjTX9ZR5qxLJxfklvfeSolCD580TA"
                    alt="Stitch Cornrows"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="font-display text-2xl font-semibold">Stitch Cornrows</h4>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4 text-sm">
                    <span className="flex items-center text-gray-600">
                      <Clock className="w-4 h-4 mr-1" />
                      2 - 3 hours
                    </span>
                    <span className="text-lg font-semibold text-primary">From £40</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-6 h-10">Neat, defined cornrows created with the "stitch" technique for a sharp finish.</p>
                  <Link to="/booking?service=Stitch%20Cornrows" className="block w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors text-center">
                    Book Now
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-shadow group">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDv9wsxi57Un8CAXFoATsJYS2eUNUloouqQgQLsAMKlgiRJZJHYUhfQ2qnB_5DjMi896QYOrfX-CJjfghCkZb5shNd77-zkHPFzD89j7HyGL7rN48GWm4L6jeuH4RkMuWFb8yC0Jqft9uRUN93kaO9I-wU9odOzePbDa5Lc4HtiOX7vHt1TQQnWgkyoMqWWBrORavalmbmmubWDQoUe81By-DNon55Mo66jKl2IJ9CmWZMrTJGdeu4XDm-iMYy0TY3AjDXgvTp_lM8"
                    alt="Fulani Braids"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="font-display text-2xl font-semibold">Fulani Braids</h4>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4 text-sm">
                    <span className="flex items-center text-gray-600">
                      <Clock className="w-4 h-4 mr-1" />
                      3 - 5 hours
                    </span>
                    <span className="text-lg font-semibold text-primary">From £40</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-6 h-10">A traditional style featuring a unique pattern of cornrows and box braids, often adorned with beads.</p>
                  <Link to="/booking?service=Fulani%20Braids" className="block w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors text-center">
                    Book Now
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-shadow group">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src="/images/twists.jpg"
                    alt="Senegalese Twists"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="font-display text-2xl font-semibold">Senegalese Twists</h4>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4 text-sm">
                    <span className="flex items-center text-gray-600">
                      <Clock className="w-4 h-4 mr-1" />
                      5 - 7 hours
                    </span>
                    <span className="text-lg font-semibold text-primary">From £40</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-6 h-10">Elegant rope-like twists that offer a sophisticated and protective style.</p>
                  <Link to="/booking?service=Senegalese%20Twists" className="block w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors text-center">
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Hair Extension Services */}
          <div className="mb-16">
            <h3 className="text-3xl font-display font-bold text-primary-dark mb-8">Hair Extension Services</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-shadow group">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src="/images/braid-extensions.jpg"
                    alt="Braid Extensions"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="font-display text-2xl font-semibold">Braid Extensions</h4>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4 text-sm">
                    <span className="flex items-center text-gray-600">
                      <Clock className="w-4 h-4 mr-1" />
                      4 - 6 hours
                    </span>
                    <span className="text-lg font-semibold text-primary">From £50</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-6 h-10">Add length and volume with high-quality braid extensions for a fuller look.</p>
                  <Link to="/booking?service=Braid%20Extensions" className="block w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors text-center">
                    Book Now
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-shadow group">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZzfdnq7sKqgjTu9weYpl5SxNdTmObGXV8hfybf5aSqryjbL4dkVQa8AdXLogz6tRfa7eFY_v7th97ojKukalOgM91_rsvrEmxWOsiTUE073qLmDfIP8Rdk0a6G-5VX3ikI2z3KkOiMZh6HDzBI99asNK7QRJkVi2D5Cs7uk1L3tb0xBbsGOzhkZN1IdetK9FgKemmFEE4eeF_ywncGLkMlgyr4kNkFhwVbh6Rilqmm3ychBwgKmua0gzuVq2oso0ojHyO8k73p5g"
                    alt="Micro Links"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="font-display text-2xl font-semibold">Micro Links</h4>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4 text-sm">
                    <span className="flex items-center text-gray-600">
                      <Clock className="w-4 h-4 mr-1" />
                      3 - 5 hours
                    </span>
                    <span className="text-lg font-semibold text-primary">From £50</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-6 h-10">A strand-by-strand extension method for a full, seamless and versatile look.</p>
                  <Link to="/booking?service=Micro%20Links" className="block w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors text-center">
                    Book Now
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-shadow group">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuABX0Z7JHi-BjpwMZ3ROnBafQpT-J1TqywBaGOKbS25tAAlxDPymLItvwyNmGc_aE7lqGfXry3w24kI-pwfqvqSu07cf4OU08at7VABEcgF0hcCq_X-j8rQLvYJ0Ci3B7WlpFPLiedMooBJ2BIa-bt9oBJyWtcMMtipAchpysYaPPJLSCaWbl595nWX0jGDJIaZfwYV3QBf-gmDne3OQtP900EQtczb86J8Eajuy_yNJIKJ4NcsrppvPJNKTMLqi7Q5pteREJJhsbY"
                    alt="Wig Installation"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="font-display text-2xl font-semibold">Wig Installation</h4>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4 text-sm">
                    <span className="flex items-center text-gray-600">
                      <Clock className="w-4 h-4 mr-1" />
                      2 hours
                    </span>
                    <span className="text-lg font-semibold text-primary">From £50</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-6 h-10">Professional installation of lace front or full lace wigs for a flat, natural-looking finish.</p>
                  <Link to="/booking?service=Wig%20Installation" className="block w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors text-center">
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Kids' Braids */}
          <div className="mb-16">
            <h3 className="text-3xl font-display font-bold text-primary-dark mb-8">Kids' Braids</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-shadow group">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src="/images/kids-braids.jpg"
                    alt="Kids Braids"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="font-display text-2xl font-semibold">Kids Braids</h4>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4 text-sm">
                    <span className="flex items-center text-gray-600">
                      <Clock className="w-4 h-4 mr-1" />
                      2 - 3 hours
                    </span>
                    <span className="text-lg font-semibold text-primary">From £30</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-6 h-10">Gentle and stylish braiding techniques perfect for children of all ages.</p>
                  <Link to="/booking?service=Kids%20Braids" className="block w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors text-center">
                    Book Now
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-shadow group">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbBLEerfp6nFPzRE_JlNBcmrst1coDAKP4hTsdnWl23sjw01amxu0BAztBgJd3lTlnY_aAKEtgymvoQFRJxyFPy1rAFQA58wPwJS62Z5h_z45Ect-CNS2wg0hl6bRlWZ6Wb8gpR27PjIei6wqqCarqrenfHmJjGqYSm8Wg6muzIPDxW0VAcMcSoLpk4bq79MXI0ET4W4djTERWQGjfaMbd5np4I9X-pmmOG9jFqls-MVoaRR3RoZfO1-fZuY_WE0rcS5IJhUSvZ3A"
                    alt="Kids' Cornrows"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="font-display text-2xl font-semibold">Kids' Cornrows</h4>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4 text-sm">
                    <span className="flex items-center text-gray-600">
                      <Clock className="w-4 h-4 mr-1" />
                      2 hours
                    </span>
                    <span className="text-lg font-semibold text-primary">From £30</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-6 h-10">Simple and stylish cornrow designs perfect for kids.</p>
                  <Link to="/booking?service=Kids'%20Cornrows" className="block w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors text-center">
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Footer / Newsletter (Simplified) */}
      {/* Footer */}
      <footer className="bg-surface-dark text-white pt-12 pb-6">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-12 gap-8 mb-10">
            {/* Map Section */}
            <div className="lg:col-span-5">
              <div className="w-full h-[200px] rounded-3xl overflow-hidden grayscale invert contrast-125 opacity-80 hover:grayscale-0 hover:invert-0 hover:opacity-100 transition-all duration-500">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2392.673898396556!2d-2.179404923296556!3d53.05221997220556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487a6886e4c7c5d7%3A0x8f8f8f8f8f8f8f8f!2s7%20Birks%20St%2C%20Stoke-on-Trent%20ST4%204HA%2C%20UK!5e0!3m2!1sen!2sus!4v1701888888888!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-3 flex flex-col justify-center space-y-6">
              <div>
                <h3 className="text-lg font-display font-medium mb-2">Contact Us</h3>
                <div className="space-y-1 text-gray-400 text-sm">
                  <p>+44 7386 899257</p>
                  <p>info@dgbraids.com</p>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-display font-medium mb-2">Visit Us</h3>
                <div className="space-y-1 text-gray-400 text-sm">
                  <p>7 Birks Street</p>
                  <p>Stoke-on-Trent, UK</p>
                </div>
              </div>
              <div className="flex gap-3">
                {/* Social Icons Placeholders */}
                <div className="w-8 h-8 bg-white/10 rounded flex items-center justify-center hover:bg-accent transition-colors cursor-pointer">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" /></svg>
                </div>
                <div className="w-8 h-8 bg-white/10 rounded flex items-center justify-center hover:bg-accent transition-colors cursor-pointer">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>
                </div>
                <div className="w-8 h-8 bg-white/10 rounded flex items-center justify-center hover:bg-accent transition-colors cursor-pointer">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                </div>
              </div>
            </div>

            {/* Logo & CTA */}
            <div className="lg:col-span-4 flex flex-col justify-center items-end h-full">
              <div className="text-right">
                <h2 className="font-display text-4xl mb-4">DG BRAIDS</h2>
                <Link to="/booking" className="inline-block bg-white text-primary-dark px-6 py-2.5 rounded-full font-medium text-sm hover:bg-gray-100 transition-colors">
                  Book Appointment
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs">
            <div className="flex gap-6 mb-4 md:mb-0">
              <Link to="#" className="hover:text-white transition-colors">Sitemap</Link>
              <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
            <div>
              Copyright © DG BRAIDS. All Rights Reserved.
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
