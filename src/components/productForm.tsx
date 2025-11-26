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
    ten: '', danhMuc: 'Khác', gia: 0, soLuong: 0, moTa: ''
  });
  const [error, setError] = useState('');

  useEffect(() => {
    if (initialData) setFormData(initialData);
  }, [initialData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validation [cite: 50-53]
    if (formData.ten.length < 3) return setError('Tên sản phẩm phải từ 3 ký tự trở lên');
    if (formData.gia <= 0) return setError('Giá phải là số dương');
    if (formData.soLuong <= 0) return setError('Số lượng phải là số nguyên dương');

    onSubmit({ ...formData, id: initialData ? initialData.id : Date.now() });
    navigate('/');
  };
  return (
    <div className="container mt-4">
      <h2>{title}</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit} className="card p-4">
        <div className="mb-3">
          <label className="form-label">Tên sản phẩm</label>
          <input type="text" className="form-control" value={formData.ten} 
            onChange={e => setFormData({...formData, ten: e.target.value})} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Danh mục</label>
          <select className="form-select" value={formData.danhMuc} 
            onChange={e => setFormData({...formData, danhMuc: e.target.value as Category})}>
            <option value="Điện tử">Điện tử</option>
            <option value="Quần áo">Quần áo</option>
            <option value="Đồ ăn">Đồ ăn</option>
            <option value="Sách">Sách</option>
            <option value="Khác">Khác</option>
          </select>
        </div>
        <div className="row">
          <div className="col-md-6 mb-3">
            <label className="form-label">Giá</label>
            <input type="number" className="form-control" value={formData.gia} 
              onChange={e => setFormData({...formData, gia: Number(e.target.value)})} required />
          </div>
          <div className="col-md-6 mb-3">
            <label className="form-label">Số lượng</label>
            <input type="number" className="form-control" value={formData.soLuong} 
              onChange={e => setFormData({...formData, soLuong: Number(e.target.value)})} required />
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Mô tả</label>
          <textarea className="form-control" value={formData.moTa} 
            onChange={e => setFormData({...formData, moTa: e.target.value})}></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Lưu sản phẩm</button>
        <button type="button" className="btn btn-secondary ms-2" onClick={() => navigate('/')}>Hủy</button>
      </form>
    </div>
  );
};
export default ProductForm;