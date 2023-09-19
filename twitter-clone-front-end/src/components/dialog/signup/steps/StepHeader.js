import React from "react";
import { DialogHeaderContent } from "../../header/DialogHeaderContent";
import { DialogHeaderHeading } from "../../header/DialogHeaderHeading";

export const StepHeader = ({ heading, withIcon, withButton }) => (
  <DialogHeaderContent
    icon={withIcon}
    button={withButton}
    content={<DialogHeaderHeading heading={heading} />}
  />
);
