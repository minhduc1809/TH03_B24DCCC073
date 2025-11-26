import React from 'react';
import { Product } from '../types/index';
import ProductCard from './ProductCard';

interface ProductListProps {
  products: Product[];
  onDelete: (id: number) => void;
}

const ProductList: React.FC<ProductListProps> = ({ products, onDelete }) => {
  if (products.length === 0) {
    return <div className="text-center mt-5">Không tìm thấy sản phẩm nào.</div>;
  }

  return (
    <div className="row">
      {products.map((product) => (
        <ProductCard 
          key={product.id} 
          product={product} 
          onDelete={onDelete} 
        />
      ))}
    </div>
  );
};
export default ProductList;