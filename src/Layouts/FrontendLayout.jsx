import { Outlet, Link } from "react-router-dom";
import { useState } from "react";

import TeaNationLogo from "../assets/images/Navbar&Footer/TeaNationLogo.jpg";
import menu from "../assets/images/Navbar&Footer/menu.png";
import cartIcon from "../assets/images/Navbar&Footer/cart.png";
import person from "../assets/images/Navbar&Footer/person.png";

import Footer from "../components/Footer";

const FrontendLayout = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleToggle = () => setIsNavCollapsed(!isNavCollapsed);
  const closeNav = () => setIsNavCollapsed(true);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom shadow-sm py-0 fixed-top">
        <div className="container d-flex align-items-center justify-content-between">
          {/* 左側：Logo */}
          <div className="navbar-brand m-0 py-0">
            <Link to="/" onClick={closeNav}>
              <img
                src={TeaNationLogo}
                alt="Tea Nation"
                style={{ height: " 71.2px", transition: "0.3s" }}
              />
            </Link>
          </div>

          {/* 右側組合區 */}
          <div className="d-flex align-items-center gap-3 order-lg-last">
            {/* 購物車 */}
            <Link
              className="nav-link text-dark p-0 d-flex align-items-center mx-2"
              to="/cart"
              onClick={closeNav}
            >
              <img src={cartIcon} alt="cart" style={{ width: "24px" }} />
              <span className="ms-1">購物車 (0)</span>{" "}
              {/* 這邊要塞一個 購物車的數量資料，所以先用 0 充當 */}
            </Link>

            {/* 漢堡選單按鈕 */}
            <button
              className="navbar-toggler border-0 p-0"
              type="button"
              onClick={handleToggle}
              aria-expanded={!isNavCollapsed}
            >
              <img src={menu} alt="menu" style={{ width: "30px" }} />
            </button>
          </div>

          {/* 需要收納的選單內容 */}
          <div
            className={`nav-transition-wrapper ${!isNavCollapsed ? "show" : ""} navbar-collapse justify-content-center`}
          >
            <div className="nav-transition-inner w-100">
              <div className="d-lg-flex justify-content-between align-items-center w-100 py-3 py-lg-0">
                {/* 中間：導覽連結 */}
                <ul className="navbar-nav mx-auto gap-lg-4 text-center">
                  <li className="nav-item">
                    <Link className="nav-link" to="/aboutUs" onClick={closeNav}>
                      關於品牌
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/knowledge" onClick={closeNav}>
                      讀茶知識
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/productsTeaCan" onClick={closeNav}>
                      品茶
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/productsGiftBox" onClick={closeNav}>
                      禮盒
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/productsTeaSet" onClick={closeNav}>
                      茶具
                    </Link>
                  </li>
                </ul>

                {/* 右側：登入註冊 */}
                <div className="d-lg-block d-none">
                  <Link
                    className="nav-link text-dark p-0 d-flex align-items-center"
                    to="/login"
                    onClick={closeNav}
                  >
                    <img
                      src={person}
                      alt="login"
                      className="me-1"
                      style={{ width: "20px" }}
                    />
                    登入 / 註冊
                  </Link>
                </div>

                {/* 手機版展開後顯示的登入連結 */}
                <div className="d-lg-none text-center mt-3 border-top pt-3">
                  <Link
                    className="nav-link text-dark"
                    to="/login"
                    onClick={closeNav}
                  >
                    登入 / 註冊
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main style={{ paddingTop: "72px" }}>
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default FrontendLayout;
