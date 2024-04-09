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
}

export default new UserService();
