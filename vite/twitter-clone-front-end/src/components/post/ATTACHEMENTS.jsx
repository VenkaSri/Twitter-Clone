import * as Icons from "@components/icons/Icons";

export const ATTACHMENTS = (open, len) => [
  {
    text: "Media",
    action: () => {
      console.log("Media");
      open();
    },
    isDisabled: len === 4,
    icon: Icons.Media,
  },
  {
    text: "GIF",
    action: () => console.log("GIF"),
    icon: Icons.Media,
  },
  {
    text: "Poll",
    action: () => console.log("Poll"),
    icon: Icons.Media,
  },
  {
    text: "Emoji",
    action: () => console.log("Emoji"),
    icon: Icons.Media,
  },
  {
    text: "Schedule",
    action: () => console.log("Schedule"),
    icon: Icons.Media,
  },
  {
    text: "Tag Location",
    action: () => console.log("Tag Location"),
    icon: Icons.Media,
  },
];
