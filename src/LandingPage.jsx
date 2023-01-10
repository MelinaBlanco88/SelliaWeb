import { useState } from "react";
import { Container } from "react-bootstrap";
import { AboutUs, Blog, Clients, ContactUs, DemoButton, Features, Footer, Hero, NavBar, Products, Support } from "./Components";
import "animate.css";

export const LandingPage = () => {
	const [bgPosition, setBgPosition] = useState("0 0");
	const handleMouseMove = (e) => {
		const x = -e.clientX / 15;
		const y = -e.clientY / 15;
		setBgPosition(x + "px " + y + "px");
	};

	return (
		<>
			<NavBar />
			<Container className='g-0' fluid>
				<div
					onMouseMove={(e) => handleMouseMove(e)}
					style={{ backgroundPosition: bgPosition }}
					className='extended-background icons-background'
				>
					<Hero />
					<Clients />
				</div>
				<AboutUs />
				<Products />

				<Features />
				<Support />
				<Blog />
				

				<DemoButton />
				<Footer />
			</Container>
		</>
	);
};
