import AsyncAwait from '@/components/HooksAndFetchData/AsyncAwait';
import CancellingFetchData from '@/components/HooksAndFetchData/CancellingFetchData';
import DeletingData from '@/components/HooksAndFetchData/DeletingData';
import EffectCleanApp from '@/components/HooksAndFetchData/EffectCleanApp';
import FetchData from '@/components/HooksAndFetchData/FetchData';
import ProductList from '@/components/HooksAndFetchData/ProductList';
import ShowingLoadingIndicator from '@/components/HooksAndFetchData/ShowingLoadingIndicator';
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

			<h2 className=' mt-3'>Async Await Fetch Data</h2>
			<AsyncAwait></AsyncAwait>

			<h2 className=' mt-3'>Cancelling Fetch Data</h2>
			<CancellingFetchData></CancellingFetchData>

			<h2 className=' mt-3'>Showing Loading Indicator</h2>
			<ShowingLoadingIndicator></ShowingLoadingIndicator>

			<h2 className=' mt-3'>Showing Loading Indicator</h2>
			<DeletingData></DeletingData>
		</div>
	);
};

export default HooksAndFetchData;
