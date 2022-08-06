import { getLinkPreview } from 'link-preview-js';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import usePreviewData from '../store/usePreviewData';
import Input from './Input';

function CardFront() {
	const [inputUrl, setInputUrl] = useState('');
	const { setPreviewData, setShowBackSide, showBackSide } = usePreviewData(
		(state) => ({
			setPreviewData: state.setPreviewData,
			previewData: state.previewData,
			setShowBackSide: state.setShowBackSide,
			showBackSide: state.showBackSide,
		})
	);

	useEffect(() => {
		if (!showBackSide) {
			setInputUrl('');
		}
	}, [showBackSide]);

	const handleGeneratePreview = () => {
		if (inputUrl) {
			if (isValidHttpUrl(inputUrl)) {
				getUrlData(inputUrl);
				return;
			} else {
				toast.error('Not a valid URL!');
				return;
			}
		}
		toast.warn('Please enter a URL!');
	};

	const getUrlData = async (url) => {
		if (url) {
			try {
				const res = await getLinkPreview(url);
				if (res?.url) {
					setPreviewData(res);
					setShowBackSide(true);
				} else {
					toast.warn('Something went wrong');
				}
			} catch (err) {
				console.log(err);
				toast.error('Network error! Please try again');
			}
		}
	};

	const isValidHttpUrl = (string) => {
		let url;

		try {
			url = new URL(string);
		} catch (_) {
			return false;
		}

		return url.protocol === 'http:' || url.protocol === 'https:';
	};
	return (
		<div className="card__front">
			<div className="card__front-title">
				Type or paste any url to see the preview
			</div>
			<div className="card__front-input">
				<Input value={inputUrl} setValue={setInputUrl} />
			</div>
			<div className="card__front-info">
				<p>Make sure the above link is a valid link!</p>
			</div>
			<div className="card__front-btncon">
				<button
					className="cancel-btn"
					onClick={() => {
						setInputUrl('');
					}}
				>
					Cancel
				</button>
				<button className="submit-btn" onClick={handleGeneratePreview}>
					Generate Preview
				</button>
			</div>
		</div>
	);
}

export default CardFront;
