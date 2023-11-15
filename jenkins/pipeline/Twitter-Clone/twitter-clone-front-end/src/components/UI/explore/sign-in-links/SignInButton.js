const SignInButton = props => {
  return (
    <button className="h-[2.4rem] border border-slate-300 rounded-full flex items-center justify-center pointer-cursor gap-2 grow hover:bg-[#E6E6E6] ">
        {props.children}
    </button>
  );
};

export default SignInButton;
