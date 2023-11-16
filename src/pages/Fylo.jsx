import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { projects } from "../../data/projects";
import fyloHero from "../../assets/images/detail/desktop/image-fylo-hero.jpg";
import fyloHeroTablet from "../../assets/images/detail/tablet/image-fylo-hero.jpg";
import fyloHeroMobile from "../../assets/images/detail/mobile/image-fylo-hero.jpg";
import staticPreview1 from "../../assets/images/detail/desktop/image-fylo-preview-1.jpg";
import staticPreviewTablet1 from "../../assets/images/detail/tablet/image-fylo-preview-1.jpg";
import staticPreviewMobile1 from "../../assets/images/detail/mobile/image-fylo-preview-1.jpg";
import staticPreview2 from "../../assets/images/detail/desktop/image-fylo-preview-2.jpg";
import staticPreviewTablet2 from "../../assets/images/detail/tablet/image-fylo-preview-2.jpg";
import staticPreviewMobile2 from "../../assets/images/detail/mobile/image-fylo-preview-2.jpg";
import arrowLeft from "../../assets/images/icons/arrow-left.svg";
import arrowRight from "../../assets/images/icons/arrow-right.svg";

export default function Fylo() {
  return (
    <main className="bg-veryLightGrey">
      <div className="max-w-[1110px] mx-auto p-4">
        <Navbar />

        <section className="my-10">
          <img src={fyloHero} alt="" className="hidden lg:block" />
          <img
            src={fyloHeroTablet}
            alt=""
            className="hidden md:block lg:hidden mx-auto"
          />
          <img src={fyloHeroMobile} alt="" className="md:hidden mx-auto" />
        </section>

        <section className="flex justify-between flex-col lg:flex-row">
          <div className="text-start">
            <div className="w-full h-[1px] bg-[#979797]/50 my-10"></div>
            <div className="md:flex justify-between items-center lg:block">
              <h1 className="font-bold text-4xl md:text-7xl lg:text-4xl text-grayishDarkBlue">
                {projects.fylo.name}
              </h1>
              <p className="w-96 text-sm md:text-base font-sans my-5 md:my-0 lg:my-10">
                {projects.fylo.excerpt}
              </p>
            </div>
            <div className="flex items-center gap-1 lg:my-5">
              <p className="text-cyan font-bold font-sans">
                {projects.fylo.roles.join(" / ")}
              </p>
            </div>
            <div className="flex items-center gap-1 my-5">
              <p className="text-cyan font-bold font-sans">
                {projects.fylo.languages.join(" / ")}
              </p>
            </div>
            <Link to="https://fylo-dark-page-land.netlify.app/" target="_blank">
              <button className="uppercase font-sans text-xs border-[1px] px-10 p-2 border-grayishDarkBlue">
                visit website
              </button>
            </Link>
            <div className="w-full h-[1px] bg-[#979797]/50 my-10"></div>
          </div>

          <div className="text-start">
            <h2 className="text-grayishDarkBlue text-3xl my-10">
              Project Background
            </h2>
            <p className="text-start lg:w-[35rem] font-sans text-grayishDarkBlue text-sm">
              This project was a front-end challenge from
              <a href="https://www.frontendmentor.io" className="ml-1">
                Frontend Mentor
              </a>
              . It’s a platform that enables you to practice building websites
              to a design and project brief. Each challenge includes mobile and
              desktop designs to show how the website should look at different
              screen sizes. Creating these projects has helped me refine my
              workflow and solve real-world coding problems. I’ve learned
              something new with each project, helping me to improve and adapt
              my style.
            </p>

            <div className="my-10">
              <h2 className="text-grayishDarkBlue text-3xl my-10">
                Static Previews
              </h2>
              <img
                src={staticPreview1}
                alt=""
                className="my-10 hidden lg:block"
              />
              <img
                src={staticPreviewMobile1}
                alt=""
                className="my-10 md:hidden mx-auto"
              />
              <img
                src={staticPreviewTablet1}
                alt=""
                className="my-10 hidden md:block lg:hidden mx-auto"
              />
              <img src={staticPreview2} alt="" className="hidden lg:block" />
              <img
                src={staticPreviewTablet2}
                alt=""
                className="hidden md:block lg:hidden mx-auto"
              />
              <img
                src={staticPreviewMobile2}
                alt=""
                className="md:hidden mx-auto"
              />
            </div>
          </div>
        </section>

        <section className="my-10 text-start">
          <div className="w-full h-[1px] bg-[#979797]/50"></div>

          <div className="flex justify-between cursor-pointer">
            <Link to="/portfolio/insure">
              <div className="flex items-center gap-4">
                <img src={arrowLeft} alt="" />
                <div>
                  <h3 className="text-grayishDarkBlue text-3xl">Insure</h3>
                  <span className="font-sans">Previous Project</span>
                </div>
              </div>
            </Link>
            <div className="w-[1px] h-20 bg-[#979797]/50"></div>
            <Link to="/portfolio/manage">
              <div className="flex items-center gap-4">
                <div className="text-end">
                  <h3 className="text-grayishDarkBlue text-3xl">Manage</h3>
                  <span className="font-sans">Next Project</span>
                </div>
                <img src={arrowRight} alt="" />
              </div>
            </Link>
          </div>
          <div className="w-full h-[1px] bg-[#979797]/50"></div>
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

        <Footer />
      </div>
    </main>
  );
}
