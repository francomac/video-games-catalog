interface Props {
	text: string;
	typeColor?: 'primary' | 'secondary';
	onClick: () => void;
}

const Button = ({
	text,
	typeColor = 'primary',
	onClick,
}: Props) => {
	return (
		<button
			type='button'
			className={`mx-2 btn btn-${typeColor}`}
			onClick={onClick}
		>
			{text}
		</button>
	);
};

export default Button;
