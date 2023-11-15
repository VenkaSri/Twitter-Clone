import clsx from "clsx";
import PropTypes from "prop-types";
import CenteredText from "./CenteredText";

const RoundedTextButton = ({ text, className, disabled, onClick, style }) => {
  return (
    <>
      <div
        className={clsx(className, "btn--roundedText", {
          "pointer-events-none opacity-50": disabled,
        })}
        role="button"
        onClick={onClick}
        aria-disabled={disabled}
        style={style}
      >
        <CenteredText text={text} />
      </div>
    </>
  );
};

export default RoundedTextButton;

RoundedTextButton.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  style: PropTypes.object,
};
