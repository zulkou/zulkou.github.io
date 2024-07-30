import { useState, useEffect, Dispatch, SetStateAction } from "react";

const useDarkMode = (): [string, Dispatch<SetStateAction<string>>] => {
  const [theme, setTheme] = useState(
    localStorage.theme ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light")
  );
  const colorTheme = theme === "dark" ? "light" : "dark";
  localStorage.setItem("theme", theme);
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);
    if (localStorage.theme === "dark") localStorage.removeItem("theme");
    else localStorage.setItem("theme", theme);
  }, [theme, colorTheme]);

  return [colorTheme, setTheme];
};

export default useDarkMode;
