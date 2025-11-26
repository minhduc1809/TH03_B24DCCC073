import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useProduct } from '../context/ProductContext';

const ProductDetail: React.FC = () => {
  const { id } = useParams();
  const { products } = useProduct();
  const product = products.find(p => p.id === Number(id));

  if (!product)
    return (
      <div className="empty-state" style={{ marginTop: '100px' }}>
        <div className="empty-state-icon"></div>
        <p>Sản phẩm không tồn tại</p>
        <Link to="/" className="btn-add" style={{ marginTop: '20px', width: 'fit-content' }}>
           Quay lại trang chủ
        </Link>
      </div>
    );

  return (
    <div>
      <div className="header">
        <h1> Chi tiết sản phẩm</h1>
      </div>

      <div className="container">
        <div className="card-container">
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <div style={{ marginBottom: '30px' }}>
              <span className="product-badge">{product.danhMuc}</span>
              <h2 style={{ fontSize: '2em', marginTop: '15px', marginBottom: '10px' }}>
                {product.ten}
              </h2>
              <div style={{ fontSize: '1.2em', color: '#a0aec0' }}>
                #{product.id}
              </div>
            </div>

            <div
              style={{
                background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
                padding: '25px',
                borderRadius: '15px',
                marginBottom: '30px',
              }}
            >
              <div style={{ marginBottom: '20px' }}>
                <span style={{ color: '#718096', fontWeight: 600 }}>💰 Giá:</span>
                <div style={{ fontSize: '1.8em', color: '#667eea', fontWeight: 700, marginTop: '5px' }}>
                  {product.gia.toLocaleString('vi-VN')} VND
                </div>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <span style={{ color: '#718096', fontWeight: 600 }}>📦 Số lượng kho:</span>
                <div style={{ fontSize: '1.3em', color: '#2d3748', fontWeight: 700, marginTop: '5px' }}>
                  {product.soLuong} sản phẩm
                </div>
              </div>

              <div>
                <span style={{ color: '#718096', fontWeight: 600 }}>📝 Mô tả:</span>
                <div style={{ fontSize: '1em', color: '#4a5568', marginTop: '5px', lineHeight: '1.6' }}>
                  {product.moTa}
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
              <Link
                to={`/edit/${product.id}`}
                className="btn-add"
                style={{ textDecoration: 'none' }}
              >
                 Chỉnh sửa
              </Link>
              <Link
                to="/"
                className="btn-add"
                style={{
                  textDecoration: 'none',
                  background: '#cbd5e0',
                  color: '#2d3748',
                }}
              >
                 Quay lại
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;