interface InputTextProps {
    value?: string;
    onChange: (value: string) => void;
    disabled?: boolean;
    className?: string;
    name?: string;
}

const InputText: React.FC<InputTextProps> = ({ value, name, onChange, disabled = false, className = '' }) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      onChange(event.target.value);
    };
  
    return (
        <input 
            className={`${className} appearance-none rounded-full h-8 w-8 border-2 bg-[#4ED0D6] bg-opacity-20 border-[#4ED0D6] relative checked:after:absolute checked:after:top-1/2 checked:after:left-1/2 checked:after:-translate-x-1/2 checked:after:-translate-y-1/2 after:content-[''] after:inline-block checked:after:h-5 checked:after:w-5 checked:after:bg-[#4ED0D6] checked:after:rounded-full`} 
            type="radio"
            value={value}
            onChange={handleChange}
            disabled={disabled}
            name={name}
        />
    );
  };
  
  export default InputText;