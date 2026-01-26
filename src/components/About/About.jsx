import PropTypes from "prop-types";
import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const About = ({ setPlayState }) => {
  const openVideo = () => {
    setPlayState(true);
  };

  return (
    <div className="about">
      <div className="about-left">
        <img
          src={about_img}
          alt="Students attending a university lecture"
          className="about-img"
        />

        <button
          className="play-button"
          onClick={openVideo}
          aria-label="Play campus introduction video"
        >
          <img src={play_icon} alt="" className="play-icon" />
        </button>
      </div>

      <div className="about-right">
        <h3>About the university</h3>
        <h2>Nurturing tomorrow’s leaders today</h2>

        <p>
          Our university focuses on practical learning, strong academic
          foundations, and real-world experience. Students work on modern
          projects and gain skills employers value.
        </p>

        <p>
          We combine industry partnerships, experienced faculty, and
          technology-driven teaching methods to prepare students for global
          careers.
        </p>

        <p>
          Our campus provides modern facilities, collaborative spaces, and a
          supportive learning environment that helps students grow both
          professionally and personally.
        </p>
      </div>
    </div>
  );
};

About.propTypes = {
  setPlayState: PropTypes.func.isRequired,
};

export default About;
