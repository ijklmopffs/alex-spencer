import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import hamburger from "../../assets/images/icons/hamburger.svg";
import close from "../../assets/images/icons/close.svg";
import { useState } from "react";

export default function Navbar() {
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <nav className="max-w-[1111px] mx-auto p-4 flex items-center justify-between">
      <div>
        <img src={logo} alt="" />
      </div>
      <div
        className={
          nav
            ? "uppercase flex flex-col md:flex-row gap-4 items-center font-sans text-xs absolute md:static right-10 top-20 z-10 bg-grayishDarkBlue md:bg-transparent text-white md:text-black p-8 md:p-0"
            : "uppercase flex flex-col md:flex-row gap-4 items-center font-sans text-xs absolute md:static right-10 top-[-100%] z-10 bg-grayishDarkBlue md:bg-transparent text-white md:text-black p-8 md:p-0"
        }
      >
        <Link to="/">Home</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/contact">Contact me</Link>
      </div>
      <div className="md:hidden" onClick={handleClick}>
        {nav ? <img src={close} alt="" /> : <img src={hamburger} alt="" />}
      </div>
    </nav>
  );
}
