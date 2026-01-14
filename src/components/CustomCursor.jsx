import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const mouseMove = (e) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            })
        }

        window.addEventListener("mousemove", mouseMove);

        // Add hover effect listeners for interactive elements
        const handleMouseOver = (e) => {
            if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a') || e.target.closest('button')) {
                setIsHovering(true);
            }
        };

        const handleMouseOut = () => {
            setIsHovering(false);
        };

        document.addEventListener("mouseover", handleMouseOver);
        document.addEventListener("mouseout", handleMouseOut);

        return () => {
            window.removeEventListener("mousemove", mouseMove);
            document.removeEventListener("mouseover", handleMouseOver);
            document.removeEventListener("mouseout", handleMouseOut);
        }
    }, []);

    return (
        <motion.div
            className="fixed top-0 left-0 w-8 h-8 border border-cyan-400 rounded-full pointer-events-none z-50 flex items-center justify-center mix-blend-difference"
            animate={{
                x: mousePosition.x - 16,
                y: mousePosition.y - 16,
                scale: isHovering ? 1.5 : 1,
                backgroundColor: isHovering ? "rgba(34, 211, 238, 0.2)" : "transparent",
            }}
            transition={{
                type: "spring",
                stiffness: 500,
                damping: 28
            }}
        >
            <div className="w-1 h-1 bg-cyan-400 rounded-full" />
        </motion.div>
    );
};

export default CustomCursor;
