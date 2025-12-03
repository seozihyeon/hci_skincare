import React from 'react';
import { Product } from '../types';
import { ExternalLinkIcon } from './icons/ExternalLinkIcon';
import { Language } from '../App';
import { translations } from '../lib/translations';

interface ProductCardProps {
  product: Product;
  language: Language;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, language }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col h-full transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
      <div className="relative">
        <img 
          src={product.imageUrl} 
          alt={product.productName[language]} 
          className="w-full h-48 object-cover" 
          onError={(e) => { e.currentTarget.src = 'https://picsum.photos/300/300' }}
        />
        <div className="absolute top-2 right-2 bg-pink-600 text-white text-xs font-bold px-3 py-1 rounded-full">
          ~{product.price.toLocaleString()} KRW
        </div>
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wide">{product.brand[language]}</h3>
        <h4 className="text-md font-semibold text-gray-800 flex-grow mt-1">{product.productName[language]}</h4>
        {product.keyIngredients && product.keyIngredients.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-2">
            {product.keyIngredients.map((ingredient, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full border border-gray-300"
              >
                {ingredient[language]}
              </span>
            ))}
          </div>
        )}
        <div className="mt-3 bg-pink-50 text-pink-800 p-3 rounded-lg text-sm border-l-4 border-pink-200">
          <p className="font-semibold">{translations.productCardReason[language]}:</p>
          <p>{product.explanation[language]}</p>
        </div>
      </div>
      <div className="p-4 pt-0 mt-auto">
        <a
          href={product.productUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center bg-gray-800 text-white font-semibold py-2 px-4 rounded-lg hover:bg-gray-900 transition-colors duration-200"
        >
          {translations.productCardLink[language]}
          <ExternalLinkIcon className="w-4 h-4 ml-2" />
        </a>
      </div>
    </div>
  );
};