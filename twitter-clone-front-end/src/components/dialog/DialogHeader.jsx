import { Back, Close, Logo } from "@components/icons/Icons";
import PropTypes from "prop-types";
import { useSignupConfig } from "../auth/signup/signupConfig";
import clsx from "clsx";

const DialogHeader = ({ step }) => {
  const { headerAction, goBackAStep } = useSignupConfig();

  const headerActionIcon = {
    close: <Close className="w-5" />,
    back: <Back className="w-5" />,
  }[headerAction];

  return (
    <>
      <div className="h-[53px] flex bg-[#fff] dark:bg-[#000] px-[16px]">
        {step < 3 && (
          <DialogHeaderIcon
            iconType={headerActionIcon}
            onClick={goBackAStep}
            step={step}
          />
        )}
        <div
          className={`flex items-center sticky top-0  w-full justify-center align-center `}
        >
          {step <= 2 && (
            <>
              <div className="flex h-full justify-center items-stretch flex-col font-cBold dark:text-white">
                Steps {step + 1} of 3
              </div>
              <div className="flex flex-grow h-full justify-center items-stretch flex-col basis-3/6"></div>
            </>
          )}

          {step >= 3 && <DialogHeaderLogo />}
        </div>
      </div>
    </>
  );
};

export default DialogHeader;

DialogHeader.propTypes = {
  step: PropTypes.number,
};

const DialogHeaderIcon = ({ iconType, onClick, step }) => {
  return (
    <>
      <div
        className={clsx(
          `min-w-[56px] min-h-[32px] self-stretch flex items-start justify-center flex-col`,
          { hidden: step === 2 }
        )}
      >
        <div
          onClick={onClick}
          className="min-w-[36px] min-h-[36px] rounded-full flex flex-col cursor-pointer items-center justify-center -ml-2 
        dark:fill-white dark:hover:bg-[#191919] hover:bg-[#E6E7E7]"
        >
          {iconType}
        </div>
      </div>
    </>
  );
};

const DialogHeaderLogo = () => {
  return (
    <>
      <div className="flex h-full justify-center  flex-col ">
        <div className="flex flex-col items-center shrink-0 ">
          <Logo className="w-10 dark:fill-white" />
        </div>
      </div>
    </>
  );
};

DialogHeaderIcon.propTypes = {
  iconType: PropTypes.node,
  onClick: PropTypes.func.isRequired,
  step: PropTypes.number,
};
