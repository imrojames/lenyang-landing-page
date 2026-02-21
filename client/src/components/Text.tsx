interface ITextProps {
  className?: string;
  placeholder?: string;
  type?: string;
}

const Text = ({className, placeholder, type}: ITextProps) => {
    return (
        <input 
            className={className}
            placeholder={placeholder} 
            type={type} 
        />
    );
}

export default Text;