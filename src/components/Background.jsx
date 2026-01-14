import { useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const Star = ({ size, top, left, duration, delay, moveX, moveY }) => {
    return (
        <motion.div
            className="absolute bg-white rounded-full"
            style={{
                width: size,
                height: size,
                top,
                left,
                x: moveX,
                y: moveY,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.2, 0.8, 0.2] }}
            transition={{
                duration,
                repeat: Infinity,
                ease: "linear",
                delay,
            }}
        />
    );
};

const Background = () => {
    // Mouse position for parallax
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth spring animation for mouse movement
    const springConfig = { damping: 25, stiffness: 150 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    // Parallax layers moving in opposite directions at different speeds
    const layer1X = useTransform(springX, [0, 1], [20, -20]);
    const layer1Y = useTransform(springY, [0, 1], [20, -20]);

    const layer2X = useTransform(springX, [0, 1], [40, -40]);
    const layer2Y = useTransform(springY, [0, 1], [40, -40]);

    const layer3X = useTransform(springX, [0, 1], [60, -60]);
    const layer3Y = useTransform(springY, [0, 1], [60, -60]);

    useEffect(() => {
        const handleMouseMove = (e) => {
            // Normalize mouse position from 0 to 1
            const { innerWidth, innerHeight } = window;
            mouseX.set(e.clientX / innerWidth);
            mouseY.set(e.clientY / innerHeight);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <div className="absolute inset-0 overflow-hidden -z-10 bg-[#030014]">
            {/* Layer 1: Background Stars (Slow, Small) */}
            {[...Array(30)].map((_, i) => (
                <Star
                    key={`l1-${i}`}
                    size={1}
                    top={`${Math.random() * 100}%`}
                    left={`${Math.random() * 100}%`}
                    duration={Math.random() * 3 + 4}
                    delay={Math.random() * 2}
                    moveX={layer1X}
                    moveY={layer1Y}
                />
            ))}

            {/* Layer 2: Mid-ground Stars (Medium, Bright) */}
            {[...Array(20)].map((_, i) => (
                <Star
                    key={`l2-${i}`}
                    size={1.5}
                    top={`${Math.random() * 100}%`}
                    left={`${Math.random() * 100}%`}
                    duration={Math.random() * 3 + 2}
                    delay={Math.random() * 2}
                    moveX={layer2X}
                    moveY={layer2Y}
                />
            ))}

            {/* Layer 3: Foreground Stars (Fast, Larger, Glow) */}
            {[...Array(15)].map((_, i) => (
                <div key={`l3-${i}`} className="absolute" style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }}>
                    <motion.div
                        className="bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                        style={{
                            width: 2,
                            height: 2,
                            x: layer3X,
                            y: layer3Y,
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0.4, 1, 0.4] }}
                        transition={{
                            duration: Math.random() * 2 + 1.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: Math.random() * 2,
                        }}
                    />
                </div>
            ))}

            {/* Overlay to ensure text readability if needed (optional, handled by Hero container usually) */}
            <div className="absolute inset-0 bg-black/10 backdrop-blur-[0px]" />
        </div>
    );
};

export default Background;
