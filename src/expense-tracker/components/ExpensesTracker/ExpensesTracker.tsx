import { useState } from 'react';
import Form from './ExpenseForm';
import ExpenseList from './ExpenseList';

const ExpensesTracker = () => {
	const [expenses, setExpenses] = useState([
		{
			id: 1,
			description: 'test',
			amount: 10,
			category: 'utilities',
		},
		{
			id: 2,
			description: 'test2',
			amount: 10,
			category: 'utilities',
		},
		{
			id: 3,
			description: 'test3',
			amount: 10,
			category: 'utilities',
		},
		{
			id: 4,
			description: 'test4',
			amount: 10,
			category: 'utilities',
		},
	]);

	const onDeleteExpenseClicked = (id: number) => {
		setExpenses(
			expenses.filter((expense: any) => expense.id !== id),
		);
	};

	return (
		<div className='container p-20'>
			<Form></Form>
			<ExpenseList
				expenses={expenses}
				onDelete={onDeleteExpenseClicked}
			></ExpenseList>
		</div>
	);
};

export default ExpensesTracker;
