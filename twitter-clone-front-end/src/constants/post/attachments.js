const ATTACHMENTS = (open) => [
  {
    text: "Media",
    action: () => {
      console.log("Media");
      open();
    },
  },
  {
    text: "GIF",
    action: () => console.log("GIF"),
  },
  {
    text: "Poll",
    action: () => console.log("Poll"),
  },
  {
    text: "Emoji",
    action: () => console.log("Emoji"),
  },
  {
    text: "Schedule",
    action: () => console.log("Schedule"),
  },
  {
    text: "Tag Location",
    action: () => console.log("Tag Location"),
  },
];

export default ATTACHMENTS;
