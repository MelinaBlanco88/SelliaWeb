import React from "react";

export const SupportChatMessage = ({ element }) => {
	return (
		<li
			className={`animate__animated ${element.align === "left" ? "animate__slideInLeft" : "animate__slideInRight"}  message-${
				element.align + " " + element.name
			}`}
		>
			{/* <div className={`sp-${element.name}`}>
        <span className={`spinme-${element.align}`}>
            <div className='spinner'>
                <div className='bounce1'></div>
                <div className='bounce2'></div>
                <div className='bounce3'></div>
            </div>
        </span>
    </div> */}
			<div className={`messageinner-${element.name}`}>
				<span className='message-text'>{element.msg}</span>
			</div>
		</li>
	);
};
