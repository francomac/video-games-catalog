import Button from '@/components/Button.tsx';
import { useState } from 'react';

interface Props {
	text: string;
	quantity?: number;
}

const ExpandableText = ({ text, quantity = 50 }: Props) => {
	const [showMore, setShowMore] = useState(false);

	const onTextCutOff = () => {
		setShowMore(!showMore);
	};

	return (
		<>
			{showMore ? (
				<div>{text}</div>
			) : (
				<div>{text.substring(0, quantity)}</div>
			)}
			<Button
				className='mx-2'
				text={showMore ? 'Show less' : 'Show more'}
				typeColor='secondary'
				onClick={onTextCutOff}
			></Button>
		</>
	);
};

export default ExpandableText;
