import { images } from "@/lib/images";
import Image from "next/image";
import { useRef, useState } from "react";

function UploadCv({
    id = "fileUpload",
    wrapper = "",
    label = "",
    labelClass = "",
    symble = "*",
    symbleClass = "",
    inputClass = "",
    accept = "image/*",
    setter = () => {},
    extentions = ["jpg", "jpeg", "png", "pdf"],
    ...rest
}) {
    const [file, setFile] = useState(null);
    const ref = useRef(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const fileExtension = file?.name?.split(".").pop().toLowerCase();
            if (extentions?.includes(fileExtension)) {
                setFile(file);
                setter(file);
                ref.current.value = null;
            }
        } else {
            ref.current.value = null;
            setFile(null);
            setter(null);
        }
    };

    const handleDeleteFile = (event) => {
        ref.current.value = null;
        setter(null);
        setFile(null);
    };

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

            {!file?.name ? (
                <label
                    htmlFor={file?.name ? "" : id}
                    className={`p-4 bg-transparent outline-none border border-neutral-700 rounded-lg  ${inputClass} flex items-center gap-2.5`}
                >
                    <Image
                        src={images.upload_file}
                        width={24}
                        height={24}
                        alt="upload file icon"
                        className="w-6 aspect-square object-contain"
                    />
                    <span className="text-neutral-650">Add File</span>
                </label>
            ) : (
                <div
                    className={`p-4 bg-transparent outline-none border border-neutral-700 rounded-lg  ${inputClass} flex items-center gap-2.5`}
                >
                    <Image
                        src={images.upload_file}
                        width={24}
                        height={24}
                        alt="upload file icon"
                        className="w-6 aspect-square object-contain"
                    />
                    <div className="flex w-full justify-between truncate gap-1">
                        <span className="text-black-900 truncate">
                            {file?.name}
                        </span>
                        <button
                            className=""
                            type="button"
                            onClick={handleDeleteFile}
                        >
                            <svg
                                class="w-6 h-6 text-error-400"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1"
                                    d="M6 18 17.94 6M18 18 6.06 6"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            )}
            <input
                type="file"
                id={id}
                {...rest}
                className="hidden"
                ref={ref}
                onChange={handleFileChange}
            />
        </div>
    );
}

export default UploadCv;
