
import React, { useState } from 'react';
import { Attendance, Entree, RSVPData } from '../types';
import { generateWeddingMessage } from '../geminiService';

interface RSVPFormProps {
  onSuccess: (data: RSVPData) => void;
}

const RSVPForm: React.FC<RSVPFormProps> = ({ onSuccess }) => {
  const [formData, setFormData] = useState<RSVPData>({
    name: '',
    email: '',
    attendance: null,
    entree: null,
    message: ''
  });
  const [isGenerating, setIsGenerating] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleAIHelp = async (tone: 'funny' | 'heartfelt' | 'formal') => {
    if (!formData.name.trim()) {
      alert("Please provide your name, so the assistant may properly address the couple.");
      return;
    }
    setIsGenerating(true);
    const msg = await generateWeddingMessage(formData.name, tone);
    setFormData(prev => ({ ...prev, message: msg }));
    setIsGenerating(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.attendance) {
      alert("The social season demands a complete reply. Please fill in the required fields.");
      return;
    }
    
    setIsSubmitting(true);
    // Mimic the time it takes to seal an envelope
    await new Promise(r => setTimeout(r, 1500));
    onSuccess(formData);
    setIsSubmitting(false);
  };

  return (
    <section id="rsvp" className="bg-white py-32 px-6 relative overflow-hidden">
      {/* Decorative Ornate Borders */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-purple/10 to-transparent"></div>
      
      <div className="max-w-md mx-auto relative">
        <div className="text-center mb-20 animate-fadeIn">
          <div className="flex justify-center mb-6 opacity-20">
            <svg width="40" height="20" viewBox="0 0 40 20" className="text-brand-purple">
              <path fill="none" stroke="currentColor" strokeWidth="1" d="M0,10 Q10,0 20,10 T40,10" />
            </svg>
          </div>
          <h2 className="font-script text-7xl md:text-8xl mb-4 text-brand-green drop-shadow-sm">rsvp</h2>
          <p className="text-[10px] uppercase tracking-[0.4em] text-brand-purple opacity-60 font-serif italic">The favour of your reply is requested by April 05</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-16">
          {/* Name Field */}
          <div className="relative group">
            <input
              type="text"
              required
              id="name"
              className="w-full border-b border-brand-purple border-opacity-10 py-5 focus:outline-none focus:border-opacity-100 focus:border-brand-green transition-all bg-transparent placeholder-transparent peer text-brand-deep font-serif text-lg"
              placeholder="Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <label 
              htmlFor="name"
              className="absolute left-0 top-5 transition-all -translate-y-8 text-[10px] uppercase tracking-widest text-brand-purple opacity-60 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-focus:-translate-y-8 peer-focus:text-[10px] font-serif"
            >
              Your Name *
            </label>
          </div>

          {/* Attendance Selection */}
          <div className="space-y-6">
            <button 
              type="button"
              className="flex items-center space-x-6 w-full text-left group"
              onClick={() => setFormData({ ...formData, attendance: Attendance.ACCEPT })}
            >
              <div className={`w-8 h-8 rounded-full border border-brand-purple border-opacity-20 flex items-center justify-center transition-all ${formData.attendance === Attendance.ACCEPT ? 'bg-brand-green border-brand-green ring-4 ring-brand-green/5' : 'group-hover:bg-brand-beige'}`}>
                {formData.attendance === Attendance.ACCEPT && <div className="w-2.5 h-2.5 bg-white rounded-full"></div>}
              </div>
              <span className={`text-xl font-serif italic transition-colors ${formData.attendance === Attendance.ACCEPT ? 'text-brand-green' : 'text-brand-purple'}`}>Accepts with pleasure</span>
            </button>

            <button 
              type="button"
              className="flex items-center space-x-6 w-full text-left group"
              onClick={() => setFormData({ ...formData, attendance: Attendance.DECLINE })}
            >
              <div className={`w-8 h-8 rounded-full border border-brand-purple border-opacity-20 flex items-center justify-center transition-all ${formData.attendance === Attendance.DECLINE ? 'bg-brand-purple border-brand-purple ring-4 ring-brand-purple/5' : 'group-hover:bg-brand-beige'}`}>
                {formData.attendance === Attendance.DECLINE && <div className="w-2.5 h-2.5 bg-white rounded-full"></div>}
              </div>
              <span className={`text-xl font-serif italic transition-colors ${formData.attendance === Attendance.DECLINE ? 'text-brand-purple' : 'text-brand-purple opacity-40'}`}>Declines with regret</span>
            </button>
          </div>

          {/* Email Field */}
          <div className="relative">
            <input
              type="email"
              id="email"
              className="w-full border-b border-brand-purple border-opacity-10 py-5 focus:outline-none focus:border-opacity-100 focus:border-brand-green transition-all bg-transparent placeholder-transparent peer text-brand-deep font-serif"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            <label 
              htmlFor="email"
              className="absolute left-0 top-5 transition-all -translate-y-8 text-[10px] uppercase tracking-widest text-brand-purple opacity-60 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-focus:-translate-y-8 peer-focus:text-[10px] font-serif"
            >
              Email Address
            </label>
          </div>

          {/* Entree Choice */}
          {formData.attendance === Attendance.ACCEPT && (
            <div className="pt-10 space-y-8 border-t border-brand-beige animate-reveal">
              <p className="text-sm font-serif italic text-brand-green text-center">
                Select your preferred delicacy
              </p>
              <div className="grid grid-cols-1 gap-4">
                {[Entree.CHICKEN, Entree.BEEF, Entree.VEGETARIAN].map((option) => (
                  <button 
                    key={option}
                    type="button"
                    className={`flex items-center justify-between px-6 py-5 border rounded-full transition-all ${formData.entree === option ? 'border-brand-green bg-brand-green/5 shadow-inner' : 'border-brand-purple border-opacity-5 hover:border-opacity-20'}`}
                    onClick={() => setFormData({ ...formData, entree: option })}
                  >
                    <span className="font-serif text-brand-deep text-lg">{option}</span>
                    <div className={`w-5 h-5 rounded-full border border-brand-purple flex items-center justify-center ${formData.entree === option ? 'bg-brand-green border-brand-green' : 'opacity-20'}`}>
                      {formData.entree === option && <div className="w-1.5 h-1.5 bg-white rounded-full"></div>}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* AI Message Assistant */}
          <div className="space-y-6 pt-10 border-t border-brand-beige">
            <label className="text-[10px] uppercase tracking-[0.3em] text-brand-purple opacity-50 font-serif text-center block w-full">Correspondence</label>
            <div className="relative">
              <textarea
                className="w-full border-0 border-b border-brand-purple border-opacity-5 p-4 min-h-[140px] focus:outline-none focus:border-brand-green focus:border-opacity-50 transition-all text-brand-deep bg-brand-beige/20 resize-none font-serif italic text-lg leading-relaxed placeholder:text-brand-purple/20"
                placeholder="A witticism or well-wish for the couple..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
              <div className="absolute bottom-2 right-2 opacity-5">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              <button 
                type="button"
                disabled={isGenerating}
                onClick={() => handleAIHelp('heartfelt')}
                className="text-[9px] uppercase tracking-widest font-serif border border-brand-green border-opacity-30 text-brand-green px-6 py-2.5 rounded-full hover:bg-brand-green hover:text-white transition-all disabled:opacity-50 shadow-sm"
              >
                {isGenerating ? 'Dipping quill...' : 'Heartfelt Correspondence'}
              </button>
              <button 
                type="button"
                disabled={isGenerating}
                onClick={() => handleAIHelp('funny')}
                className="text-[9px] uppercase tracking-widest font-serif border border-brand-purple border-opacity-20 text-brand-purple px-6 py-2.5 rounded-full hover:bg-brand-purple hover:text-white transition-all disabled:opacity-50 shadow-sm"
              >
                {isGenerating ? 'Dipping quill...' : 'Witty Correspondence'}
              </button>
            </div>
          </div>

          <button 
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-brand-purple text-brand-beige py-6 text-[10px] uppercase tracking-[0.4em] hover:bg-brand-deep transition-all font-serif shadow-2xl shadow-brand-purple/20 disabled:opacity-80 flex justify-center items-center rounded-sm"
          >
            {isSubmitting ? (
              <span className="flex items-center italic lowercase font-serif text-lg tracking-normal">
                Sealing the envelope...
              </span>
            ) : 'Send Reply'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default RSVPForm;
