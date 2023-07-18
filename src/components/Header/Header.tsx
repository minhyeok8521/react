import * as React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="header">
      <strong>헤더입니다.</strong>
      <div className="headerMenu">
        <Link to="/" className="homeBtn">
          홈
        </Link>
      </div>
    </div>
  );
}
