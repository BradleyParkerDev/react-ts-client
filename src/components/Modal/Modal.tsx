import {motion} from "framer-motion"
import Backdrop from "../Backdrop/Backdrop"

interface ModalProps {
    handleClose: any;
    text: any;
}

const dropIn = {
    hidden:{
        y: "-100vh",
        opacity: 0,
    },
    visible:{
        y: "0",
        opacity: 1,
        transition: {
            duration: 0.1,
            type: "spring",
            damping: 25,
            stiffness: 500,
        }
    },
    exit:{
        y: "100vh",
        opacity: 0,
    }



}


const Modal: React.FC<ModalProps> = ({handleClose, text}) => {
    return (
        <Backdrop onClick={handleClose}>
            <motion.div
                onClick={(e)=>e.stopPropagation()}
                className="orange-gradient m-auto p-0 px-8 min-h-[50%] max-h-[300px] max-w-[90%] md:max-w-[700px] rounded-lg flex flex-col items-center justify-center" 
                variants={dropIn}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <p>{text}</p>
                <button onClick={handleClose}>Close</button>
            </motion.div>
        </Backdrop>
    )
}

export default Modal