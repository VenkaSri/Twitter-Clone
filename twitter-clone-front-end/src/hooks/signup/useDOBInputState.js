import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { signupSliceActions } from "../../state/app/home/signupSlice";
import moment from "moment";

export function useDOBInputState() {
  const dispatch = useDispatch();
  const [dob, setDob] = useState({});

  const monthNameToNumberMapping = moment
    .months()
    .reduce((mapping, monthName, index) => {
      mapping[monthName] = moment().month(index).format("MM");
      return mapping;
    }, {});

  function monthNameToNumber(monthName) {
    return monthNameToNumberMapping[monthName];
  }

  const monthHandler = (e) => {
    setDob((prevValue) => ({
      ...prevValue,
      month: e.target.value,
    }));
  };

  const dayHandler = (e) => {
    setDob((prevValue) => ({
      ...prevValue,
      day: e.target.value,
    }));
  };

  const yearHandler = (e) => {
    setDob((prevValue) => ({
      ...prevValue,
      year: e.target.value,
    }));
  };

  useEffect(() => {
    if (dob.month && dob.day && dob.year) {
      dispatch(
        signupSliceActions.setDOB(
          `${dob.year}-${monthNameToNumber(dob.month)}-${dob.year}`
        )
      );
    }
  }, [dob, dispatch]);

  return {
    monthHandler,
    dayHandler,
    yearHandler,
  };
}
