import PropTypes from "prop-types";

const ErrorField = ({ errorMessage }) => {
  return (
    <div className="px-2 flex font-cR text-[13px] text-[#f4212e]">
      <div className=" pr-5 flex flex-col">
        <span className="text-[red]">{errorMessage}</span>
      </div>
    </div>
  );
};

export default ErrorField;

ErrorField.propTypes = {
  errorMessage: PropTypes.string.isRequired,
};
