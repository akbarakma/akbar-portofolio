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

const SCHEMA_ID = "route-schema";

// Sits alongside the Person/WebSite graph baked into public/index.html rather
// than replacing it, so the route node can point back at #person by @id.
const setRouteSchema = (json) => {
	let el = document.getElementById(SCHEMA_ID);
	if (!json) {
		if (el) el.remove();
		return;
	}
	if (!el) {
		el = document.createElement("script");
		el.type = "application/ld+json";
		el.id = SCHEMA_ID;
		document.head.appendChild(el);
	}
	el.textContent = json;
};

/**
 * Rewrites the head for the current route. Googlebot renders JS, so this is
 * enough for a CRA single-page app; crawlers that do not run JS still get the
 * defaults baked into public/index.html.
 */
const Seo = ({ title, description, path, image = "/homepage.jpg", schema = null }) => {
	// Callers build the schema object inline, so depend on the serialised form
	// instead of the identity that changes on every render.
	const schemaJson = schema ? JSON.stringify(schema) : null;

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

		setRouteSchema(schemaJson);
	}, [title, description, path, image, schemaJson]);

	return null;
};

export default Seo;
