import { useState } from "react";
import { IoIosEyeOff, IoMdEye } from "react-icons/io";


interface InputProps {
    name: string;
    type: string;
    placeholder?: string;
    autocomplete?: 'on' | 'off';
    disabled?: boolean;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    register?: any;

}

const InputField: React.FC<InputProps> = ({ name, type, placeholder, autocomplete, disabled, register }) => {

    const [showPassword, setShowPassword] = useState(false);

    const togglePassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div>
            <input
                type={showPassword ? 'text' : type}
                id={name}
                placeholder={placeholder}
                disabled={disabled}
                autoComplete={autocomplete}
                className={`font-poppins w-full text-sm mb-2 pl-10 pr-3 py-2 border-2 border-[#5b3423] rounded-md focus:outline-none ${disabled ? 'cursor-not-allowed' : ''}`}
                {...register(name)}

            />
            {type === 'password' && (
                <button
                    type="button"
                    className="absolute right-3 top-[45px] text-[#5b3423]"
                    onClick={togglePassword}
                >
                    {showPassword ? <IoMdEye /> : <IoIosEyeOff />}
                </button>
            )}

        </div>
    )
}

export default InputField
