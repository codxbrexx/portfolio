export const pageVariants = {
    initial: { opacity: 0, y: 20, scale: 0.995 },
    animate: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: "easeOut" } },
    exit: { opacity: 0, y: -10, scale: 0.995, transition: { duration: 0.35, ease: "easeIn" } }
};
