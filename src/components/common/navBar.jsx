import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const links = [
	["/", "Home"],
	["/projects", "Projects"],
	["/about", "About"],
	["/contact", "Contact"],
];

const NavBar = () => {
	const { pathname } = useLocation();
	const [open, setOpen] = useState(false);

	useEffect(() => {
		setOpen(false);
	}, [pathname]);

	// Tapping the same route again does not change pathname, so the menu also
	// needs an explicit way out.
	useEffect(() => {
		if (!open) return undefined;
		const onKey = (e) => e.key === "Escape" && setOpen(false);
		const onClickAway = (e) => {
			if (!e.target.closest(".site-header")) setOpen(false);
		};
		document.addEventListener("keydown", onKey);
		document.addEventListener("click", onClickAway);
		return () => {
			document.removeEventListener("keydown", onKey);
			document.removeEventListener("click", onClickAway);
		};
	}, [open]);

	// /work still resolves for old links, so light up Projects for both.
	const isActive = (path) =>
		path === "/projects" ? pathname === "/projects" || pathname === "/work" : pathname === path;

	return (
		<header className="site-header">
			<div className="header-inner">
				<Link to="/" className="brand" aria-label="Akbar Danial Akma, home">
					<img src="/logo-mark.png" alt="" className="brand-avatar" width="38" height="38" />
					<span className="brand-word">
						<span>akbarakma</span>
						<span className="brand-tld mono">.com</span>
					</span>
				</Link>

				<nav className={`top-nav ${open ? "open" : ""}`} aria-label="Primary">
					{links.map(([path, label]) => (
						<Link
							key={path}
							to={path}
							className={`nav-link ${isActive(path) ? "active" : ""}`}
							aria-current={isActive(path) ? "page" : undefined}
							onClick={() => setOpen(false)}
						>
							{label}
						</Link>
					))}
				</nav>

				<div className="header-actions">
					<Link to="/contact" className="header-cta">
						Hire me
					</Link>
					<button
						className={`menu-btn ${open ? "open" : ""}`}
						onClick={() => setOpen(!open)}
						aria-label={open ? "Close menu" : "Open menu"}
						aria-expanded={open}
					>
						<span />
						<span />
					</button>
				</div>
			</div>
		</header>
	);
};

export default NavBar;
