import Button from "../../UI/button/Button";
import IconButton from "../../UI/button/IconButton";
import getIcon from "../../UI/icons/iconsutil";

const TweetOptions = () => {
  const handleMedia = () => {
    console.log("Clicked");
  };

  return (
    <div className="flex">
      <IconButton type={"Media"} onClick={handleMedia} />
      <IconButton type={"GIF"} onClick={handleMedia} />
      <IconButton type={"Poll"} onClick={handleMedia} />
      <IconButton type={"Emoji"} onClick={handleMedia} />
      <IconButton type={"Schedule"} onClick={handleMedia} />
      <IconButton type={"Tag Location"} onClick={handleMedia} />
    </div>
  );
};

export default TweetOptions;
