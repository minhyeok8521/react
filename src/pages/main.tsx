import * as React from 'react';
import { Link } from 'react-router-dom';

export default function Main() {
  return (
    <div>
      <h3>Main</h3>
      <Link
        to={{
          pathname: './product',
          search: '?number=1',
          state: { abc: '1' },
        }}
      >
        1번 링크
      </Link>
      <Link to="./product/2">2번 링크</Link>
    </div>
  );
}
