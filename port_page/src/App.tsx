import "./App.css";

export default function App() {
  return (
    <>
	<header>
		<nav className="head">
			<div className="logo"> Kitisak K. </div>
			<ul>
				<li><a href="#about">About</a></li>
				<li><a href="#contact">Contact</a></li>
			</ul>
		</nav>
	</header>

	<section className="hero">
		<div className="hero-content">
			<h1>Hello, I'm Kitisak K.</h1>
			<p>Telecommunication Engineer</p>
		</div>
	</section>

	<section className="Read receipt">
		<p>add project Read receipt</p>
	</section>
	
	<section className="Gis">
		<p>add project GIS</p>
	</section>

	<section className="Sub project">
		<p>add card project Sub project</p>
	</section>

	<section className="about">
		<h2>About Me</h2>
	</section>

	<footer>
		<p>&copy; 2026 Kitisak K. All rights reserved.</p>
	</footer>

    </>
  );
}