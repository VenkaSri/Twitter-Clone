const SignInButton = props => {
  return (
    <div className="w-72.1 h-10 border border-slate-300 rounded-full flex items-center justify-center gap-2">
      <div className="w-4.1 h-4.1" >
        {props.svg.tag}
      </div>
      <div><p className="font-cReg">{props.svg.name}</p></div>
    </div>
  );
};

export default SignInButton;
