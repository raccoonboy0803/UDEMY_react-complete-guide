import { Link } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';

const HomePage = () => {
  return (
    <>
      <h1>My Home Page!!!</h1>
      <p>
        Go to <Link to="/products">the list of products</Link>
      </p>
      <p>test test</p>
    </>
  );
};
export default HomePage;