import apiClient from './api-client';

export interface User {
	name: string;
	id: string;
}

class UserService {
	getAllUSers() {
		const controller = new AbortController();

		const request = apiClient.get<User[]>(
			'https://jsonplaceholder.typicode.com/users',
			{ signal: controller.signal },
		);

		return { request, cancel: () => controller.abort() };
	}

	deleteUser(id: string) {
		return apiClient.delete('/users/' + id);
	}

	createUser(user: User) {
		return apiClient.post('/users/', user);
	}

	updateUser(user: User) {
		return apiClient.patch('/users/' + user.id, user);
	}
}

export default new UserService();
