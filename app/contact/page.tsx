'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin, Send, CheckCircle2, Calendar, MessageSquare } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: 'Website Development',
    budget: '$5,000 - $10,000',
    details: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Calendly Mock States
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Trigger success celebration
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#D9FF00', '#A8D61D', '#FFFFFF'],
      });
    }, 1500);
  };

  const handleBooking = () => {
    if (selectedDate && selectedTime) {
      setBookingConfirmed(true);
      confetti({
        particleCount: 50,
        spread: 40,
        origin: { y: 0.8 },
        colors: ['#D9FF00', '#FFFFFF'],
      });
    }
  };

  return (
    <>
      <Navbar />
      <main className="flex-1 bg-background-custom pt-32 pb-24 relative overflow-hidden">
        
        {/* Decorative Glow */}
        <div className="absolute top-[15%] right-[-15%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_at_center,rgba(217,255,0,0.03)_0%,transparent_60%)] blur-[80px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          {/* Header */}
          <div className="max-w-3xl mb-16 flex flex-col gap-4">
            <span className="font-heading font-semibold text-primary text-xs uppercase tracking-wider">
              CONNECT WITH US
            </span>
            <h1 className="font-heading font-bold text-4xl md:text-6xl text-white tracking-tight">
              Start Your Scale Journey
            </h1>
            <p className="font-sans text-text-secondary text-lg leading-relaxed mt-2">
              Have a project in mind or need strategic marketing direction? Contact us below or schedule a call directly.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left Column: Form / Success state */}
            <div className="lg:col-span-7">
              <div className="glass-panel p-8 md:p-10 rounded-2xl border-primary/10 bg-card/25 shadow-2xl">
                {isSuccess ? (
                  <div className="text-center py-10 flex flex-col items-center gap-5">
                    <div className="h-16 w-16 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary mb-2">
                      <CheckCircle2 className="h-9 w-9" />
                    </div>
                    <h2 className="font-heading font-bold text-2xl text-white">Project Inquiry Received!</h2>
                    <p className="font-sans text-sm text-text-secondary max-w-sm leading-relaxed">
                      Thank you for contacting Meru Technologies. A senior solutions manager will review your details and reach out within 4 hours.
                    </p>
                    <button
                      onClick={() => setIsSuccess(false)}
                      className="text-primary font-bold text-xs underline mt-4"
                    >
                      Submit another inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5.5">
                    <h3 className="font-heading font-bold text-xl text-white mb-2">Project Brief Form</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      {/* Name */}
                      <div className="flex flex-col gap-2">
                        <label className="font-sans text-xs text-text-secondary font-medium uppercase">Full Name *</label>
                        <input
                          type="text"
                          required
                          value={formState.name}
                          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                          className="bg-background-custom border border-border-custom rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-primary transition-colors"
                          placeholder="Sarah Jenkins"
                        />
                      </div>
                      {/* Company */}
                      <div className="flex flex-col gap-2">
                        <label className="font-sans text-xs text-text-secondary font-medium uppercase">Company Name</label>
                        <input
                          type="text"
                          value={formState.company}
                          onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                          className="bg-background-custom border border-border-custom rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-primary transition-colors"
                          placeholder="Fintech Spark"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      {/* Email */}
                      <div className="flex flex-col gap-2">
                        <label className="font-sans text-xs text-text-secondary font-medium uppercase">Business Email *</label>
                        <input
                          type="email"
                          required
                          value={formState.email}
                          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                          className="bg-background-custom border border-border-custom rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-primary transition-colors"
                          placeholder="sarah@fintechspark.com"
                        />
                      </div>
                      {/* Phone */}
                      <div className="flex flex-col gap-2">
                        <label className="font-sans text-xs text-text-secondary font-medium uppercase">Phone Number</label>
                        <input
                          type="tel"
                          value={formState.phone}
                          onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                          className="bg-background-custom border border-border-custom rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-primary transition-colors"
                          placeholder="+1 (555) 019-2834"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      {/* Service Dropdown */}
                      <div className="flex flex-col gap-2">
                        <label className="font-sans text-xs text-text-secondary font-medium uppercase">Project Type</label>
                        <select
                          value={formState.service}
                          onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                          className="bg-background-custom border border-border-custom rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-primary transition-colors"
                        >
                          <option>Website Development</option>
                          <option>AI Digital Marketing</option>
                          <option>Search Engine Optimization</option>
                          <option>Branding & Identity</option>
                          <option>Social Media Suite</option>
                        </select>
                      </div>
                      {/* Budget Dropdown */}
                      <div className="flex flex-col gap-2">
                        <label className="font-sans text-xs text-text-secondary font-medium uppercase">Estimated Budget</label>
                        <select
                          value={formState.budget}
                          onChange={(e) => setFormState({ ...formState, budget: e.target.value })}
                          className="bg-background-custom border border-border-custom rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-primary transition-colors"
                        >
                          <option>$5,000 - $10,000</option>
                          <option>$10,000 - $25,000</option>
                          <option>$25,000 - $50,000</option>
                          <option>$50,000+</option>
                        </select>
                      </div>
                    </div>

                    {/* Details */}
                    <div className="flex flex-col gap-2">
                      <label className="font-sans text-xs text-text-secondary font-medium uppercase">Project Details *</label>
                      <textarea
                        required
                        rows={5}
                        value={formState.details}
                        onChange={(e) => setFormState({ ...formState, details: e.target.value })}
                        className="bg-background-custom border border-border-custom rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-primary transition-colors resize-none"
                        placeholder="Please describe your growth challenges, timelines, or specific specifications..."
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-primary hover:bg-secondary text-background-custom font-semibold w-full py-4 rounded-lg flex items-center justify-center gap-2.5 transition-all shadow-[0_0_15px_rgba(217,255,0,0.1)] disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Sending Brief...' : 'Send Project Brief'}
                      <Send className="h-4 w-4" />
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Right Column: Calendly Mock / Contact Info / Embedded Map */}
            <div className="lg:col-span-5 flex flex-col gap-10">
              
              {/* Calendly Integration Wrapper Mockup */}
              <div className="glass-panel p-6 rounded-2xl border-primary/10 bg-card/25 shadow-lg">
                <h3 className="font-heading font-bold text-lg text-white mb-4 flex items-center gap-2">
                  <Calendar className="h-4.5 w-4.5 text-primary" />
                  Schedule Call (Calendly Widget)
                </h3>

                {bookingConfirmed ? (
                  <div className="bg-background-custom border border-border-custom p-4 rounded-xl text-center flex flex-col items-center gap-3">
                    <CheckCircle2 className="h-7 w-7 text-primary" />
                    <span className="font-heading font-bold text-sm text-white">Call Confirmed!</span>
                    <span className="font-sans text-xs text-text-secondary">
                      Date: {selectedDate} at {selectedTime}
                    </span>
                  </div>
                ) : (
                  <div className="flex flex-col gap-4">
                    <div className="grid grid-cols-3 gap-2">
                      {['Mon 14', 'Tue 15', 'Wed 16'].map((d) => (
                        <button
                          key={d}
                          onClick={() => setSelectedDate(d)}
                          className={`font-sans text-xs py-2.5 rounded border transition-colors ${
                            selectedDate === d ? 'bg-primary border-primary text-background-custom font-bold' : 'bg-card border-border-custom text-text-secondary hover:text-white'
                          }`}
                        >
                          {d}
                        </button>
                      ))}
                    </div>

                    {selectedDate && (
                      <div className="grid grid-cols-2 gap-2 mt-2">
                        {['10:00 AM', '2:30 PM', '4:00 PM'].map((t) => (
                          <button
                            key={t}
                            onClick={() => setSelectedTime(t)}
                            className={`font-sans text-xs py-2.5 rounded border transition-colors ${
                              selectedTime === t ? 'bg-primary/20 border-primary text-primary font-bold' : 'bg-card border-border-custom text-text-secondary hover:text-white'
                            }`}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                    )}

                    <button
                      onClick={handleBooking}
                      disabled={!selectedDate || !selectedTime}
                      className="bg-card border border-border-custom text-white hover:border-primary/40 font-semibold w-full py-3 rounded-lg text-xs transition-colors mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Confirm Booking Slot
                    </button>
                  </div>
                )}
              </div>

              {/* General Contact Info */}
              <div className="flex flex-col gap-5.5 font-sans">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-card border border-border-custom flex items-center justify-center text-primary flex-shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-white text-sm">Headquarters Address</h4>
                    <p className="text-xs text-text-secondary leading-relaxed mt-1">
                      Kukatpally, Hyderabad<br />
                      Telangana, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-card border border-border-custom flex items-center justify-center text-primary flex-shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-white text-sm">Email Inquiries</h4>
                    <p className="text-xs text-text-secondary leading-relaxed mt-1">
                      growth@merutechnologies.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-card border border-border-custom flex items-center justify-center text-primary flex-shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-white text-sm">Call Support</h4>
                    <p className="text-xs text-text-secondary leading-relaxed mt-1">
                      +91 8464955103
                    </p>
                  </div>
                </div>
              </div>

              {/* Embedded Simulated Google Map */}
              <div className="h-52 w-full bg-card/40 border border-border-custom rounded-2xl overflow-hidden relative shadow-inner">
                {/* Background grid representation */}
                <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1.5px,transparent_1.5px)] bg-[size:16px_16px] flex items-center justify-center">
                  <div className="relative h-6 w-6">
                    <span className="absolute inset-0 bg-primary/20 rounded-full animate-ping" />
                    <span className="absolute inset-1.5 bg-primary rounded-full shadow-[0_0_10px_rgba(217,255,0,0.5)] border border-background-custom" />
                  </div>
                  <span className="absolute text-[10px] text-white/50 uppercase font-mono mt-10">
                    Kukatpally, Hyderabad
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </main>

      {/* Floating WhatsApp Chat Widget (Bottom Right) */}
      <a
        href="https://wa.me/918464955103"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-[#25D366] hover:bg-[#20ba5a] text-white h-14 w-14 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-105"
        aria-label="Chat on WhatsApp"
      >
        <MessageSquare className="h-6 w-6" />
      </a>

      <Footer />
    </>
  );
}
