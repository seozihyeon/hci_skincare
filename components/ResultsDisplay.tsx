import React, { useState, useEffect } from 'react';
import { Product } from '../types';
import { ProductCard } from './ProductCard';
import { Loader } from './Loader';
import { translations } from '../lib/translations';
import { Language } from '../App';

interface ResultsDisplayProps {
  isLoading: boolean;
  error: string | null;
  recommendations: Product[] | null;
  language: Language;
}

const InitialState: React.FC<{language: Language}> = ({ language }) => (
  <div className="text-center py-16 px-6 bg-white rounded-2xl shadow-md">
    <div className="text-5xl mb-4">✨</div>
    <h3 className="text-2xl font-bold text-pink-800 font-display">{translations.initialStateTitle[language]}</h3>
    <p className="text-gray-600 mt-2 max-w-md mx-auto">{translations.initialStateDescription[language]}</p>
  </div>
);

export const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ isLoading, error, recommendations, language }) => {
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isLoading) {
      setElapsedTime(0);
      interval = setInterval(() => {
        setElapsedTime(prev => prev + 1);
      }, 1000);
    } else {
      setElapsedTime(0);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isLoading]);

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    if (mins > 0) {
      return `${mins}${language === 'ko' ? '분' : 'm'} ${secs}${language === 'ko' ? '초' : 's'}`;
    }
    return `${secs}${language === 'ko' ? '초' : 's'}`;
  };

  if (isLoading) {
    return (
        <div className="text-center py-16">
            <Loader />
            <p className="text-lg text-pink-700 mt-4">{translations.loadingMessage[language]}</p>
            <p className="text-sm text-gray-500 mt-2 font-mono">
              {elapsedTime > 0 && `${formatTime(elapsedTime)} ${translations.loadingElapsed[language]}`}
            </p>
        </div>
    );
  }

  if (error) {
    return (
        <div className="text-center py-16 px-6 bg-red-50 border-l-4 border-red-400 rounded-lg shadow-md">
             <div className="text-5xl mb-4">😥</div>
            <h3 className="text-2xl font-bold text-red-800 font-display">{translations.errorTitle[language]}</h3>
            <p className="text-red-700 mt-2">{error}</p>
        </div>
    );
  }

  if (!recommendations) {
    return <InitialState language={language} />;
  }
  
  if (recommendations.length === 0) {
     return (
        <div className="text-center py-16 px-6 bg-white rounded-2xl shadow-md">
            <div className="text-5xl mb-4">🧐</div>
            <h3 className="text-2xl font-bold text-pink-800 font-display">{translations.noProductsTitle[language]}</h3>
            <p className="text-gray-600 mt-2 max-w-md mx-auto">{translations.noProductsDescription[language]}</p>
        </div>
    );
  }

  return (
    <div>
      <h2 className="text-3xl font-bold text-center text-pink-800 mb-8 font-display">{translations.resultsTitle[language]}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {recommendations.map((product, index) => (
          <ProductCard key={`${product.productName.en}-${index}`} product={product} language={language} />
        ))}
      </div>
    </div>
  );
};
