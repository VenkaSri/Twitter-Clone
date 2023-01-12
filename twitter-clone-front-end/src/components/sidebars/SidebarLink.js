const SideBarLink = (props) => {
  return (
    <div className="w-37 h-13 rounded-full flex items-center hover:bg-[#E6E7E7] cursor-pointer">
      <svg
        viewBox="0 0 24 24"
        width="25"
        className="group-hover:bg-[#F8E0EB] fill-[#536471] ml-2 group-hover:fill-[#F91880]"
      >
        <g>
          <path
            d={props.path}
          ></path>
        </g>
      </svg>
      <div className="ml-6 font-cMed text-.5xl">
        {props.name}
      </div>
    </div>
  );
};

export default SideBarLink;
