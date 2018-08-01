import React from 'react';
import './styles/BarMenuButton.css';

const BarMenuButton = props => (
  <button onClick={props.onClick} className="bar-menu-btn">
    <span className="bar-menu-btn__bars" />
  </button>
);

export default BarMenuButton;
