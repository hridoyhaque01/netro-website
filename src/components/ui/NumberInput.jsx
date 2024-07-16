import { useEffect, useState } from "react";

function NumberInput({
    defaultValue = "",
    max = -1,
    inputClass = "",
    wrapper = "",
    label = "",
    labelClass = "",
    readOnly = false,
    setter = () => {},
    onChange = () => {},
    id = "",
    symbleClass = "",
    symble = "*",
    isLoading = false,
    ...rest
}) {
    const [value, setValue] = useState("");

    function isNumber(value) {
        return /^-?\d+(\.\d+)?$/.test(value);
    }

    const handleInput = (event) => {
        const inputValue = event.target.value.replace(/[^0-9]/g, "");
        const name = event.target.name;
        const amount = Number(inputValue || "0");
        const maxNumber = Number(max);
        if (maxNumber != -1 && amount <= maxNumber) {
            setValue(inputValue);
            setter(inputValue);
            onChange(event, name, inputValue);
        } else if (maxNumber == -1) {
            setValue(inputValue);
            setter(inputValue);
            onChange(event, name, inputValue);
        }
    };

    useEffect(() => {
        if (defaultValue && isNumber(defaultValue)) {
            setValue(defaultValue);
        }
    }, [defaultValue]);

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
            {isLoading ? (
                <div className="w-full h-[58px] skeleton rounded-xl"></div>
            ) : (
                <input
                    type="text"
                    id={id}
                    className={`p-4 bg-transparent outline-none border border-neutral-700 rounded-lg text-black-900 placeholder:text-neutral-650 ${inputClass}`}
                    value={value}
                    onChange={handleInput}
                    readOnly={readOnly}
                    {...rest}
                />
            )}
        </div>
    );
}

export default NumberInput;
