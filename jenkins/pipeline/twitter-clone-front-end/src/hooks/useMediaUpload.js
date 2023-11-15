import { usePostEditorContext } from "@/context/home/post-editor-context";
import { useState } from "react";
import { useDropzone } from "react-dropzone";

export const useMediaUpload = () => {
  const [error, setError] = useState(false);
  const { mediaFiles, setMediaFiles } = usePostEditorContext();
  const maxFileLimit = 4;

  const { getRootProps, getInputProps, open, acceptedFiles } = useDropzone({
    noClick: true,
    noKeyboard: true,
    maxFiles: maxFileLimit,
    onDrop: (accepted) => {
      const combinedFiles = [...mediaFiles, ...accepted];
      if (combinedFiles.length > maxFileLimit) {
        setError(true);
      } else {
        setError(false);
        setMediaFiles(combinedFiles);
      }
    },
    onDropRejected: (fileRejections) => {
      if (fileRejections.length > 0) {
        setError(true);
      }
    },
  });

  return {
    open,
    getRootProps,
    getInputProps,
    acceptedFiles,
    error,
    setError,
    mediaFiles,
  };
};
