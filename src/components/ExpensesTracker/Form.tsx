import { FormEvent, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';

interface FormData {
	description: string;
	amount: number;
	category: string;
}

const Form = () => {
	const [isDropdownOpen, setIsDropdownOpen] =
		useState(false);
	const [expenses, setExpenses] = useState<FormData[]>([]);
	const [expense, setExpense] = useState<FormData>({
		description: '',
		amount: 0,
		category: 'All Categories',
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

	const onDropdownChange = async (e: FormEvent) => {
		e.preventDefault();
		let value = e.currentTarget.textContent;

		await setExpense({
			...expense,
			category: value,
		});
		setIsDropdownOpen(!isDropdownOpen);
	};

	const onDeleteExpenseClicked = (
		e: React.MouseEvent<HTMLButtonElement>,
	) => {
		e.preventDefault();
		console.log(e.currentTarget.textContent);
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

				<label htmlFor='category' className='form-label'>
					Category
				</label>
				<div className='dropdown'>
					<button
						className='btn btn-secondary dropdown-toggle'
						type='button'
						id='category'
						data-bs-toggle='dropdown'
						aria-haspopup='true'
						aria-expanded='false'
						onClick={() =>
							setIsDropdownOpen(!isDropdownOpen)
						}
					>
						{expense?.category || 'All Categories'}
					</button>
					<div
						className={
							!isDropdownOpen
								? `dropdown-menu w-100`
								: `dropdown-menu fade show w-100`
						}
						aria-labelledby='category'
					>
						<a
							className='dropdown-item'
							onClick={(e) => onDropdownChange(e)}
							{...register('category')}
						>
							All Categories
						</a>
						<a
							className='dropdown-item'
							onClick={(e) => onDropdownChange(e)}
							{...register('category')}
						>
							Groceries
						</a>
						<a
							className='dropdown-item'
							onClick={(e) => onDropdownChange(e)}
							{...register('category')}
						>
							Utilities
						</a>
						<a
							className='dropdown-item'
							onClick={(e) => onDropdownChange(e)}
							{...register('category')}
						>
							Entertaiment
						</a>
					</div>
				</div>

				<button
					disabled={!isValid}
					className='btn btn-primary my-3'
					type='submit'
				>
					Submit
				</button>
			</form>

			<table className='table table-striped'>
				<thead>
					<tr>
						<th scope='col'>Description</th>
						<th scope='col'>Amount</th>
						<th scope='col'>Category</th>
						<th scope='col'></th>
					</tr>
				</thead>
				<tbody>
					{expenses.map((element) => {
						return (
							<tr>
								<th scope='row'>{element.description}</th>
								<td>{element.amount}</td>
								<td>{element.category}</td>
								<td>
									<button
										type='button'
										className='btn btn-outline-danger'
										onClick={(e) =>
											onDeleteExpenseClicked(e)
										}
									>
										Delete
									</button>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

export default Form;
