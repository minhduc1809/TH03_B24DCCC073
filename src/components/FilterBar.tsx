import React from 'react';
import { Category } from '../types/index';

interface FilterBarProps {
  category: Category | '';
  setCategory: (cat: Category | '') => void;
  minPrice: number | '';
  setMinPrice: (val: number | '') => void;
  maxPrice: number | '';
  setMaxPrice: (val: number | '') => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ 
  category, setCategory, minPrice, setMinPrice, maxPrice, setMaxPrice 
}) => {
  return (
    <div className="filters">
      <div className="filter-item">
        <select 
          value={category} 
          onChange={(e) => setCategory(e.target.value as Category | '')}
        >
          <option value="">Tất cả danh mục</option>
          <option value="Điện tử">Điện tử</option>
          <option value="Quần áo">Quần áo</option>
          <option value="Đồ ăn">Đồ ăn</option>
          <option value="Sách">Sách</option>
          <option value="Khác">Khác</option>
        </select>
      </div>
      <div className="filter-item">
        <input 
          type="number" 
          placeholder="Giá thấp nhất" 
          value={minPrice} 
          onChange={(e) => setMinPrice(e.target.value ? Number(e.target.value) : '')} 
        />
      </div>
      <div className="filter-item">
        <input 
          type="number" 
          placeholder="Giá cao nhất" 
          value={maxPrice} 
          onChange={(e) => setMaxPrice(e.target.value ? Number(e.target.value) : '')} 
        />
      </div>
    </div>
  );
};
export default FilterBar;