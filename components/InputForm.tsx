import React, { useState } from 'react';
import { CoupleData } from '../types';

interface InputFormProps {
  onSubmit: (data: CoupleData) => void;
  isLoading: boolean;
}

const InputForm: React.FC<InputFormProps> = ({ onSubmit, isLoading }) => {
  const [yourName, setYourName] = useState('');
  const [crushName, setCrushName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (yourName.trim() && crushName.trim()) {
      onSubmit({ yourName, crushName });
    }
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white/60 backdrop-blur-xl p-8 rounded-3xl shadow-xl border border-white/50">
      <div className="text-center mb-8">
        <div className="inline-block p-3 rounded-full bg-pink-100 text-pink-500 mb-4 shadow-inner">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-800">Start Mixing!</h2>
        <p className="text-gray-500">Enter two names to find your perfect match.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="yourName" className="block text-sm font-medium text-gray-700 pl-1">
            Your Name
          </label>
          <input
            type="text"
            id="yourName"
            value={yourName}
            onChange={(e) => setYourName(e.target.value)}
            placeholder="e.g. Taylor"
            className="w-full px-4 py-3 rounded-xl bg-white border-2 border-pink-100 focus:border-pink-400 focus:ring focus:ring-pink-200 focus:ring-opacity-50 transition-all outline-none text-gray-800 placeholder-gray-400"
            required
            disabled={isLoading}
          />
        </div>

        <div className="space-y-2 relative">
            <div className="absolute left-1/2 -top-3 transform -translate-x-1/2 bg-white/80 rounded-full p-1 text-pink-400">
                <span className="text-xs font-bold">+</span>
            </div>
          <label htmlFor="crushName" className="block text-sm font-medium text-gray-700 pl-1">
            Partner / Crush's Name
          </label>
          <input
            type="text"
            id="crushName"
            value={crushName}
            onChange={(e) => setCrushName(e.target.value)}
            placeholder="e.g. Travis"
            className="w-full px-4 py-3 rounded-xl bg-white border-2 border-pink-100 focus:border-pink-400 focus:ring focus:ring-pink-200 focus:ring-opacity-50 transition-all outline-none text-gray-800 placeholder-gray-400"
            required
            disabled={isLoading}
          />
        </div>

        <button
          type="submit"
          disabled={isLoading || !yourName.trim() || !crushName.trim()}
          className={`w-full py-4 rounded-xl text-white font-bold text-lg shadow-lg transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2
            ${isLoading 
              ? 'bg-gray-400 cursor-not-allowed' 
              : 'bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 hover:shadow-pink-500/30'
            }`}
        >
          {isLoading ? (
            <>
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span>Mixing Love Potion...</span>
            </>
          ) : (
            <>
              <span>Generate Names</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path d="M9.653 16.915l-.005-.003-.019-.01a20.759 20.759 0 01-1.16-1.1 6.11 6.11 0 01-2.252-3.15C5.632 11.045 5.25 9.746 5.25 8.692c0-2.399 1.93-4.226 4.21-4.345 1.252-.065 2.372.476 3.18 1.344.808-.868 1.928-1.41 3.18-1.345 2.28.12 4.21 1.947 4.21 4.345 0 1.054-.381 2.353-.971 3.96a6.111 6.111 0 01-2.252 3.15 20.758 20.758 0 01-1.16 1.1l-.019.01-.005.003-.002.001a.613.613 0 01-.579 0l-.002-.001z" />
              </svg>
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default InputForm;