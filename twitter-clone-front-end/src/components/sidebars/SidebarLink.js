const SideBarLink = (props) => {
  return (
    <button className="w-37 h-13 rounded-full flex items-center hover:bg-[#E6E7E7]">
      <svg
        viewBox="0 0 24 24"
        width="26"
        className="group-hover:bg-[#F8E0EB] fill-[#333333] ml-3.5 group-hover:fill-[#F91880]"
      >
        <g>
          <path
            d={props.svgPath}
          ></path>
        </g>
      </svg>
      <div className="ml-4 font-custom2  font-bold text-.5xl">
        {props.name}
      </div>
    </button>
  );
};

export default SideBarLink;
