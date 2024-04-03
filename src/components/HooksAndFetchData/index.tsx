import EffectCleanApp from '@/components/HooksAndFetchData/EffectCleanApp';
import FetchData from '@/components/HooksAndFetchData/FetchData';
import ProductList from '@/components/HooksAndFetchData/ProductList';
import { useEffect, useRef, useState } from 'react';

const HooksAndFetchData = () => {
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
			<h2>Use Effect / hook</h2>
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

			<h2 className=' mt-3'>Effect Clean App</h2>
			<EffectCleanApp></EffectCleanApp>

			<h2 className=' mt-3'>Fetch Data</h2>
			<FetchData></FetchData>
		</div>
	);
};

export default HooksAndFetchData;
