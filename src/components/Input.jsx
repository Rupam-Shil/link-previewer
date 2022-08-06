import React from 'react';

export const LinkIcon = () => {
	return (
		<svg
			width="20"
			height="20"
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M11.5438 8.45602C10.7247 7.63726 9.61396 7.17731 8.45581 7.17731C7.29766 7.17731 6.18692 7.63726 5.36781 8.45602L2.27881 11.544C1.45969 12.3631 0.999512 13.4741 0.999512 14.6325C0.999512 15.7909 1.45969 16.9019 2.27881 17.721C3.09793 18.5401 4.2089 19.0003 5.36731 19.0003C6.52572 19.0003 7.63669 18.5401 8.45581 17.721L9.99981 16.177"
				stroke="#3A3F4D"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M8.45605 11.544C9.27516 12.3628 10.3859 12.8227 11.5441 12.8227C12.7022 12.8227 13.8129 12.3628 14.6321 11.544L17.7211 8.45599C18.5402 7.63687 19.0004 6.52591 19.0004 5.36749C19.0004 4.20908 18.5402 3.09811 17.7211 2.27899C16.9019 1.45987 15.791 0.999695 14.6326 0.999695C13.4741 0.999695 12.3632 1.45987 11.5441 2.27899L10.0001 3.82299"
				stroke="#3A3F4D"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

function Input({ value, setValue }) {
	return (
		<div className="input__con">
			<div className="link__icon">
				<LinkIcon />
			</div>
			<input
				type="text"
				className="input"
				value={value}
				onChange={(e) => setValue(e.target.value)}
				placeholder={'Enter your URL...'}
			/>
		</div>
	);
}

export default Input;
