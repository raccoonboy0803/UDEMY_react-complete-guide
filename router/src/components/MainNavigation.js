import { NavLink, Link } from 'react-router-dom';
import styled from './MainNavigation.module.css';

const MainNavigation = () => {
  return (
    <header className={styled.header}>
      <nav>
        <ul className={styled.list}>
          <li>
            {/* <Link to="/">Home</Link> */}
            <NavLink
              to="/"
              className={({ isAcitve }) =>
                isAcitve ? styled.active : undefined
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            {/* <Link to="/products">Products</Link> */}
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive ? styled.active : undefined
              }
            >
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default MainNavigation;
