import PropTypes from "prop-types";

const DialogContentHeading = ({ text, subtext }) => {
  return (
    <div className="flex-col-container ">
      <div className="flex-col-container my-5">
        <h1 className="text-[31px] leading-8 font-cBold break-words inline dark:text-[#fff]">
          <span>{text}</span>
        </h1>
        {subtext && (
          <div className="flex-col-container mt-2">
            <div className="text-[15px] leading-5 font-cReg break-words text-[#536471] dark:text-[#536471] ">
              <span>{subtext}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DialogContentHeading;

DialogContentHeading.propTypes = {
  text: PropTypes.string,
  subtext: PropTypes.string,
};
