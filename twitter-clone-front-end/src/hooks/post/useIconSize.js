import { useViewContext } from "@context/home/view-context";

export const useIconSize = () => {
  const { isHomeView } = useViewContext();

  const iconSvg = isHomeView
    ? "w-[18.75px] h-[18.75px]"
    : "w-[22.5px] h-[22.5px]";
  const iconContainer = isHomeView
    ? "w-[34.5px] h-[34.5px]"
    : "w-[38.5px] h-[38.5px]";

  return { iconSvg, iconContainer };
};
