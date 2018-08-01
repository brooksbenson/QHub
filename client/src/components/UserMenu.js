import React, { Component } from 'react';
import UserO from './svg/UserO';
import './styles/UserMenu.css';

class UserMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.onMenuIconClick = this.onMenuIconClick.bind(this);
  }
  onMenuIconClick() {
    this.setState(({ isOpen }) => ({
      isOpen: !isOpen
    }));
  }
  render() {
    const { isOpen } = this.state;
    return (
      <div
        onClick={this.onMenuIconClick}
        className={`user-menu ${isOpen ? 'user-menu--active' : ''}`}
      >
        <UserO className="user-menu__icon" />
        {this.state.isOpen && (
          <ul className="user-menu__menu">
            <li className="user-menu__message"> Hello, Brooks </li>
            <li className="user-menu__option">
              <a>Logout</a>
            </li>
          </ul>
        )}
      </div>
    );
  }
}

export default UserMenu;
