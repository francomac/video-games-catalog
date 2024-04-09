import { CanceledError } from '@/services/api-client';
import userService from '@/services/userService';
import { useEffect, useState } from 'react';

interface User {
	name: string;
	id: string;
}

const DeletingData = () => {
	const [users, setUsers] = useState<User[]>([]);
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const controller = new AbortController();

		setLoading(true);
		// get -> promise -> res / err
		const { request, cancel } = userService.getAll<User>();

		request
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

		return () => cancel();
	}, []);

	const deleteUser = (user: User) => {
		const originalUsers = [...users];

		setUsers(users.filter((u) => u.id !== user.id));

		userService.delete(user.id).catch((err) => {
			setError(err.message);
			setUsers(originalUsers);
		});
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

export default DeletingData;
