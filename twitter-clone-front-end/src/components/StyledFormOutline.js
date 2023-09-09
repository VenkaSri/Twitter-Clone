import { DialogTitle, DialogContent } from "@mui/material";

export const StyledFormOutline = ({ content }) => {
  return (
    <>
      <DialogTitle style={{ padding: 0 }} className="rounded-2xl">
        {content}
      </DialogTitle>
      <DialogContent
        className="w-full max-w-[600px] rounded-2xl mx-auto p-0 flex-col-container relative dark:bg-black"
        sx={{
          "&.MuiDialogContent-root": {
            padding: 0,
          },
        }}
      >
        {content}
      </DialogContent>
    </>
  );
};
