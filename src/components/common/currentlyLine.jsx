import { useEffect, useState } from "react";

import "./styles/currentlyLine.css";

const ROTATE_MS = 6000;

const CurrentlyLine = ({ items }) => {
	const [index, setIndex] = useState(0);

	useEffect(() => {
		if (!items || items.length <= 1) return;
		const id = setInterval(() => {
			setIndex((i) => (i + 1) % items.length);
		}, ROTATE_MS);
		return () => clearInterval(id);
	}, [items]);

	if (!items || items.length === 0) return null;

	return (
		<div className="currently-line" aria-live="polite">
			<span className="currently-prefix">~ currently:</span>
			<span key={index} className="currently-text">{items[index]}</span>
			<span className="currently-cursor" aria-hidden="true">▌</span>
		</div>
	);
};

export default CurrentlyLine;
