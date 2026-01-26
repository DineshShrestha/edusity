import { useRef } from "react";
import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user1 from "../../assets/user-1.png";
import user2 from "../../assets/user-2.png";
import user3 from "../../assets/user-3.png";
import user4 from "../../assets/user-4.png";

const TESTIMONIALS = [
  {
    id: 1,
    name: "Mia Thomson",
    org: "Edusity, USA",
    avatar: user1,
    text: "The program helped me build strong fundamentals and confidence. The practical projects made a clear difference in my skills.",
  },
  {
    id: 2,
    name: "Jose Moreno",
    org: "Edusity, USA",
    avatar: user2,
    text: "I liked the structure and support from mentors. The lessons stayed focused and the feedback helped me improve fast.",
  },
  {
    id: 3,
    name: "Emilie Carter",
    org: "Edusity, USA",
    avatar: user3,
    text: "The campus environment and tools were excellent. I learned to work in teams and present my work clearly.",
  },
  {
    id: 4,
    name: "William Jackson",
    org: "Edusity, USA",
    avatar: user4,
    text: "The courses matched what employers ask for. I finished with a portfolio I feel confident showing in interviews.",
  },
];

const Testimonials = () => {
  const sliderRef = useRef(null);
  const txRef = useRef(0);

  const applyTransform = () => {
    if (!sliderRef.current) return;
    sliderRef.current.style.transform = `translateX(${txRef.current}%)`;
  };

  const slideForward = () => {
    if (txRef.current > -50) {
      txRef.current -= 25;
      applyTransform();
    }
  };

  const slideBackward = () => {
    if (txRef.current < 0) {
      txRef.current += 25;
      applyTransform();
    }
  };

  return (
    <div className="testimonials">
      <button
        type="button"
        className="next-btn"
        onClick={slideForward}
        aria-label="Next testimonial"
      >
        <img src={next_icon} alt="" aria-hidden="true" />
      </button>

      <button
        type="button"
        className="back-btn"
        onClick={slideBackward}
        aria-label="Previous testimonial"
      >
        <img src={back_icon} alt="" aria-hidden="true" />
      </button>

      <div className="slider" role="region" aria-label="Testimonials">
        <ul ref={sliderRef}>
          {TESTIMONIALS.map((t) => (
            <li key={t.id}>
              <article className="slide">
                <div className="user-info">
                  <img src={t.avatar} alt={`${t.name} portrait`} />
                  <div>
                    <h3>{t.name}</h3>
                    <span>{t.org}</span>
                  </div>
                </div>
                <p>{t.text}</p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
