import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import "./app.css";
import ScrollToTop from "./components/common/scrollToTop";

const Homepage = lazy(() => import("./pages/homepage"));
const About = lazy(() => import("./pages/about"));
const Projects = lazy(() => import("./pages/projects"));
const Contact = lazy(() => import("./pages/contact"));
const Notfound = lazy(() => import("./pages/404"));

config.autoAddCss = false

function App() {

	return (
		<div className="App">
			<ScrollToTop />
			<Suspense fallback={null}>
				<Routes>
					<Route path="/" element={<Homepage />} />
					<Route path="/about" element={<About />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="*" element={<Notfound />} />
				</Routes>
			</Suspense>
		</div>
	);
}

export default App;
