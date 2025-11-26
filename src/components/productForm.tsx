import React, { useState, useEffect } from 'react';
import { Product, Category } from '../types';
import { useNavigate } from 'react-router-dom';

interface Props {
  initialData?: Product;
  onSubmit: (product: Product) => void;
  title: string;
}

const ProductForm: React.FC<Props> = ({ initialData, onSubmit, title }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<Omit<Product, 'id'>>({
    ten: '',
    danhMuc: 'Khác',
    gia: 0,
    soLuong: 0,
    moTa: '',
  });
  const [error, setError] = useState('');

  useEffect(() => {
    if (initialData) setFormData(initialData);
  }, [initialData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.ten.length < 3) return setError('Tên sản phẩm phải từ 3 ký tự trở lên');
    if (formData.gia <= 0) return setError('Giá phải là số dương');
    if (formData.soLuong <= 0) return setError('Số lượng phải là số nguyên dương');

    onSubmit({ ...formData, id: initialData ? initialData.id : Date.now() });
    navigate('/');
  };

  const inputStyle = {
    width: '100%',
    padding: '12px 15px',
    border: '2px solid #e2e8f0',
    borderRadius: '10px',
    fontSize: '1em',
    transition: 'all 0.3s ease',
    fontFamily: 'inherit',
  } as React.CSSProperties;

  const selectStyle = {
    ...inputStyle,
  };

  const textareaStyle = {
    ...inputStyle,
    fontFamily: 'inherit',
    resize: 'vertical',
    minHeight: '120px',
  } as React.CSSProperties;

  const buttonStyle = {
    padding: '12px 30px',
    border: 'none',
    borderRadius: '10px',
    fontSize: '1em',
    cursor: 'pointer',
    fontWeight: 600,
    transition: 'all 0.3s ease',
  } as React.CSSProperties;

  const submitButtonStyle = {
    ...buttonStyle,
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)',
  } as React.CSSProperties;

  const cancelButtonStyle = {
    ...buttonStyle,
    background: '#cbd5e0',
    color: '#2d3748',
  } as React.CSSProperties;

  return (
    <div>
      <div className="header">
        <h1> {title}</h1>
      </div>

      <div className="container">
        <div className="card-container">
          {error && (
            <div
              style={{
                background: '#fed7d7',
                color: '#c53030',
                padding: '12px 16px',
                borderRadius: '8px',
                marginBottom: '20px',
                borderLeft: '4px solid #c53030',
              }}
            >
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
                Tên sản phẩm
              </label>
              <input
                type="text"
                value={formData.ten}
                onChange={(e) => setFormData({ ...formData, ten: e.target.value })}
                style={inputStyle}
                required
              />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
                Danh mục
              </label>
              <select
                value={formData.danhMuc}
                onChange={(e) =>
                  setFormData({ ...formData, danhMuc: e.target.value as Category })
                }
                style={selectStyle}
              >
                <option value="Điện tử">Điện tử</option>
                <option value="Quần áo">Quần áo</option>
                <option value="Đồ ăn">Đồ ăn</option>
                <option value="Sách">Sách</option>
                <option value="Khác">Khác</option>
              </select>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
                  Giá (VND)
                </label>
                <input
                  type="number"
                  value={formData.gia}
                  onChange={(e) =>
                    setFormData({ ...formData, gia: Number(e.target.value) })
                  }
                  style={inputStyle}
                  required
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
                  Số lượng
                </label>
                <input
                  type="number"
                  value={formData.soLuong}
                  onChange={(e) =>
                    setFormData({ ...formData, soLuong: Number(e.target.value) })
                  }
                  style={inputStyle}
                  required
                />
              </div>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
                Mô tả
              </label>
              <textarea
                value={formData.moTa}
                onChange={(e) => setFormData({ ...formData, moTa: e.target.value })}
                style={textareaStyle}
              />
            </div>

            <div style={{ display: 'flex', gap: '12px' }}>
              <button type="submit" style={submitButtonStyle} onMouseOver={(e) => {
                (e.target as HTMLElement).style.transform = 'translateY(-2px)';
                (e.target as HTMLElement).style.boxShadow = '0 6px 20px rgba(102, 126, 234, 0.6)';
              }} onMouseOut={(e) => {
                (e.target as HTMLElement).style.transform = 'translateY(0)';
                (e.target as HTMLElement).style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.4)';
              }}>
                 Lưu sản phẩm
              </button>
              <button
                type="button"
                onClick={() => navigate('/')}
                style={cancelButtonStyle}
              >
                 Hủy
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductForm;