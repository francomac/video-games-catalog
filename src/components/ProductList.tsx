import { useEffect } from 'react';

const ProductList = ({
	category,
}: {
	category: string;
}) => {
	useEffect(() => {
		console.log('option selected:', category);
	}, [category]);

	return <div>ProductList</div>;
};

export default ProductList;
