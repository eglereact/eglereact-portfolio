import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";
import Navigation from "../Component/Navigation";

const ContactsPage = () => {
  return (
    <>
      <Navigation />
      <section className="max-width flex justify-center py-10">
        <div className="p-6 rounded-lg w-2/3">
          <h1 className="text-4xl text-center uppercase text-[#357358]">
            Kontaktinė informacija:
          </h1>
          <h2 className="text-3xl mt-6 text-center">
            jukneviciute185@gmail.com
          </h2>
          <div className="flex p-6 justify-center">
            <div className="w-1/2 flex flex-col items-center">
              <img
                src="images/qr-eglereact.png"
                alt="eglereact"
                className="w-2/3"
              />
              <a
                href="https://github.com/eglereact"
                className="flex items-center justify-center uppercase text-2xl  pt-1 hover:text-[#357358]"
              >
                <IoLogoGithub size={50} />
                eglereact
              </a>
            </div>
            <div className="w-1/2 flex flex-col items-center">
              <img
                src="images/qr-linkedin.png"
                alt="linkedin"
                className="w-2/3"
              />
              <a
                href="https://www.linkedin.com/in/egl%C4%97-juknevi%C4%8Di%C5%ABt%C4%97/"
                className="flex items-center justify-center uppercase text-2xl pt-1 hover:text-[#357358]"
              >
                <IoLogoLinkedin size={50} />
                Eglė juknevičiutė
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default ContactsPage;
