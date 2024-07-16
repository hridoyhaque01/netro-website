function Search({ wrapper = "", input = "", ...rest }) {
    return (
        <label
            htmlFor="search"
            className={`border border-black-950 flex items-center pl-4 rounded-full ${wrapper}`}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
            >
                <path
                    d="M22 22L20 20M2 11.5C2 6.25329 6.25329 2 11.5 2C16.7467 2 21 6.25329 21 11.5C21 16.7467 16.7467 21 11.5 21C6.25329 21 2 16.7467 2 11.5Z"
                    stroke="#757575"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>

            <input
                id="search"
                type="text"
                className={`w-full bg-transparent text-black-900 placeholder:text-black-600 outline-none border-none py-4 px-4 ${input}`}
                {...rest}
            />
        </label>
    );
}

export default Search;
