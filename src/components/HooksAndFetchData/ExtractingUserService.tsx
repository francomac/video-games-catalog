import { CanceledError } from '@/services/api-client';
import userService, { User } from '@/services/userService';
import { useEffect, useState } from 'react';

const ExtractingUserService = () => {
	const [users, setUsers] = useState<User[]>([]);
	const [error, setError] = useState('');

	useEffect(() => {
		const { request, cancel } = userService.getAll<User>();

		request
			.then((res) => setUsers(res.data))
			.catch((err) => {
				if (err instanceof CanceledError) return;

				setError(err.message);
			});

		return () => cancel();
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

export default ExtractingUserService;
