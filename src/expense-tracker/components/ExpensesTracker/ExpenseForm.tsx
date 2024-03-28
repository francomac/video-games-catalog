import { useForm } from 'react-hook-form';

import { categories } from './ExpensesTracker';

interface FormData {
	description: string;
	amount: number;
	category: string;
}
interface FormProps {
	onSubmit: (data: FormData) => void;
}

const ExpenseForm = ({ onSubmit }: FormProps) => {
	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm<FormData>();

	return (
		<div className='w-50 mt-3'>
			<h2>{'Form using useForm Hook'}</h2>
			<form onSubmit={handleSubmit(onSubmit)}>
				{/* description */}
				<div className='mb-3'>
					<label
						htmlFor='description'
						className='form-label'
					>
						Description
					</label>
					<input
						id='description'
						type='text'
						className='form-control'
						{...register('description', {
							required: true,
							minLength: 3,
						})}
					/>
					{errors.description?.type === 'required' && (
						<p className='text-danger'>
							The description field is required.
						</p>
					)}
					{errors.description?.type === 'minLength' && (
						<p className='text-danger'>
							The description must be at least 3 characters.
						</p>
					)}
				</div>
				{/* amount */}
				<div className='mb-3'>
					<label htmlFor='amount' className='form-label'>
						Amount
					</label>
					<input
						id='amount'
						type='number'
						className='form-control'
						{...register('amount')}
					/>
				</div>
				{/* category */}
				<div className='mb-3'>
					<label htmlFor='category' className='forl-label'>
						Category
					</label>
					<select
						className='form-select'
						{...register('category')}
					>
						<option value=''></option>
						{categories.map((category) => (
							<option
								key={category.value}
								value={category.value}
							>
								{category.label}
							</option>
						))}
					</select>
				</div>

				<button
					disabled={!isValid}
					className='btn btn-primary my-3'
					type='submit'
				>
					Submit
				</button>
			</form>
		</div>
	);
};

export default ExpenseForm;
