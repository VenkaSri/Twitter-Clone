import clsx from "clsx";

export const TabButton = ({ text, isSelected, onClick, disabled }) => {
  return (
    <button
      className={clsx("mainColumn--topNav-link", { "opacity-40": disabled })}
      data-tab-type={text}
      onClick={onClick}
      disabled={disabled}
    >
      <div className="flex-col-container grow">
        <div
          className={`flex grow justify-center items-center font-medium ${
            isSelected ? "font-cBold" : "font-cMed"
          }`}
        >
          {text}
        </div>
        {isSelected && (
          <div className="bg-[var(--primary-color)] h-1 rounded-full"></div>
        )}
      </div>
    </button>
  );
};
