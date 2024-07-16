import { motion,useAnimation, useScroll } from "framer-motion";
import { useRef } from "react";
function Test() {
  return (
    <div>
      <div className="p-10 relative">
        {[...Array(10).keys()].map((_, index) => (
          <Card key={index} />
        ))}
      </div>
    </div>
  );
}

export default Test;

export const Card = ({ }) => {
    const container = useRef()
    const { scrollXProgress } = useScroll({
        target: container,
        offset: ["end end", "start start"],
    })
  return (
    <div className="w-fyll max-w-sm p-6 bg-neutral-900/20 rounded-lg sticky top-32">
      <div className="w-24 aspect-square rounded-full border border-slate-400"></div>
      <h3>John Doe</h3>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit aperiam,
        perferendis ratione facere in cum ullam eius excepturi tenetur! Ipsa
        mollitia officia ex. Sunt error, non architecto neque culpa minus!
      </p>
    </div>
  );
};
