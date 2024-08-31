/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

const pageVariants = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
};

const pageTransition = {
    type: 'spring',
    stifness: 100,
    duration: 0.2,
    ease: 'easeIn'
}

const AnimatedPage = ({ children }) => {
    return (
        <motion.div
            variants={pageVariants}
            transition={pageTransition}
            initial="initial"
            animate="animate"
            exit="exit"
            className='w-full h-full'
        >
            {children}
        </motion.div>
    );
};

export default AnimatedPage;
