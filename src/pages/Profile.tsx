import * as React from 'react';
import UserProfile from '../components/Menu1/UserProfile';

export default function Profile(name) {
  const userName = '';
  return (
    <div>
      회원정보
      <UserProfile userName={name} />
    </div>
  );
}
