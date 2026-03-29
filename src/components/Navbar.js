import React from "react";

function Navbar({ setSearch, darkMode, setDarkMode, onMenuClick }) {
  return (
    <div className="navbar">
      {/* LEFT: MENU + LOGO */}
      <div className="logo-menu">
        <button className="menu-btn" onClick={onMenuClick}>
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24">
            <path d="M3 6h18v2H3zm0 5h18v2H3zm0 5h18v2H3z"></path>
          </svg>
        </button>
        <div className="logo">
          <img
            className="logo-img"
            src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png"
            srcSet="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png 1x, https://www.gstatic.com/images/branding/product/2x/keep_2020q4_48dp.png 2x"
            alt="Keep Logo"
            style={{ width: "40px", height: "40px" }}
          />
          <span>Keep</span>
        </div>
      </div>

      {/* SEARCH */}
      <div className="search-box">
        <svg width="20" height="20" viewBox="0 0 24 24">
          <path
            fill="#5f6368"
            d="M15.5 14h-.79l-.28-.27A6.5 6.5 0 1014 15.5l.27.28v.79L20 21.49 21.49 20l-5.99-6zM10 15a5 5 0 110-10 5 5 0 010 10z"
          />
        </svg>
        <input
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* DARK MODE TOGGLE */}
      <button className="icon-btn" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? (
          <svg width="22" height="22" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.8 1.42-1.42zM1 13h3v-2H1v2zm10-9h2V1h-2v3zm7.66 2.05l1.79-1.8-1.41-1.41-1.8 1.79 1.42 1.42zM17 13h3v-2h-3v2zm-5 9h2v-3h-2v3zm7.24-2.84l1.8 1.79 1.41-1.41-1.79-1.8-1.42 1.42zM4.22 19.78l-1.79 1.8 1.41 1.41 1.8-1.79-1.42-1.42zM12 6a6 6 0 100 12 6 6 0 000-12z"
            />
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M12 2a10 10 0 100 20c2.21 0 4.26-.72 5.92-1.94a8 8 0 01-9.98-9.98A9.96 9.96 0 0012 2z"
            />
          </svg>
        )}
      </button>
    </div>
  );
}

export default Navbar;