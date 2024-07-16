function Input({
    id = "",
    wrapper = "",
    label = "",
    labelClass = "",
    symble = "*",
    symbleClass = "",
    inputClass = "",
    ...rest
}) {
    return (
        <div className={`flex flex-col gap-4 ${wrapper}`}>
            <label
                htmlFor={id}
                className={`text-black-900 font-medium ${labelClass}`}
            >
                {label}{" "}
                <span className={`text-error-400 ${symbleClass}`}>
                    {symble}
                </span>
            </label>
            <input
                type="text"
                id={id}
                className={`p-4 bg-transparent outline-none border border-neutral-700 rounded-lg text-black-900 placeholder:text-neutral-650 ${inputClass}`}
                {...rest}
            />
        </div>
    );
}

export default Input;
