import { Outlet, Link } from "react-router";

const FrontendLayout = () => {
  return (
    <>
      <header>
        <nav className='navbar navbar-expand-lg bg-body-tertiary'>
          <div className='container-fluid'>
            <a className='navbar-brand' href='#'>
              Navbar
            </a>
            <div className='collapse navbar-collapse' id='navbarSupportedContent'>
              <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                <li className='nav-item'>
                  <Link className='nav-link' to='/'>
                    首頁
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to='/about'>
                    關於我
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to='/tea'>
                    茶
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to='/cart'>
                    購物車
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <main>
        {/* 東西應該在這邊 */}
        <Outlet />
      </main>
      <footer>
        <h1>footer</h1>
      </footer>
    </>
  );
};
export default FrontendLayout;
