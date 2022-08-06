import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import CardBack from './components/CardBack';
import CardFront from './components/CardFront';
import 'react-toastify/dist/ReactToastify.css';
import usePreviewData from './store/usePreviewData';
function App() {
	const { showBackSide, setShowBackSide } = usePreviewData((state) => ({
		showBackSide: state.showBackSide,
		setShowBackSide: state.setShowBackSide,
	}));
	const handleClose = () => {
		setShowBackSide(false);
	};

	return (
		<>
			<div className="card">
				<div
					className={`card__content ${showBackSide ? 'show__backside' : ''}`}
				>
					<CardFront />
					<CardBack />
				</div>
				<button className="cross-btn" onClick={handleClose}>
					<img src="/crossbtn.svg" alt="" />
				</button>
			</div>
			<div className="footer">
				<div className="flex-1"></div>
				<p className="credit">
					Made with 💖 in <span>INDIA</span>
				</p>
				<a
					className="Github"
					href="https://github.com/Rupam-Shil/link-previewer"
					target={'_blank'}
				>
					Github
				</a>
			</div>
			<ToastContainer
				position="top-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={true}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
		</>
	);
}

export default App;
