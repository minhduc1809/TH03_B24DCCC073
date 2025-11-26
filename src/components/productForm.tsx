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

  return (
    <div>
      <div className="header">
        <h1>{title}</h1>
      </div>

      <div className="container">
        <div className="card-container">
          {error && (
            <div className="alert-error">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Tên sản phẩm</label>
              <input
                type="text"
                className="form-control"
                value={formData.ten}
                onChange={(e) => setFormData({ ...formData, ten: e.target.value })}
                placeholder="Nhập tên sản phẩm"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Danh mục</label>
              <select
                className="form-control"
                value={formData.danhMuc}
                onChange={(e) => setFormData({ ...formData, danhMuc: e.target.value as Category })}
              >
                <option value="Điện tử">Điện tử</option>
                <option value="Quần áo">Quần áo</option>
                <option value="Đồ ăn">Đồ ăn</option>
                <option value="Sách">Sách</option>
                <option value="Khác">Khác</option>
              </select>
            </div>

            <div className="form-grid">
              <div className="form-group">
                <label className="form-label">Giá (VND)</label>
                <input
                  type="number"
                  className="form-control"
                  value={formData.gia}
                  onChange={(e) => setFormData({ ...formData, gia: Number(e.target.value) })}
                  placeholder="0"
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Số lượng</label>
                <input
                  type="number"
                  className="form-control"
                  value={formData.soLuong}
                  onChange={(e) => setFormData({ ...formData, soLuong: Number(e.target.value) })}
                  placeholder="0"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Mô tả</label>
              <textarea
                className="form-control"
                value={formData.moTa}
                onChange={(e) => setFormData({ ...formData, moTa: e.target.value })}
                placeholder="Nhập mô tả sản phẩm..."
              />
            </div>

            <div className="form-actions">
              <button type="submit" className="btn-submit">
                 Lưu sản phẩm
              </button>
              <button type="button" onClick={() => navigate('/')} className="btn-cancel">
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