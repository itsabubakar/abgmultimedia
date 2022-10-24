import { motion, AnimatePresence } from 'framer-motion';

const Transition = ({ children }) => {
    return (
        <div className="effect-1">
            <AnimatePresence
                initial='initial'
                animate='animate'
                exitBeforeEnter
            >
                <motion.div>
                    {children}
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default Transition;