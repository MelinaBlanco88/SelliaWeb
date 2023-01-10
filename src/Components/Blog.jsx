import { Button, Col, Container, Row } from "react-bootstrap";

// Add animation

export const Blog = () => {
	return (
		<section id='blog'>
			<Row className='p-5 pb-0 mb-0'>
				<Col sm={6} className='p-0 d-flex align-items-center mb-5 mb-md-0'>
					<Container fluid>
						<h2 className='fw-700 blue'>Mantente informado.</h2>
						<p>
							<strong className='fw-700 light-grey'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.</strong>
						</p>
						<Button className='background-green border-none py-2 px-4 btn btn-primary'>Visitar el blog</Button>
					</Container>
				</Col>
				<Col sm={6} className='p-0 m-0 mt-md-5 mt-lg-0'>
					<img src='./images/BlogScreen.png' alt='blog Screenshot' className='img-fluid' style={{ objectFit: "contain" }} />
				</Col>
			</Row>
		</section>
	);
};
