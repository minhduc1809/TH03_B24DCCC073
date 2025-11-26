import React from 'react';
import ProductForm from '../components/ProductForm';
import { useProduct } from '../context/ProductContext';

const AddProduct: React.FC = () => {
  const { dispatch } = useProduct();
  return (
    <ProductForm 
      title="Thêm sản phẩm mới" 
      onSubmit={(p) => dispatch({ type: 'ADD_PRODUCT', payload: p })} 
    />
  );
};
export default AddProduct;