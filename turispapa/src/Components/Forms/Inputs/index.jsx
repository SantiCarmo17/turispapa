
const Input = ({ name, type, placeholder, required }) => {
    const requiredStyle = required ? "after:content-['*'] after:ml-0.5 after:text-red-500" : ''
    return (
        <label
            htmlFor={name}
            className='block'
        >
            <span className={`${requiredStyle} text-neutral-500 block`}>
                {name}
            </span>
            <input
                type={type} name={name} id={name}
                placeholder={placeholder}
                className="px-4 py-2 bg-neutral-200/10 placeholder:text-neutral-400/60 border border-neutral300/75 focus:border-[#14a44e76] focus:ring-[#14a44e76] focus:ring-1 focus:outline-none rounded-lg w-full"
            />
        </label>
    )
}

export default Input