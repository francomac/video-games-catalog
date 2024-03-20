import Alert from '@/components/Alert.tsx';
import Button from '@/components/Button.tsx';
import Like from '@/components/Like.tsx';
import ListGroup from '@/components/ListGroup';
import Message from '@/components/Message.tsx';
import { useState } from 'react';
import { BsFillCalendarFill } from 'react-icons/bs';

function App() {
	let items = [
		'New York',
		'San Francisco',
		'London',
		'Paris',
	];

	const handleSelectItem = (item: string) => {
		console.log(item);
	};

	const handleSubmitButtonClick = (item: string) => {
		console.log(item.target.innerText);
	};

	const [showAlert, setShowAlert] = useState(false);
	const handleShowAlertClick = (item: string) => {
		setShowAlert(!showAlert);
	};
	const handleAlertDismissedClick = (item: string) => {
		setShowAlert(!showAlert);
	};

	return (
		<>
			{showAlert && (
				<Alert
					text='Hola Mundo'
					onClick={handleAlertDismissedClick}
				></Alert>
			)}
			<ListGroup
				items={items}
				heading={'Cities'}
				onSelectItem={handleSelectItem}
			></ListGroup>
			<BsFillCalendarFill
				className='mx-2'
				color='red'
			></BsFillCalendarFill>
			<Button
				className='mx-2'
				text={'Save'}
				typeColor='primary'
				onClick={handleSubmitButtonClick}
			></Button>
			<Button
				className='mx-2'
				text={'Alert'}
				typeColor='secondary'
				onClick={handleShowAlertClick}
			></Button>
			<Like onClick={() => console.log('clicked')}></Like>

			<Message></Message>
		</>
	);
}

export default App;
