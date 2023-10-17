import { useRef } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import PropTypes from "prop-types";

// import { dialogSliceActions } from "../../state/dialog/dialogSlice";

const DialogBodyContainer = ({ children }) => {
  const fullScreen = useMediaQuery("(max-width:702px)");
  const containerRef = useRef(null);

  // s/o chat-gpt, dynamically adding box shadow
  // useEffect(() => {
  //   const checkOverflow = () => {
  //     const element = containerRef.current;
  //     if (element) {
  //       if (element.clientHeight > 497) {
  //         dispatch(dialogSliceActions.setDialogBodyOverFlowing(true));
  //         return;
  //       } else {
  //         const isOver = element.scrollHeight > element.clientHeight;
  //         dispatch(dialogSliceActions.setDialogBodyOverFlowing(isOver));
  //       }
  //     }
  //   };

  //   checkOverflow();
  //   window.addEventListener("resize", checkOverflow);

  //   return () => {
  //     window.removeEventListener("resize", checkOverflow);
  //   };
  // }, [dispatch]);

  return (
    <>
      <div
        id="scrollableDiv"
        ref={containerRef}
        className={`overflow-auto
flex flex-col items-stretch basis-full flex-grow bg-[#fff] dark:bg-[#000] `}
      >
        <div
          className={`${
            fullScreen ? " px-8" : " px-20"
          } shrink-0 flex flex-col mb-2 grow`}
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default DialogBodyContainer;

DialogBodyContainer.propTypes = {
  children: PropTypes.node,
};
