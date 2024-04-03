import axios, { CanceledError } from 'axios';
import { useEffect, useState } from 'react';

interface User {
	name: string;
	id: string;
}

const ShowingLoadingIndicator = () => {
	const [users, setUsers] = useState<User[]>([]);
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const controller = new AbortController();

		setLoading(true);
		// get -> promise -> res / err
		axios
			.get<User[]>(
				'https://jsonplaceholder.typicode.com/users',
			)
			.then((res) => {
				setUsers(res.data);
				setLoading(false);
			})
			.catch((err) => {
				if (err instanceof CanceledError) return;
				setError(err.message);
			})
			.finally(() => {
				setLoading(false);
			});

		return () => controller.abort();
	}, []);

	return (
		<>
			{error && <p className='text-danger'>{error}</p>}
			{loading && <div className='spinner-border'></div>}
			<ul>
				{users.map((user) => (
					<li key={user.id}>{user.name}</li>
				))}
			</ul>
		</>
	);
};

export default ShowingLoadingIndicator;
