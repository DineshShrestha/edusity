import "./Campus.css";
import gallery1 from "../../assets/gallery-1.png";
import gallery2 from "../../assets/gallery-2.png";
import gallery3 from "../../assets/gallery-3.png";
import gallery4 from "../../assets/gallery-4.png";
import whiteArrow from "../../assets/white-arrow.png";
import { Link } from "react-scroll";

const GALLERY = [
  {
    id: 1,
    image: gallery1,
    alt: "University campus building exterior",
  },
  {
    id: 2,
    image: gallery2,
    alt: "Students walking across campus",
  },
  {
    id: 3,
    image: gallery3,
    alt: "Modern university classroom",
  },
  {
    id: 4,
    image: gallery4,
    alt: "University library interior",
  },
];

const Campus = () => {
  return (
    <section className="campus">
      <ul className="gallery">
        {GALLERY.map((item) => (
          <li key={item.id}>
            <img src={item.image} alt={item.alt} />
          </li>
        ))}
      </ul>

      <Link
        className="btn dark-btn"
        to="contact"
        smooth
        offset={-260}
        duration={500}
        aria-label="Scroll to contact section"
      >
        See more
        <img src={whiteArrow} alt="" aria-hidden="true" />
      </Link>
    </section>
  );
};

export default Campus;
