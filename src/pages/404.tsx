import { motion } from "framer-motion";
import Img404 from "@/assets/images/soonbro-memoji/soonbro_thinking.png";
const NotFound = () => {
  return (
    <motion.div
      className="404"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 0.9, rotateZ: 360 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      whileHover={{
        rotate: [0, 15, -15, 15, -7, 7, 0],
        transition: { duration: 0.6 },
      }}
    >
      <img src={Img404}></img>
    </motion.div>
  );
};
export default NotFound;
