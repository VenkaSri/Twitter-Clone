// Create the elements
const pageLoadDiv = document.createElement("div");
pageLoadDiv.setAttribute("id", "pageload");
const innerDiv = document.createElement("div");
const widthDiv = document.createElement("div");
const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
const path = document.createElementNS("http://www.w3.org/2000/svg", "path");

// Set the styles and attributes
pageLoadDiv.style.display = "flex";
pageLoadDiv.style.height = "100%";
pageLoadDiv.style.width = "100%";
pageLoadDiv.style.margin = "0";
pageLoadDiv.style.flexGrow = "1";
pageLoadDiv.style.position = "absolute";
pageLoadDiv.style.alignItems = "center";
pageLoadDiv.style.justifyContent = "center";

innerDiv.style.margin = "auto";

widthDiv.style.width = "80px";

svg.setAttribute("viewBox", "0 0 24 24");

path.setAttribute("class", "svg-path");
path.setAttribute(
  "d",
  "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
);

// Append the elements
svg.appendChild(path);
widthDiv.appendChild(svg);
innerDiv.appendChild(widthDiv);
pageLoadDiv.appendChild(innerDiv);
document.body.appendChild(pageLoadDiv);

const setTheme = () => {
  const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
  pageLoadDiv.style.backgroundColor = isDarkMode ? "black" : "white";
  pageLoadDiv.className = isDarkMode ? "dark-mode" : "light-mode";
};

// Set the initial theme
setTheme();

// Add an event listener to update the theme when the user's preference changes
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", setTheme);
