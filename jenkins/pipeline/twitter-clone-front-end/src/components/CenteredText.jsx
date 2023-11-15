import PropTypes from "prop-types";

const CenteredText = ({ text }) => {
  return (
    <div className="flex grow overflow-hidden break-words min-w-0 font-cBold text-center items-center justify-center">
      <span className="max-w-full overflow-hidden text-ellipsis whitespace-nowrap break-words min-w-0 ">
        <span>{text}</span>
      </span>
    </div>
  );
};

CenteredText.propTypes = {
  text: PropTypes.string.isRequired,
};

export default CenteredText;
