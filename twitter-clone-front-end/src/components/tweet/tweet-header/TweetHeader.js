import TweetMore from "./TweetMore";

const TweetHeader = () => {
  return (
    <div className="flex justify-between items-center w-120 -mt-2">
      <div className="flex gap-1 justify-center items-center">
        <span className="font-cBold">Venka</span>
        <span className="font-cReg ml-1 text-[#536471]">@venkaaa</span>
        <span>·</span>
        <span className="font-cReg text-gray-500 text-sm">13h</span>
      </div>
      <TweetMore />

    </div>
  );
};

export default TweetHeader;
