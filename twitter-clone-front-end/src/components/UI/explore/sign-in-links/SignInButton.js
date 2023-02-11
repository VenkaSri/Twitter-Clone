const SignInButton = props => {
  return (
    <button className="h-[2.4rem] border border-slate-300 rounded-full flex items-center justify-center mt-4 gap-2 ml-2 mr-2">
        {props.children}
    </button>
  );
};

export default SignInButton;
