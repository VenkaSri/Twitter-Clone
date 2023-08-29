import React from "react";
import { useNavigate } from "react-router-dom";
import { useUserData } from "../../../hooks/user-data";
import Button from "../../UI/button/Button";
import ROUTES from "../../../ROUTES";
import { navigateToRoute } from "../../../routeUtils";

const FinalStepFooter = () => {
  const navigate = useNavigate();
  const { hasOneFollowing } = useUserData();
  const buttonClass = hasOneFollowing
    ? "w-[440px] h-[52px] font-cBold text-[#fff] rounded-full bg-[#000] hover:bg-[#272c30]"
    : "w-[440px] h-[52px] font-cBold text-[#fff] rounded-full bg-[#86888b]";

  const buttonInfo = {
    height: 52,
    width: 440,
    text: "Next",
    txtColor: "#FFF",
    disabled: !hasOneFollowing,
    bgColor: hasOneFollowing ? "#000" : "#86888b",
    hoverBgColor: hasOneFollowing ? "#272c30" : null,
  };

  const handledNext = () => {
    navigate("/home");
  };

  return (
    <div className="w-full h-[6.25rem] max:h-[6.25rem] flex justify-center items-center">
      <Button buttonProps={buttonInfo} onClick={handledNext} />
    </div>
  );
};

export default FinalStepFooter;
