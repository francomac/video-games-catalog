import ProductList from '@/components/ProductList.tsx';
import { useEffect, useRef } from 'react';

const DbRefs = () => {
	const inputRef = useRef<HTMLInputElement>(null);

	// after render
	useEffect(() => {
		if (inputRef.current) inputRef.current?.focus();
	});

	useEffect(() => {
		document.title = 'Use Effect';
	});

	return (
		<div>
			<input
				ref={inputRef}
				type='text'
				className='form-control'
			/>

			<ProductList></ProductList>
		</div>
	);
};

export default DbRefs;
