
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
      alert("Please enter your name first.");
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
      alert("Please complete the required fields.");
      return;
    }
    
    setIsSubmitting(true);
    // Simulate API delay for a polished feel
    await new Promise(r => setTimeout(r, 1000));
    onSuccess(formData);
    setIsSubmitting(false);
  };

  return (
    <section id="rsvp" className="bg-white py-24 px-6 border-t border-brand-beige">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="font-script text-7xl md:text-8xl mb-4 text-brand-green">rsvp</h2>
          <p className="text-xs uppercase tracking-widest text-brand-purple opacity-60">Kindly reply by April 05, 2025</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-12">
          {/* Name Field */}
          <div className="relative">
            <input
              type="text"
              required
              id="name"
              className="w-full border-b border-brand-purple border-opacity-20 py-4 focus:outline-none focus:border-opacity-100 focus:border-brand-green transition-all placeholder-transparent peer text-brand-deep"
              placeholder="Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <label 
              htmlFor="name"
              className="absolute left-0 top-4 transition-all -translate-y-8 text-[10px] uppercase tracking-widest text-brand-purple opacity-60 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-focus:-translate-y-8 peer-focus:text-[10px]"
            >
              Name *
            </label>
          </div>

          {/* Attendance Selection */}
          <div className="space-y-4">
            <button 
              type="button"
              className="flex items-center space-x-4 w-full text-left group"
              onClick={() => setFormData({ ...formData, attendance: Attendance.ACCEPT })}
            >
              <div className={`w-6 h-6 border border-brand-purple flex items-center justify-center transition-all ${formData.attendance === Attendance.ACCEPT ? 'bg-brand-green border-brand-green' : 'group-hover:bg-brand-beige'}`}>
                {formData.attendance === Attendance.ACCEPT && <div className="w-2 h-2 bg-white rounded-full"></div>}
              </div>
              <span className={`text-lg font-serif transition-colors ${formData.attendance === Attendance.ACCEPT ? 'text-brand-green' : 'text-brand-purple'}`}>Accepts with pleasure</span>
            </button>

            <button 
              type="button"
              className="flex items-center space-x-4 w-full text-left group"
              onClick={() => setFormData({ ...formData, attendance: Attendance.DECLINE })}
            >
              <div className={`w-6 h-6 border border-brand-purple flex items-center justify-center transition-all ${formData.attendance === Attendance.DECLINE ? 'bg-brand-purple' : 'group-hover:bg-brand-beige'}`}>
                {formData.attendance === Attendance.DECLINE && <div className="w-2 h-2 bg-white rounded-full"></div>}
              </div>
              <span className={`text-lg font-serif transition-colors ${formData.attendance === Attendance.DECLINE ? 'text-brand-purple' : 'text-brand-purple opacity-60'}`}>Declines with regret</span>
            </button>
          </div>

          {/* Email Field */}
          <div className="relative">
            <input
              type="email"
              id="email"
              className="w-full border-b border-brand-purple border-opacity-20 py-4 focus:outline-none focus:border-opacity-100 focus:border-brand-green transition-all placeholder-transparent peer text-brand-deep"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            <label 
              htmlFor="email"
              className="absolute left-0 top-4 transition-all -translate-y-8 text-[10px] uppercase tracking-widest text-brand-purple opacity-60 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-focus:-translate-y-8 peer-focus:text-[10px]"
            >
              Email Address
            </label>
          </div>

          {/* Entree Choice - Only visible if attending */}
          {formData.attendance === Attendance.ACCEPT && (
            <div className="pt-8 space-y-6 border-t border-brand-beige animate-fadeIn">
              <p className="text-sm italic text-brand-green">
                Please select an entree choice
              </p>
              <div className="grid grid-cols-1 gap-4">
                {[Entree.CHICKEN, Entree.BEEF, Entree.VEGETARIAN].map((option) => (
                  <button 
                    key={option}
                    type="button"
                    className={`flex items-center space-x-4 p-4 border transition-all ${formData.entree === option ? 'border-brand-green bg-brand-green bg-opacity-5' : 'border-brand-purple border-opacity-10'}`}
                    onClick={() => setFormData({ ...formData, entree: option })}
                  >
                    <div className={`w-4 h-4 rounded-full border border-brand-purple flex items-center justify-center ${formData.entree === option ? 'bg-brand-green border-brand-green' : ''}`}>
                      {formData.entree === option && <div className="w-1.5 h-1.5 bg-white rounded-full"></div>}
                    </div>
                    <span className="font-serif text-brand-deep">{option}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* AI Message Assistant */}
          <div className="space-y-4 pt-8 border-t border-brand-beige">
            <label className="text-[10px] uppercase tracking-widest text-brand-purple opacity-60">Message for the couple</label>
            <textarea
              className="w-full border border-brand-purple border-opacity-10 p-4 min-h-[120px] focus:outline-none focus:border-brand-green transition-all rounded-sm text-brand-deep bg-brand-beige bg-opacity-30 resize-none"
              placeholder="Your warm wishes..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
            <div className="flex flex-wrap gap-2">
              <button 
                type="button"
                disabled={isGenerating}
                onClick={() => handleAIHelp('heartfelt')}
                className="text-[10px] uppercase border border-brand-green border-opacity-40 text-brand-green px-4 py-2 rounded-full hover:bg-brand-green hover:text-white transition-all disabled:opacity-50"
              >
                {isGenerating ? 'Assistant Thinking...' : 'Heartfelt Suggestion'}
              </button>
              <button 
                type="button"
                disabled={isGenerating}
                onClick={() => handleAIHelp('funny')}
                className="text-[10px] uppercase border border-brand-purple border-opacity-20 text-brand-purple px-4 py-2 rounded-full hover:bg-brand-purple hover:text-white transition-all disabled:opacity-50"
              >
                {isGenerating ? 'Assistant Thinking...' : 'Funny Suggestion'}
              </button>
            </div>
          </div>

          <button 
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-brand-green text-white py-5 text-sm uppercase tracking-[0.2em] hover:bg-brand-purple transition-all font-medium shadow-xl shadow-brand-green/10 disabled:opacity-70 flex justify-center items-center"
          >
            {isSubmitting ? (
              <span className="flex items-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </span>
            ) : 'Send RSVP'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default RSVPForm;
