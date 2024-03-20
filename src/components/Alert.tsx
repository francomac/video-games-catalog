import { ReactNode } from 'react';

interface Props {
	children?: ReactNode;
	text: string;
	showAlert?: string;
	onClose: () => void;
}

const Alert = ({ text, onClose }: Props) => {
	return (
		<>
			<div
				className='alert alert-warning alert-dismissible fade show'
				role='alert'
			>
				<strong>{text}</strong>
				<button
					type='button'
					className='btn-close'
					data-bs-dismiss='alert'
					aria-label='Close'
					onClick={onClose}
				></button>
			</div>
		</>
	);
};

export default Alert;
