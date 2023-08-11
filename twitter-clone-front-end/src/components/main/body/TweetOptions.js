import Button from "../../UI/button/Button";
import getIcon from "../../UI/icons/iconsutil";

const TweetOptions = () => {
  const buttonObject = {
    height: 24,
    width: 108,
    bgColor: "#FFFFFF",
    txtColor: "#1D9BF0",
    hoverBgColor: "#e8f5fe",
    brdColor: "#e0e6ea",
    text: "Everyone",
  };

  return (
    <>
      <div
        className="w-[34px] h-[34px] flex justify-center items-center cursor-pointer rounded-full "
        title="Media"
      >
        {getIcon("media", { fill: "#1d9bf0" })}
      </div>
    </>
  );
};

export default TweetOptions;
