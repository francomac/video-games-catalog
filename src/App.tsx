import Alert from '@/components/Alert.tsx';
import Button from '@/components/Button.tsx';
import ExpandableText from '@/components/ExpandableText.tsx';
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

	const loremipsun =
		'orem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de au';
	const [loremText, setLoremText] = useState(loremipsun);
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

			<ExpandableText
				text={loremText}
				onTextCutOff={() => {
					console.log(text);
				}}
			></ExpandableText>
		</>
	);
}

export default App;
