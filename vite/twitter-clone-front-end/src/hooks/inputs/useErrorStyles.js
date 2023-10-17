import {
  DARK_TEXT_COLOR,
  ERROR_COLOR,
  PRIMARY_COLOR,
} from "@/constants/constants";

export const useErrorStyles = (isFocused, hasError) => {
  const errorLabelColor = hasError ? ERROR_COLOR : PRIMARY_COLOR;
  const errorBorderColor = hasError
    ? "focus-within:ring-2 focus-within:ring-[#f1202d]"
    : "focus-within:ring-2 focus-within:ring-primary";
  const borderColor = isFocused
    ? errorBorderColor
    : hasError
    ? `dark:border-[#f1202d] border-[#f4212e] border`
    : "dark:border-[#191b1c] border";

  const labelColor = isFocused
    ? errorLabelColor
    : hasError
    ? ERROR_COLOR
    : DARK_TEXT_COLOR;

  return { borderColor, labelColor };
};
