import React from 'react';
import  { Product } from '../types';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
  onDelete: (id: number) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onDelete }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow-sm">
        <div className="card-body">
          <h5 className="card-title text-primary">{product.ten}</h5>
          <span className="badge bg-secondary mb-2">{product.danhMuc}</span>
          <h6 className="card-subtitle mb-2 mt-2 text-danger fw-bold">
            {product.gia.toLocaleString()} VND
          </h6>
          <p className="card-text small text-muted">Số lượng: {product.soLuong}</p>
          <p className="card-text text-truncate">{product.moTa}</p>
          
          <div className="d-flex justify-content-between mt-3">
            <Link to={`/products/${product.id}`} className="btn btn-info btn-sm text-white">
              Chi tiết
            </Link>
            <div>
              <Link to={`/edit/${product.id}`} className="btn btn-info btn-sm text-white">
                Sửa
              </Link>
              <button 
                onClick={() => onDelete(product.id)} 
                className="btn btn-info btn-sm text-white"
              >
                Xóa
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;