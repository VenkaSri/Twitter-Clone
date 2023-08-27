// import React, { useContext } from "react";
// import FormModalContext from "../../context/modals/form-modal-context";

// import FooterButton from "../UI/footer/FooterButton";
// import { useDispatch } from "react-redux";
// import { unfollowDialogActions } from "../../state/dialog/dialogState-reducer";
// import { useNavigate } from "react-router-dom";

// const LogIn = {
//   width: "4.75rem",
//   text: "Log in",
//   bgColor: "transparent",
//   textColor: "white",
//   callFucn: () => {
//     console.log("hello");
//   },
// };

// const SignUp = {
//   width: "5.405rem",
//   text: "Sign up",
//   bgColor: "white",
//   textColor: "black",
//   someFun: function () {
//     alert("fsda");
//   },
// };

// const LandingFooter = () => {
//   const navigate = useNavigate();
//   const handleClick = () => {
//     navigate("/i/flow/signup");
//   }

//   return (
//     <div className="h-[4.5rem] w-screen bg-[#1D9BF0] flex justify-center  items-center absolute bottom-0 max-xl:justify-center">
//       <div className="flex w-[61.875rem] h-[3rem] justify-between mr-[25px]">
//         <div className="text-white self-center">
//           <p className="text-2xl font-cBold">
//             Don&rsquo;t miss what&rsquo;s happening
//           </p>
//           <p className="font-cLight text-[0.938rem]">
//             People on Twitter are the first to know.
//           </p>
//         </div>
//         <div className="self-center flex gap-4">
//           <FooterButton buttonInfo={LogIn} />
//           <FooterButton buttonInfo={SignUp} onClick={handleClick}/>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LandingFooter;
