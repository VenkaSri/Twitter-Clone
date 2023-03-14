import React from "react";
import { useSelector } from "react-redux";

import LandingFooter from "../../footer/LandingFooter";
import FormDialog from "../../UI/home/FormDialog";
import {  Route, Routes } from "react-router-dom";



const Layer = () => {
  return (
    <div className="relative flex flex-col justify-center grow">
      <Routes>
        <Route
          path="/i/flow/signup"
          element={
              <FormDialog>
              </FormDialog>
          }
        />
      </Routes>
      <LandingFooter />
    </div>
  );
};

export default Layer;
