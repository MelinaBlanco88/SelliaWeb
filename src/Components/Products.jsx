import { useState } from "react";
import { Col, Row } from "react-bootstrap";

export const Products = () => {
	let initialActiveItem = "Franquicias";
	const [activeBackground, setActiveBackground] = useState(`url("../images/Sellia_${initialActiveItem}.gif")`);
	const handleBackgroundChange = (product, { target }) => {
		for (let i = 0; i < target.parentNode.childNodes.length; i++) {
			const element = target.parentNode.childNodes[i];
			element.classList.remove("active-item");
		}
		setActiveBackground(`url("../images/Sellia_${product}.gif")`);
		target.classList.add("active-item");
	};
	return (
		<div className='py-5 extended-background icons-background'>
			<section id='products'>
				<Row className='my-5'>
					<Col sm={12} lg={4} className='pt-5 '>
						<h4 className='text-center w-75 mx-auto pb-5 fw-600'>Un producto para cada necesidad</h4>
						<Col sm={12}>
							<div className='products-grid mx-3 mx-lg-5'>
								<div
									onClick={(e) => handleBackgroundChange("Franquicias", e)}
									className='products-grid-item d-flex justify-content-center active-item align-items-center'
								>
									<p className='fw-700 dark-blue py-4 my-3'>Franquicias</p>
								</div>
								<div
									onClick={(e) => handleBackgroundChange("Enterprise", e)}
									className='products-grid-item  d-flex justify-content-center align-items-center'
								>
									<p className='fw-700 dark-blue py-4 my-3'>Enterprise</p>
								</div>
								<div
									onClick={(e) => handleBackgroundChange("Trivias", e)}
									className='products-grid-item d-flex justify-content-center align-items-center'
								>
									<p className='fw-700 dark-blue py-4 my-3'>Trivias</p>
								</div>
								<div
									onClick={(e) => handleBackgroundChange("RRHH", e)}
									className='products-grid-item d-flex justify-content-center align-items-center'
								>
									<p className='fw-700 dark-blue py-4 my-3'>RRHH</p>
								</div>
								<div
									onClick={(e) => handleBackgroundChange("AMedida", e)}
									className='d-flex full-width-product mb-4 justify-content-center align-items-center'
								>
									<p className='fw-700 dark-blue py-4 my-3'>Hazlo a tu medida!</p>
								</div>
							</div>
						</Col>
					</Col>
					<Col sm={12} lg={8} id='products-column' className='background-light-blue'>
						<Row>
							<Col sm={7} className='text-center mt-5'>
								<h3 className='fw-700 dark-blue my-3'>Productos</h3>
								<p className='text-product fw-500 mx-2 mb-0'>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc, amet donec morbi vitae semper at vulputate. Elementum
									vitae, mattis orci ultrices scelerisque sed. Magna praesent lectus quisque diam vivamus sed. Amet, egestas malesuada
									tortor augue pellentesque. Ut aliquam blandit vulputate pulvinar ipsum risus. Nulla neque augue et tempor viverra odio
									facilisi sed. Interdum lorem urna augue in posuere ut quis id commodo. Arcu orci, neque et elementum. Placerat lacus est
									lobortis ut. Aliquet in a et pulvinar eu rhoncus at quis. Venenatis, diam diam in sed integer. Aliquet at luctus
									pellentesque blandit dignissim ipsum.
								</p>
							</Col>
							<Col sm={4} className='mt-5 justify-content-center d-flex pb-5'>
								{/* animate__animated animate__shakeY */}
								<div className='phone-container  ' style={{ backgroundImage: activeBackground }}>
									<span className='phone-mockup'></span>
									{/* <img src='./images/selliaPhoneNobg.png' className='img-fluid phone ' alt='Sellia phone' />
									<img src='./images/Sellia_Franquicias.gif' className='img-fluid phone-content' alt='Sellia phone content' /> */}
								</div>
							</Col>
						</Row>
					</Col>
				</Row>
			</section>
		</div>
	);
};
