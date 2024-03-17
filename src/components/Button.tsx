interface Props {
	text: string;
	typeColor?: 'primary';
	onClick: () => void;
}

const Button = ({
	text,
	typeColor = 'btn-primary',
	onClick,
}: Props) => {
	return (
		<button
			type='button'
			className={`btn btn-${typeColor}`}
			onClick={onClick}
		>
			{text}
		</button>
	);
};

export default Button;
