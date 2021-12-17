import React from 'react';
import user from '../../assets/img/user-icon.svg';

const UserMenu = () => (
  <div className="user-menu">
    <em>
      <img src={ user } alt="" />
    </em>
    <span>Username</span>
    
  </div>
);

export default UserMenu;
