import React from 'react';
import { Link } from 'react-router-dom';
import ConversationIcon from './svg/ConversationIcon';
import './styles/Brand.css';

const Brand = () => (
  <Link to="/dashboard">
    <div className="brand">
      <ConversationIcon className="brand__icon" />
      <h1 className="brand__text">QHub</h1>
    </div>
  </Link>
);

export default Brand;
