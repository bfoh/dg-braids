import React, { useState, useEffect } from 'react';
import { Check, ChevronRight, ChevronLeft, Calendar, Mail, Phone, User, Clock } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';

interface BookingFormData {
  service: string;
  stylist: string;
  date: string;
  time: string;
  name: string;
  email: string;
  phone: string;
}

const Booking: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<BookingFormData>({
    service: '',
    stylist: 'Any',
    date: '',
    time: '',
    name: '',
    email: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // Pre-select service from URL parameter
  useEffect(() => {
    const serviceParam = searchParams.get('service');
    console.log('Service from URL:', serviceParam);
    if (serviceParam) {
      const decodedService = decodeURIComponent(serviceParam);
      console.log('Decoded service:', decodedService);
      setFormData(prev => {
        console.log('Setting service to:', decodedService);
        return { ...prev, service: decodedService };
      });
    }
  }, [searchParams]);

  const updateForm = (field: keyof BookingFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  // Generate available dates (next 14 days, excluding Sundays)
  const generateDates = () => {
    const dates = [];
    let currentDate = new Date();

    while (dates.length < 14) {
      currentDate.setDate(currentDate.getDate() + 1);
      // Skip Sundays (0 = Sunday)
      if (currentDate.getDay() !== 0) {
        dates.push({
          day: currentDate.getDate(),
          month: currentDate.toLocaleDateString('en-US', { month: 'short' }),
          weekday: currentDate.toLocaleDateString('en-US', { weekday: 'short' }),
          full: currentDate.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }),
          dateString: currentDate.toISOString().split('T')[0]
        });
      }
    }
    return dates;
  };

  const dates = generateDates();

  // Available time slots (9 AM - 6 PM, 30-minute intervals)
  const timeSlots = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
    '15:00', '15:30', '16:00', '16:30', '17:00', '17:30'
  ];

  // Services with updated prices
  const services = [
    { name: 'Knotless Box Braids', price: '£40', category: 'adult' },
    { name: 'Stitch Cornrows', price: '£40', category: 'adult' },
    { name: 'Fulani Braids', price: '£40', category: 'adult' },
    { name: 'Senegalese Twists', price: '£40', category: 'adult' },
    { name: 'Kids Braids', price: '£30', category: 'kids' },
    { name: 'Kids\' Cornrows', price: '£30', category: 'kids' },
    { name: 'Braid Extensions', price: '£50', category: 'extension' },
    { name: 'Micro Links', price: '£50', category: 'extension' },
    { name: 'Wig Installation', price: '£50', category: 'extension' },
  ];

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      // Use Netlify function in production, localhost API in development
      const apiUrl = import.meta.env.PROD 
        ? '/.netlify/functions/book'
        : 'http://localhost:3001/api/book';
      
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitStatus('success');
      } else {
        setSubmitStatus('error');
        setErrorMessage(data.error || 'Failed to submit booking. Please try again.');
      }
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      service: '',
      stylist: 'Any',
      date: '',
      time: '',
      name: '',
      email: '',
      phone: ''
    });
    setStep(1);
    setSubmitStatus('idle');
    setErrorMessage('');
  };

  // Success screen
  if (submitStatus === 'success') {
    return (
      <div className="pt-24 pb-20 min-h-screen bg-background-light flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="bg-white rounded-2xl shadow-xl p-12">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-green-600" />
            </div>
            <h1 className="text-3xl font-display font-bold text-gray-900 mb-4">
              Booking Confirmed!
            </h1>
            <p className="text-gray-600 mb-8">
              Thank you, {formData.name}! Your appointment has been confirmed.
              <br />
              We've sent a confirmation email to <strong>{formData.email}</strong>
            </p>
            <div className="bg-gray-50 rounded-xl p-6 mb-8 text-left">
              <h3 className="font-semibold text-gray-900 mb-4">Appointment Details:</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Service:</span>
                  <span className="font-medium">{formData.service}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Date:</span>
                  <span className="font-medium">{formData.date}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Time:</span>
                  <span className="font-medium">{formData.time}</span>
                </div>
                {formData.stylist !== 'Any' && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Stylist:</span>
                    <span className="font-medium">{formData.stylist}</span>
                  </div>
                )}
              </div>
            </div>
            <button
              onClick={resetForm}
              className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-dark transition-colors"
            >
              Book Another Appointment
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20 min-h-screen bg-background-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-dark">Book Appointment</h1>
          <p className="mt-2 text-gray-600">Secure your transformative braiding experience</p>
        </header>

        {/* Progress Indicator */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center space-x-4">
            {[1, 2, 3].map((s) => (
              <React.Fragment key={s}>
                <div className={`flex items-center justify-center w-10 h-10 rounded-full font-bold text-sm ${step >= s ? 'bg-primary text-white' : 'bg-gray-200 text-gray-500'
                  }`}>
                  {s}
                </div>
                {s < 3 && (
                  <div className={`w-16 h-1 ${step > s ? 'bg-primary' : 'bg-gray-200'}`} />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Form Area */}
          <div className="lg:col-span-2">

            {/* Step 1: Service Selection */}
            {step === 1 && (
              <div className="bg-white p-8 rounded-xl shadow-sm animate-fade-in">
                <h2 className="text-2xl font-display font-semibold text-primary-dark mb-6">Select Service</h2>

                <div className="space-y-3 mb-6">
                  {services.map((service) => (
                    <button
                      key={service.name}
                      onClick={() => updateForm('service', service.name)}
                      className={`w-full p-4 rounded-lg border-2 text-left transition-all ${formData.service === service.name
                        ? 'border-primary bg-primary/5'
                        : 'border-gray-200 hover:border-primary/50'
                        }`}
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-900">{service.name}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-primary font-semibold">{service.price}</span>
                          {formData.service === service.name && (
                            <Check className="w-5 h-5 text-primary" />
                          )}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Stylist Preference (Optional)
                  </label>
                  <select
                    className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary"
                    value={formData.stylist}
                    onChange={(e) => updateForm('stylist', e.target.value)}
                  >
                    <option value="Any">Any Available Stylist</option>
                    <option value="Davina">Davina (Lead Stylist)</option>
                    <option value="Amina">Amina</option>
                    <option value="Sarah">Sarah</option>
                  </select>
                </div>

                <div className="flex justify-end">
                  <button
                    onClick={nextStep}
                    disabled={!formData.service}
                    className="bg-primary text-white px-8 py-3 rounded-full font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary-dark transition-colors flex items-center gap-2"
                  >
                    Next <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Date & Time */}
            {step === 2 && (
              <div className="bg-white p-8 rounded-xl shadow-sm animate-fade-in">
                <h2 className="text-2xl font-display font-semibold text-primary-dark mb-6">Select Date & Time</h2>

                <div className="mb-8">
                  <h3 className="font-medium text-gray-900 mb-4 flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    Choose a Date
                  </h3>
                  <div className="grid grid-cols-7 gap-2">
                    {dates.map((d) => (
                      <button
                        key={d.dateString}
                        onClick={() => updateForm('date', d.full)}
                        className={`p-3 rounded-lg border-2 text-center transition-all ${formData.date === d.full
                          ? 'border-primary bg-primary text-white'
                          : 'border-gray-200 hover:border-primary/50'
                          }`}
                      >
                        <div className="text-xs font-medium uppercase">{d.weekday}</div>
                        <div className="text-lg font-bold">{d.day}</div>
                        <div className="text-xs">{d.month}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="font-medium text-gray-900 mb-4 flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    Available Time Slots
                  </h3>
                  <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        onClick={() => updateForm('time', time)}
                        disabled={!formData.date}
                        className={`py-2 px-3 rounded-lg border-2 text-sm font-medium transition-all ${formData.time === time
                          ? 'border-primary bg-primary text-white'
                          : 'border-gray-200 hover:border-primary/50 disabled:opacity-30 disabled:cursor-not-allowed'
                          }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between">
                  <button
                    onClick={prevStep}
                    className="text-gray-600 hover:text-gray-900 font-medium flex items-center gap-2"
                  >
                    <ChevronLeft className="w-5 h-5" /> Back
                  </button>
                  <button
                    onClick={nextStep}
                    disabled={!formData.date || !formData.time}
                    className="bg-primary text-white px-8 py-3 rounded-full font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary-dark transition-colors flex items-center gap-2"
                  >
                    Next <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Contact Details */}
            {step === 3 && (
              <div className="bg-white p-8 rounded-xl shadow-sm animate-fade-in">
                <h2 className="text-2xl font-display font-semibold text-primary-dark mb-6">Your Details</h2>

                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                      <User className="w-4 h-4" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary"
                      value={formData.name}
                      onChange={(e) => updateForm('name', e.target.value)}
                      placeholder="e.g. Jane Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary"
                      value={formData.email}
                      onChange={(e) => updateForm('email', e.target.value)}
                      placeholder="jane@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary"
                      value={formData.phone}
                      onChange={(e) => updateForm('phone', e.target.value)}
                      placeholder="+44 7123 456789"
                    />
                  </div>
                </div>

                {errorMessage && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                    {errorMessage}
                  </div>
                )}

                <div className="flex justify-between">
                  <button
                    onClick={prevStep}
                    disabled={isSubmitting}
                    className="text-gray-600 hover:text-gray-900 font-medium flex items-center gap-2 disabled:opacity-50"
                  >
                    <ChevronLeft className="w-5 h-5" /> Back
                  </button>
                  <button
                    onClick={handleSubmit}
                    disabled={!formData.name || !formData.email || !formData.phone || isSubmitting}
                    className="bg-primary text-white px-8 py-3 rounded-full font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary-dark transition-colors flex items-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Check className="w-5 h-5" />
                        Confirm Booking
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-display font-bold text-primary-dark border-b border-gray-200 pb-4 mb-6">
                Booking Summary
              </h3>
              <div className="space-y-4 text-sm">
                <div>
                  <span className="text-gray-500 block mb-1">Service</span>
                  <span className="font-medium text-gray-900">{formData.service || '-'}</span>
                </div>
                <div>
                  <span className="text-gray-500 block mb-1">Stylist</span>
                  <span className="font-medium text-gray-900">{formData.stylist}</span>
                </div>
                <div>
                  <span className="text-gray-500 block mb-1">Date</span>
                  <span className="font-medium text-gray-900">{formData.date || '-'}</span>
                </div>
                <div>
                  <span className="text-gray-500 block mb-1">Time</span>
                  <span className="font-medium text-gray-900">{formData.time || '-'}</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="bg-primary/5 p-4 rounded-lg text-xs text-gray-600">
                  <p className="font-semibold text-primary mb-2">Important:</p>
                  <ul className="space-y-1 list-disc list-inside">
                    <li>Arrive 10 minutes early</li>
                    <li>Come with clean, detangled hair</li>
                    <li>Cancellations require 24h notice</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
