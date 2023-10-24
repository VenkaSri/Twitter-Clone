import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  stepOneInfo: {
    name: "",
    email: "",
    dob: {
      year: "",
      month: "",
      day: "",
    },
  },
  validEmailSet: false,
  isValidPasswordSet: false,
  isValidUsernameSet: false,
  password: "",
  currentStep: 0,
  signUpStep: 0,
  postRegisterSteps: 0,
  doesUserExist: false,
  shouldAutoFocus: "",
  username: "",
  didUserAddProfilePicture: false,
  isFollowingOneAccount: false,
  profilePictureFile: null,
};

const signupSlice = createSlice({
  name: "signupSlice",
  initialState,
  reducers: {
    setName(state, action) {
      state.stepOneInfo.name = action.payload;
    },
    setEmail(state, action) {
      state.stepOneInfo.email = action.payload;
    },
    setMonth(state, action) {
      state.stepOneInfo.dob.month = action.payload;
    },
    setDay(state, action) {
      state.stepOneInfo.dob.day = action.payload;
    },
    setYear(state, action) {
      state.stepOneInfo.dob.year = action.payload;
    },
    setUsername(state, action) {
      state.username = action.payload;
    },
    setCurrentStep(state, action) {
      state.currentStep = action.payload;
    },
    setSignUpStep(state, action) {
      state.signUpStep = action.payload;
    },
    setPostRegisterSteps(state, action) {
      state.postRegisterSteps = action.payload;
    },
    setIsValidEmailSet(state, action) {
      state.validEmailSet = action.payload;
    },
    setIsValidPasswordSet(state, action) {
      state.isValidPasswordSet = action.payload;
    },
    setIsValidUsernameSet(state, action) {
      state.isValidUsernameSet = action.payload;
    },
    setShouldAutoFocus(state, action) {
      state.shouldAutoFocus = action.payload;
    },
    setPassword(state, action) {
      state.password = action.payload;
    },
    setDidUserAddProfilePicture(state, action) {
      state.didUserAddProfilePicture = action.payload;
    },
    setIsFollowingOneAccount(state, action) {
      state.isFollowingOneAccount = action.payload;
    },
    setProfilePictureFile(state, action) {
      state.profilePictureFile = action.payload;
    },
    resetState() {
      return initialState;
    },
  },
});

export const signupSliceActions = signupSlice.actions;
export default signupSlice.reducer;
