import { Logo } from "@components/icons/Icons";
import SignUpOptions from "./SignUpOptions";
import { LandingFooter } from "@components/public/LandingFooter";
import RoundedTextButton from "@components/RoundedTextButton";
import Head from "@components/head/Head";

export const LandingPage = () => {
  const handleLogin = () => {
    console.log("login");
  };

  return (
    <>
      <Head title="X. It's what's happening" />
      <div className="h-screen w-screen flex flex-col overflow-x-hidden dark:bg-black">
        <div className="flex grow">
          <div className="flex flex-1 justify-center items-center max-[1016px]:hidden">
            <Logo className="w-[380px] dark:fill-white" />
          </div>
          <div className="flex-1  flex flex-col justify-center max-[1016px]:items-center">
            <div className=" flex flex-col max-w-[760px]">
              <div className="flex-1  items-center hidden max-[1016px]:flex h-[48px]">
                <Logo className="w-[45px] dark:fill-white" />
              </div>
              <div className="my-12 flex font-cHeavy leading-[54px] text-40 font-bold sm:text-64 sm:leading-[84px]">
                <span className="">Happening now</span>
              </div>

              <div className="mb-8">
                <span className={`font-cHeavy text-[31px] leading-[36px] `}>
                  Join today.
                </span>
              </div>
              <SignUpOptions />
              <div className="flex flex-col mt-10 gap-4 ">
                <span
                  className={`font-cMed text-17 leading-[20px] font-bold mb-2`}
                >
                  Already have an account?
                </span>
                <RoundedTextButton
                  text="Sign in"
                  className="h-[40px] text-primary mb-2 default-border-color hover:bg-primary/[0.1] sm:self-start self-center"
                  onClick={handleLogin}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="p-6">
          <LandingFooter />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
