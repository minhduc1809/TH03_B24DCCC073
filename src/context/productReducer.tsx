import type { Product } from '../types';
export type Action =
  | { type: 'ADD_PRODUCT'; payload: Product }
  | { type: 'UPDATE_PRODUCT'; payload: Product }
  | { type: 'DELETE_PRODUCT'; payload: number };

export const productReducer = (state: Product[], action: Action): Product[] => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return [...state, action.payload];
    case 'UPDATE_PRODUCT':
      return state.map((p) => (p.id === action.payload.id ? action.payload : p));
    case 'DELETE_PRODUCT':
      return state.filter((p) => p.id !== action.payload);
    default:
      return state;
  }
};