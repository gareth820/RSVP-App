
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

  const handleAIHelp = async (tone: 'funny' | 'heartfelt' | 'formal') => {
    if (!formData.name) {
      alert("Please enter your name first so the AI can sign your message!");
      return;
    }
    setIsGenerating(true);
    const msg = await generateWeddingMessage(formData.name, tone);
    setFormData(prev => ({ ...prev, message: msg }));
    setIsGenerating(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.attendance) {
      alert("Please fill in the required fields.");
      return;
    }
    onSuccess(formData);
  };

  return (
    <section id="rsvp" className="bg-white py-24 px-6 border-t border-beige">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-script text-7xl md:text-8xl mb-4 text-green">rsvp</h2>
          <p className="text-xs uppercase tracking-widest text-purple opacity-60">Kindly reply by April 05</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-12">
          {/* Name Field */}
          <div className="relative group">
            <input
              type="text"
              required
              className="w-full border-b border-purple border-opacity-30 py-4 focus:outline-none focus:border-opacity-100 focus:border-green transition-colors placeholder-transparent peer text-purple"
              placeholder="Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <label className="absolute left-0 top-4 transition-all -translate-y-8 text-[10px] uppercase tracking-widest text-purple opacity-60 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-focus:-translate-y-8 peer-focus:text-[10px]">
              Name *
            </label>
          </div>

          {/* Attendance Selection */}
          <div className="space-y-4">
            <div 
              className="flex items-center space-x-4 cursor-pointer group"
              onClick={() => setFormData({ ...formData, attendance: Attendance.ACCEPT })}
            >
              <div className={`w-5 h-5 border border-purple flex items-center justify-center transition-all ${formData.attendance === Attendance.ACCEPT ? 'bg-green border-green' : 'group-hover:bg-beige'}`}>
                {formData.attendance === Attendance.ACCEPT && <div className="w-2 h-2 bg-white rounded-full"></div>}
              </div>
              <span className={`text-lg font-serif ${formData.attendance === Attendance.ACCEPT ? 'text-green' : 'text-purple'}`}>Accepts with pleasure</span>
            </div>

            <div 
              className="flex items-center space-x-4 cursor-pointer group"
              onClick={() => setFormData({ ...formData, attendance: Attendance.DECLINE })}
            >
              <div className={`w-5 h-5 border border-purple flex items-center justify-center transition-all ${formData.attendance === Attendance.DECLINE ? 'bg-purple border-purple' : 'group-hover:bg-beige'}`}>
                {formData.attendance === Attendance.DECLINE && <div className="w-2 h-2 bg-white rounded-full"></div>}
              </div>
              <span className={`text-lg font-serif ${formData.attendance === Attendance.DECLINE ? 'text-purple' : 'text-purple opacity-60'}`}>Declines with regret</span>
            </div>
          </div>

          {/* Email Field */}
          <div className="relative group">
            <input
              type="email"
              className="w-full border-b border-purple border-opacity-30 py-4 focus:outline-none focus:border-opacity-100 focus:border-green transition-colors placeholder-transparent peer text-purple"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            <label className="absolute left-0 top-4 transition-all -translate-y-8 text-[10px] uppercase tracking-widest text-purple opacity-60 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-focus:-translate-y-8 peer-focus:text-[10px]">
              Email
            </label>
          </div>

          {/* Entree Choice */}
          {formData.attendance === Attendance.ACCEPT && (
            <div className="pt-8 space-y-6 border-t border-beige animate-fadeIn">
              <p className="text-sm italic text-green leading-relaxed">
                Please initial choice of entree for each guest
              </p>
              <div className="space-y-4">
                {[Entree.CHICKEN, Entree.BEEF, Entree.VEGETARIAN].map((option) => (
                  <div 
                    key={option}
                    className="flex items-center space-x-4 cursor-pointer"
                    onClick={() => setFormData({ ...formData, entree: option })}
                  >
                    <div className={`w-5 h-5 border border-purple flex items-center justify-center transition-all ${formData.entree === option ? 'bg-purple' : ''}`}>
                      {formData.entree === option && <div className="w-1.5 h-1.5 bg-white rounded-full"></div>}
                    </div>
                    <span className={`font-serif ${formData.entree === option ? 'text-purple' : 'text-purple opacity-70'}`}>{option}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* AI Message Assistant */}
          <div className="space-y-4 pt-8 border-t border-beige">
            <label className="text-[10px] uppercase tracking-widest text-purple opacity-60">A note for the couple</label>
            <textarea
              className="w-full border border-purple border-opacity-10 p-4 min-h-[120px] focus:outline-none focus:border-green transition-colors rounded-sm text-purple bg-beige bg-opacity-30"
              placeholder="Share a wish or special message..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
            <div className="flex flex-wrap gap-2">
              <button 
                type="button"
                disabled={isGenerating}
                onClick={() => handleAIHelp('funny')}
                className="text-[10px] uppercase border border-purple border-opacity-20 text-purple px-4 py-1.5 rounded-full hover:bg-purple hover:text-white transition-all disabled:opacity-50"
              >
                {isGenerating ? 'Writing...' : 'Funny AI Wish'}
              </button>
              <button 
                type="button"
                disabled={isGenerating}
                onClick={() => handleAIHelp('heartfelt')}
                className="text-[10px] uppercase border border-green border-opacity-40 text-green px-4 py-1.5 rounded-full hover:bg-green hover:text-white transition-all disabled:opacity-50"
              >
                {isGenerating ? 'Writing...' : 'Heartfelt AI Wish'}
              </button>
            </div>
          </div>

          <button 
            type="submit"
            className="w-full bg-green text-white py-5 text-sm uppercase tracking-[0.2em] hover:bg-purple transition-all font-medium shadow-lg shadow-green/10"
          >
            Submit RSVP
          </button>
        </form>
      </div>
    </section>
  );
};

export default RSVPForm;
