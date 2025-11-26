import React, { useState } from 'react';
import { useProduct } from '../context/ProductContext';
import { Link } from 'react-router-dom';
import { Category } from '../types/index';

import SearchBar from '../components/SearchBar';
import FilterBar from '../components/FilterBar';
import ProductList from '../components/ProductList';
import Pagination from '../components/Pagination';

const HomePage: React.FC = () => {
  const { products, dispatch } = useProduct();

  const [search, setSearch] = useState('');
  const [category, setCategory] = useState<Category | ''>('');
  const [minPrice, setMinPrice] = useState<number | ''>('');
  const [maxPrice, setMaxPrice] = useState<number | ''>('');

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; 

  const filteredProducts = products.filter(p => {
    const matchName = p.ten.toLowerCase().includes(search.toLowerCase());
    const matchCat = category ? p.danhMuc === category : true;
    const matchMin = minPrice !== '' ? p.gia >= minPrice : true;
    const matchMax = maxPrice !== '' ? p.gia <= maxPrice : true;
    return matchName && matchCat && matchMin && matchMax;
  });

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);


  const handleDelete = (id: number) => {
    if (window.confirm('Bạn có chắc muốn xóa sản phẩm này?')) { 
      dispatch({ type: 'DELETE_PRODUCT', payload: id });
    }
  };

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="h3">Quản lý sản phẩm</h1>
        <Link to="/add" className="btn btn-primary">
          + Thêm mới
        </Link>
      </div>

      <div className="card p-3 mb-4 bg-light border-0">
        <SearchBar value={search} onChange={setSearch} />
        <FilterBar 
          category={category} setCategory={setCategory}
          minPrice={minPrice} setMinPrice={setMinPrice}
          maxPrice={maxPrice} setMaxPrice={setMaxPrice}
        />
      </div>

      <div className="mb-2 text-muted fst-italic">
        Hiển thị {currentProducts.length} / {filteredProducts.length} kết quả
      </div>

      <ProductList products={currentProducts} onDelete={handleDelete} />
      
      <Pagination 
        currentPage={currentPage} 
        totalPages={totalPages} 
        onPageChange={setCurrentPage} 
      />
    </div>
  );
};

export default HomePage;