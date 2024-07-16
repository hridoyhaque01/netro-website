import { animatedItem } from "@/lib/animations";
import { images } from "@/lib/images";
import { motion } from "framer-motion";
import { useState } from "react";
import ReactPlayer from "react-player";
function VideoItem({
    url = "https://www.youtube.com/watch?v=LXb3EKWsInQ",
    thumbnail = images.vThumbnail,
    className = "h-[720px]",
}) {
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlay = () => {
        setIsPlaying(true);
    };

    return (
        <motion.div
            variants={animatedItem({ scale: 0.8 })}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full"
        >
            <div
                className={`w-full rounded-[32px] overflow-hidden relative flex items-center justify-center ${className}`}
                style={{
                    background: `linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%), url(${thumbnail}) lightgray 50% / cover no-repeat`,
                }}
            >
                {!isPlaying ? (
                    <button
                        onClick={handlePlay}
                        className="flex items-center justify-center bg-black bg-opacity-50 text-white text-3xl w-40 aspect-square bg-yellow-04 rounded-full"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="52"
                            height="56"
                            viewBox="0 0 52 56"
                            fill="none"
                        >
                            <path
                                d="M50.6906 31.0314C49.4241 35.8439 43.4383 39.2446 31.4666 46.0459C19.8935 52.6208 14.107 55.9083 9.44375 54.5868C7.5158 54.0405 5.75922 53.0029 4.34256 51.5736C0.916016 48.1165 0.916016 41.411 0.916016 28C0.916016 14.589 0.916016 7.88352 4.34256 4.4264C5.75922 2.9971 7.5158 1.9595 9.44375 1.41317C14.107 0.0917417 19.8935 3.37918 31.4666 9.95407C43.4382 16.7554 49.4241 20.1561 50.6906 24.9686C51.2134 26.955 51.2134 29.0449 50.6906 31.0314Z"
                                fill="white"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                ) : (
                    <ReactPlayer
                        url={url}
                        width="100%"
                        height="100%"
                        playing={isPlaying}
                        controls={false}
                        muted={true}
                    />
                )}
            </div>
        </motion.div>
    );
}

export default VideoItem;
