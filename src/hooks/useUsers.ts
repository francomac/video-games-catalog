import { CanceledError } from '@/services/api-client';
import userService, { User } from '@/services/userService';
import { useEffect, useState } from 'react';

const useUsers = () => {
	const [users, setUsers] = useState<User[]>([]);
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);

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

	return { users, error, loading, setUsers, setError };
};

export default useUsers;
