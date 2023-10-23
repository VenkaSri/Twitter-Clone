import RoundedTextButton from "@components/RoundedTextButton";
import PropTypes from "prop-types";
import { useFollowToggleButton } from "@/hooks/useFollowToggleButton";

const FollowToggleButton = ({ id, onClick }) => {
  const { onMouseEnter, onMouseLeave, buttonStyle, buttonText } =
    useFollowToggleButton(id);

  return (
    <div
      className="ml-3 self-start"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <RoundedTextButton
        text={buttonText}
        className={`${buttonStyle} flex min-h-[32px] min-w-[32px] rounded-full px-3`}
        onClick={onClick}
      />
    </div>
  );
};

export default FollowToggleButton;

FollowToggleButton.propTypes = {
  id: PropTypes.number,
  onClick: PropTypes.func,
};
