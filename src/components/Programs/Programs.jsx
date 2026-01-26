import "./Programs.css";
import program1 from "../../assets/program-1.png";
import program2 from "../../assets/program-2.png";
import program3 from "../../assets/program-3.png";
import icon1 from "../../assets/program-icon-1.png";
import icon2 from "../../assets/program-icon-2.png";
import icon3 from "../../assets/program-icon-3.png";

const PROGRAMS = [
  {
    id: 1,
    image: program1,
    icon: icon1,
    title: "Bachelor degree",
  },
  {
    id: 2,
    image: program2,
    icon: icon2,
    title: "Master degree",
  },
  {
    id: 3,
    image: program3,
    icon: icon3,
    title: "Postgraduate degree",
  },
];

const Programs = () => {
  return (
    <ul className="programs">
      {PROGRAMS.map((program) => (
        <li key={program.id} className="program">
          <img
            src={program.image}
            alt={`${program.title} program`}
            className="program-image"
          />

          <div className="caption">
            <img
              src={program.icon}
              alt=""
              aria-hidden="true"
              className="program-icon"
            />
            <p>{program.title}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Programs;
