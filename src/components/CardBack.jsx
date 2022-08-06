import React from 'react';
import usePreviewData from '../store/usePreviewData';
import { LinkIcon } from './Input';

function CardBack() {
	const { setPreviewData, previewData, setShowBackSide } = usePreviewData(
		(state) => ({
			setPreviewData: state.setPreviewData,
			previewData: state.previewData,
			setShowBackSide: state.setShowBackSide,
		})
	);
	return (
		<div className="card__back">
			<div className="card__back-con">
				<div className="card__back-image">
					<img
						src={
							previewData?.images?.[0] ||
							previewData?.favicons?.[0] ||
							'https://www.freeiconspng.com/uploads/no-image-icon-6.png'
						}
						alt=""
					/>
				</div>
				<div className="card__back-details">
					<p className="card__back-title">
						{previewData?.title || 'No Title Found'}
					</p>
					<p className="card__back-subtitle">
						{previewData?.description || 'No description Found'}
					</p>
					<div className="card__back-link">
						<a href={previewData?.url || '#'} target={'_blank'}>
							<LinkIcon />
							View full URL
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CardBack;
