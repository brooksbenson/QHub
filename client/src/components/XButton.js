import React from 'react';
import './styles/XButton.css';

const XButton = ({ onClick }) => (
  <div className="x-btn" onClick={onClick}>
    <span className="x-btn__element" />
  </div>
);

export default XButton;
