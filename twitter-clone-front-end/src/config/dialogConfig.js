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
import { StepOneBody } from "../components/dialog/signup/steps/1/StepOneBody";

const dialogConfig = {
  sign_up_step_1: {
    header: (
      <DialogHeaderContent
        icon={true}
        content={<DialogHeaderHeading heading="Step" />}
      />
    ),
    body: <StepOneBody />,
    footer: <DialogFooterContent text={"Next"} />,
  },
  edit_media: {
    header: (
      <DialogHeaderContent
        icon={true}
        button={true}
        content={<DialogHeaderHeading heading="Edit Media" />}
      />
    ),
    body: <EditMedia />,
    footer: <ScaleImage />,
  },
  upload_profile_picture: {
    header: <DialogHeaderContent content={<DialogHeaderLogo />} />,
    body: <UploadProfilePictureStep />,
    footer: <DialogFooterContent />,
  },
  update_username: {
    header: <DialogHeaderContent content={<DialogHeaderLogo />} />,
    body: <UsernameStep />,
    footer: <DialogFooterContent />,
  },
  // Add more steps or variations as needed
};

export default dialogConfig;
