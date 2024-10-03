import { useState } from "react";
import { IoIosEyeOff, IoMdEye } from "react-icons/io";

interface InputProps {
    name: string;
    type: string;
    placeholder?: string;
    autocomplete?: 'on' | 'off';
    disabled?: boolean;
    value?: string; // Add value prop for controlled input
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; // Add onChange prop
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    register?: any
}

const InputField: React.FC<InputProps> = ({ name, type, placeholder, autocomplete, disabled, value, onChange, register }) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="relative">
            <input
                type={showPassword ? 'text' : type}
                id={name}
                placeholder={placeholder}
                disabled={disabled}
                autoComplete={autocomplete}
                value={value} // Bind the value prop
                onChange={onChange} // Bind the onChange prop
                className={`font-poppins w-full text-sm mb-2 pl-10 pr-3 py-2 border-2 border-[#5b3423] rounded-md focus:outline-none ${disabled ? 'cursor-not-allowed' : ''}`}
                {...(register && register(name))} // Properly apply the register function if available
            />
            {type === 'password' && (
                <button
                    type="button"
                    className="absolute right-3 top-[12px] text-[#5b3423]"
                    onClick={togglePassword}
                >
                    {showPassword ? <IoMdEye /> : <IoIosEyeOff />}
                </button>
            )}
        </div>
    );
};

export default InputField;
