import Navigation from "../Component/Navigation";
import SocialMediaLinks from "../Component/SocialMediaLinks";

const HomePage = () => {
  return (
    <>
      <Navigation />

      <section className="home-name">
        <div className="names-container">
          <h2 data-aos="fade-right" data-aos-delay="100">
            Eglė Juknevičiūtė
          </h2>
          <div
            className="rotatingText"
            data-aos="fade-right"
            data-aos-delay="500"
          >
            <div className="rotatingText-content">
              <p className="rotatingText-adjective">Frontend</p>
              <p className="rotatingText-adjective">JavaScript</p>
              <p className="rotatingText-adjective">React</p>
            </div>
          </div>
          <h1 data-aos="fade-left" data-aos-delay="1000" className="name-back">
            Developer
          </h1>
        </div>
        <div className="img-div">
          <img
            src="/eglereact-portfolio/images/code10.png"
            className="image"
            alt="Hands coding"
            data-aos="fade-left"
            data-aos-delay="1300"
          />
        </div>

        <SocialMediaLinks />
      </section>
    </>
  );
};
export default HomePage;
