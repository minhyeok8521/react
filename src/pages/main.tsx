import * as React from 'react';
import { Link } from 'react-router-dom';

export default function Main() {
  return (
    <div>
      <h3>Main</h3>
      <Link to="./product/1">1번 링크</Link>
      <Link to="./product/2">2번 링크</Link>
    </div>
  );
}
