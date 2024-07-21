import { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDarkMode from "../Hooks/useDarkMode";

const ThemeToggle = () => {
  const [colorTheme, setColorTheme] = useDarkMode();
  const [isDarkMode, setIsDarkMode] = useState(
    colorTheme === "light" ? true : false
  );

  const toggleDarkMode = (checked: boolean) => {
    const newTheme = checked ? "dark" : "light"; // Assuming these are your theme names
    setColorTheme(newTheme);
    setIsDarkMode(checked);
  };

  return (
    <>
      <button className="flex items-center">
        <DarkModeSwitch
          checked={isDarkMode}
          onChange={toggleDarkMode}
          size={20}
        />
      </button>
    </>
  );
};

export default ThemeToggle;
