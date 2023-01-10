import moreIcon from "../../images/tweet/twitter-more.png";

const TweetHeader = () => {
  return (
    <div className="flex justify-between w-120">
      <div className="flex gap-1">
        <span className="font-cBold">Venka</span>
        <span className="font-cReg ml-1">@venkaaa</span>
        <span className="font-cReg text-gray-500 tx-sm">&#x2022; 13h</span>
      </div>
      <div>
      <a className="flex mr-4 text-sm gap-2">
        <img src={moreIcon} className="w-5" alt="reply icon"></img>
      </a>
      </div>
    </div>
  );
};

export default TweetHeader;
