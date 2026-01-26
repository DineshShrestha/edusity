import "./Hero.css";
import darkArrow from "../../assets/dark-arrow.png";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section className="hero container" id="hero">
      <div className="hero-text">
        <h1>Better education, better outcomes.</h1>

        <p>
          Edusity helps students build practical skills through structured
          programs, real projects, and mentor feedback.
        </p>

        <Link
          className="btn"
          to="programs"
          smooth
          offset={-260}
          duration={500}
          aria-label="Explore programs"
        >
          Explore programs
          <img src={darkArrow} alt="" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
