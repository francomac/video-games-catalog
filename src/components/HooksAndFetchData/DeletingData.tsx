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

	const deleteUser = (user: User) => {
		const originalUsers = [...users];

		setUsers(users.filter((u) => u.id !== user.id));

		axios
			.delete(
				'https://jsonplaceholder.typicode.com/users/' +
					user.id,
			)
			.catch((err) => {
				setError(err.message);
				setUsers(originalUsers);
			});
		console.log(users);
	};
	return (
		<>
			{error && <p className='text-danger'>{error}</p>}
			{loading && <div className='spinner-border'></div>}
			<ul className='list-group'>
				{users.map((user) => (
					<li
						key={user.id}
						className='list-group-item d-flex justify-content-between'
					>
						{user.name}
						<button
							className='btn btn-outline-danger'
							onClick={() => deleteUser(user)}
						>
							Delete
						</button>
					</li>
				))}
			</ul>
		</>
	);
};

export default ShowingLoadingIndicator;
