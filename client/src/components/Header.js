import React from 'react';
import BarMenuButton from './BarMenuButton';
import Brand from './Brand';
import UserMenu from './UserMenu';
import './styles/Header.css';

const Header = props => (
  <header className="header">
    <div className="header__left">
      <BarMenuButton onClick={props.onMenuButtonClick} />
      <Brand />
    </div>
    <div className="header__right">
      <UserMenu />
    </div>
  </header>
);

export default Header;
