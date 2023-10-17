import { Close } from "@components/icons/Icons";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const DialogHeader = ({ step }) => {
  const [icon, setIcon] = useState(null);

  useEffect(() => {
    if (step === 0) {
      setIcon(<Close className="w-5" />);
    }
  }, [step]);

  return (
    <>
      <div className="h-[53px] flex bg-[#fff] dark:bg-[#000] px-[16px]">
        {<DialogHeaderIcon iconType={icon} />}
        <div
          className={`flex items-center sticky top-0  w-full justify-center align-center `}
        >
          <div className="flex h-full justify-center items-stretch flex-col font-cBold ">
            Steps
          </div>
          <div className="flex flex-grow h-full justify-center items-stretch flex-col basis-3/6"></div>
        </div>
      </div>
    </>
  );
};

export default DialogHeader;

DialogHeader.propTypes = {
  step: PropTypes.number,
};

const DialogHeaderIcon = ({ iconType }) => {
  return (
    <>
      <div
        className={`min-w-[56px] min-h-[32px] self-stretch flex items-start justify-center flex-col `}
      >
        <div className="min-w-[36px] min-h-[36px] rounded-full flex flex-col cursor-pointer items-center justify-center -ml-2 dark:fill-white dark:hover:bg-[#191919] hover:bg-[#E6E7E7]">
          {iconType}
        </div>
      </div>
    </>
  );
};

DialogHeaderIcon.propTypes = {
  iconType: PropTypes.node,
};
