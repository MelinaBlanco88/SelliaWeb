import { Button, Col, Container, Row } from "react-bootstrap";
import { ContactForm } from "./ContactForm";
import { SocialIcon } from "react-social-icons";

export const ContactUs = () => {
	return (
		<div id='contact_us' className='extended-background'>
			<section>
				<Row>
					<Col sm={12} lg={5} className='background-primary text-white column-left'>
						<h3 className='fw-300 text-center mb-5 pt-5 '>
							Pongámonos en <strong className='fw-700'>contacto.</strong>
						</h3>

						<Row className='contact-info-row mt-4 '>
							<Col sm={3} className='d-flex justify-content-center justify-content-md-end'>
								<SocialIcon
									target='_blank'
									rel='noreferrer'
									url='https://api.whatsapp.com/send/?phone=523317878856&text&type=phone_number&app_absent=0/'
									style={{ height: 30, width: 30 }}
									bgColor='#ffffff'
								/>
							</Col>
							<Col className='text-center text-md-start'>
								<h6>Whatsapp</h6>
								<p>Nuestro equipo está para ayudar.</p>
								<a
									href='https://api.whatsapp.com/send/?phone=523317878856&text&type=phone_number&app_absent=0'
									target='_blank'
									className='text-white text-decoration-none'
								>
									+52 33 1787 8856
								</a>
							</Col>
						</Row>
						<Row className='contact-info-row  my-5'>
							<Col sm={3} className='d-flex justify-content-center justify-content-md-end'>
								<SocialIcon
									target='_blank'
									rel='noreferrer'
									url='https://t.me/selliasoportebot'
									style={{ height: 30, width: 30 }}
									bgColor='#ffffff'
								/>
							</Col>
							<Col className='text-center text-md-start'>
								<h6>Telegram</h6>
								<p>Nuestro equipo está para ayudar.</p>
								<a href='https://t.me/selliasoportebot' target='_blank' className='text-white text-decoration-none'>
									@selliasoportebot
								</a>
							</Col>
						</Row>

						<Row className='contact-info-row  my-5'>
							<Col sm={3} className='d-flex justify-content-center justify-content-md-end'>
								<SocialIcon
									target='_blank'
									rel='noreferrer'
									url='https://www.facebook.com/sellia.business'
									style={{ height: 30, width: 30 }}
									bgColor='#ffffff'
								/>
							</Col>
							<Col className='text-center text-md-start'>
								<h6>Facebook Chat</h6>
								<p>Nuestro equipo está para ayudar.</p>
								<a href='https://www.facebook.com/sellia.business' target='_blank' className='text-white text-decoration-none'>
									@sellia.business
								</a>
							</Col>
						</Row>

						<Row className='contact-info-row  my-5'>
							<Col sm={3} className='d-flex justify-content-center justify-content-md-end'>
								<SocialIcon
									target='_blank'
									rel='noreferrer'
									url='mailto:support@sellia.com.mx'
									style={{ height: 30, width: 30 }}
									bgColor='#ffffff'
								/>
							</Col>
							<Col className='text-center text-md-start'>
								<h6>E-mail</h6>
								<p>Nuestro equipo está para ayudar.</p>
								<a href='mailto:support@sellia.com.mx' target='_blank' className='text-white text-decoration-none'>
									support@sellia.com.mx
								</a>
							</Col>
						</Row>
						<br />
					</Col>
					<Col sm={12} lg={5} className='column-right mt-5  mt-lg-0'>
						<Container>
							<div className='icon-container'>
								<svg width='75' height='75' viewBox='0 0 97 97' fill='none' xmlns='http://www.w3.org/2000/svg'>
									<path
										fillRule='evenodd'
										clipRule='evenodd'
										d='M50.65 72.6875H57.9062C76.4607 72.6875 91.5 57.6483 91.5 39.0938C91.5 20.5393 76.4607 5.5 57.9062 5.5H39.0938C20.5393 5.5 5.5 20.5393 5.5 39.0938C5.5 60.755 17.8518 73.7087 30.8431 81.5186C37.363 85.437 43.9313 87.9686 48.8924 89.5193C49.5051 89.7101 50.0937 89.8875 50.65 90.0487V72.6875ZM56.025 96.875C56.025 96.875 53.9717 96.5283 50.65 95.6307C36.6481 91.8359 0.125 78.1969 0.125 39.0938C0.125 17.5722 17.5722 0.125 39.0938 0.125H57.9062C79.4277 0.125 96.875 17.5722 96.875 39.0938C96.875 60.6152 79.4277 78.0625 57.9062 78.0625H56.025V96.875Z'
										fill='#28D296'
									/>
									<path
										fillRule='evenodd'
										clipRule='evenodd'
										d='M58.4194 17.5454C61.1875 19.3836 63.273 22.3641 63.273 26.3604C63.273 30.6012 61.5638 33.7187 58.7929 35.6269C57.6991 36.3675 56.4918 36.9248 55.2186 37.277V41.3943C55.2186 42.4634 54.7938 43.4888 54.0378 44.2448C53.2818 45.0008 52.2565 45.4255 51.1873 45.4255C50.1182 45.4255 49.0928 45.0008 48.3368 44.2448C47.5808 43.4888 47.1561 42.4634 47.1561 41.3943V33.8773C47.1558 32.8545 47.5444 31.8699 48.243 31.1229C48.9416 30.3758 49.8981 29.9223 50.9186 29.8541C52.4074 29.7547 53.5362 29.4591 54.2161 28.9887C54.4918 28.8062 54.7143 28.554 54.8611 28.2578C55.0224 27.9353 55.2105 27.3601 55.2105 26.3577C55.2105 25.5165 54.8826 24.8742 53.9554 24.2561C52.9019 23.5573 51.2088 23.0413 49.1744 22.9768C47.1641 22.9123 45.2103 23.3047 43.7725 24.0007C42.332 24.6995 41.8026 25.4842 41.6547 26.0621C41.5231 26.5749 41.2918 27.0567 40.9739 27.4801C40.656 27.9035 40.2579 28.2601 39.8022 28.5297C39.3465 28.7992 38.8422 28.9763 38.318 29.0509C37.7939 29.1256 37.2602 29.0962 36.7474 28.9646C36.2346 28.8329 35.7527 28.6016 35.3293 28.2837C34.9059 27.9658 34.5493 27.5677 34.2798 27.112C34.0103 26.6563 33.8331 26.152 33.7585 25.6278C33.6839 25.1037 33.7132 24.57 33.8449 24.0572C34.7721 20.4532 37.4676 18.099 40.2573 16.7472C43.0523 15.39 46.3391 14.8176 49.4297 14.917C52.5015 15.0137 55.7803 15.7877 58.4194 17.5454Z'
										fill='#28D296'
									/>
									<path
										d='M56.5625 56.5625C56.5625 57.988 55.9962 59.3552 54.9882 60.3632C53.9802 61.3712 52.613 61.9375 51.1875 61.9375C49.762 61.9375 48.3948 61.3712 47.3868 60.3632C46.3788 59.3552 45.8125 57.988 45.8125 56.5625C45.8125 55.137 46.3788 53.7698 47.3868 52.7618C48.3948 51.7538 49.762 51.1875 51.1875 51.1875C52.613 51.1875 53.9802 51.7538 54.9882 52.7618C55.9962 53.7698 56.5625 55.137 56.5625 56.5625Z'
										fill='#28D296'
									/>
								</svg>

								<h2 className='blue text-center text-lg-start fw-300'>
									¿Dudas? <strong className='fw-700'>Te ayudamos</strong>
								</h2>
							</div>

							<p className='mx-1 text-center text-lg-start'>
								<strong className='fw-600'>Compártenos tus dudas y un experto se comunicará contigo.</strong>
							</p>

							<ContactForm />
						</Container>
					</Col>
				</Row>
			</section>
		</div>
	);
};
