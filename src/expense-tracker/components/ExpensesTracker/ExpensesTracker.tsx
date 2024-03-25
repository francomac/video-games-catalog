import { useState } from 'react';
import ExpenseFilter from './ExpenseFilter';
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
		{
			id: 5,
			description: 'test5',
			amount: 10,
			category: 'entertainment',
		},
		{
			id: 6,
			description: 'test6',
			amount: 10,
			category: 'groceries',
		},
		{
			id: 7,
			description: 'test7',
			amount: 10,
			category: 'groceries',
		},
	]);

	const onDeleteExpenseClicked = (id: number) => {
		setExpenses(
			expenses.filter((expense: any) => expense.id !== id),
		);
	};

	const [selectedCategory, setSelectedCategory] =
		useState('');
	const filteredExpenses = selectedCategory
		? expenses.filter(
				(expense) => expense.category === selectedCategory,
			)
		: expenses;

	return (
		<div className='container p-20'>
			<Form></Form>
			<div className='mb-3'>
				<ExpenseFilter
					onSelectCategories={(e) => setSelectedCategory(e)}
				></ExpenseFilter>
			</div>
			<ExpenseList
				expenses={filteredExpenses}
				onDelete={onDeleteExpenseClicked}
			></ExpenseList>
		</div>
	);
};

export default ExpensesTracker;
