import { categories } from './ExpensesTracker';

interface Props {
	onSelectCategories: (category: string) => void;
}

const ExpenseFilter = ({ onSelectCategories }: Props) => {
	return (
		<select
			className='form-select'
			onChange={(e) => onSelectCategories(e.target.value)}
		>
			{categories.map((category) => (
				<option key={category.value} value={category.value}>
					{category.label}
				</option>
			))}
		</select>
	);
};

export default ExpenseFilter;
