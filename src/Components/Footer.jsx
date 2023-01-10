import { Col, Row } from "react-bootstrap";
import { SocialIcon } from "react-social-icons";

export const Footer = () => {
	return (
		<div id='footer' className='extended-background'>
			<section>
				<Row className='mx-3 py-5'>
					<Col sm={4} className='text-center text-lg-start'>
						<img src='./images/SelliaLogoFooter.png' className='img-fluid' width='212px' height='65px' />
						<p className='fw-500 mb-0 mt-4 text-md-start'>Copyright © 2022 Sellia, All rights reserved.</p>
					</Col>
					<Col sm={5} className='text-center'>
						<ul className='list-group'>
							<li className='list-group-item'>
								<a className='text-decoration-none' href='#about_us'>
									¿Quienes somos?
								</a>
							</li>
							<li className='list-group-item'>
								<a className='text-decoration-none' href='#products'>
									Productos
								</a>
							</li>
							<li className='list-group-item'>
								<a className='text-decoration-none' href='#blog'>
									Blog
								</a>
							</li>
							<li className='list-group-item'>
								<a className='text-decoration-none' href='#contact_us'>
									Contacto
								</a>
							</li>

							<li className='list-group-item'>
								<a className='text-decoration-none' href='#'>
								Aviso de privacidad
								</a>
							</li>

							<li className='list-group-item'>
								<a className='text-decoration-none' href='#'>
								Términos y condiciones
								</a>
							</li>
						</ul>
					</Col>
					<Col sm={3} className='d-flex content-social'>
						<SocialIcon
							target='_blank'
							rel='noreferrer'
							url='https://www.facebook.com/sellia.business/'
							style={{ height: 35, width: 35 }}
						/>

						<SocialIcon
							target='_blank'
							rel='noreferrer'
							url='https://www.instagram.com/sellia_business/'
							style={{ height: 35, width: 35 }}
						/>

						<SocialIcon
							target='_blank'
							rel='noreferrer'
							url='https://www.linkedin.com/company/sellia-business/'
							style={{ height: 35, width: 35 }}
						/>
					</Col>
				</Row>
			</section>
		</div>
	);
};
