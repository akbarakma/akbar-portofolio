import React, { useMemo, useState } from "react";

import INFO from "../data/user";
import Seo from "../components/common/seo";
import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import SingleProject, { splitTitle } from "../components/projects/singleProject";

const Projects = () => {
	const companies = useMemo(() => {
		const set = new Set(INFO.projects.map((p) => p.company).filter(Boolean));
		return ["All", ...Array.from(set)];
	}, []);

	const [filter, setFilter] = useState("All");

	const schema = useMemo(
		() => ({
			"@context": "https://schema.org",
			"@type": "CollectionPage",
			"@id": "https://akbarakma.com/projects#page",
			url: "https://akbarakma.com/projects",
			name: "Projects by Akbar Danial Akma",
			about: { "@id": "https://akbarakma.com/#person" },
			isPartOf: { "@id": "https://akbarakma.com/#website" },
			mainEntity: {
				"@type": "ItemList",
				numberOfItems: INFO.projects.length,
				itemListElement: INFO.projects.map((project, i) => ({
					"@type": "ListItem",
					position: i + 1,
					item: {
						"@type": "CreativeWork",
						name: splitTitle(project.title).name,
						description: project.description,
						keywords: project.skills.join(", "),
						creator: { "@id": "https://akbarakma.com/#person" },
						...(project.link ? { url: project.link } : {}),
					},
				})),
			},
		}),
		[],
	);

	const visible =
		filter === "All" ? INFO.projects : INFO.projects.filter((p) => p.company === filter);

	return (
		<div className="site-shell">
			<Seo
				title="Projects | Akbar Danial Akma"
				description={`${INFO.projects.length} projects by Akbar Danial Akma: high-volume logistics systems at Sicepat Ekspres, Shopee and Lazada marketplace integrations, the CucianSiap laundry app, React Native apps, and self-hosted AI tools. Built with TypeScript, Go, Python, Node.js, and React.`}
				path="/projects"
				schema={schema}
			/>
			<NavBar />

			<main className="site-main">
				<section className="page-head">
					<p className="page-eyebrow mono">Projects</p>
					<h1 className="page-title">Things I've shipped</h1>
					<p className="page-lede">
						<strong>{INFO.projects.length} of them, 2019 to now.</strong> Logistics systems
						that had to survive campaign day, marketplace syncs that could not drop an
						order, a few social apps, and the tools I built because I got tired of doing
						the work by hand.
					</p>
				</section>

				<section aria-labelledby="all-projects" className="work-section">
					<h2 id="all-projects" className="sr-only">
						All projects
					</h2>

					<div className="filter-row" role="group" aria-label="Filter projects by company">
						{companies.map((c) => (
							<button
								key={c}
								type="button"
								className={`chip filter-chip ${filter === c ? "active" : ""}`}
								onClick={() => setFilter(c)}
								aria-pressed={filter === c}
							>
								{c}
							</button>
						))}
					</div>

					<div className="project-grid">
						{visible.map((project, i) => (
							<SingleProject key={project.title} {...project} index={i + 1} />
						))}
					</div>
				</section>
			</main>

			<Footer />
		</div>
	);
};

export default Projects;
