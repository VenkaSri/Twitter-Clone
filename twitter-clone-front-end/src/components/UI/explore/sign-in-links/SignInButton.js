const SignInButton = props => {
  return (
    <button className="w-[18.75rem] h-[2.4rem] border border-slate-300 rounded-full flex items-center justify-center gap-2">
        {props.children}
    </button>
  );
};

export default SignInButton;
