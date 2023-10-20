import clsx from "clsx";
import PropTypes from "prop-types";
import CenteredText from "./CenteredText";

const RoundedTextButton = ({ text, className, disabled, onClick }) => {
  return (
    <a
      className={clsx(className, "", {
        "pointer-events-none opacity-50": disabled,
      })}
      role="button"
      onClick={onClick}
      aria-disabled={disabled}
    >
      <CenteredText text={text} />
    </a>
  );
};

export default RoundedTextButton;

RoundedTextButton.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};
