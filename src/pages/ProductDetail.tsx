import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useProduct } from '../context/ProductContext';

const ProductDetail: React.FC = () => {
  const { id } = useParams();
  const { products } = useProduct();
  const product = products.find(p => p.id === Number(id));

  if (!product) return <div className="container mt-4">Sản phẩm không tồn tại</div>;

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header">Chi tiết sản phẩm #{product.id}</div>
        <div className="card-body">
          <h3 className="card-title">{product.ten}</h3>
          <p><strong>Danh mục:</strong> {product.danhMuc}</p>
          <p><strong>Giá:</strong> {product.gia.toLocaleString()} VND</p>
          <p><strong>Số lượng kho:</strong> {product.soLuong}</p>
          <p><strong>Mô tả:</strong> {product.moTa}</p>
          <Link to="/" className="btn btn-secondary">Quay lại</Link>
        </div>
      </div>
    </div>
  );
};
export default ProductDetail;