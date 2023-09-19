import React from "react";
import { DialogHeaderContent } from "../components/dialog/header/DialogHeaderContent";
import { EditMedia } from "../components/dialog/signup/steps/profile_picture/EditMedia";
import { ScaleImage } from "../components/dialog/signup/steps/profile_picture/ScaleImage";
import { DialogHeaderHeading } from "../components/dialog/header/DialogHeaderHeading";
import { DialogHeaderLogo } from "../components/dialog/header/DialogHeaderLogo";
import { UploadProfilePictureStep } from "../components/dialog/signup/steps/profile_picture/UploadProfilePictureStep";
import { DialogFooterButton } from "../components/DialogFooterButton";
import { DialogFooterContent } from "../components/dialog/footer/DialogFooterContent";
import { UsernameStep } from "../components/dialog/signup/steps//username/UsernameStep";
import { StepHeader } from "../components/dialog/signup/steps/StepHeader";
import { StepOneBody } from "../components/dialog/signup/steps/1/StepOneBody";
import { useSelector } from "react-redux";
import StepTwoBody from "../components/dialog/signup/steps/2/StepTwoBody";
import { StepThreeBody } from "../components/dialog/signup/steps/3/StepThreeBody";

export const dialogStepsConfig = {
  sign_up_step_1: {
    header: <StepHeader heading="Step 1 of 3" withIcon />,
    body: <StepOneBody />,
    footer: <DialogFooterContent step={1} />,
  },
  sign_up_step_2: {
    header: <StepHeader heading="Step 2 of 3" withIcon />,
    body: <StepTwoBody />,
    footer: <DialogFooterContent step={2} />,
  },
  sign_up_step_3: {
    header: <StepHeader heading="Step 3 of 3" />,
    body: <StepThreeBody />,
    footer: <DialogFooterContent step={3} />,
  },
  upload_profile_picture: {
    header: <DialogHeaderContent content={<DialogHeaderLogo />} />,
    body: <UploadProfilePictureStep />,
    footer: <DialogFooterContent profileStep={1} />,
  },
  edit_media: {
    header: <StepHeader heading="Edit Media" withIcon withButton />,
    body: <EditMedia />,
    footer: <ScaleImage />,
  },
  update_username: {
    header: <DialogHeaderContent content={<DialogHeaderLogo />} />,
    body: <UsernameStep />,
    footer: <DialogFooterContent />,
  },
  // Add more steps or variations as needed
};
