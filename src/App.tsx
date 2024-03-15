import ListGroup from '@/components/ListGroup.tsx';

function App() {
	let items = [
		'New York',
		'San Francisco',
		'London',
		'Paris',
	];

	return (
		<>
			<ListGroup
				items={items}
				heading={'Cities'}
			></ListGroup>
		</>
	);
}

export default App;
