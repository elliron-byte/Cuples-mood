import React from 'react';

interface SelectionModalProps {
  selectedName: string;
  namesPair: string;
  onClose: () => void;
}

const SelectionModal: React.FC<SelectionModalProps> = ({ selectedName, namesPair, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full text-center animate-bounce-in transform border-4 border-pink-100">
        
        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
            <div className="bg-gradient-to-br from-pink-500 to-red-500 text-white p-4 rounded-full shadow-xl border-4 border-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
                    <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                </svg>
            </div>
        </div>

        <div className="mt-8">
            <h3 className="text-gray-400 uppercase tracking-wider text-xs font-bold mb-2">The Perfect Match</h3>
            <h2 className="text-5xl font-pacifico text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 mb-4 drop-shadow-sm p-2">
            {selectedName}
            </h2>
            <div className="inline-block bg-pink-50 px-4 py-2 rounded-lg text-pink-800 font-medium text-sm mb-8">
            {namesPair}
            </div>

            <button 
            onClick={onClose}
            className="w-full py-3 bg-gray-900 text-white rounded-xl font-bold shadow-lg hover:bg-gray-800 transition-colors"
            >
            Love it!
            </button>
        </div>
      </div>
    </div>
  );
};

export default SelectionModal;