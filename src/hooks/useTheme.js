import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "theme";

const getInitialTheme = () => {
	if (typeof document === "undefined") return "light";
	return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
};

const useTheme = () => {
	const [theme, setTheme] = useState(getInitialTheme);

	useEffect(() => {
		const root = document.documentElement;
		if (theme === "dark") {
			root.setAttribute("data-theme", "dark");
		} else {
			root.removeAttribute("data-theme");
		}
		try {
			localStorage.setItem(STORAGE_KEY, theme);
		} catch (e) {}
	}, [theme]);

	const toggleTheme = useCallback(() => {
		setTheme((t) => (t === "dark" ? "light" : "dark"));
	}, []);

	return { theme, toggleTheme };
};

export default useTheme;
