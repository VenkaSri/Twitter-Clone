import React, { useEffect, } from "react";
import { useDispatch} from "react-redux";

import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { nameActions } from "../../../../state/auth/sign-up/name-reducer";

const schema = yup.object({
  name: yup.string().matches(/[^\s\\]/, { message: "Whats your name?" }),
});

const PhoneTextField = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => dispatch(nameActions.assignName(data.name));
  useEffect(() => {
    const subscription = watch(handleSubmit(onSubmit));
    return () => subscription.unsubscribe();
  }, [handleSubmit, watch]);

  const nameInputClassess = errors.name
    ? "border border-[#ff0000] h-[3.688rem] group rounded-[4px] focus-within:border-2 focus-within:border-[#ff0000] !bg-[#fff] max-h-[3.688rem]"
    : "border border-[#CFD9DE] h-[3.688rem] group rounded-[4px] focus-within:border-2 focus-within:border-[#1d9bf0] !bg-[#fff] max-h-[3.688rem]";

  const nameInputLabelClasses = errors.name ? "#ff0000" : "#1d9bf0";
  function handleKeydown(event) {
    // prevent that a space is typed
    if(event.code === 'Space') event.preventDefault()
}

  return (
    <div className="flex flex-col grow">
      <TextField
        {...register("name")}
        name="phone"
        type="tel"
        id="outlined-basic"
        label="Phone"
        variant="filled"
        InputProps={{
          className: nameInputClassess,
          disableUnderline: true,
        }}
        sx={{
          "& label": {
            "&.Mui-focused": {
              color: nameInputLabelClasses,
            },
          },
        }}
        onKeyDown={handleKeydown}
      />
      <p className="font-cReg text-[14px] ml-2 text-[#ff0000]">
        {errors.name?.message}
      </p>
    </div>
  );
};

export default PhoneTextField;
