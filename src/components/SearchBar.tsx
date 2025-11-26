import React from 'react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => {
  return (
    <input
      type="text"
      placeholder="Tìm kiếm theo tên sản phẩm..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={{ width: '100%' }} 
    />
  );
};
export default SearchBar;