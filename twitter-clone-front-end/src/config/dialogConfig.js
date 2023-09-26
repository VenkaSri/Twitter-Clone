import React from "react";
import { DialogHeaderContent } from "../components/dialog/signup/header/DialogHeaderContent";
import { EditMedia } from "../components/dialog/signup/steps/profile_picture/EditMedia";
import { ScaleImage } from "../components/dialog/signup/steps/profile_picture/ScaleImage";
import { DialogHeaderLogo } from "../components/dialog/signup/header/DialogHeaderLogo";
import { UploadProfilePictureStep } from "../components/dialog/signup/steps/profile_picture/UploadProfilePictureStep";
import { DialogFooterContent } from "../components/dialog/DialogFooterContent";
import { UsernameStep } from "../components/dialog/signup/steps//username/UsernameStep";
import { StepHeader } from "../components/dialog/signup/steps/StepHeader";
import { StepOneBody } from "../components/dialog/signup/steps/StepOneBody";
import StepTwoBody from "../components/dialog/signup/steps/StepTwoBody";
import { StepThreeBody } from "../components/dialog/signup/steps/StepThreeBody";
import FinalStep from "../components/signup/FinalStep";
import { AuthHome } from "../components/dialog/auth/AuthHome";

export const dialogStepsConfig = {
  // auth home step

  auth_home: {
    header: <StepHeader content={<DialogHeaderLogo />} withIcon />,
    body: <AuthHome />,
  },

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

  // steps below happen after authentication

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
    footer: <DialogFooterContent profileStep={2} />,
  },
  final_step: {
    header: <DialogHeaderContent content={<DialogHeaderLogo />} />,
    body: <FinalStep />,
    footer: <DialogFooterContent profileStep={3} />,
  },
};
