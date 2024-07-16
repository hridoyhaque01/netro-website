import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";

function VideoModal({ play = false }) {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  if (!isClient) return null;
  return (
    <div>
      <input type="checkbox" id="modal-toggle" className="hidden" />
      <div className="modal duration-300 z-[60]">
        <motion.div className="modal-wrapper duration-300 h-screen max-h-[720px] bg-white container2X rounded-3xl overflow-hidden z-30">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
            width="100%"
            height="100%"
            controls={false}
            muted={true}
            style={{
              borderRadius: 32,
            }}
          />
          <label htmlFor="modal-toggle" className="block p-6 border">
            close
          </label>
        </motion.div>
        <label htmlFor="modal-toggle" className="modal-backdrop" />
      </div>
    </div>
  );
}

export default VideoModal;
