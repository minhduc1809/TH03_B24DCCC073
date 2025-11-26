import React from 'react';
import { Product } from '../types';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
  onDelete: (id: number) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onDelete }) => {
  return (
    <div className="product-card">
      <span className="product-badge">{product.danhMuc}</span>
      <h3 className="product-name">{product.ten}</h3>
      <div className="product-price">
        {product.gia.toLocaleString('vi-VN')} VND
      </div>
      <div className="product-qty">Kho: {product.soLuong}</div>
      <p className="product-desc">{product.moTa}</p>
      
      <div className="product-actions">
        <Link 
          to={`/products/${product.id}`} 
          className="btn-action btn-detail text-center text-decoration-none"
        >
          Chi tiết
        </Link>
        <Link 
          to={`/edit/${product.id}`} 
          className="btn-action btn-edit text-center text-decoration-none"
        >
          Sửa
        </Link>
        <button 
          onClick={() => onDelete(product.id)} 
          className="btn-action btn-delete"
        >
          Xóa
        </button>
      </div>
    </div>
  );
};
export default ProductCard;