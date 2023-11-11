import { RegisterContext } from "@/context/auth/register-context";
import { useContext, useEffect, useState } from "react";
import MainLayout from "../MainLayout";
import LandingPage from "@/components/public/LandingPage";
import { useSelector } from "react-redux";
import { useCheckAuthStatusQuery } from "@/services/authApi";
import { AppProgess } from "@/components/AppLoader";

const Home = () => {
  const [element, setElement] = useState(null);
  const { isUserRegistered } = useContext(RegisterContext);
  const registered = useSelector((state) => state.userSlice.registered);
  const isProfileComplete = useSelector(
    (state) => state.userSlice.isProfileComplete
  );
  const { isSucess, isLoading } = useCheckAuthStatusQuery(undefined, {
    skip: !isProfileComplete,
  });

  useEffect(() => {
    if (isLoading) {
      setElement(<AppProgess />);
    } else {
      setElement(<MainLayout />);
    }
  }, [isSucess, isLoading]);

  useEffect(() => {
    if (registered) {
      setElement(<MainLayout />);
    } else {
      setElement(<LandingPage />);
    }
  }, [registered]);

  return element;
};

export default Home;
