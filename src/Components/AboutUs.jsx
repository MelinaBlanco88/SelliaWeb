import { Row } from "react-bootstrap";

export const AboutUs = () => {
	return (
		<div className='extended-background background-bone'>
			<section id='about_us' className='text-center'>
				<Row className='text-center mx-2 mx-md-5'>
					<div className='icon-container'>
						<svg width='124' height='119' viewBox='0 0 124 119' fill='none' xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M108.5 7.75C110.555 7.75 112.527 8.56652 113.98 10.0199C115.433 11.4733 116.25 13.4446 116.25 15.5V77.5C116.25 79.5554 115.433 81.5267 113.98 82.9801C112.527 84.4335 110.555 85.25 108.5 85.25H89.125C86.7187 85.25 84.3455 85.8102 82.1932 86.8864C80.0409 87.9625 78.1688 89.525 76.725 91.45L62 111.081L47.275 91.45C45.8312 89.525 43.9591 87.9625 41.8068 86.8864C39.6546 85.8102 37.2813 85.25 34.875 85.25H15.5C13.4446 85.25 11.4733 84.4335 10.0199 82.9801C8.56651 81.5267 7.75 79.5554 7.75 77.5V15.5C7.75 13.4446 8.56651 11.4733 10.0199 10.0199C11.4733 8.56652 13.4446 7.75 15.5 7.75H108.5ZM15.5 0C11.3891 0 7.44666 1.63303 4.53984 4.53985C1.63303 7.44666 0 11.3891 0 15.5L0 77.5C0 81.6109 1.63303 85.5533 4.53984 88.4602C7.44666 91.367 11.3891 93 15.5 93H34.875C36.0781 93 37.2648 93.2801 38.3409 93.8182C39.417 94.3563 40.3531 95.1375 41.075 96.1L55.8 115.731C56.5219 116.693 57.458 117.475 58.5341 118.013C59.6102 118.551 60.7969 118.831 62 118.831C63.2031 118.831 64.3898 118.551 65.4659 118.013C66.542 117.475 67.4781 116.693 68.2 115.731L82.925 96.1C83.6469 95.1375 84.583 94.3563 85.6591 93.8182C86.7352 93.2801 87.9219 93 89.125 93H108.5C112.611 93 116.553 91.367 119.46 88.4602C122.367 85.5533 124 81.6109 124 77.5V15.5C124 11.3891 122.367 7.44666 119.46 4.53985C116.553 1.63303 112.611 0 108.5 0L15.5 0Z'
								fill='#FF4E42'
							/>
						</svg>
						<svg
							className='heart-icon animate__animated animate__pulse animate__infinite'
							width='33'
							height='31'
							viewBox='0 0 33 31'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M16.5 2.71672C25.6528 -6.71287 48.5403 9.78754 16.5 31C-15.5403 9.78203 7.34721 -6.71287 16.5 2.71672Z'
								fill='#FF4E42'
							/>
						</svg>
					</div>

					<p className='fw-700 pb-2 pt-4'>SOBRE NOSOTROS</p>
					<h2 className='blue fw-400'>
						<strong>Hablar con una empresa</strong> <br /> debe ser como chatear con un amigo
					</h2>
					<p className='fw-400'>
						Sellia es la plataforma de comunicación con el cliente que ayuda a las empresas a estar siempre disponibles frente a consumidores que necesitan soluciones rápidamente. 
						<br />Desde consultas, ventas, recursos humanos, marketing, conecta a través de Whatsapp y de las apps de mensajería que las personas usan todos los días.
						<br />
						Conectate desde una computadora, tablet o desde nuestra app para atención y seguimiento.
					</p>
				</Row>
			</section>
		</div>
	);
};
