const INFO = {
	main: {
		title: "Akbar Danial Akma — Senior Software Engineer",
		name: "Akbar Danial Akma",
		email: "akbarajo1234@gmail.com",
		logo: "../logo.png",
	},

	socials: {
		github: "https://github.com/akbarakma",
		linkedin: "https://www.linkedin.com/in/akbarakma",
		cv: "/akbar-danial-akma-resume.pdf",
	},

	homepage: {
		title: "Senior Software Engineer",
		description:
			"Hey, I'm Akbar. Six years of building the unglamorous backend that keeps things moving: pickup routing that holds when a campaign day triples the traffic, marketplace syncs that can't drop an order, mobile apps shipped out of Jakarta, Singapore, and London. Now I'm at Juxta Labs building document AI for Indonesian institutions that can't afford a wrong answer. Mostly TypeScript, Go, and Python, plus a growing share of my time spent working out where AI agents earn their keep and where they don't.",
	},

	about: {
		title: "About Me and My Job Experience",
		description:
			"I'm Akbar, a Senior Software Engineer, six years in. I started on the backend and never really left, though I'll go to whichever layer the problem is actually hiding in. I've worked in three-person teams in London and in companies big enough that shipping meant convincing four other teams first. Both taught me things. Somewhere in there I built social apps, marketplace integrations, and a logistics system that clears a million requests on a bad day. What I care about hasn't shifted much: code the next person can pick up without calling me, and software that still works six months after launch. These days that means Juxta Labs, building document AI for hospitals and health regulators, the kind of user who notices straight away when a model is confidently wrong.",
	},

	publicSites: [
		{
			title: "Playground",
			url: "https://playground.akbarakma.com",
			displayUrl: "playground.akbarakma.com",
			description: "Small browser games and weekend projects. Free to play, with no ads or sign-up.",
			tag: "Games & experiments",
		},
		{
			title: "PromptLoom",
			url: "https://prompt.akbarakma.com",
			displayUrl: "prompt.akbarakma.com",
			description: "Turn a rough idea into a clear prompt you can give to an AI agent.",
			tag: "AI tool",
		},
		{
			title: "URL Shortener",
			url: "https://short.akbarakma.com",
			displayUrl: "short.akbarakma.com",
			description: "A simple link shortener that I built and run on my own server.",
			tag: "Utility",
		},
		{
			title: "Markdown Viewer",
			url: "https://md.akbarakma.com",
			displayUrl: "md.akbarakma.com",
			description: "A quiet place to read, write, preview, and share Markdown.",
			tag: "Writing tool",
		},
	],

	stats: [
		{ num: "6+", label: "years shipping" },
		{ num: "10+", label: "projects built" },
		{ num: "6+", label: "industries shipped in" },
		{ num: "1M+", label: "requests / peak day" },
	],

	highlightProjects: [
		"Markdown Viewer (Jakarta, Indonesia)",
		"CucianSiap (Jakarta, Indonesia)",
		"PromptLoom (Jakarta, Indonesia)",
		"Pickup Request Service Sicepat (Jakarta, Indonesia)",
		"Grow With Kg Website (Jakarta, Indonesia)",
		"Tannoi Mobile App (London, UK)",
	],

	projects: [
		{
			title: "CucianSiap (Jakarta, Indonesia)",
			description:
				"A laundry app for the small shops still running on a notebook and a calculator. Take the order on a phone, send the receipt over WhatsApp, get paid with QRIS, and hand the customer a link to watch their own wash. Next.js and FastAPI, free up to fifty orders a month.",
			link: "https://www.cuciansiap.id",
			company: "Zenvora",
			skills: ['TypeScript', 'Next.js', 'Python', 'FastAPI', 'PostgreSQL'],
		},

		{
			title: "PromptLoom (Jakarta, Indonesia)",
			description:
				"Turn a rough idea into a clear prompt you can give to an AI agent. Built it to stop rewriting the same instructions over and over, and host it at prompt.akbarakma.com.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
			linkText: "View Project",
			link: "https://prompt.akbarakma.com",
			company: "Personal Project",
			skills: ['TypeScript', 'React.js', 'LLM', 'Prompt Engineering'],
		},

		{
			title: "URL Shortener (Jakarta, Indonesia)",
			description:
				"A simple link shortener that I built and run on my own server. Short links, click tracking, no bloat.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/html/html.png",
			linkText: "View Project",
			link: "https://short.akbarakma.com",
			company: "Personal Project",
			skills: ['TypeScript', 'Node.js', 'PostgreSQL'],
		},

		{
			title: "Markdown Viewer (Jakarta, Indonesia)",
			description:
				"A Markdown editor and viewer with live preview, search, Mermaid diagrams, sharing, and an AI chat that reads the current document. I built it for my own daily work and host it at md.akbarakma.com.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
			linkText: "View Project",
			link: "https://md.akbarakma.com",
			company: "Personal Project",
			skills: ['TypeScript', 'Next.js', 'React.js', 'Markdown', 'Mermaid', 'AI'],
		},

		{
			title: "Akbar Akma Personal Website (Jakarta, Indonesia)",
			description:
				"This site. React, no framework and no CMS, so anyone curious can see the work without wading through a resume. Rebuilt it on a light theme once the dark one stopped feeling like me.",
			link: "https://akbarakma.com",
			company: "Personal Project",
			skills: ['TypeScript', 'React.js', 'HTML', 'CSS'],
		},

		{
			title: "Pickup Request Service Sicepat (Jakarta, Indonesia)",
			description:
				"A request-routing service written in TypeScript and PostgreSQL. On campaign days, it fans out thousands to millions of pickup requests while keeping data in sync across services through Kafka.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/html/html.png",
			linkText: "View Project",
			link: "https://www.sicepat.com",
			company: "Sicepat Ekspres",
			skills: ['TypeScript', 'AWS', 'Javascript', 'Snowflake', 'Kafka', 'Joblst', 'PostgreSQL', 'MariaDB'],
		},

		{
			title: "Mobile Pickup Sicepat (Jakarta, Indonesia)",
			description:
				"Migrated the backend off a legacy system onto an in-house Golang service. Redesigned the database layer so daily pickup traffic stays predictable and cheap to run.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/html/html.png",
			linkText: "View Project",
			link: "https://www.sicepat.com",
			company: "Sicepat Ekspres",
			skills: ['Golang', 'MongoDB', 'Kafka', 'Snowflake'],
		},

		{
			title: "TMS Web Sicepat (Jakarta, Indonesia)",
			description:
				"A PHP tool the office team uses to trace packages, manage pickups and rejections, and bulk-upload hundreds of AWBs at once. Most of the work went into finding and fixing the performance walls that showed up under load.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/html/html.png",
			linkText: "View Project",
			link: "https://www.sicepat.com",
			company: "Sicepat Ekspres",
			skills: ['PHP', 'HTML', 'CSS', 'Kafka', 'Ajax', 'PostgreSQL', 'Snowflake'],
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
				"Built Gramedia's company profile from a blank project. Public site plus an internal CMS for their team. React with Redux Thunk on the frontend, PostgreSQL on the back, hosted on Firebase and DigitalOcean.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
			linkText: "View Project",
			link: 'https://www.gramedia.com',
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
			company: "Valhalla",
			skills: ['TypeScript', 'React Native', 'Google Cloud Platform (GCP)', 'Node.js', 'React.js', 'PostgreSQL'],
		},

		{
			title: "Wrga Mobile Apps (Jakarta, Indonesia)",
			description:
				"A neighborhood-focused Android app. I built the backend for local posts, events, and business listings, and wired up live and group chat with GetStream.io so the community could actually talk to each other.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/html/html.png",
			linkText: "View Project",
			link: null,
			company: "Valhalla",
			skills: ['TypeScript', 'React Native', 'Google Cloud Platform (GCP)', 'Node.js', 'React.js', 'PostgreSQL'],
		},

		{
			title: "Tannoi Mobile App (London, UK)",
			description:
				"A voice-first social app on iOS and Android. I built the backend from scratch: voice-note storage on Google Cloud, social login across Google, Facebook, and Apple, and a few timezone headaches to sort out since the server lived in London.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
			linkText: "View Project",
			link: null,
			company: "Valhalla",
			skills: ['TypeScript', 'React Native', 'Google Cloud Platform (GCP)', 'Node.js', 'React.js', 'PostgreSQL'],
		},

		{
			title: "Medilab Website (Jakarta, Indonesia)",
			description:
				"During the COVID peak, I worked with a medical lab to build a patient registration and symptom-tracking site, with a CMS their admins could actually run themselves. A lot of the work went into locking down the patient data properly, the rest into making sure the flow was fast enough for people who weren't there to enjoy the UX.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/html/html.png",
			linkText: "View Project",
			link: null,
			company: "Medilab",
			skills: ['TypeScript', 'Node.js', 'React.js', 'PostgreSQL', 'HTML', 'CSS'],
		},
	],

	jobExperience: [
		{
			title: "Juxta Labs",
			description:
				"Document AI for institutions that can't afford a wrong answer. A monitoring console for a live claim-coding pipeline, a finance and HR ERP shaped to match what hospitals have already run for a decade, and a hardened browser for regulated desktops. Most of the work is making a model's output into something a person will put their name on.",
			logo: "juxtalabs_logo.jpeg",
			linkText: "View Project",
			link: "https://www.juxtalabs.io",
			years: '2026 - Current',
			role: 'Senior Software Engineer'
		},

		{
			title: "Sicepat Ekspres Indonesia",
			description:
				"Led work on core logistics systems: high-volume data change requests, tuning Postgres for better throughput, and building responsive interfaces across the stack. Backend in Golang and TypeScript, frontend in PHP and React.",
			logo: "sicepat_ekspres_indonesia_logo.jpeg",
			linkText: "View Project",
			link: "https://www.sicepat.com",
			years: '2022 - 2026',
			role: 'Senior Software Engineer'
		},

		{
			title: "Hubbed",
			description:
				"Built the e-commerce and inventory platform that syncs with Shopee and Lazada in real time, so orders and stock stay consistent regardless of which marketplace the customer came from.",
			logo: "hubbedinventory_logo.jpeg",
			linkText: "View Project",
			link: 'https://www.hubbed.co',
			years: '2022 - 2022',
			role: 'Full Stack Engineer'
		},

		{
			title: "Gramedia",
			description:
				"Partnered with Gramedia to take their Grow With Kg website from idea to launch. Public site, internal CMS, and the infrastructure around both.",
			logo: "gramedia_logo.jpeg",
			linkText: "View Project",
			link: 'https://www.gramedia.com',
			years: '2022 - 2022',
			role: 'Freelance'
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
				"Built and shipped the COVID-19 patient registration platform for a medical lab, end to end, with security tight enough for health data and a CMS simple enough for staff to run it themselves.",
			logo: "medilab_logo.jpeg",
			linkText: "View Project",
			link: null,
			years: '2020 - 2020',
			role: 'Full Stack Engineer'
		},

		{
			title: "Hacktiv8 Indonesia",
			description:
				"Completed Hacktiv8's intensive fullstack bootcamp. Shipped projects using React, Node, Express, and MongoDB, and came out the other end knowing this was the work I wanted to spend my career on.",
			logo: "hacktiv8_logo.jpeg",
			linkText: "View Project",
			link: "https://www.hacktiv8.com",
			years: '2019 - 2020',
			role: 'Full Stack Javascript Developer'
		},

	],
};

export default INFO;
