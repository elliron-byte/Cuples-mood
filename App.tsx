import React, { useState } from 'react';
import { CoupleData, AppState } from './types';
import { generateCoupleNames } from './services/geminiService';
import InputForm from './components/InputForm';
import ResultsGrid from './components/ResultsGrid';
import SelectionModal from './components/SelectionModal';
import BackgroundHearts from './components/BackgroundHearts';

const App: React.FC = () => {
  const [appState, setAppState] = useState<AppState>(AppState.IDLE);
  const [names, setNames] = useState<string[]>([]);
  const [inputData, setInputData] = useState<CoupleData | null>(null);
  const [selectedName, setSelectedName] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async (data: CoupleData) => {
    setAppState(AppState.LOADING);
    setError(null);
    setInputData(data);
    
    try {
      const result = await generateCoupleNames(data.yourName, data.crushName);
      setNames(result);
      setAppState(AppState.RESULTS);
    } catch (err) {
      setError("Oops! Love is complicated, and so was this request. Try again!");
      setAppState(AppState.ERROR);
    }
  };

  const handleSelect = (name: string) => {
    setSelectedName(name);
    // We keep appState as RESULTS so the background grid stays, 
    // but we open a modal on top.
  };

  const handleCloseSelection = () => {
    setSelectedName(null);
  };

  const handleReset = () => {
    setAppState(AppState.IDLE);
    setNames([]);
    setInputData(null);
    setSelectedName(null);
    setError(null);
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
      <BackgroundHearts />
      
      <header className="text-center mb-12 relative z-10">
        <h1 className="text-5xl md:text-6xl font-pacifico text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 drop-shadow-sm mb-2">
          Couple Name Mixer
        </h1>
        <p className="text-lg text-slate-600 max-w-md mx-auto font-medium">
          Discover the perfect portmanteau for you and your crush.
        </p>
      </header>

      <main className="w-full relative z-10">
        {appState === AppState.ERROR && (
           <div className="max-w-md mx-auto mb-8 p-4 bg-red-50 border border-red-200 rounded-xl text-red-600 text-center">
             {error}
             <button onClick={handleReset} className="block w-full mt-2 text-sm font-bold underline">Try Again</button>
           </div>
        )}

        {(appState === AppState.IDLE || appState === AppState.LOADING || appState === AppState.ERROR) && (
          <div className={`transition-all duration-500 ${appState === AppState.LOADING ? 'opacity-50 scale-95 pointer-events-none' : 'opacity-100'}`}>
            <InputForm onSubmit={handleGenerate} isLoading={appState === AppState.LOADING} />
          </div>
        )}

        {appState === AppState.RESULTS && (
          <ResultsGrid 
            names={names} 
            onSelect={handleSelect} 
            onReset={handleReset} 
          />
        )}
      </main>

      {selectedName && inputData && (
        <SelectionModal 
          selectedName={selectedName}
          namesPair={`${inputData.yourName} + ${inputData.crushName}`}
          onClose={handleCloseSelection}
        />
      )}
      
      <footer className="mt-auto pt-12 text-center text-slate-500 text-sm relative z-10">
        <p>Powered by Gemini AI • Made with ❤️</p>
      </footer>
    </div>
  );
};

export default App;