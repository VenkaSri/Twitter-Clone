export const LandingPage = () => {
  // const handleUserLogin = () => {
  //   window.history.replaceState(
  //     null,
  //     "Sign up for Twitter / X",
  //     "/i/flow/login"
  //   );
  // };

  return (
    <div className="h-screen w-screen flex flex-col overflow-x-hidden dark:bg-black text-[red]">
      <div className="flex-grow flex ">
        <div className={``}></div>
        <div className="flex-1  xs:p-4 flex flex-col justify-center">
          <div className="xs:p-[20px] flex flex-col min-w-[437px] max-w-[760px]">
            <div className="flex-1 flex items-center block med:hidden h-[48px]"></div>
            <div className="my-12 flex  font-cHeavy leading-[84px] text-[64px] font-bold dark:text-[#fff] ">
              <span className="m-0 p-0" data-testid="cypress-title">
                Happening now
              </span>
            </div>

            <div className="mb-8">
              <span
                className={`font-cHeavy text-[31px] leading-[36px]  dark:text-[#fff]`}
              >
                Join today.
              </span>
            </div>

            <div className="flex flex-col mt-10 gap-4">
              <span
                className={`font-cMed text-[17px] leading-[20px] font-bold dark:text-[#fff]`}
              >
                Already have an account?
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-6"></div>
    </div>
  );
};
