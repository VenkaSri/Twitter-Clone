export const getDialogStyles = (type, isMobile) => {
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

  if (isMobile) {
    sxStyles = {};
  }

  switch (type) {
    case "LOGIN":
      return {
        sx: sxStyles,
        fullScreen: isMobile,
      };
    default:
      return {}; // Default styles or empty object
  }
};
