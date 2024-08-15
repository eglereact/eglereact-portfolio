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
          <h1 data-aos="fade-right" data-aos-delay="500" className="name-front">
            Frontend
          </h1>
          <h1 data-aos="fade-left" data-aos-delay="1000" className="name-back">
            Developer
          </h1>
        </div>
        <SocialMediaLinks />
      </section>
    </>
  );
};
export default HomePage;
