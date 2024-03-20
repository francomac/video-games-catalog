import { FormEvent, useState } from 'react';

const Form = () => {
	const [person, setPerson] = useState({
		name: '',
		age: 0,
	});

	const handleSubmit = (event: FormEvent) => {
		event.preventDefault();

		console.log(person);
	};
	return (
		<form className='mt-3' onSubmit={handleSubmit}>
			<div className='mb-3'>
				<label htmlFor='name' className='form-label'>
					Name
				</label>
				<input
					id='name'
					type='text'
					className='form-control'
					onChange={(event) =>
						setPerson({
							...person,
							name: event.target.value,
						})
					}
					value={person.name}
				/>
			</div>

			<div className='mb-3'>
				<label htmlFor='age' className='form-label'>
					Age
				</label>
				<input
					id='age'
					type='number'
					className='form-control'
					onChange={(event) =>
						setPerson({
							...person,
							age: parseInt(event.target.value),
						})
					}
					value={person.age}
				/>
			</div>

			<button className='btn btn-primary' type='submit'>
				Submit
			</button>
		</form>
	);
};

export default Form;
