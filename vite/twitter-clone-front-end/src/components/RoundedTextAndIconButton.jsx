import clsx from "clsx";
import PropTypes from "prop-types";
import CenteredText from "@components/CenteredText";

const RoundedTextAndIconButton = ({
  text,
  className,
  disabled,
  onClick,
  icon,
  iconPosition,
}) => {
  return (
    <a
      className={clsx(className, "btn--roundedText", {
        "pointer-events-none opacity-50": disabled,
      })}
      role="button"
      onClick={onClick}
    >
      <div className="flex px-3">
        {iconPosition === "start" && (
          <div className="mr-1 flex items-center justify-center">{icon}</div>
        )}
        <div className="flex">
          <CenteredText text={text} />
        </div>

        {iconPosition === "end" && (
          <div className="ml-1 flex items-center justify-center ">{icon}</div>
        )}
      </div>
    </a>
  );
};

export default RoundedTextAndIconButton;

RoundedTextAndIconButton.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  icon: PropTypes.node,
  iconPosition: PropTypes.oneOf(["start", "end"]).isRequired,
};
