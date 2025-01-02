import css from "./Contact.module.css";

import Button from "../Button/Button.jsx";

import { IoMdPerson } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = ({ id, name, number, onDelete }) => {
  return (
    <li className={css.wrapper}>
      <div>
        <div className={css.personalInfo}>
          <IoMdPerson size="20" />
          <p>{name}</p>
        </div>
        <div className={css.personalInfo}>
          <FaPhoneAlt size="15" />
          <p>{number}</p>
        </div>
      </div>
      <Button onDelete={onDelete} id={id}>
        Delete{" "}
      </Button>
    </li>
  );
};

export default Contact;
