const SideBarLink = (props) => {
  return (
    <button className="w-[9.942rem] h-13 relative rounded-full flex items-center hover:bg-[#E6E7E7] max-xl:w-[3.141rem]">
      <svg
        viewBox="0 0 24 24"
        width="26"
        className="group-hover:bg-[#F8E0EB] absolute fill-[#333333] left-3.5 max-xl:left-3 group-hover:fill-[#F91880]"
      >
        <g>
          <path
            d={props.svgPath}
          ></path>
        </g>
      </svg>
      <div className="absolute w-[4.551rem] h-[1.531rem] break-words left-[3.75rem] font-custom2 font-bold text-[1.19rem] max-xl:invisible flex items-center justify-center">
        {props.name}
      </div>
    </button>
  );
};

export default SideBarLink;
