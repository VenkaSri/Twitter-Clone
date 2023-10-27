import {
  Emoji,
  Gif,
  Media,
  Schedule,
  Poll,
  Location,
} from "@components/icons/Icons";

export const ATTACHMENTS = (open, len) => [
  {
    text: "Media",
    action: () => {
      console.log("Media");
      open();
    },
    isDisabled: len === 4,
    icon: <Media />,
  },
  {
    text: "GIF",
    action: () => console.log("GIF"),
    icon: <Gif />,
  },
  {
    text: "Poll",
    action: () => console.log("Poll"),
    icon: <Poll />,
  },
  {
    text: "Emoji",
    action: () => console.log("Emoji"),
    icon: <Emoji />,
  },
  {
    text: "Schedule",
    action: () => console.log("Schedule"),
    icon: <Schedule />,
  },
  {
    text: "Tag Location",
    action: () => console.log("Tag Location"),
    icon: <Location />,
  },
];
