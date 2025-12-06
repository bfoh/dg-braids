import React from 'react';
import { Award, Users, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-gray-900 dark:text-white mb-6">
            Our Story
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Weaving tradition with modern elegance.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <h2 className="text-3xl font-display font-bold text-gray-900 dark:text-white mb-6">
              A Sanctuary for Self-Expression
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              Founded on a passion for celebrating African beauty and heritage, DG Braids is more than just a salon—it's a sanctuary for self-expression. We began with a simple mission: to provide an upscale, welcoming space in the UK where the timeless art of braiding is honoured and elevated.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Our journey is woven with dedication to craftsmanship, community, and the unique story each client brings through our doors. Every braid is a testament to our commitment to excellence.
            </p>
          </div>
          <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBg2UwGRsjBR0glJZcgsI_QzlsY0Ilt8XJYYLwX-W77XRctBJ-lJZfE_RmlGezDWx3NSxS0kzG4cs8IqC1FcJtNeDP8ibjTkJcdVTlTA5egYGY-887onIpnrckseSIb1ffGyNzXiq0STXMAz1vSS6z6UfxbY3nWVz3j7ebe7gKPl2T3nXxMAp3X5QDyYuzk09Mav0XFa1GYzaLx-G7UFr4jqaHyX9Lmp3E-beA02rHK8sHnX-5PpTsLo0-k0ImJCWBXOYDb8wWlepQ" 
              alt="DG Braids atmosphere" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-surface-light dark:bg-surface-dark py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold text-gray-900 dark:text-white">Our Mission & Values</h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">Rooted in authenticity, driven by excellence.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Award, title: "Excellence", desc: "We pursue perfection in every braid, using premium products and refined techniques." },
              { icon: Users, title: "Community", desc: "We foster a welcoming and inclusive environment for clients and stylists alike." },
              { icon: Heart, title: "Authenticity", desc: "We honor the rich traditions of African hair braiding while embracing modern style." }
            ].map((item, idx) => (
              <div key={idx} className="bg-background-light dark:bg-background-dark p-8 rounded-xl border border-gray-100 dark:border-gray-800 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-2">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvkBAyrl41oWFy2rnVp7DahgWp4nqqH4xH_9caG7tfl0oH3Foof0GPiY87z_jTr9Kp4XCu1zq13CeuqkaSAcrYCXs1s2al2fe_EKzHfZg-cwNQoFB4YyWiiHTdlSsDyOgRWlRD5fNJ6Gbpno4Oh6qVgNhYUap7WHgYICBV7Zn6fr2ArBA9LC4dh_BWUuT4Ue2YD2uJMdZ6TwUcf1_iKh-Dea2RwGwi2edKaZPwuKDReoHXJfW4GBpXxLKT1V0PnUyHe2lvK01Md8I" 
                alt="Davina Grant Founder" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="md:col-span-3">
            <h2 className="text-4xl font-display font-bold text-gray-900 dark:text-white mb-2">Davina Grant</h2>
            <p className="text-primary font-medium mb-6">Lead Stylist & Founder</p>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              With over 15 years of professional experience, Davina is a master of her craft. Her journey began in her family's salon, where she learned the intricate techniques passed down through generations. Today, she is an award-winning stylist known for her meticulous attention to detail and her ability to create stunning, modern looks that protect and celebrate natural hair.
            </p>
            <div className="border-t border-gray-200 dark:border-gray-800 pt-6">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Certifications</h4>
              <ul className="space-y-3">
                {["NVQ Level 3 Certified in Afro-Caribbean Hairdressing", "Natural Hair Care & Braiding Specialist", "Featured Stylist, Black Beauty & Hair Magazine"].map((cert, i) => (
                  <li key={i} className="flex items-start text-sm text-gray-600 dark:text-gray-400">
                    <Award className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
