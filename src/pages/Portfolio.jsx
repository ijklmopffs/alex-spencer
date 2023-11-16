import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { projects } from "../../data/projects";
import manage from "../../assets/images/portfolio/desktop/image-portfolio-manage.jpg";
import manageTablet from "../../assets/images/portfolio/tablet/image-portfolio-manage.jpg";
import manageMobile from "../../assets/images/portfolio/mobile/image-portfolio-manage.jpg";
import bookmark from "../../assets/images/portfolio/desktop/image-portfolio-bookmark.jpg";
import bookmarkTablet from "../../assets/images/portfolio/tablet/image-portfolio-bookmark.jpg";
import bookmarkMobile from "../../assets/images/portfolio/mobile/image-portfolio-bookmark.jpg";
import fylo from "../../assets/images/portfolio/desktop/image-portfolio-fylo.jpg";
import fyloTablet from "../../assets/images/portfolio/tablet/image-portfolio-fylo.jpg";
import fyloMobile from "../../assets/images/portfolio/mobile/image-portfolio-fylo.jpg";
import insure from "../../assets/images/portfolio/desktop/image-portfolio-insure.jpg";
import insureTablet from "../../assets/images/portfolio/tablet/image-portfolio-insure.jpg";
import insureMobile from "../../assets/images/portfolio/mobile/image-portfolio-insure.jpg";

export default function Portfolio() {
  return (
    <main className="bg-veryLightGrey">
      <div className="max-w-[1110px] mx-auto">
        <Navbar />

        <section className="flex flex-col md:flex-row my-10 md:gap-20 justify-center lg:justify-between p-4 items-center lg:items-start">
          <div>
            <img src={manage} alt="" className="hidden lg:block" />
            <img
              src={manageTablet}
              alt=""
              className="hidden md:block lg:hidden"
            />
            <img src={manageMobile} alt="" className="md:hidden" />
          </div>

          <div className="text-start">
            <div className="w-full h-[1px] bg-[#979797]/50 my-20"></div>
            <h1 className="font-bold text-4xl text-grayishDarkBlue">
              {projects.manage.name}
            </h1>
            <p className="w-64 font-sans my-10">{projects.manage.excerpt}</p>
            <Link to="/portfolio/manage">
              <button className="uppercase font-sans text-xs border-[1px] px-10 p-2 border-grayishDarkBlue">
                view project
              </button>
            </Link>
            <div className="w-full h-[1px] bg-[#979797]/50 my-10"></div>
          </div>
        </section>

        <section className="flex flex-col-reverse md:flex-row justify-center lg:justify-between my-10 p-4 md:gap-20 items-center lg:items-start">
          <div className="text-start">
            <div className="w-full h-[1px] bg-[#979797]/50 my-20"></div>
            <h1 className="font-bold text-4xl text-grayishDarkBlue">
              {projects.bookmark.name}
            </h1>
            <p className="w-64 font-sans my-10">{projects.bookmark.excerpt}</p>
            <Link to="/portfolio/bookmark">
              <button className="uppercase font-sans text-xs border-[1px] px-10 p-2 border-grayishDarkBlue">
                view project
              </button>
            </Link>
            <div className="w-full h-[1px] bg-[#979797]/50 my-10"></div>
          </div>

          <div>
            <img src={bookmark} alt="" className="hidden lg:block" />
            <img
              src={bookmarkTablet}
              alt=""
              className="hidden md:block lg:hidden"
            />
            <img src={bookmarkMobile} alt="" className="md:hidden" />
          </div>
        </section>

        <section className="flex flex-col md:flex-row justify-center my-10 lg:justify-between p-4 md:gap-20 items-center lg:items-start">
          <div>
            <img src={insure} alt="" className="hidden lg:block" />
            <img
              src={insureTablet}
              alt=""
              className="hidden md:block lg:hidden"
            />
            <img src={insureMobile} alt="" className="md:hidden" />
          </div>

          <div className="text-start">
            <div className="w-full h-[1px] bg-[#979797]/50 my-20"></div>
            <h1 className="font-bold text-4xl text-grayishDarkBlue">
              {projects.insure.name}
            </h1>
            <p className="w-64 font-sans my-10">{projects.insure.excerpt}</p>
            <Link to="/portfolio/insure">
              <button className="uppercase font-sans text-xs border-[1px] px-10 p-2 border-grayishDarkBlue">
                view project
              </button>
            </Link>
            <div className="w-full h-[1px] bg-[#979797]/50 my-10"></div>
          </div>
        </section>

        <section className="flex flex-col-reverse md:flex-row justify-center lg:justify-between my-10 p-4 md:gap-20 items-center lg:items-start">
          <div className="text-start">
            <div className="w-full h-[1px] bg-[#979797]/50 my-20"></div>
            <h1 className="font-bold text-4xl text-grayishDarkBlue">
              {projects.fylo.name}
            </h1>
            <p className="w-64 font-sans my-10">{projects.fylo.excerpt}</p>
            <Link to="/portfolio/fylo">
              <button className="uppercase font-sans text-xs border-[1px] px-10 p-2 border-grayishDarkBlue">
                view project
              </button>
            </Link>
            <div className="w-full h-[1px] bg-[#979797]/50 my-10"></div>
          </div>

          <div>
            <img src={fylo} alt="" className="hidden lg:block" />
            <img
              src={fyloTablet}
              alt=""
              className="hidden md:block lg:hidden"
            />
            <img src={fyloMobile} alt="" className="md:hidden" />
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

        <Footer />
      </div>
    </main>
  );
}
