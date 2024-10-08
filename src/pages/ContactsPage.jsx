import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";
import Navigation from "../Component/Navigation";

const ContactsPage = () => {
  return (
    <>
      <Navigation />
      <section className="max-width flex justify-center py-10">
        <div className="p-6 rounded-lg w-2/3">
          <h1 className="text-2xl sm:text-4xl text-center uppercase text-[#357358]">
            Kontaktinė informacija:
          </h1>
          <h2 className="text-xl sm:text-3xl mt-6 text-center">
            jukneviciute185@gmail.com
          </h2>
          <div className="flex p-6 justify-center flex-col lg:flex-row">
            <div className="w-full lg:w-1/2 flex flex-col items-center justify-center">
              <img
                src="images/qr-eglereact.png"
                alt="eglereact"
                className="lg:w-2/3 max-w-64 lg:max-w-fit"
              />
              <a
                href="https://github.com/eglereact"
                className="flex items-center justify-center uppercase text-2xl my-6  pt-1 hover:text-[#357358]"
              >
                <IoLogoGithub size={50} />
                <span className="text-sm sm:text-2xl"> eglereact </span>
              </a>
            </div>
            <div className="w-full lg:w-1/2 flex flex-col items-center">
              <img
                src="images/qr-linkedin.png"
                alt="linkedin"
                className="lg:w-2/3 max-w-64 lg:max-w-fit"
              />
              <a
                href="https://www.linkedin.com/in/egl%C4%97-juknevi%C4%8Di%C5%ABt%C4%97/"
                className="flex items-center justify-center uppercase  my-6 pt-1 hover:text-[#357358]"
              >
                <IoLogoLinkedin size={50} />
                <span className="text-sm sm:text-2xl"> Eglė juknevičiutė </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default ContactsPage;
