// import React from "react";

// import { Link } from "react-router-dom";
// import SVG from "../UI/app/SVG";
// import {
//   CLOSE,
//   FORM_BACK_BUTTON,
//   LOGO,
// } from "../../utils/ButtonLinkObjects";
// import { useDispatch, useSelector } from "react-redux";
// import { resetActions } from "../../state/auth/sign-up/reset-reducer";
// import { stepsActions } from "../../state/auth/form/steps-reducer";

// const StepsHeader = () => {
//   const loading = useSelector((state) => state.rootReducer.signUp.api.loading);
//   const dispatch = useDispatch();
//   const currentStep = useSelector(
//     (state) => state.rootReducer.signUp.steps.currentStep
//   );
//   const handleReset = () => {
//     dispatch(resetActions.resetAll());
//   };

//   const handleBack = () => {
//     dispatch(stepsActions.setCurrentStep(currentStep - 1));
//   };

//   return (
//     <>
//       {loading ? (
//         <div className="flex items-center sticky top-0 bg-[#fff] z-50 h-[3.313rem] w-[600px] max-w-[600px]">
//           {currentStep === 4 && (
//             <div className="w-full flex justify-center align-items">
//               <div className="flex p-[0.75rem] w-[50px] hover:bg-[#E8F5FE] rounded-full fill-[#1D9BF0] group-hover:bg-[#E6E7E7]">
//                 <SVG svgPath={LOGO} />
//               </div>
//             </div>
//           )}
//           {(currentStep === 1 || currentStep === 2) && (
//             <Link
//               role="button"
//               to={currentStep > 1 ? "/i/flow/signup" : "/"}
//               onClick={currentStep > 1 ? handleBack : handleReset}
//               className="ml-4 hover:bg-[#E6E7E7] w-[2.125rem] h-[2.125rem] flex items-center justify-center rounded-full cursor-pointer"
//             >
//               <div className="w-[1.25rem] h-[1.25rem]">
//                 <SVG svgPath={currentStep > 1 ? FORM_BACK_BUTTON : CLOSE} />
//               </div>
//             </Link>
//           )}
//           {currentStep < 4 && (
//             <span className="ml-6 text-xl font-cBold">
//               Step {currentStep} of 3
//             </span>
//           )}
//         </div>
//       ) : null}
//     </>
//   );
// };

// export default StepsHeader;
