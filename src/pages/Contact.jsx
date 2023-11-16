import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import github from "../../assets/images/icons/githubB.svg";
import linkedin from "../../assets/images/icons/linkedinB.svg";
import twitter from "../../assets/images/icons/twitterB.svg";

export default function Contact() {
  return (
    <main className="bg-veryLightGrey">
      <div className="max-w-[1110px] mx-auto">
        <Navbar />

        <section className="my-20 text-start">
          <div className="w-full h-[1px] bg-[#979797]/50"></div>
          <div className="flex flex-col lg:flex-row justify-between p-2">
            <h1 className="text-4xl my-10 font-bold text-grayishDarkBlue">
              Get in Touch
            </h1>
            <div>
              <p className="font-sans text-sm w-[30rem]">
                I’d love to hear about what you’re working on and how I could
                help. I’m currently looking for a new role and am open to a wide
                range of opportunities. My preference would be to find a
                position in a company in London. But I’m also happy to hear
                about opportunites that don’t fit that description. I’m a
                hard-working and positive person who will always approach each
                task with a sense of purpose and attention to detail. Please do
                feel free to check out my online profiles below and get in touch
                using the form.
              </p>
              <div className="flex items-center gap-4 mt-5 md:mt-10">
                <img src={github} alt="" className="w-6 h-6" />
                <img src={twitter} alt="" className="w-6 h-6" />
                <img src={linkedin} alt="" className="w-6 h-6" />
              </div>
            </div>
          </div>
          <div className="w-full h-[1px] bg-[#979797]/50 my-10"></div>
        </section>

        <section className="flex flex-col lg:flex-row justify-between text-start p-4">
          <h1 className="text-4xl my-10 font-bold text-grayishDarkBlue">
            Contact Me
          </h1>
          <form>
            <div className="flex flex-col items-start">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                placeholder="Jane Appleseed"
                className="bg-grayishDarkBlue/20 rounded-sm p-2 w-96"
              />
            </div>
            <div className="flex flex-col items-start my-10">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="elekwaeke300@gmail.com"
                className="bg-grayishDarkBlue/20 rounded-sm p-2 w-96"
              />
            </div>
            <div className="flex flex-col items-start my-10">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                cols="10"
                rows="8"
                className="bg-grayishDarkBlue/20 rounded-sm p-2 w-96"
              ></textarea>
            </div>
          </form>
        </section>

        <Footer />
      </div>
    </main>
  );
}
