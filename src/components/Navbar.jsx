import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import logo from '../assets/logo.svg';

function Navbar() {
  const location = useLocation();
  const { pathname } = location;

  return (
    <header className="flex justify-between items-center flex-wrap sm:flex-nowrap bg-vaki-primary text-white p-4 text-xl sm:text-2xl">
      <div>
        <Link className="hover:underline" to="/">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Vaki Logo" />
            <span>Vaki</span>
          </div>
        </Link>
      </div>
      <div className="flex mt-3 sm:mt-0 order-last sm:order-none justify-between sm:justify-normal w-full sm:w-fit gap-8">
        <NavbarLink pathname={pathname} text="Friends" path="/friends" />
        <NavbarLink pathname={pathname} text="Expenses" path="/expenses" />
        <NavbarLink pathname={pathname} text="Groups" path="/groups" />
      </div>
      <NavbarLink pathname={pathname} text="My Account" path="/my-account" hideOnMobile />
    </header>
  );
}

function NavbarLink({ pathname, path, text, hideOnMobile }) {
  return (
    <Link className="hover:underline relative flex justify-center" to={path}>
      {text}
      {pathname === path && <TriangleUp hideOnMobile={hideOnMobile} />}
    </Link>
  );
}

NavbarLink.propTypes = {
  pathname: PropTypes.string,
  path: PropTypes.string,
  text: PropTypes.string,
  hideOnMobile: PropTypes.bool,
};

function TriangleUp({ hideOnMobile }) {
  return (
    <div
      className={`w-0 h-0 absolute bottom-[-16px] sm:bottom-[-18px] ${hideOnMobile ? 'hidden sm:block' : ''}
    border-l-[8px] border-l-transparent
    border-b-[8px] border-b-white
    border-r-[8px] border-r-transparent`}
    ></div>
  );
}

TriangleUp.propTypes = {
  hideOnMobile: PropTypes.bool,
};

export default Navbar;
