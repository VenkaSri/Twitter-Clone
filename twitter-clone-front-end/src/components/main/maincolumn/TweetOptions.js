import IconButton from "../../UI/button/IconButton";
import getIcon from "../../../utils/icons/iconsutil";
import clsx from "clsx";

const TweetOptions = () => {
  const attachmentList = [
    "Media",
    "GIF",
    "Poll",
    "Emoji",
    "Schedule",
    "Tag Location",
  ];
  const handleMedia = () => {
    console.log("Clicked");
  };

  const attachments = attachmentList.map((item) => {
    return (
      <div
        role="button"
        className={clsx("button--icon-rounded", {
          "max-[688px]:hidden": item === "Poll" || item === "Schedule",
        })}
      >
        {getIcon(item, { width: 20, fill: "var(--primary-color)" })}
      </div>
    );
  });

  return (
    <>
      <div className="flex">{attachments}</div>
    </>
  );
};

export default TweetOptions;
