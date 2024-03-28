interface Expense {
	id?: string;
	description: string;
	amount: number;
	category: string;
}
interface Props {
	expenses: Expense[];
	onDelete: (id: string) => void;
}

const ExpenseList = ({ expenses, onDelete }: Props) => {
	if (expenses.length === 0) return null;
	return (
		<div className='w-50 mt-3'>
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
					{expenses.map((expense) => {
						return (
							<tr key={expense.id}>
								<th scope='row'>{expense.description}</th>
								<td>{expense.amount}</td>
								<td>{expense.category}</td>
								<td>
									<button
										type='button'
										className='btn btn-outline-danger'
										onClick={() =>
											onDelete(expense.id || '')
										}
									>
										Delete
									</button>
								</td>
							</tr>
						);
					})}
				</tbody>
				<tfoot>
					<tr>
						<td>
							$
							{parseFloat(
								'' +
									expenses.reduce(
										(acc, expense) =>
											parseFloat('' + expense.amount) + acc,
										0,
									),
							).toFixed(2)}
						</td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
				</tfoot>
			</table>
		</div>
	);
};

export default ExpenseList;
