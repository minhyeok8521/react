import * as React from 'react';
import { useLocation } from 'react-router-dom';

export default function Product() {
  const location = useLocation();
  const product = location.state.productNumber;
  return (
    <>
      <h3>상품 페이지입니다.</h3>
      <span>{product}</span>
    </>
  );
}
