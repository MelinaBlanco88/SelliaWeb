import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useForm } from "../hooks";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/bootstrap.css'

const formData = {
	name: "",
	email: "",
	phoneCod: "",
	phoneNumber: "",
	company: "",
	comments: "",
};
export const ContactForm = () => {
	const { name, email, phoneCod, phoneNumber, company, comments, onInputChange, formState } = useForm(formData);

	const onSubmit = (e) => {
		e.preventDefault();
		createMessage(name, email, phoneCod, phoneNumber, company, comments);
	};

	const createMessage = (name, email, phoneCod, phoneNumber, company, comments) => {
		const number = "5215574766664";
		const nameEmoji = "%F0%9F%99%8B%E2%80%8D%E2%99%82%EF%B8%8F%20";
		const envelopeEmoji = "%E2%9C%89%EF%B8%8F%20";
		const phoneEmoji = "%F0%9F%93%B1";
		const emailEmoji = "%F0%9F%93%A7%20";
		const companyEmoji = "%F0%9F%8F%AC";
		const lineBreak = "%0A";
		const link = `https://api.whatsapp.com/send?phone=${number}&text=${nameEmoji}Nombre:%20${name.replaceAll(
			" ",
			"%20"
		)}%0A${phoneEmoji}N%C3%BAmero%20de%20tel%C3%A9fono:%20${phoneCod}${phoneNumber.replaceAll(
			" ",
			""
		)}${lineBreak}${companyEmoji}Compa%C3%B1ia:%20${company.replaceAll(" ", "%20")}%0A${emailEmoji}Email:%20${email.replaceAll(
			" ",
			""
		)}%0A${envelopeEmoji}Comentario:%0A${comments.replaceAll(" ", "%20")}`;
		window.open(link, "_blank");
	};

	return (
		<Col className='mx-3' id='contact_form'>
			<Form className='d-grid gap-3' onSubmit={(e) => onSubmit(e)}>
				<Row>
					<input
						required
						className='px-3 py-2'
						type='text'
						name='name'
						id='nameInput'
						placeholder='Nombre completo'
						value={name}
						onChange={onInputChange}
					/>
				</Row>
				<Row>
					<input
						required
						className='px-3 py-2'
						type='email'
						name='email'
						id='emailInput'
						placeholder='Correo electrónico'
						value={email}
						onChange={onInputChange}
					/>
				</Row>
				<Row className='d-flex justify-content-between align-center'>
					<Col sm={3} lg={3} className='p-0'>

						<PhoneInput
							inputProps={{
								name: 'phoneCod',
								required: true
							}}
							country="mx"
							preferredCountries={["ar", "mx", "es", "cr", "pa", "cl", "co", "ec", "sv", "hn", "pe"]}
						/>
					</Col>
					-
					<Col sm={8} lg={8} className='p-0'>
						<input
							required
							className='px-3 py-2 w-100'
							type='tel'
							name='phoneNumber'
							id='phoneInput'
							placeholder='Número celular'
							value={phoneNumber}
							onChange={onInputChange}
						/>
					</Col>
				</Row>
				<Row>
					<Col sm={12} lg={12} className='mt-lg-0 mt-3 company-input-container px-0 d-flex  justify-content-lg-end'>
						<input
							required
							className='py-2 px-3 w-100 '
							type='text'
							name='company'
							placeholder='Compañía'
							value={company}
							onChange={onInputChange}
						/>
					</Col>
				</Row>
				<Row>
					<input
						required
						className='py-2 input-comentarios'
						type='text'
						name='comments'
						placeholder='Comentarios'
						value={comments}
						onChange={onInputChange}
					/>
				</Row>
				<Row>
					<Button className='background-green border-none ' type='submit'>
						Enviar
					</Button>
				</Row>
			</Form>
		</Col>
	);
};
