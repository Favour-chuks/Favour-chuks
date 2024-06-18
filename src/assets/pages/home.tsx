import { Dispatch, SetStateAction } from "react";
import MenuButton from "../component/menuButton";
import { motion } from "framer-motion";

interface modal {
  setShowModal: Dispatch<SetStateAction<boolean>>;
}
const gridVariant = {
  initial: {},
  final: {},
};
export default function HomePage({ setShowModal }: modal) {
  return (
    <motion.section
      variants={gridVariant}
      initial="initial"
      animate="final"
      id="grid-container"
      className="grid h-[100vh] grid-cols-[25%_minmax(0,_1fr)_100px] grid-rows-[100px_minmax(0,_1fr)_100px] bg-slate-100">
      {/* navigation section  */}
      <section className="section-container px-5 py-7 content-center">
        <h1
          id="name"
          className="col-start-1 col-span-4 font-semibold text-3xl content-center">
          Favour Chuks Okolo
        </h1>
      </section>
      {/* place holder section  */}
      <section className="section-container"></section>
      {/* menu section  */}
      <section className="section-container px-5 py-5 place-content-center">
        <MenuButton setShowModal={setShowModal} showModal={false} />
      </section>

      {/* content section  */}
      {/* sider  */}
      <section className="section-container px-5 py-7 content-center">
        <p className="leading-7 tracking-tighter w-[60%] text-3xl font-extralight text-gray-400">
          Hi, im a <span className="hover:underline">software developer</span>{" "}
          with a quirky sense of humor and a deep passion for coding.
        </p>
      </section>
      {/* main content  */}
      <section className="main-content section-container overflow-scroll overflow-x-hidden snap-proximity snap-y">
        {/* <Slideshow /> */}
      </section>
      <section className="section-container"></section>

      {/* footer section  */}
      <section className="section-container"></section>
      {/* contact details  */}

      <section className="section-container pl-2">
        <section className="content mr-7 self-center">
          <p className="text-justify self-center my-auto">
            Want to dive deeper into my world of code? Connect with me on
            LinkedIn or drop me an email at youremail@example.com. Check out my
            latest projects on GitHub and explore my full portfolio at
            yourportfolio.com.
          </p>
        </section>
        <button
          id="expand-footer"
          className="w-[2em] h-[40%] hover:drop-shadow-sm"
          onClick={() => {
            // return <Modal modalChildren={<About />} />;
          }}>
          <svg
            className="motion-safe:animate-pulse"
            xmlns="http://www.w3.org/2000/svg"
            height="18px"
            viewBox="0 -960 960 960"
            width="18px"
            fill="#0101010">
            <path d="M120-120v-233.33h66.67V-234l140-140L374-326.67l-140 140h119.33V-120H120Zm514-466.67L586.67-634 726-773.33H606.67V-840H840v233.33h-66.67V-726L634-586.67Z" />
          </svg>
        </button>
      </section>
      <section className="section-container"></section>
    </motion.section>
  );
}
