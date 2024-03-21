import { FieldValues, useForm } from 'react-hook-form';

interface FormData {
	name: string;
	age: number;
}

const FormUseFormHook = () => {
	// const [person, setPerson] = useState({
	// 	name: '',
	// 	age: 0,
	// });

	// const handleSubmit = (event: FormEvent) => {
	// 	event.preventDefault();

	// 	console.log(person);
	// };

	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm<FormData>();

	const onSubmit = (data: FieldValues) => {
		console.log(data);
		console.log(errors);
	};
	return (
		<div className='mt-3'>
			<h2>{'Form using useForm Hook'}</h2>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className='mb-3'>
					<label htmlFor='name' className='form-label'>
						Name
					</label>
					<input
						id='name'
						type='text'
						className='form-control'
						// onChange={(event) =>
						// 	setPerson({
						// 		...person,
						// 		name: event.target.value,
						// 	})
						// }
						// value={person.name}
						{...register('name', {
							required: true,
							minLength: 3,
						})}
					/>
					{errors.name?.type === 'required' && (
						<p className='text-danger'>
							The name field is required.
						</p>
					)}
					{errors.name?.type === 'minLength' && (
						<p className='text-danger'>
							The name must be at least 3 characters.
						</p>
					)}
				</div>

				<div className='mb-3'>
					<label htmlFor='age' className='form-label'>
						Age
					</label>
					<input
						id='age'
						type='number'
						className='form-control'
						// onChange={(event) =>
						// 	setPerson({
						// 		...person,
						// 		age: parseInt(event.target.value),
						// 	})
						// }
						// value={person.age}
						{...register('age')}
					/>
				</div>

				<button
					disabled={!isValid}
					className='btn btn-primary'
					type='submit'
				>
					Submit
				</button>
			</form>
		</div>
	);
};

export default FormUseFormHook;
