interface Props {
	onSelectCategories: (category: string) => void;
}

const ExpenseFilter = ({ onSelectCategories }: Props) => {
	return (
		<select
			className='form-select'
			onChange={(e) => onSelectCategories(e.target.value)}
		>
			<option value=''>All Groceries</option>
			<option value='groceries'>Groceries</option>
			<option value='utilities'>Utilities</option>
			<option value='entertainment'>Entertainment</option>
		</select>
	);
};

export default ExpenseFilter;
