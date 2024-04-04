import apiClient, {
	CanceledError,
} from '@/services/api-client';
import { useEffect, useState } from 'react';

interface User {
	name: string;
	id: string;
}

const AddingData = () => {
	const [users, setUsers] = useState<User[]>([]);
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const controller = new AbortController();

		setLoading(true);
		// get -> promise -> res / err
		apiClient
			.get<User[]>('/users')
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

	const addUser = () => {
		const originalUsers = [...users];
		const newUser = { id: '0', name: 'franco' };

		setUsers([newUser, ...users]);

		apiClient
			.post('/users/', newUser)
			.then(({ data: savedUser }) => {
				setUsers([savedUser, ...users]);
			})
			.catch((err) => {
				setError(err.message);
				setUsers(originalUsers);
			});
	};

	return (
		<>
			{error && <p className='text-danger'>{error}</p>}
			{loading && <div className='spinner-border'></div>}
			<button
				className='btn btn-primary mb-3'
				onClick={addUser}
			>
				Add
			</button>
			<ul className='list-group'>
				{users.map((user) => (
					<li
						key={user.id}
						className='list-group-item d-flex justify-content-between'
					>
						{user.name}
					</li>
				))}
			</ul>
		</>
	);
};

export default AddingData;
