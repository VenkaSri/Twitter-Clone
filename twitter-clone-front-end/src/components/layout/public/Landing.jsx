import LandingPage from "@/components/public/LandingPage";
import { useSession } from "@/hooks/useSession";
import Dialog from "@components/Dialog";
import MainLayout from "../MainLayout";

const Landing = () => {
  const { isAuthenticated } = useSession();
  return (
    <>
      {isAuthenticated ? <MainLayout /> : <LandingPage />}
      <Dialog />
    </>
  );
};

export default Landing;
