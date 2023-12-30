import { ProfileHeaderSection } from "@/components/home/main/profile/ProfileHeaderSection";
import { Outlet } from "react-router-dom";

export const ProfileLayout = () => {
  return (
    <>
      <ProfileHeaderSection />
      <div className="flex flex-col">
        <div className="relative min-h-[500px]">
          <Outlet />
        </div>
      </div>
    </>
  );
};
