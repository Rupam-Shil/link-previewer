import create from 'zustand';

const previewData = (set) => ({
	previewData: {},
	showBackSide: false,
	setPreviewData: (payload) => {
		set((state) => ({
			previewData: payload,
		}));
	},
	setShowBackSide: (payload) => {
		set((state) => ({
			showBackSide: payload,
		}));
	},
});

const usePreviewData = create(previewData);

export default usePreviewData;
