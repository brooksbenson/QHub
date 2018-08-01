import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import UserO from './svg/UserO';
import PaperPlaneO from './svg/PaperPlaneO';
import './styles/Sidebar.css';

class Sidebar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { open } = this.props;
    return (
      <nav className={`sidebar ${open ? '' : 'sidebar--closed'}`}>
        <ul className="sidebar__list">
          <Link to="/questions">
            <li className="sidebar__item">
              <div className="sidebar__item-content">
                <div className="sidebar__item-top">
                  <UserO className="sidebar__icon" />
                  <div className="sidebar__number-wrapper">
                    <span className="sidebar__number">3</span>
                  </div>
                </div>
                <div className="sidebar__item-bottom">Your Questions</div>
              </div>
            </li>
          </Link>
          <Link to="/answers">
            <li className="sidebar__item">
              <div className="sidebar__item-content">
                <div className="sidebar__item-top">
                  <PaperPlaneO className="sidebar__icon" />
                  <span className="sidebar__number">2</span>
                </div>
                <div className="sidebar__item-bottom">Your Answers</div>
              </div>
            </li>
          </Link>
        </ul>
      </nav>
    );
  }
}

export default Sidebar;
