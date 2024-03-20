import Button from '@/components/Button.tsx';
import { useState } from 'react';

// pure component vs impure

const Message = () => {
	let count = 0;
	count++;
	console.log(count);

	const [game, setGame] = useState({
		name: 'Zelda: Link to the Past',
		id: '1986',
		author: {
			country: 'Japan',
			name: 'Link',
		},
	});
	console.log(game);

	const handleShowAlertClick = () => {
		setGame({
			...game,
			author: { ...game.author, name: 'Franco' },
		});
		console.log(game);
	};

	return (
		<>
			<div
				className='mt-5 alert alert-warning alert-dismissible fade show'
				role='alert'
			>
				<strong>Message</strong>
				<button
					type='button'
					className='btn-close'
					data-bs-dismiss='alert'
					aria-label='Close'
				></button>
				<Button
					className='mx-2'
					text={'Rename'}
					typeColor='secondary'
					onClick={handleShowAlertClick}
				></Button>
			</div>
		</>
	);
};

export default Message;
