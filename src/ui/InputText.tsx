interface InputTextProps {
    value?: string;
    onChange: (value: string) => void;
    placeholder?: string;
    disabled?: boolean;
    className?: string;
}

const InputText: React.FC<InputTextProps> = ({ value, onChange, placeholder = '', disabled = false, className = '' }) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      onChange(event.target.value);
    };
  
    return (
        <div className="pt-5">
            <input 
                className={`${className} pl-4 text-sm border-[2px] border-[#4ED0D6] h-14 bg-[#4ED0D6] bg-opacity-20`} 
                type="text"
                value={value}
                onChange={handleChange}
                placeholder={placeholder}
                disabled={disabled}
            />
        </div>
    );
  };
  
  export default InputText;