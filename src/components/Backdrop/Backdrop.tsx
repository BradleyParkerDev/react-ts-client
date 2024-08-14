import { motion } from "framer-motion";
import { ReactNode, MouseEventHandler } from "react";

interface BackdropProps {
    children: ReactNode;
    onClick: MouseEventHandler<HTMLDivElement>;
}

const Backdrop: React.FC<BackdropProps> = ({ children, onClick }) => {
    return (
        <motion.div
            className="fixed inset-0 h-full w-full bg-[#000001] flex items-center justify-center"
            onClick={onClick}
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
        >
            {children}
        </motion.div>
    );
}

export default Backdrop;
