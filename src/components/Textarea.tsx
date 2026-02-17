interface ITextareaProps {
  className?: string;
  placeholder?: string;
  cols?: number;
  rows?: number;
}

const Textarea = ({className, placeholder, cols, rows}: ITextareaProps) => {
  return (
    <textarea 
      className={className}
      placeholder={placeholder} 
      cols={cols}
      rows={rows}
    />
  );
}

export default Textarea;