export type Category = 'Điện tử' | 'Quần áo' | 'Đồ ăn' | 'Sách' | 'Khác';

export interface Product {
  id: number;
  ten: string;
  danhMuc: Category;
  gia: number;
  soLuong: number;
  moTa: string;
}

export const initialProducts: Product[] = [
  { id: 1, ten: 'iPhone 15 Pro', danhMuc: 'Điện tử', gia: 25000000, soLuong: 10, moTa: 'Flagship mới nhất của Apple' },
  { id: 2, ten: 'Áo Thun Nam', danhMuc: 'Quần áo', gia: 150000, soLuong: 50, moTa: 'Áo cotton thoáng mát' },
  { id: 3, ten: 'MacBook Air M2', danhMuc: 'Điện tử', gia: 28000000, soLuong: 5, moTa: 'Laptop mỏng nhẹ' },
  { id: 4, ten: 'Giày Sneaker', danhMuc: 'Quần áo', gia: 800000, soLuong: 20, moTa: 'Giày thể thao năng động' },
  { id: 5, ten: 'Tiểu thuyết Harry Potter', danhMuc: 'Sách', gia: 200000, soLuong: 30, moTa: 'Bộ truyện kinh điển' },
  { id: 6, ten: 'Tai nghe Sony', danhMuc: 'Điện tử', gia: 3000000, soLuong: 15, moTa: 'Chống ồn chủ động' },
  { id: 7, ten: 'Bánh Pizza Đông Lạnh', danhMuc: 'Đồ ăn', gia: 120000, soLuong: 40, moTa: 'Tiện lợi, ngon miệng' },
  { id: 8, ten: 'Quần Jeans', danhMuc: 'Quần áo', gia: 500000, soLuong: 25, moTa: 'Vải denim bền bỉ' },
  { id: 9, ten: 'Chuột Logitech', danhMuc: 'Điện tử', gia: 600000, soLuong: 35, moTa: 'Chuột không dây' },
  { id: 10, ten: 'Sách Dạy Nấu Ăn', danhMuc: 'Sách', gia: 150000, soLuong: 10, moTa: 'Công thức món Việt' },
  { id: 11, ten: 'Samsung Galaxy S24', danhMuc: 'Điện tử', gia: 20000000, soLuong: 8, moTa: 'Điện thoại AI' },
];