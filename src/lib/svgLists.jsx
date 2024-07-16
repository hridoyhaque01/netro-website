function ArrowAngle({ className = "", ...rest }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className={className}
        >
            <path
                d="M9.29563 5.70386C9.29563 6.26386 9.74563 6.70386 10.2956 6.70386H15.8856L4.99562 17.5939C4.60563 17.9839 4.60563 18.6139 4.99562 19.0039C5.38563 19.3939 6.01563 19.3939 6.40563 19.0039L17.2956 8.11386V13.7039C17.2956 14.2539 17.7456 14.7039 18.2956 14.7039C18.8456 14.7039 19.2956 14.2539 19.2956 13.7039V5.70386C19.2956 5.15386 18.8456 4.70386 18.2956 4.70386H10.2956C9.74563 4.70386 9.29563 5.15386 9.29563 5.70386Z"
                {...rest}
            />
        </svg>
    );
}

export default ArrowAngle;

export const ArrowRight = ({ className = "", ...rest }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            className={className}
        >
            <path
                d="M18.6667 10.6665L24 15.9998M24 15.9998L18.6667 21.3332M24 15.9998L8 15.9998"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                {...rest}
            />
        </svg>
    );
};

export const QuoteLight = ({ className = "", ...rest }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="132"
            height="103"
            viewBox="0 0 132 103"
            fill="none"
            className={className}
        >
            <path
                d="M9.32609 0C4.54348 1.188 1.43478 4.98962 0 11.4049C6.93478 15.2065 13.9891 20.9089 21.163 28.5121C28.337 36.1153 33.3587 44.4314 36.2283 53.4602H35.1522C26.0652 53.4602 18.8913 55.7174 13.6304 60.2318C8.6087 64.9839 6.09783 71.0427 6.09783 78.4083C6.09783 85.2987 8.6087 91.12 13.6304 95.872C18.8913 100.624 25.1087 103 32.2826 103C40.8913 103 47.7065 99.9112 52.7283 93.7336C57.75 87.7935 60.2609 80.5467 60.2609 71.9931C60.2609 57.4994 55.5978 44.5502 46.2717 33.1453C36.9457 21.7405 24.6304 10.692 9.32609 0ZM81.0652 0C76.2826 1.188 73.1739 4.98962 71.7391 11.4049C78.6739 15.2065 85.7283 20.9089 92.9022 28.5121C100.076 36.1153 105.098 44.4314 107.967 53.4602H106.891C97.8044 53.4602 90.6304 55.7174 85.3696 60.2318C80.3478 64.9839 77.837 71.0427 77.837 78.4083C77.837 85.2987 80.3478 91.12 85.3696 95.872C90.6304 100.624 96.8478 103 104.022 103C112.63 103 119.446 99.9112 124.467 93.7336C129.489 87.7935 132 80.5467 132 71.9931C132 57.4994 127.337 44.5502 118.011 33.1453C108.685 21.7405 96.3696 10.692 81.0652 0Z"
                {...rest}
            />
        </svg>
    );
};

export const QuoteYellow = ({ className = "", ...rest }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="89"
            height="62"
            viewBox="0 0 89 62"
            fill="none"
            className={className}
        >
            <path
                d="M89 0C86.0579 7.32284 83.933 14.2388 82.6253 20.748C81.4812 27.2572 80.7456 33.8478 80.4187 40.5197C80.2553 47.0289 80.1736 54.189 80.1736 62H47.8099C47.8099 50.9344 48.4637 41.4961 49.7714 33.685C51.2424 25.7113 52.9587 19.0394 54.9201 13.6693C57.045 8.29921 59.3333 3.74278 61.7851 0H89ZM41.1901 0C38.2479 7.32284 36.1231 14.2388 34.8154 20.748C33.6713 27.2572 32.9357 33.8478 32.6088 40.5197C32.4454 47.0289 32.3636 54.189 32.3636 62H0C0 50.9344 0.653811 41.4961 1.96143 33.685C3.43251 25.7113 5.23049 19.0394 7.35537 13.6693C9.48026 8.29921 11.6869 3.74278 13.9752 0H41.1901Z"
                {...rest}
            />
        </svg>
    );
};

export const Success = ({ className = "", fill = "", ...rest }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            {...rest}
        >
            <path
                opacity="0.4"
                d="M23.6667 12.0002C23.6667 18.4435 18.4434 23.6668 12 23.6668C5.55672 23.6668 0.333374 18.4435 0.333374 12.0002C0.333374 5.55684 5.55672 0.333496 12 0.333496C18.4434 0.333496 23.6667 5.55684 23.6667 12.0002Z"
                fill={fill}
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17.2039 7.80936C17.5854 8.10604 17.6541 8.65578 17.3574 9.03724L12.6826 15.0477C11.9549 15.9833 10.5861 16.1047 9.70517 15.3118L6.74804 12.6504C6.38884 12.3271 6.35972 11.7739 6.683 11.4147C7.00628 11.0555 7.55953 11.0264 7.91873 11.3497L10.8759 14.0111C11.0017 14.1243 11.1972 14.107 11.3012 13.9733L15.976 7.96284C16.2727 7.58139 16.8225 7.51267 17.2039 7.80936Z"
                fill={fill}
            />
        </svg>
    );
};