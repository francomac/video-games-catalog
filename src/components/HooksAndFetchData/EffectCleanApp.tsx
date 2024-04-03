import { useEffect } from 'react';

const connect = () => console.log('connecting');
const disconnect = () => console.log('Disconnecting');

const EffectCleanApp = () => {
	useEffect(() => {
		connect();

		return () => {
			disconnect();
		};
	});

	return <div>Effect Clean App</div>;
};

export default EffectCleanApp;
