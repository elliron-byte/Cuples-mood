import React from 'react';

interface ResultsGridProps {
  names: string[];
  onSelect: (name: string) => void;
  onReset: () => void;
}

const ResultsGrid: React.FC<ResultsGridProps> = ({ names, onSelect, onReset }) => {
  return (
    <div className="w-full max-w-3xl mx-auto animate-fade-in-up">
      <div className="flex justify-between items-end mb-6 px-2">
        <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-1">The Results Are In!</h2>
            <p className="text-gray-600 text-sm">Click your favorite to make it official.</p>
        </div>
        <button 
            onClick={onReset}
            className="text-sm text-pink-600 hover:text-pink-700 hover:underline font-semibold transition-colors"
        >
            Try Again
        </button>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {names.map((name, index) => (
          <button
            key={index}
            onClick={() => onSelect(name)}
            className="group relative flex flex-col items-center justify-center p-6 bg-white/70 backdrop-blur-sm rounded-2xl border-2 border-transparent hover:border-pink-300 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity transform scale-50 group-hover:scale-100 duration-300">
                 <div className="bg-pink-500 text-white p-1 rounded-full shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                        <path d="M10 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
                        <path fillRule="evenodd" d="M.664 10.59a1.651 1.651 0 010-1.186A10.004 10.004 0 0110 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0110 17c-4.257 0-7.893-2.66-9.336-6.41zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                    </svg>
                 </div>
            </div>
            <span className="text-2xl font-bold text-gray-700 group-hover:text-pink-600 break-words w-full text-center font-pacifico">
              {name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ResultsGrid;