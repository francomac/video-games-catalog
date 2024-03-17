import { useState } from 'react';

interface Props {
	items: string[];
	heading: string;
	onSelectItem: (item: string) => void;
}

function ListGroup({
	items,
	heading,
	onSelectItem,
}: Props) {
	let [selectedIndex, setSelectedIndex] = useState(-1);

	return (
		<>
			<h1>{heading}</h1>
			<div className='d-flex flex-row flex-md-row p-4 gap-4 py-md-5 align-items-center justify-content-center'>
				{items.length === 0 && <p>No item found</p>}
				<ul className='list-group'>
					{items.map((item, index) => (
						<li
							key={index}
							className={
								selectedIndex === index
									? 'list-group-item active'
									: 'list-group-item'
							}
							onClick={() => {
								setSelectedIndex(index);
								onSelectItem(item);
							}}
						>
							{item}
						</li>
					))}
				</ul>
			</div>
		</>
	);
}

export default ListGroup;
