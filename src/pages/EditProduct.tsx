import React from 'react';
import { useParams } from 'react-router-dom';
import ProductForm from '../components/ProductForm';
import { useProduct } from '../context/ProductContext';

const EditProduct: React.FC = () => {
  const { id } = useParams();
  const { products, dispatch } = useProduct();
  const product = products.find(p => p.id === Number(id));

  if (!product) return <div>Không tìm thấy sản phẩm</div>;

  return (
    <ProductForm 
      title="Cập nhật sản phẩm" 
      initialData={product}
      onSubmit={(p) => dispatch({ type: 'UPDATE_PRODUCT', payload: p })} 
    />
  );
};
export default EditProduct;