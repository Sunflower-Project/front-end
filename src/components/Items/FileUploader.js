import React, { useRef } from 'react';
const FileUploader = ({ onFileSelectError, onFileSelectSuccess }) => {
	const fileInput = useRef(null);
	const handleFileInput = (e) => {
		// handle validations
		// onFileSelect(e.target.files[0])
		const file = e.target.files[0];
		console.log(file);
		// if (file.size > 1024) {
		// 	onFileSelectError({
		// 		error: 'File size cannot exceed more than 1MB',
		// 	});
		// } else {
		onFileSelectSuccess(file);
		// }
	};

	return (
		<div className='file-uploader'>
			<input
				type='file'
				onChange={handleFileInput}
				accept='image/png, image/jpeg'
			/>
			{/* <button
				onClick={(e) => fileInput.current && fileInput.current.click()}
				className='btn btn-primary'
			>Upload</button> */}
		</div>
	);
};

// Code learned from a tutorial
// https://www.pluralsight.com/guides/how-to-use-a-simple-form-submit-with-files-in-react

export default FileUploader;
