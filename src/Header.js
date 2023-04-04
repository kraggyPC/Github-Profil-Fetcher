import { Link } from "react-router-dom";
const Header = () => {
  return (
    <nav className=" bg-black shadow-2xl justify-between flex">
      <div className="text-2xl  text-white m-5">GitHub Profile Fetcher</div>
      <ul className="flex  m-5">
        <Link to="/">
          <li className="text-white text-xl items-center mx-5 hover:text-cyan-500 cursor-pointer">
            Home
          </li>
        </Link>
        <Link to="/about">
          <li className="text-white text-xl items-center mx-5 hover:text-cyan-500 cursor-pointer">
            About Me
          </li>
        </Link>
        <Link to="/socials">
          <li className="text-white text-xl items-center mx-5 hover:text-cyan-500 cursor-pointer">
            Socials
          </li>
        </Link>
      </ul>
    </nav>
  );
};
export default Header;
