export const getDialogStyles = (type, isMobile, darkMode) => {
  const bgColog = darkMode ? "#000" : "fff";

  let sxStyles = {
    borderRadius: "16px",
    height: "650px",
    maxHeight: "90vh",
    minHeight: "400px",
    maxWidth: "80vw",
    minWidth: "600px",
    display: "flex",
    boxShadow: "none",
    overflow: "hidden",
  };

  let errorStyle = {
    boxShadow: "none",
    position: "absolute",
    bottom: "1%",
  };

  if (isMobile) {
    sxStyles = {
      background: bgColog,
    };
  }

  switch (type) {
    case "LOGIN":
      return {
        sx: sxStyles,
      };
    case "ERROR": {
      return {
        sx: errorStyle,
        styles: {
          "&.MuiDialog-root": {
            pointerEvents: "none",
            "& .MuiBackdrop-root": { background: "none" },
          },
        },
      };
    }
    default:
      return {}; // Default styles or empty object
  }
};
