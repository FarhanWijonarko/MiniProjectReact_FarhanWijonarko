import Carosel from '../components/Carosel';
import Navbar from '../components/Navbar';
import '../components/Carosel.css';
import Film from '../components/Film.jsx';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Carosel />
      <Film />
    </div>
  );
};
export default Home;
