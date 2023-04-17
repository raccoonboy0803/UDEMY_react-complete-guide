import { Link } from 'react-router-dom';
import styled from './MainNavigation.module.css';

const MainNavigation = () => {
  return (
    <header className={styled.header}>
      <nav>
        <ul className={styled.list}>
          <li>
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
          </li>
          <li>commit test</li>
        </ul>
      </nav>
    </header>
  );
};
export default MainNavigation;
