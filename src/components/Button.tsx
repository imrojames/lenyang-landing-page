interface IButtonProps {
    className?: string;
    placeholder?: string;
    element?: React.ReactNode;
}

const Button = ({className, placeholder, element}: IButtonProps) => {
    return (
        <button
            className={className}>
            {placeholder}
            {element}
        </button>
    );
}

export default Button;