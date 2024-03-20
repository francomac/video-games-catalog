import Button from '@/components/Button.tsx';
import { useState } from 'react';

interface Props {
	text: string;
	maxChars?: number;
}

const ExpandableText = ({ text, maxChars = 50 }: Props) => {
	const [showMore, setShowMore] = useState(false);

	const onTextCutOff = () => {
		setShowMore(!showMore);
	};

	return (
		<>
			{showMore ? (
				<div>{text}</div>
			) : (
				<div>{text.substring(0, maxChars)}</div>
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
