import * as React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="header">
      <Link to="/" className="backBtn">
        뒤로가기
      </Link>
      <div className="haderTextBox">
        <strong>헤더입니다.</strong>
      </div>
      <Link to="/" className="homeBtn">
        메뉴
      </Link>
    </div>
  );
}
