import ProductList from '@/components/ProductList.tsx';
import { useEffect, useRef, useState } from 'react';

const DbRefs = () => {
	const inputRef = useRef<HTMLInputElement>(null);

	// after render
	useEffect(() => {
		if (inputRef.current) inputRef.current?.focus();
	});

	useEffect(() => {
		document.title = 'Use Effect';
	});

	const [category, setCategory] = useState('');

	return (
		<div>
			<input
				ref={inputRef}
				type='text'
				className='form-control mb-3'
			/>

			<select
				className='form-select mb-3'
				onChange={(event) => {
					setCategory(event.target.value);
				}}
			>
				<option value=''></option>
				<option value='option 1'>Option 1</option>
				<option value='option 2'>Option 2</option>
			</select>

			<ProductList category={category}></ProductList>
		</div>
	);
};

export default DbRefs;
