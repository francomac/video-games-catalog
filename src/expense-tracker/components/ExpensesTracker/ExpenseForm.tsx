import { useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';

interface FormData {
	description: string;
	amount: number;
}

const ExpenseForm = () => {
	const [expenses, setExpenses] = useState<FormData[]>([]);
	const [expense, setExpense] = useState<FormData>({
		description: '',
		amount: 0,
	});

	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm<FormData>();

	const onSubmit = (data: FieldValues) => {
		console.log(data);
		console.log(errors);
		setExpenses({ ...expenses, data });
	};

	return (
		<div className='w-50 mt-3'>
			<h2>{'Form using useForm Hook'}</h2>
			<form onSubmit={handleSubmit(onSubmit)}>
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
