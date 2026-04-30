import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons/faMoon";
import { faSun } from "@fortawesome/free-solid-svg-icons/faSun";

import useTheme from "../../hooks/useTheme";
import "./styles/themeToggle.css";

const ThemeToggle = () => {
	const { theme, toggleTheme } = useTheme();
	const isDark = theme === "dark";

	return (
		<button
			type="button"
			className="theme-toggle"
			onClick={toggleTheme}
			aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
			aria-pressed={isDark}
			title={isDark ? "Switch to light mode" : "Switch to dark mode"}
		>
			<FontAwesomeIcon
				icon={isDark ? faSun : faMoon}
				className="theme-toggle-icon"
			/>
		</button>
	);
};

export default ThemeToggle;
