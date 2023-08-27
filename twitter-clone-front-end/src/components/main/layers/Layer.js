// import React from "react";
// import { useSelector } from "react-redux";

// import LandingFooter from "../../footer/LandingFooter";
// import FormDialog from "../../UI/home/FormDialog";
// import { Route, Routes } from "react-router-dom";
// import StepOne from "../../signup/stepone/StepOne";
// import StepTwo from "../../signup/stepone/StepTwo";
// import PasswordStep from "../../signup/PasswordStep";
// import Username from "../../signup/Username";
// import { FinalStep } from "../../signup/FinalStep";
// import SignUpStep from "../../SignUpStep";
// import DialogHeader from "../../signup/dialog/DialogHeader";
// import DialogFooter from "../../UI/dialog/DialogFooter";
// import UnfollowDialog from "../../UnfollowDialog";
// import Dialog from "../../UI/dialog/Dialog";

// //<ProfilePicture />

// const Layer = () => {
//   const currentStep = useSelector(
//     (state) => state.rootReducer.signUp.steps.currentStep
//   );

//   const handleClose = useSelector(
//     (state) => state.rootReducer.dialogState.isCancelled
//   );

//   const isUserAuthenticated = useSelector(
//     (state) => state.rootReducer.userInfo.isAuthenticated
//   );
//   return (
//     <div className="relative flex flex-col justify-center grow">
//       <Routes>
//         <Route path="/" element={null} onEnter={() => console.log("hello")} />
//         <Route
//           path="/i/flow/signup"
//           element={
//             <FormDialog
//               content={
//                 <SignUpStep
//                   header={<DialogHeader />}
//                   content={stepsContent[currentStep - 1]}
//                   footer={<DialogFooter currentStep={currentStep} />}
//                 />
//               }
//             />
//           }
//         />
//       </Routes>

//       {isUserAuthenticated ? null : <LandingFooter />}
//       {handleClose && (
//         <Dialog height={"300px"} width={"320px"} content={<UnfollowDialog />} />
//       )}
//     </div>
//   );
// };

// export default Layer;

<div class="css-1dbjc4n r-1isdzm1">
  <div class="css-1dbjc4n">
    <div class="css-1dbjc4n">
      <div class="css-1dbjc4n r-pw2am6">
        <div
          aria-disabled="true"
          role="button"
          tabindex="-1"
          class="css-1dbjc4n r-sdzlij r-1phboty r-rs99b7 r-19yznuf r-64el8z r-icoktb r-1ny4l3l r-1dye5f7 r-o7ynqc r-6416eg r-lrvibr"
          style="background-color: rgb(15, 20, 25); border-color: rgba(0, 0, 0, 0);"
          data-testid="ocfSignupNextLink"
        >
          <div
            dir="ltr"
            class="css-901oao r-1awozwy r-6koalj r-18u37iz r-16y2uox r-37j5jr r-a023e6 r-b88u0q r-1777fci r-rjixqe r-bcqeeo r-q4m81j r-qvutc0"
            style="color: rgb(255, 255, 255);"
          >
            <span class="css-901oao css-16my406 css-1hf3ou5 r-poiln3 r-1inkyih r-rjixqe r-bcqeeo r-qvutc0">
              <span class="css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0">
                Next
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>;
