import { Button, Row, Col } from "react-bootstrap";

export const Hero = () => {
	const handleClick = (section) => {
		const component = document.getElementById(section);
		component.scrollIntoView({ behavior: "smooth", block: "start" });
	};

	return (
		<section id='hero'>
			<Row className='mx-3 mx-lg-5'>
				<Col sm={12} lg={8} className=' mt-5 pe-0'>
					<Col className='hero-cta ps-3'>
						<h1 className='fw-500 mb-0'>
							Convierte una conversación en una <strong>oportunidad</strong> de
							<span className='hero-curl-container'>
								<img className='hero-curl' src='./images/rulo.png' alt='' /> negocio
							</span>.
						</h1>

						<p className='hero-text mb-0 w-75 my-5'>
							Monitorea y mide cada interacción con tus clientes utilizando chatbots y agentes.
						</p>

						<Button className='mt-5 fw-500' onClick={() => handleClick("contact_us")}>Solicitar una demo</Button>
					</Col>
				</Col>
				<Col sm={12} lg={4} className='py-5 ps-0'>
					<div className='photo-container'>
						<img src='./images/hero-image.png' alt='' />

						<svg id='circular_text' viewBox='0 0 100 100'>
							<defs>
								<path
									id='circle'
									d='
										M 50, 50
										m -37, 0
										a 37,37 0 1,1 74,0
										a 37,37 0 1,1 -74,0'
								/>
							</defs>
							<text fontSize='11.7px'>
								<textPath href='#circle' className='fw-300'>Siempre disponible - Siempre disponible -</textPath>
							</text>
						</svg>
						<Row className='align-items-center justify-content-center mx-1  hero-image-badge mx-auto'>
							<p>
								<svg className='me-2' width='16' height='14' viewBox='0 0 18 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
									<path d='M9.72071 0.496882C9.39956 -0.0565768 8.6003 -0.056579 8.27915 0.496882L6.01744 4.39464C5.85879 4.66804 5.58459 4.85462 5.27203 4.90183L1.03344 5.54201C0.321537 5.64954 0.0718206 6.54838 0.626242 7.00771L3.78382 9.62373C4.0761 9.86589 4.21354 10.2479 4.14253 10.6207L3.31656 14.9583C3.18599 15.644 3.90581 16.1768 4.52344 15.8516L8.51461 13.7501C8.81839 13.5901 9.18147 13.5901 9.48524 13.7501L13.4764 15.8516C14.094 16.1768 14.8139 15.644 14.6833 14.9583L13.8573 10.6207C13.7863 10.2479 13.9238 9.86589 14.216 9.62373L17.3736 7.00771C17.928 6.54838 17.6783 5.64954 16.9664 5.54201L12.7278 4.90183C12.4153 4.85462 12.1411 4.66804 11.9824 4.39464L9.72071 0.496882Z'
										fill='white'/>
								</svg>
								+100 empresas confían en nosotros
							</p>
						</Row>
					</div>
				</Col>
			</Row>
		</section>
	);
};
