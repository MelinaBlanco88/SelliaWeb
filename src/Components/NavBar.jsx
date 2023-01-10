import { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Cross } from "hamburger-react";
export const NavBar = () => {
	const [position, setPosition] = useState({ left: "100%", width: 0 });
	const [isOpen, setOpen] = useState(false);

	const handleMouseEnter = (e) => {
		setPosition({ left: e.target.getBoundingClientRect().x, width: e.target.offsetWidth });
	};
	const removeStripe = () => {
		setPosition({ left: "100%", width: 0 });
	};

	const handleClick = (section) => {
		const component = document.getElementById(section);
		component.scrollIntoView({ behavior: "smooth", block: "start" });
	};

	return (
		<section id='nav_bar'>
			<Navbar expand='md' expanded={isOpen}>
				<Container>
					<Navbar.Brand href='/'>
						<img className='ms-0' src='./images/SelliaLogoFooter.png' alt='Sellia logo' height='36.79px' width='120px' />
					</Navbar.Brand>
					<Cross toggled={isOpen} toggle={setOpen} label='Mostrar menu' />

					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='ms-auto text-center text-md-start'>
							<Nav.Link
								onClick={() => handleClick("about_us")}
								onMouseEnter={(e) => handleMouseEnter(e)}
								onMouseLeave={() => removeStripe()}
								className='mb-0'
							>
								Sobre Nosotros
							</Nav.Link>
							<Nav.Link
								onClick={() => handleClick("products")}
								onMouseEnter={(e) => handleMouseEnter(e)}
								onMouseLeave={() => removeStripe()}
								className='mb-0'
							>
								Productos
							</Nav.Link>
							<Nav.Link
								onClick={() => handleClick("blog")}
								onMouseEnter={(e) => handleMouseEnter(e)}
								onMouseLeave={() => removeStripe()}
								className='mb-0'
							>
								Blog
							</Nav.Link>
							<Nav.Link
								onClick={() => handleClick("contact_us")}
								onMouseEnter={(e) => handleMouseEnter(e)}
								onMouseLeave={() => removeStripe()}
								className='mb-0'
							>
								Contacto
							</Nav.Link>
							<div className='stripe' style={{ left: position.left, width: position.width }} />
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</section>
	);
};
