import React from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="pt-24 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-gray-900 dark:text-white">Get In Touch</h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We're here to help you achieve your perfect braided look.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Form */}
          <div className="lg:col-span-2 bg-surface-light dark:bg-surface-dark p-8 md:p-12 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
            <h2 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-8">Send us a message</h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input 
                  type="text" 
                  placeholder="Name"
                  className="w-full p-4 rounded-lg bg-background-light dark:bg-background-dark border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:ring-primary focus:border-primary"
                />
                <input 
                  type="email" 
                  placeholder="Email"
                  className="w-full p-4 rounded-lg bg-background-light dark:bg-background-dark border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:ring-primary focus:border-primary"
                />
              </div>
              <input 
                type="tel" 
                placeholder="Phone Number"
                className="w-full p-4 rounded-lg bg-background-light dark:bg-background-dark border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:ring-primary focus:border-primary"
              />
              <textarea 
                rows={5}
                placeholder="Your Message"
                className="w-full p-4 rounded-lg bg-background-light dark:bg-background-dark border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:ring-primary focus:border-primary"
              ></textarea>
              <button className="bg-primary text-white font-semibold py-3 px-8 rounded-full hover:bg-primary-dark transition-all transform hover:-translate-y-1">
                Send Message
              </button>
            </form>
          </div>

          {/* Info */}
          <div className="space-y-8">
            <div className="bg-surface-light dark:bg-surface-dark p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
              <h3 className="text-xl font-display font-bold text-gray-900 dark:text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4 text-primary">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Address</h4>
                    <p className="text-gray-600 dark:text-gray-400">123 Braiding Lane<br/>London, W1A 1AA</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4 text-primary">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Phone</h4>
                    <p className="text-gray-600 dark:text-gray-400">+44 20 7946 0958</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4 text-primary">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Email</h4>
                    <p className="text-gray-600 dark:text-gray-400">hello@dgbraids.co.uk</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-surface-light dark:bg-surface-dark p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
              <h3 className="text-xl font-display font-bold text-gray-900 dark:text-white mb-6">Opening Hours</h3>
              <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                <li className="flex justify-between border-b border-gray-100 dark:border-gray-800 pb-2">
                  <span>Monday - Friday</span>
                  <span className="font-semibold text-gray-900 dark:text-white">9:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between border-b border-gray-100 dark:border-gray-800 pb-2">
                  <span>Saturday</span>
                  <span className="font-semibold text-gray-900 dark:text-white">10:00 AM - 4:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-semibold text-gray-900 dark:text-white">Closed</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12 bg-gray-200 dark:bg-gray-800 rounded-xl overflow-hidden h-80 flex items-center justify-center relative">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.2889612081344!2d-0.1275862842299881!3d51.50797807963519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604ce3941eb1f%3A0x1a5342fdf089c627!2sTrafalgar%20Square!5e0!3m2!1sen!2suk!4v1626182142279!5m2!1sen!2suk" 
            width="100%" 
            height="100%" 
            style={{border:0}} 
            allowFullScreen={true} 
            loading="lazy"
            className="absolute inset-0 grayscale contrast-125 opacity-70 hover:opacity-100 transition-opacity"
          ></iframe>
          <div className="relative z-10 bg-white dark:bg-surface-dark py-2 px-4 rounded shadow-lg pointer-events-none">
            <span className="text-sm font-medium">123 Braiding Lane, London</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
