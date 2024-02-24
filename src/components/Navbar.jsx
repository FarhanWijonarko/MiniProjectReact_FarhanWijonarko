import './Carosel.css';
const Navbar = () => {
  return (
    <div className="navbar">
      <h1 className="logo">MarvelStudio</h1>
      <ul className="menu">
        <li className="list">
          <a className="active" href="/">
            Home
          </a>
          <a href="">About</a>
        </li>
      </ul>
      <button className="button">Login</button>
    </div>
  );
};
export default Navbar;
