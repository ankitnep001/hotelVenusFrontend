import RequiredSign from './RequiredSign'

interface ILabel {
    name: string
    label: string
    required?: boolean
}

const Label: React.FC<ILabel> = ({ name, label, required }) => {
    return (
        <label htmlFor={name} className='font-poppins block text-md text-[#5b3423] font-medium mb-2'>
            {label} {required && <RequiredSign />}
        </label>
    )
}

export default Label
