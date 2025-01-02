import css from "./Button.module.css";

const Button = ({ children, id, onDelete }) => {
  return (
    <button className={css.deleteButton} onClick={() => onDelete(id)}>
      {children}
    </button>
  );
};

export default Button;
