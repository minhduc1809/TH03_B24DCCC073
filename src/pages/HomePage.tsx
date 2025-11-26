import React, { useState } from 'react';
import { useProduct } from '../context/ProductContext';
import { Link } from 'react-router-dom';
import { Category } from '../types';
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
    <div>
      <div className="header">
        <h1> Quản lý sản phẩm</h1>
        <p>Hệ thống quản lý sản phẩm hiện đại</p>
      </div>

      <div className="container">
        <div className="card-container">
          <div className="toolbar">
            <h2> Kho hàng</h2>
            <Link to="/add" className="btn-add">
              + Thêm sản phẩm mới
            </Link>
          </div>

          <div className="search-filter">
            <div className="search-box">
              <SearchBar value={search} onChange={setSearch} />
            </div>
            <FilterBar
              category={category}
              setCategory={setCategory}
              minPrice={minPrice}
              setMinPrice={setMinPrice}
              maxPrice={maxPrice}
              setMaxPrice={setMaxPrice}
            />
          </div>
          <div className="info-bar">
              Hiển thị {currentProducts.length} / {filteredProducts.length} kết quả
          </div>

          {currentProducts.length > 0 ? (
            <>
              <ProductList products={currentProducts} onDelete={handleDelete} />
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            </>
          ) : (
            <div className="empty-state">
              <div className="empty-state-icon">📭</div>
              <p>Không tìm thấy sản phẩm nào.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;