import clsx from "clsx";
import PropTypes from "prop-types";
import RoundedTextButton from "../RoundedTextButton";
import { useDialogFooterSettings } from "@/hooks/dialog/auth/signup/useDialogFooterSettings";

const DialogFooter = ({ step, onClick }) => {
  const { isDisabled, btnText, btnStyle, isContentOverflowing } =
    useDialogFooterSettings(step);

  return (
    <div
      role="button"
      className={clsx(
        "flex flex-col dark:bg-[#000] justify-center items-center z-20 px-20",
        { "pointer-events-none opacity-50": isDisabled },
        isContentOverflowing && "shadow-dialog-footer"
      )}
      onClick={onClick}
    >
      <div className="flex flex-col grow  w-full">
        {step === 1 && <SignUpTerms />}
        <RoundedTextButton
          text={btnText}
          className={`footer--button ${btnStyle}`}
        />
      </div>
    </div>
  );
};

export default DialogFooter;

DialogFooter.propTypes = {
  step: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

/* Only shown in step 2 */

const SignUpTerms = () => {
  return (
    <div className="mt-4 leading-[16px] text-[14px] font-cR text-[#71767b] flex flex-col ">
      <span className="break-words">
        By signing up, you agree to the{" "}
        <span className="text-[#1D9BF0]">Terms of Service</span> and{" "}
        <span className="text-[#1D9BF0]">Privay Policy</span>, including{" "}
        <span className="text-[#1D9BF0]">Cookie use</span>. Twitter may use your
        contact information, including your email address and phone number for
        purposes outlined in our Privacy Policy, like keeping your account
        secure and personalizing our services, including ads.{" "}
        <span className="text-[#1D9BF0]">Learn more</span>. Others will be able
        to find you by email or phone number, when provided, unless you choose
        otherwise <span className="text-[#1D9BF0]">here</span>.
      </span>
    </div>
  );
};
