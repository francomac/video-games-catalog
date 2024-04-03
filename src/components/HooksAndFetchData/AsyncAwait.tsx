import axios, { AxiosError, CanceledError } from 'axios';
import { useEffect, useState } from 'react';

interface User {
	name: string;
	id: string;
}

const AsyncAwait = () => {
	const [users, setUsers] = useState<User[]>([]);
	const [error, setError] = useState('');

	useEffect(() => {
		const controller = new AbortController();

		const fetchUsers = async () => {
			try {
				const res = await axios.get<User[]>(
					'https://jsonplaceholder.typicode.com/users',
				);
				setUsers(res.data);
			} catch (err) {
				if (err instanceof CanceledError) return;

				setError((err as AxiosError).message);
			}
			return () => controller.abort();
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

export default AsyncAwait;
