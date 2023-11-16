import { Link } from "react-router-dom";
// import { Link } from "react-scroll";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import hero from "../../assets/images/homepage/desktop/image-homepage-hero.jpg";
import heroMobile from "../../assets/images/homepage/mobile/image-homepage-hero.jpg";
import profile from "../../assets/images/homepage/desktop/image-homepage-profile.jpg";
import downArrows from "../../assets/images/icons/down-arrows.svg";

export default function Home() {
  return (
    <main className="bg-veryLightGrey">
      <div className="max-w-[1111px] mx-auto">
        <Navbar />

        <section className="my-10 relative p-4 flex flex-col md:block">
          <img
            src={hero}
            alt="a screenshot of my project"
            className="hidden md:block"
          />
          <img
            src={heroMobile}
            alt="a screenshot of my project"
            className="md:hidden"
          />
          <div className="bg-veryLightGrey md:absolute bottom-0 left-0 p-4">
            <h1 className="font-bold text-4xl md:text-5xl text-grayishDarkBlue md:w-96 text-start my-10">
              Hey, I’m Alex Spencer and I love building beautiful websites
            </h1>
            <button className="flex items-center uppercase gap-2 focus:outline-none bg-darkBlue pl-0 px-10 justify-between text-white">
              <img src={downArrows} alt="" className="bg-[#000000]/10 p-2" />
              <p className="pl-10">about me</p>
            </button>
          </div>
        </section>

        <section className="flex flex-col md:flex-row items-center md:items-start gap-20 my-20 p-4">
          <div>
            <img src={profile} alt="" />
          </div>
          <div className="text-start">
            <div className="w-full h-[1px] bg-[#979797]/50"></div>
            <h2 className="font-bold text-4xl my-10">About Me</h2>
            <p className="md:w-[265px] font-sans my-10">
              I’m a junior front-end developer looking for a new role in an
              exciting company. I focus on writing accessible HTML, using modern
              CSS practices and writing clean JavaScript. When writing
              JavaScript code, I mostly use React, but I can adapt to whatever
              tools are required. I’m based in London, UK, but I’m happy working
              remotely and have experience in remote teams. When I’m not coding,
              you’ll find me outdoors. I love being out in nature whether that’s
              going for a walk, run or cycling. I’d love you to check out my
              work.
            </p>
            <Link to="/portfolio">
              <button className="uppercase font-sans text-xs border-[1px] px-10 p-2 border-grayishDarkBlue">
                go to portfolio
              </button>
            </Link>
            <div className="w-full h-[1px] bg-[#979797]/50 my-10"></div>
          </div>
        </section>

        <section className="flex flex-col md:flex-row items-center gap-10 my-10 p-4">
          <div className="md:text-start font-bold text-4xl w-80">
            <h2>Interested in doing a project together?</h2>
          </div>
          <div className="w-2/4 h-[1px] bg-[#979797]/50 hidden md:block"></div>
          <div>
            <Link to="/contact">
              <button className="uppercase font-sans text-xs border-[1px] px-10 p-2 border-grayishDarkBlue">
                contact me
              </button>
            </Link>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
