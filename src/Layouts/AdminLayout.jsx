import { useState } from "react";
import { Outlet, Link } from "react-router-dom";

import TeaNationLogo from "../assets/images/Navbar&Footer/TeaNationLogo.jpg";
import menu from "../assets/images/Navbar&Footer/menu.png";

const AdminLayout = () => {
  // 控制漢堡選單開關狀態
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  // 切換選單
  const handleToggle = () => setIsNavCollapsed(!isNavCollapsed);

  // 關閉選單（點擊連結或 Logo 時觸發）
  const closeNav = () => setIsNavCollapsed(true);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom shadow-sm py-0 fixed-top">
        <div className="container">
          {/* 左側：Logo */}
          <div className="navbar-brand m-0 py-0">
            <Link to="/" onClick={closeNav}>
              <img
                src={TeaNationLogo}
                alt="Tea Nation"
                style={{ height: "80px", transition: "0.3s" }}
              />
            </Link>
          </div>

          {/* 漢堡選單按鈕 */}
          <button
            className="navbar-toggler"
            type="button"
            onClick={handleToggle}
            aria-expanded={!isNavCollapsed}
          >
            <img src={menu} alt="" />
          </button>

          {/* 內容區塊：漢堡選單 */}
          <div
            className={`nav-transition-wrapper ${!isNavCollapsed ? "show" : ""} navbar-collapse`}
          >
            <div className="nav-transition-inner w-100">
              <div className="d-lg-flex justify-content-between align-items-center w-100 py-3 py-lg-0">
                {/* 中間：導覽連結 */}
                <ul className="navbar-nav mx-auto gap-lg-4">
                  <li className="nav-item">
                    <Link className="nav-link" to="products" onClick={closeNav}>
                      管理產品
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="orders" onClick={closeNav}>
                      管理訂單
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="admin-main">
        <div className="container">
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default AdminLayout;
