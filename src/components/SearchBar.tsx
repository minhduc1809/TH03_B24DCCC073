import React from 'react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => {
  return (
    <div className="mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Tìm kiếm theo tên sản phẩm..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};
export default SearchBar;