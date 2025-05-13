const INFO = {
	main: {
		title: "Akbar Akma Portofolio",
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
		title: "Full Stack Developer",
		description:
			"Hello, my name is Akbar Danial Akma. I design and build web and mobile applications from the ground up—handling everything from backend architecture to user interface. Whether working solo or with a team, I focus on creating efficient, scalable, and reliable solutions that solve real-world problems. From social platforms to logistics systems, I’ve contributed to products that serve thousands of users, ensuring strong performance, smooth user experience, and long-term maintainability.",
	},

	about: {
		title: "About Me and My Job Experience",
		description:
			"First of all, hello. My name is Akbar and thank you for visiting my website where I can showcase my works. Over the years, I've had the chance to work on a wide range of projects, from building apps from scratch to contributing to larger team efforts. I'm a Fullstack Developer who enjoys solving problems, learning new things quickly, and finding better ways to do things. I care about writing clean, efficient code and creating solutions that can scale. I'm proud of how far I've come, but I'm always looking for ways to grow and make an even bigger impact through my work. If you're curious about the projects and roles that shaped my journey, feel free to explore my job experiences below. Also you can check all the projects i've made while working at my job in the Projects Section.",
	},

	articles: {
		title: "I'm passionate about pushing the boundaries of what's possible and inspiring the next generation of innovators.",
		description:
			"Chronological collection of my long-form thoughts on programming, leadership, product design, and more.",
	},

	homepageProjects: [
		{
			title: "Tannoi Mobile App (London, UK)",
			description:
				"A social media mobile app enabling voice-based discussions and responses. Contributed from initial concept to launch, implemented voice note storage with Google Cloud, integrated Google, Facebook, and Apple login systems, and resolved timezone challenges for international users.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
			linkText: "View Project",
			link: null,
		},

		{
			title: "Hubbed (Singapore)",
			description:
				"Developed an E-commerce and Inventory Management System with seamless integration to platforms like Shopee and Lazada, enabling smooth online transactions, real-time data synchronization, and efficient order and inventory management.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/html/html.png",
			linkText: "View Project",
			link: 'https://www.hubbed.co',
		},

		{
			title: "Grow With Kg Website (Jakarta, Indonesia)",
			description:
				"Worked with Gramedia to design, develop, and deploy their company profile website from the ground up. The project was hosted using Firebase and DigitalOcean, with PostgreSQL as the backend database. Built the frontend using React JS with Redux and Thunk, covering both the public-facing user interface and an internal CMS for admin management.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/html/html.png",
			linkText: "View Project",
			link: 'https://www.growwithkg.id',
		},

	],

	projects: [
		{
			title: "Pickup Request Service Sicepat (Jakarta, Indonesia)",
			description:
				"Developed with TypeScript and PostgreSQL to handle thousands (even millions) of requests on event days, ensuring data synchronization across services using Kafka for smooth processing.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/html/html.png",
			linkText: "View Project",
			link: null,
			company: "Sicepat Ekspres Indonesia",
			skills: ['TypeScript', 'AWS', 'Javascript', 'Snowflake', 'Kafka', 'Joblst', 'PostgreSQL', 'MariaDB'],
		},

		{
			title: "Mobile Pickup Sicepat (Jakarta, Indonesia)",
			description:
				"Migrated the backend from a legacy system to an in-house solution using Golang. Designed and maintained an efficient database system to handle hundreds of pickup requests daily, ensuring reliability and responsiveness under operational load.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/html/html.png",
			linkText: "View Project",
			link: null,
			company: "Sicepat Ekspres Indonesia",
			skills: ['Golang', 'MongoDB', 'Kafka', 'Snowflake'],
		},

		{
			title: "TMS Web Sicepat (Jakarta, Indonesia)",
			description:
				"A web application built with PHP for both frontend and backend, designed to help office staff track package routes and history, manage pickups and rejections, and support bulk uploads of hundreds of AWBs. Faced and resolved performance challenges to ensure system stability during high-load operations.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/html/html.png",
			linkText: "View Project",
			link: null,
			company: "Sicepat Ekspres Indonesia",
			skills: ['PHP', 'HTML', 'CSS', 'Kafka', 'Ajax', 'PostgreSQL', 'Snowflake'],
		},

		{
			title: "Akbar Danial Akma Portofolio Website (Jakarta, Indonesia)",
			description:
				"Created a ReactJS-based portfolio website that makes it easy for people to get to know me better. With a simple and user-friendly interface, visitors can explore my skills, experiences, and projects effortlessly. It's a convenient way to access information about me and see into my portfolio.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/html/html.png",
			linkText: "View Project",
			link: "https://www.akbarakma.tech",
			company: "Freelance",
			skills: ['TypeScript', 'React.js', 'HTML', 'CSS'],
		},

		{
			title: "Hubbed (Singapore)",
			description:
				"Developed an E-commerce and Inventory Management System with seamless integration to platforms like Shopee and Lazada, enabling smooth online transactions, real-time data synchronization, and efficient order and inventory management.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
			linkText: "View Project",
			link: 'https://www.hubbed.co',
			company: "Hubbed",
			skills: ['TypeScript', 'JavaScript', 'PostgreSQL', 'Node.js'],
		},

		{
			title: "Grow With Kg Website (Jakarta, Indonesia)",
			description:
				"Worked with Gramedia to design, develop, and deploy their company profile website from the ground up. The project was hosted using Firebase and DigitalOcean, with PostgreSQL as the backend database. Built the frontend using React JS with Redux and Thunk, covering both the public-facing user interface and an internal CMS for admin management.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
			linkText: "View Project",
			link: 'https://www.growwithkg.id',
			company: "Gramedia",
			skills: ['TypeScript', 'Firebase', 'React.js', 'Redux Thunk', 'JavaScript', 'PostgreSQL', 'Node.js'],
		},

		{
			title: "Fourz Mobile Apps (London, UK)",
			description:
				"An iOS app for creating and ranking content in a unique four-image format. Built deep linking for smooth login and user flow, and added email communication functionality using Gmail Node Mailer to boost user engagement.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/html/html.png",
			linkText: "View Project",
			link: null,
			company: "Valhalla Technologies",
			skills: ['TypeScript', 'React Native', 'Google Cloud Platform (GCP)', 'Node.js', 'React.js', 'PostgreSQL'],
		},

		{
			title: "Wrga Mobile Apps (Jakarta, Indonesia)",
			description:
				"A community-driven Android app focused on neighborhood interaction. Developed features for local content sharing, events, and business listings. Integrated live and group chat capabilities using GetStream.io to enhance real-time community engagement.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/html/html.png",
			linkText: "View Project",
			link: null,
			company: "Valhalla Technologies",
			skills: ['TypeScript', 'React Native', 'Google Cloud Platform (GCP)', 'Node.js', 'React.js', 'PostgreSQL'],
		},

		{
			title: "Tannoi Mobile App (London, UK)",
			description:
				"A social media mobile app enabling voice-based discussions and responses. Contributed from initial concept to launch, implemented voice note storage with Google Cloud, integrated Google, Facebook, and Apple login systems, and resolved timezone challenges for international users.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
			linkText: "View Project",
			link: null,
			company: "Valhalla Technologies",
			skills: ['TypeScript', 'React Native', 'Google Cloud Platform (GCP)', 'Node.js', 'React.js', 'PostgreSQL'],
		},

		{
			title: "Medilab Website (Jakarta, Indonesia)",
			description:
				"Collaborated with a client to design, build, and deploy a specialized website aimed at registering COVID-19 patients and documenting their symptoms. Developed a user-friendly Content Management System (CMS) to help both administrators and users efficiently manage and input patient data. Focused heavily on implementing strong security measures to protect sensitive health information and ensure privacy. The result was a smooth, intuitive web experience that supported accurate symptom tracking and streamlined the patient registration process during a critical time.",
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
				"Handled data change requests and implemented key logic for critical logistics operations, while improving database performance through SQL optimization and indexing using Golang and TypeScript for backend services. Built dynamic frontend interfaces using PHP and React to deliver a seamless and responsive.",
			logo: "sicepat_ekspres_indonesia_logo.jpeg",
			linkText: "View Project",
			link: "https://www.sicepat.com",
			years: '2022 - 2025',
			role: 'Senior Software Engineer'
		},

		{
			title: "Hubbed",
			description:
				"Developed an E-commerce and Inventory Management System with seamless integration to platforms like Shopee and Lazada, enabling smooth online transactions, real-time data synchronization, and efficient order and inventory management.",
			logo: "hubbedinventory_logo.jpeg",
			linkText: "View Project",
			link: 'https://www.hubbed.co',
			years: '2022 - 2022',
			role: 'Full Stack Engineer'
		},

		{
			title: "Gramedia",
			description:
				"Worked with Gramedia to design, develop, and deploy their company profile website from the ground up. The project was hosted using Firebase and DigitalOcean, with PostgreSQL as the backend database. Built the frontend using React JS with Redux and Thunk, covering both the public-facing user interface and an internal CMS for admin management.",
			logo: "gramedia_logo.jpeg",
			linkText: "View Project",
			link: 'https://www.growwithkg.id',
			years: '2022 - 2022',
			role: 'Full Stack Engineer'
		},

		{
			title: "Valhalla Technologies",
			description:
				"Led the development of a backend application lifecycle, from concept to deployment. Secure backend application with RESTful APIs, enabling seamless front-end integration and high availability on a droplet hosting environment.",
			logo: "default_company_logo.png",
			linkText: "View Project",
			link: null,
			years: '2020 - 2021',
			role: 'Back End Developer'
		},

		{
			title: "PT. Prima Indo Medilab",
			description:
				"Collaborated with a client to design, build, and deploy a specialized website aimed at registering COVID-19 patients and documenting their symptoms. Developed a user-friendly Content Management System (CMS) to help both administrators and users efficiently manage and input patient data. Focused heavily on implementing strong security measures to protect sensitive health information and ensure privacy. The result was a smooth, intuitive web experience that supported accurate symptom tracking and streamlined the patient registration process during a critical time.",
			logo: "medilab_logo.jpeg",
			linkText: "View Project",
			link: null,
			years: '2020 - 2020',
			role: 'Full Stack Engineer'
		},

		{
			title: "Hacktiv8 Indonesia",
			description:
				"I completed an intensive Fullstack JavaScript Developer bootcamp, where I gained hands-on experience with both frontend and backend technologies. Throughout the program, I built real-world projects using tools like React, Node.js, Express, and MongoDB.",
			logo: "hacktiv8_logo.jpeg",
			linkText: "View Project",
			link: "https://www.hacktiv8.com",
			years: '2019 - 2020',
			role: 'Full Stack Javascript Developer'
		},

	],
};

export default INFO;
