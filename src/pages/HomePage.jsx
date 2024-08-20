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
          <div class="rotatingText" data-aos="fade-right" data-aos-delay="500">
            <div class="rotatingText-content">
              <p class="rotatingText-adjective">Frontend</p>
              <p class="rotatingText-adjective">JavaScript</p>
              <p class="rotatingText-adjective">React</p>
            </div>
          </div>
          <h1 data-aos="fade-left" data-aos-delay="1000" className="name-back">
            Developer
          </h1>
        </div>

        <img
          src="/images/code4.svg"
          className="image"
          alt="code"
          data-aos="fade-left"
          data-aos-delay="1300"
        />
        <SocialMediaLinks />
      </section>
    </>
  );
};
export default HomePage;
