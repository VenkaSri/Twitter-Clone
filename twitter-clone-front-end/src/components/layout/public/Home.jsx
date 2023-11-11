import { RegisterContext } from "@/context/auth/register-context";
import { useContext, useEffect, useState } from "react";
import MainLayout from "../MainLayout";
import LandingPage from "@/components/public/LandingPage";

const Home = () => {
  const [element, setElement] = useState(null);
  const { isUserRegistered } = useContext(RegisterContext);

  console.log("isU REg " + isUserRegistered);

  useEffect(() => {
    if (isUserRegistered) {
      setElement(<MainLayout />);
    } else {
      setElement(<LandingPage />);
    }
  }, [isUserRegistered]);

  return element;
};

export default Home;
