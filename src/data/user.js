const INFO = {
	main: {
		title: "Akbar Danial Akma — Fullstack Engineer",
		name: "Akbar Danial Akma",
		email: "akbarajo1234@gmail.com",
		logo: "../logo.png",
	},

	socials: {
		github: "https://github.com/akbarakma",
		linkedin: "https://www.linkedin.com/in/akbarakma",
		cv: "https://github.com/akbarakma/akbar-portofolio/blob/master/public/akbar-danial-akma-resume.pdf",
	},

	homepage: {
		title: "Fullstack Engineer",
		description:
			"Hey, I'm Akbar — a Fullstack Engineer with 5+ years of building complex applications end-to-end. I'm comfortable across the stack (TypeScript, Go, Python, Node.js, React), shipping everything from APIs and data layers to the interfaces sitting on top of them. I've delivered logistics platforms that absorb millions of requests on event days, marketplace integrations, and mobile apps used in Jakarta, Singapore, and London. Lately I've been pulled into the AI scene — building with LLMs and AI agents to see how far they can push the products I work on.",
		currentlyItems: [
			"wrangling AI agents.",
			"scaling logistics at millions of requests.",
			"yes, I still use Vim.",
		],
	},

	about: {
		title: "About Me and My Job Experience",
		description:
			"Hey, thanks for stopping by. I'm Akbar — a Fullstack Engineer with 5+ years of experience, equally at home shipping APIs, data layers, and the UIs that sit on top of them. Over the years I've built software with small teams in London and with larger companies in Jakarta and Singapore: voice-based social apps, marketplace integrations, and logistics systems that stay up when traffic surges past a million requests on event days. I care about writing code that's clean enough to hand off and reliable enough to stop worrying about. I'm curious by default — most recently that curiosity has pulled me into AI agents, and I've been building small experiments to see how they reshape the way we build products. If any of that sounds interesting, the roles that got me here are below, and the Projects section has the full list of what I've built.",
	},

	homepageProjects: [
		{
			title: "Tannoi Mobile App (London, UK)",
			description:
				"A voice-first social app on iOS and Android. I built the backend from scratch — voice-note storage on Google Cloud, social login across Google, Facebook, and Apple, and a few timezone headaches to sort out since the server lived in London.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
			linkText: "View Project",
			link: null,
		},

		{
			title: "Hubbed (Singapore)",
			description:
				"An e-commerce and inventory platform integrated with Shopee and Lazada. I built the sync layer that keeps orders and stock aligned in real time, no matter which marketplace the customer came from.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/html/html.png",
			linkText: "View Project",
			link: 'https://www.hubbed.co',
		},

		{
			title: "Grow With Kg Website (Jakarta, Indonesia)",
			description:
				"Built Gramedia's company profile from a blank project — public site plus an internal CMS for their team. React with Redux Thunk on the frontend, PostgreSQL on the back, hosted on Firebase and DigitalOcean.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/html/html.png",
			linkText: "View Project",
			link: 'https://www.growwithkg.id',
		},

		{
			title: "Fourz Mobile Apps (London, UK)",
			description:
				"An iOS app for creating and ranking content in a four-image format. Set up Firebase deep linking so the login flow would actually hold, and built the notification system with Gmail Node Mailer.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/html/html.png",
			linkText: "View Project",
			link: null,
		},

	],

	projects: [
		{
			title: "Pickup Request Service Sicepat (Jakarta, Indonesia)",
			description:
				"A request-routing service written in TypeScript and PostgreSQL. On campaign days, it fans out thousands to millions of pickup requests while keeping data in sync across services through Kafka.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/html/html.png",
			linkText: "View Project",
			link: null,
			company: "Sicepat Ekspres Indonesia",
			skills: ['TypeScript', 'AWS', 'Javascript', 'Snowflake', 'Kafka', 'Joblst', 'PostgreSQL', 'MariaDB'],
		},

		{
			title: "Mobile Pickup Sicepat (Jakarta, Indonesia)",
			description:
				"Migrated the backend off a legacy system onto an in-house Golang service. Redesigned the database layer so daily pickup traffic stays predictable and cheap to run.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/html/html.png",
			linkText: "View Project",
			link: null,
			company: "Sicepat Ekspres Indonesia",
			skills: ['Golang', 'MongoDB', 'Kafka', 'Snowflake'],
		},

		{
			title: "TMS Web Sicepat (Jakarta, Indonesia)",
			description:
				"A PHP tool the office team uses to trace packages, manage pickups and rejections, and bulk-upload hundreds of AWBs at once. Most of the work went into finding and fixing the performance walls that showed up under load.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/html/html.png",
			linkText: "View Project",
			link: null,
			company: "Sicepat Ekspres Indonesia",
			skills: ['PHP', 'HTML', 'CSS', 'Kafka', 'Ajax', 'PostgreSQL', 'Snowflake'],
		},

		{
			title: "Akbar Danial Akma Portfolio Website (Jakarta, Indonesia)",
			description:
				"This site. Built with React so anyone curious — recruiters, teammates, future me — can see what I've worked on without scrolling through a resume.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/html/html.png",
			linkText: "View Project",
			link: "https://www.akbarakma.tech",
			company: "Freelance",
			skills: ['TypeScript', 'React.js', 'HTML', 'CSS'],
		},

		{
			title: "Hubbed (Singapore)",
			description:
				"An e-commerce and inventory platform integrated with Shopee and Lazada. I built the sync layer that keeps orders and stock aligned in real time, no matter which marketplace the customer came from.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
			linkText: "View Project",
			link: 'https://www.hubbed.co',
			company: "Hubbed",
			skills: ['TypeScript', 'JavaScript', 'PostgreSQL', 'Node.js'],
		},

		{
			title: "Grow With Kg Website (Jakarta, Indonesia)",
			description:
				"Built Gramedia's company profile from a blank project — public site plus an internal CMS for their team. React with Redux Thunk on the frontend, PostgreSQL on the back, hosted on Firebase and DigitalOcean.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
			linkText: "View Project",
			link: 'https://www.growwithkg.id',
			company: "Gramedia",
			skills: ['TypeScript', 'Firebase', 'React.js', 'Redux Thunk', 'JavaScript', 'PostgreSQL', 'Node.js'],
		},

		{
			title: "Fourz Mobile Apps (London, UK)",
			description:
				"An iOS app for creating and ranking content in a four-image format. Set up Firebase deep linking so the login flow would actually hold, and built the notification system with Gmail Node Mailer.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/html/html.png",
			linkText: "View Project",
			link: null,
			company: "Valhalla Technologies",
			skills: ['TypeScript', 'React Native', 'Google Cloud Platform (GCP)', 'Node.js', 'React.js', 'PostgreSQL'],
		},

		{
			title: "Wrga Mobile Apps (Jakarta, Indonesia)",
			description:
				"A neighborhood-focused Android app. I built the backend for local posts, events, and business listings, and wired up live and group chat with GetStream.io so the community could actually talk to each other.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/html/html.png",
			linkText: "View Project",
			link: null,
			company: "Valhalla Technologies",
			skills: ['TypeScript', 'React Native', 'Google Cloud Platform (GCP)', 'Node.js', 'React.js', 'PostgreSQL'],
		},

		{
			title: "Tannoi Mobile App (London, UK)",
			description:
				"A voice-first social app on iOS and Android. I built the backend from scratch — voice-note storage on Google Cloud, social login across Google, Facebook, and Apple, and a few timezone headaches to sort out since the server lived in London.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
			linkText: "View Project",
			link: null,
			company: "Valhalla Technologies",
			skills: ['TypeScript', 'React Native', 'Google Cloud Platform (GCP)', 'Node.js', 'React.js', 'PostgreSQL'],
		},

		{
			title: "Medilab Website (Jakarta, Indonesia)",
			description:
				"During the COVID peak, I worked with a medical lab to build a patient registration and symptom-tracking site, with a CMS their admins could actually run themselves. A lot of the work went into locking down the patient data properly — the rest into making sure the flow was fast enough for people who weren't there to enjoy the UX.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/html/html.png",
			linkText: "View Project",
			link: null,
			company: "PT. Prima Indo Medilab",
			skills: ['TypeScript', 'Node.js', 'React.js', 'PostgreSQL', 'HTML', 'CSS'],
		},
	],

	jobExperience: [
		{
			title: "Sicepat Ekspres Indonesia",
			description:
				"Led work on core logistics systems — handling high-volume data change requests, tuning Postgres for better throughput, and building responsive interfaces across the stack. Backend in Golang and TypeScript, frontend in PHP and React.",
			logo: "sicepat_ekspres_indonesia_logo.jpeg",
			linkText: "View Project",
			link: "https://www.sicepat.com",
			years: '2022 - 2026',
			role: 'Senior Software Engineer'
		},

		{
			title: "Hubbed",
			description:
				"Built the e-commerce and inventory platform that syncs with Shopee and Lazada in real time — orders and stock stay consistent regardless of which marketplace the customer came from.",
			logo: "hubbedinventory_logo.jpeg",
			linkText: "View Project",
			link: 'https://www.hubbed.co',
			years: '2022 - 2022',
			role: 'Full Stack Engineer'
		},

		{
			title: "Gramedia",
			description:
				"Partnered with Gramedia to take their Grow With Kg website from idea to launch — public site, internal CMS, and the infrastructure around both.",
			logo: "gramedia_logo.jpeg",
			linkText: "View Project",
			link: 'https://www.growwithkg.id',
			years: '2022 - 2022',
			role: 'Full Stack Engineer'
		},

		{
			title: "Valhalla Technologies",
			description:
				"Owned the backend lifecycle for a portfolio of apps (Tannoi, Fourz, Wrga) from concept through deployment. Secure REST APIs, clean front-end integration, and servers I trusted to stay quiet through the weekend.",
			logo: "default_company_logo.png",
			linkText: "View Project",
			link: null,
			years: '2020 - 2021',
			role: 'Back End Developer'
		},

		{
			title: "PT. Prima Indo Medilab",
			description:
				"Built and shipped the COVID-19 patient registration platform for a medical lab — end to end, with security tight enough for health data and a CMS simple enough for staff to run it themselves.",
			logo: "medilab_logo.jpeg",
			linkText: "View Project",
			link: null,
			years: '2020 - 2020',
			role: 'Full Stack Engineer'
		},

		{
			title: "Hacktiv8 Indonesia",
			description:
				"Completed Hacktiv8's intensive fullstack bootcamp. Shipped projects using React, Node, Express, and MongoDB — and came out the other end knowing this was the work I wanted to spend my career on.",
			logo: "hacktiv8_logo.jpeg",
			linkText: "View Project",
			link: "https://www.hacktiv8.com",
			years: '2019 - 2020',
			role: 'Full Stack Javascript Developer'
		},

	],
};

export default INFO;
