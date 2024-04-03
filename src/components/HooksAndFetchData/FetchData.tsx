import axios, { AxiosError } from 'axios';
import { useEffect, useState } from 'react';

interface User {
	name: string;
	id: string;
}

const FetchData = () => {
	const [users, setUsers] = useState<User[]>([]);
	const [error, setError] = useState('');

	useEffect(() => {
		// get -> promise -> res / err
		// axios
		// 	.get<User[]>(
		// 		'https://jsonplaceholder.typicode.com/users',
		// 	)
		// 	.then((res) => setUsers(res.data))
		// 	.catch((err) => setError(err.message));

		const fetchUsers = async () => {
			try {
				const res = await axios.get<User[]>(
					'https://jsonplaceholder.typicode.com/users',
				);
				setUsers(res.data);
			} catch (error) {
				setError((error as AxiosError).message);
			}
		};

		fetchUsers();
	}, []);

	return (
		<>
			{error && <p className='text-danger'>{error}</p>}
			<ul>
				{users.map((user) => (
					<li key={user.id}>{user.name}</li>
				))}
			</ul>
		</>
	);
};

export default FetchData;
