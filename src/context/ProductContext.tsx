import React, { createContext, useContext, useReducer } from 'react';
import type { ReactNode } from 'react';

import type { Product } from '../types';
import { initialProducts } from '../types';

import { productReducer } from './ProductReducer';
import type { Action } from './ProductReducer';

interface ProductContextType {
  products: Product[];
  dispatch: React.Dispatch<Action>;
}
const ProductContext = createContext<ProductContextType | undefined>(undefined);
export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [products, dispatch] = useReducer(productReducer, initialProducts);

  return (
    <ProductContext.Provider value={{ products, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => {
  const context = useContext(ProductContext);
  if (!context) throw new Error('useProduct must be used within a ProductProvider');
  return context;
};