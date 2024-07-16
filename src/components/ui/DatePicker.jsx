import { useEffect, useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";

function DatePicker({
    value = null,
    setValue = () => {},
    id = "",
    wrapper = "",
    label = "",
    labelClass = "",
    symble = "*",
    symbleClass = "",
    inputClass = "",
    ...rest
}) {
    const [initValue, setInitValue] = useState(null);

    const handleValueChange = (newValue) => {
        setValue(newValue);
        setInitValue(newValue);
    };

    useEffect(() => {
        setInitValue(value);
    }, []);

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
            <Datepicker
                useRange={false}
                asSingle={true}
                value={initValue}
                onChange={handleValueChange}
                containerClassName="relative w-full border border-neutral-700 rounded-lg light"
                inputClassName="w-full p-4 bg-transparent outline-none border-none  text-black-900 placeholder:text-neutral-650"
                {...rest}
            />
        </div>
    );
}

export default DatePicker;
