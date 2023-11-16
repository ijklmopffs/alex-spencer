import { Link } from "react-router-dom";
import github from "../../assets/images/icons/github.svg";
import linkedin from "../../assets/images/icons/linkedin.svg";
import twitter from "../../assets/images/icons/twitter.svg";
import logo from "../../assets/images/logo-light.svg";

export default function Footer() {
  return (
    <footer className="text-white bg-grayishDarkBlue">
      <div className="max-w-[1110px] mx-auto p-4 flex flex-col md:flex-row items-center justify-between">
        <div className="flex flex-col md:flex-row items-center gap-5 md:gap-10">
          <div>
            <img src={logo} alt="" />
          </div>
          <div className="uppercase flex flex-col md:flex-row gap-4 items-center font-sans text-xs">
            <Link to="/">Home</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/contact">Contact me</Link>
          </div>
        </div>
        <div className="flex items-center gap-4 mt-5 md:mt-0">
          <img src={github} alt="" className="w-6 h-6" />
          <img src={twitter} alt="" className="w-6 h-6" />
          <img src={linkedin} alt="" className="w-6 h-6" />
        </div>
      </div>
    </footer>
  );
}
