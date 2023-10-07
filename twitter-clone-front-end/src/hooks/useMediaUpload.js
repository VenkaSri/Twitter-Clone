import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

export const useMediaUpload = () => {
  const [error, setError] = useState(false);
  const maxFileLimit = 4;
  const { getRootProps, getInputProps, open, acceptedFiles } = useDropzone({
    // Disable click and keydown behavior
    noClick: true,
    noKeyboard: true,
    maxFiles: maxFileLimit,
    onDrop: (accepted) => {
      if (accepted.length > maxFileLimit) {
        setError(true);
      }
    },
    onDropRejected: (fileRejections) => {
      if (fileRejections.length > 0) {
        setError(true);
      }
    },
  });

  return { open, getRootProps, getInputProps, acceptedFiles, error, setError };
};
