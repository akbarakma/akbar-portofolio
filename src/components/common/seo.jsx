import { useEffect } from "react";

const SITE = "https://akbarakma.com";

const setMeta = (attr, key, value) => {
	let el = document.head.querySelector(`meta[${attr}="${key}"]`);
	if (!el) {
		el = document.createElement("meta");
		el.setAttribute(attr, key);
		document.head.appendChild(el);
	}
	el.setAttribute("content", value);
};

const setCanonical = (href) => {
	let el = document.head.querySelector('link[rel="canonical"]');
	if (!el) {
		el = document.createElement("link");
		el.setAttribute("rel", "canonical");
		document.head.appendChild(el);
	}
	el.setAttribute("href", href);
};

/**
 * Rewrites the head for the current route. Googlebot renders JS, so this is
 * enough for a CRA single-page app; crawlers that do not run JS still get the
 * defaults baked into public/index.html.
 */
const Seo = ({ title, description, path, image = "/homepage.jpg" }) => {
	useEffect(() => {
		const url = `${SITE}${path}`;
		const absoluteImage = `${SITE}${image}`;

		document.title = title;
		setMeta("name", "description", description);
		setCanonical(url);

		setMeta("property", "og:title", title);
		setMeta("property", "og:description", description);
		setMeta("property", "og:url", url);
		setMeta("property", "og:image", absoluteImage);

		setMeta("name", "twitter:title", title);
		setMeta("name", "twitter:description", description);
		setMeta("name", "twitter:image", absoluteImage);
	}, [title, description, path, image]);

	return null;
};

export default Seo;
