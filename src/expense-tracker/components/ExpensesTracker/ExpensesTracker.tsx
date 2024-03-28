import { useLayoutEffect, useState } from 'react';
import ExpenseFilter from './ExpenseFilter';
import Form from './ExpenseForm';
import ExpenseList from './ExpenseList';

export const categories = [
	{ value: 'all_categories', label: 'All Categories' },
	{ value: 'entertainment', label: 'Entertainment' },
	{ value: 'utilities', label: 'Utilities' },
	{ value: 'groceries', label: 'Groceries' },
];

interface FormData {
	id?: string;
	description: string;
	amount: number;
	category: string;
}

const ExpensesTracker = () => {
	const [expenses, setExpenses] = useState<FormData[]>([]);

	const LoadList = () => {
		setExpenses([
			{
				id: '1',
				description: 'test',
				amount: 10,
				category: 'utilities',
			},
			{
				id: '2',
				description: 'test2',
				amount: 10,
				category: 'utilities',
			},
			{
				id: '3',
				description: 'test3',
				amount: 10,
				category: 'utilities',
			},
			{
				id: '4',
				description: 'test4',
				amount: 10,
				category: 'utilities',
			},
			{
				id: '5',
				description: 'test5',
				amount: 10,
				category: 'entertainment',
			},
			{
				id: '6',
				description: 'test6',
				amount: 10,
				category: 'groceries',
			},
			{
				id: '7',
				description: 'test7',
				amount: 10,
				category: 'groceries',
			},
		]);
	};
	useLayoutEffect(() => {
		LoadList();
	}, []);

	const onDeleteExpenseClicked = (id: string) => {
		if (!id) {
			alert('this item has not an id assigned');
			return;
		}
		setExpenses(
			expenses.filter((expense: any) => expense.id !== id),
		);
	};

	// Filter
	const [selectedCategory, setSelectedCategory] =
		useState('');
	const filteredExpenses = selectedCategory
		? expenses.filter(
				(expense) => expense.category === selectedCategory,
			)
		: expenses;

	// onSubmit
	const generarIdRandom = () => {
		const idRandom = Math.floor(Math.random() * 900 + 100);
		return idRandom;
	};
	const handleOnSubmit = (data: FormData) => {
		data.id = '' + generarIdRandom();
		setExpenses([...expenses, data]);
	};

	return (
		<div className='container p-20'>
			<Form onSubmit={handleOnSubmit}></Form>
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
