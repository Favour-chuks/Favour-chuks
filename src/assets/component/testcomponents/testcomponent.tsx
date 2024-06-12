import { motion } from "framer-motion";

function FramerTest() {
  return (
    <>
      <motion.div className="h-[100vh] bg-red-500">
        <motion.h1 className="justify-self-center">
          Framer says hello
        </motion.h1>
      </motion.div>
    </>
  );
}

export default FramerTest;
