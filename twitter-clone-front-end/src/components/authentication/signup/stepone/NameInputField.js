import React, { useRef, useState, useEffect } from "react";

import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { object, string, number, date, InferType } from 'yup';

const schema = yup.object({
  name:yup.string().matches(/[^\s\\]/, {message: "Whats your name?"}),
})



const NameInputField = () => {
  const { register, handleSubmit, watch, formState: {errors} } = useForm({
    defaultValues: {
      name: ""
    },
    resolver: yupResolver(schema)
  });


  

  const onSubmit = (data) => console.log(data)
  useEffect(() => {
    const subscription = watch(handleSubmit(onSubmit));
    return () => subscription.unsubscribe();
}, [handleSubmit, watch]);

const nameInputClassess = errors.name 
? "border border-[#ff0000] h-[3.688rem] group rounded-[4px] focus-within:border-2 focus-within:border-[#ff0000] !bg-[#fff] max-h-[3.688rem]"
: "border border-[#CFD9DE] h-[3.688rem] group rounded-[4px] focus-within:border-2 focus-within:border-[#1d9bf0] !bg-[#fff] max-h-[3.688rem]"; 
  
  return (
    <div className="flex flex-col grow">
      <TextField
      {...register("name")}
        name="name"
        type="text"
        id="outlined-basic"
        label="Name"
        variant="filled"
        InputProps={{
          className: nameInputClassess,
          disableUnderline: true,
        }}
  
      />
      <p>{errors.name?.message}</p>
    </div>
  );
};

export default NameInputField;
