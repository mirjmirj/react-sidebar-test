import { useState } from 'react';
import * as Icons from './assets/Icons';
import avatar from './assets/avatar.png';
import './Sidebar.scss';

function Sidebar() {
  const [isShrinkView, setIsShrinkView] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleSidebarView = () => {
    setIsShrinkView(!isShrinkView);
  };

  const handleThemeChange = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark");
  };

  return (
    <div className={`sidebar-container${isShrinkView ? " shrink" : ""}`}>
      <button
        className="sidebar-viewButton"
        type="button"
        aria-label={isShrinkView ? "Expand Sidebar" : "Shrink Sidebar"}
        title={isShrinkView ? "Expand" : "Shrink"}
        onClick={handleSidebarView}
      >
        <Icons.LeftArrow />
      </button>
      <div className="sidebar-wrapper">
        <div className="sidebar-themeContainer">
          <label
            htmlFor="theme-toggle"
            className={`sidebar-themeLabel${isDarkMode ? " switched" : ""}`}
          >
            <input
              className="sidebar-themeInput"
              type="checkbox"
              id="theme-toggle"
              onChange={handleThemeChange}
            />
            <div className="sidebar-themeType light">
              <Icons.Light />
              <span className="sidebar-themeInputText">Light</span>
            </div>
            <div className="sidebar-themeType dark">
              <Icons.Dark />
              <span className="sidebar-themeInputText">Dark</span>
            </div>
          </label>
        </div>
        <ul className="sidebar-list">
          <li className="sidebar-listItem active">
            <a>
              <Icons.Dashboard />
              <span className="sidebar-listItemText">Dashboard</span>
            </a>
          </li>
          <li className="sidebar-listItem">
            <a>
              <Icons.Inbox />
              <span className="sidebar-listItemText">Inbox</span>
            </a>
          </li>
          <li className="sidebar-listItem">
            <a>
              <Icons.Calendar />
              <span className="sidebar-listItemText">Calendar</span>
            </a>
          </li>
          <li className="sidebar-listItem">
            <a>
              <Icons.Activity />
              <span className="sidebar-listItemText">Activity</span>
            </a>
          </li>
          <li className="sidebar-listItem">
            <a>
              <Icons.Settings />
              <span className="sidebar-listItemText">Settings</span>
            </a>
          </li>
        </ul>
        <div className="sidebar-profileSection">
          <img
            src={avatar}
            width="40"
            height="40"
            alt="Mitch Thompson"
          />
          <span>Mitch Thompson</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
