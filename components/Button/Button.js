import clsx from "clsx";
import Styles from "./Button.module.scss";

const Button = ({ value, handleOnClick, styleDisabled }) => {
  return (
    <button
      className={clsx(Styles.container, styleDisabled)}
      type={"button"}
      onClick={() => handleOnClick(value)}
    >
      {value}
    </button>
  );
};

export default Button;
