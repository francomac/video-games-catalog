import axios from 'axios';
import { useEffect, useState } from 'react';

const FetchData = () => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		axios
			.get('https://jsonplaceholder.typicode.com/users')
			.then((res) => console.log(res));
	}, []);

	return <div>FetchData</div>;
};

export default FetchData;
