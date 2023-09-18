// import React, { useEffect, useState } from "react";

// import { useDispatch, useSelector } from "react-redux";
// import { useEmailInputState } from "../../../../../hooks/signup/useEmailInputState";
// import { TextField } from "@mui/material";
// import { InputAdornment } from "@mui/material";
// import getIcon from "../../../../UI/icons/iconsutil";
// import { useUsernameSetup } from "../../../../../hooks/signup/useUsernameSetup";

// const valid = (text) => /^[a-zA-Z0-9_]*$/.test(text);

// export const CustomUsernameField = () => {
//   const {
//     isFocused,
//     setIsFocused,
//     isUserNameInvalid,
//     isUnavailable,
//     currentUsername,
//     autoFocus,
//     inputHandler,
//   } = useUsernameSetup();

//   const inputBorderColor =
//     isUserNameInvalid || isUnavailable
//       ? "dark:focus-within:border-[#f1202d] focus-within:border-[#f1202d] "
//       : "dark:focus-within:border-[#1d9bf0] focus-within:border-[#1d9bf0]";

//   const errorBorderColor =
//     isUserNameInvalid || isUnavailable
//       ? "dark:border-[#f1202d] border-[#f1202d]"
//       : "dark:border-[#1d9bf0] border-[#1e9bf0]";

//   const errorColor =
//     isUserNameInvalid || isUnavailable
//       ? "dark:text-[#f1202d] text-[#f1202d]"
//       : "dark:text-[#1d9bf0] text-[#1e9bf0]";

//   const inputLabelColor = ` ${
//     isFocused
//       ? errorColor
//       : isUserNameInvalid || isUnavailable
//       ? "dark:text-[#f1202d] text-[#f1202d]"
//       : "dark:text-[#71767b] "
//   }`;

//   const borderColor = ` ${
//     isFocused
//       ? errorBorderColor
//       : isUserNameInvalid || isUnavailable
//       ? "dark:border-[#f1202d] border-[#f1202d]"
//       : "dark:border-[#191b1c]"
//   }`;

//   const inputPropClassName = ` border ${borderColor} focus-within:border-2 " +
//   "focus-within:border-[#1d9bf0] rounded-[4px] border-[#CFD9DE] ${inputBorderColor} text-black dark:text-white`;

//   const startIconColor = ` ${
//     isFocused
//       ? isUserNameInvalid
//         ? "text-[#f1202d]"
//         : "text-primary-color"
//       : isUserNameInvalid
//       ? "text-[#f1202d]"
//       : ""
//   }`;

//   const endIconFillColor = ` ${
//     isFocused
//       ? isUserNameInvalid
//         ? "#f1202d"
//         : "#00BA7C"
//       : isUserNameInvalid
//       ? "#f1202d"
//       : "#00BA7C"
//   }`;

//   console.log(endIconFillColor);

//   return (
//     <div className="flex flex-col grow ">
//       <TextField
//         name="email"
//         type="text"
//         id="outlined-basic"
//         defaultValue={currentUsername}
//         label={
//           <span
//             className={`${inputLabelColor}  font-cReg text-[17px] leading-6`}
//           >
//             Username
//           </span>
//         }
//         variant="filled"
//         InputProps={{
//           className: inputPropClassName,
//           disableUnderline: true,
//           style: { background: "none" },
//           endAdornment: (
//             <InputAdornment position="start">
//               <div className="w-5">
//                 {getIcon("Confirmed Check", {
//                   fill: endIconFillColor,
//                 })}
//               </div>
//             </InputAdornment>
//           ),
//           startAdornment: (
//             <InputAdornment position="start">
//               <div
//                 className="w-[22px] -mr-[10px] h-[22px]  cursor-pointer "
//                 onMouseDown={(e) => e.preventDefault()}
//               >
//                 <span className={startIconColor}>@</span>
//               </div>
//             </InputAdornment>
//           ),
//         }}
//         onChange={inputHandler}
//         onFocus={() => setIsFocused(true)}
//         onBlur={() => setIsFocused(false)}
//         autoFocus={true}
//       />
//       {/* <div className="flex">
//           <div className="pt-0.5 pr-5 flex flex-col">
//             {errorMessage && (
//               <p className="font-cReg text-[14px] ml-2 text-[#f1202d]">
//                 {isPasswordStrengthValidState
//                   ? "Please enter a stronger password."
//                   : "Your password needs to be at least 8 characters. Please enter a longer one"}
//               </p>
//             )}
//           </div>
//         </div> */}
//     </div>
//   );
// };
