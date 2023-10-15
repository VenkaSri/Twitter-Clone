import { useState } from "react";

const TwitterTabs = () => {
  const [selectedTab, setSelectedTab] = useState("For you");
  const handleClick = (event) => {
    const tabType = event.currentTarget.getAttribute("data-tab-type");
    localStorage.setItem("timelinePrefernce", tabType);
    setSelectedTab(tabType);
  };
  const tabs = ["For you", "Following"];
  return (
    <nav className="w-full h-14 flex">
      {tabs.map((tab) => (
        <TabButton
          key={tab}
          text={tab}
          isSelected={selectedTab === tab}
          onClick={handleClick}
        />
      ))}
    </nav>
  );
};

export default TwitterTabs;

const TabButton = ({ text, isSelected, onClick }) => {
  return (
    <div
      className="mainColumn--topNav-link"
      data-tab-type={text}
      onClick={onClick}
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
    </div>
  );
};
