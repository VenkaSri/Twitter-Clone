import getIcon from "../../../utils/icons/iconsutil";
import clsx from "clsx";
import ATTACHMENTS from "../../../constants/post/attachments";
import { useMediaUpload } from "../../../hooks/useMediaUpload";
import { useEffect, useState } from "react";
import { useTweetSectionContext } from "../../../context/TweetSectionCtx";
import { Fade, Snackbar, SnackbarContent } from "@mui/material";

const AttachmentButton = ({ text, action, isDisabled }) => {
  return (
    <button
      className={clsx(
        isDisabled ? "button--icon-rounded-disabled " : "button--icon-rounded",
        {
          "max-[688px]:hidden": text === "Poll" || text === "Schedule",
        }
      )}
      onClick={action}
      disabled={isDisabled}
    >
      {getIcon(text, { width: 20, fill: "var(--primary-color)" })}
    </button>
  );
};

const TweetOptions = () => {
  const { open, getInputProps, acceptedFiles, error, setError } =
    useMediaUpload();
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setError(false);
  };
  const { setPaths, paths, setValidPost } = useTweetSectionContext();
  const attachmentsList = ATTACHMENTS(open, paths.length);
  console.log(error);
  useEffect(() => {
    console.log(acceptedFiles.length);
    if (acceptedFiles.length > 0 && acceptedFiles.length < 5) {
      const fileURLs = acceptedFiles.map((file) => URL.createObjectURL(file));
      setPaths((prevURLs) => [...prevURLs, ...fileURLs]);
    }
  }, [acceptedFiles, setPaths]);

  return (
    <div className="flex">
      <input {...getInputProps()} style={{ display: "none" }} />
      {attachmentsList.map((attachment) => (
        <AttachmentButton
          key={attachment.text}
          {...attachment}
          isDisabled={attachment.isDisabled}
        />
      ))}
      <Snackbar
        ContentProps={{
          sx: {
            backgroundColor: "var(--primary-color)",
          },
        }}
        autoHideDuration={4000}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={error}
        onClose={handleClose}
        TransitionComponent={Fade}
        message="Please choose 1 GIF or up to 4 photos."
      />
    </div>
  );
};

export default TweetOptions;
