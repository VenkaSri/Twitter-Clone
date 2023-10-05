import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

export const useMediaUpload = () => {
  const { getRootProps, getInputProps, open, acceptedFiles } = useDropzone({
    // Disable click and keydown behavior
    noClick: true,
    noKeyboard: true,
    maxFiles: 4,
  });

  return { open, getRootProps, getInputProps, acceptedFiles };
};
