import { AnimatePresence, motion } from "framer-motion";
import { AiOutlineEnvironment } from "react-icons/ai";
import { useState } from "react";
type ClickProps = {
  isOpen: Boolean;
  setIsOpen: (isOpen: Boolean) => void;
};
type IModal = {
  zip: Boolean;
};
const Modal: React.FC<IModal> = ({ zip }) => {
  const [isOpen, setIsOpen] = useState<Boolean>(zip ? zip : false);
  return (
    <div className="px-4 py-64 grid place-content-center">
      <button
        onClick={() => setIsOpen(true)}
        className="w-full origin-top-left rounded-lg border py-3 text-xs font-medium transition-all md:text-base px-4 py-2 border-zinc-900 bg-white text-zinc-900 hover:-rotate-2"
      >
        Change location
      </button>
      <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

const SpringModal: React.FC<ClickProps> = ({ isOpen, setIsOpen }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e: any) => e.stopPropagation()}
            className="bg-gradient-to-br bg-white text-zinc-900 p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
          >
            <AiOutlineEnvironment className="text-zinc-900 rotate-300 text-[250px] absolute z-0 -top-24 -left-24" />
            <div className="relative z-10">
              <div className="bg-white w-16 h-16 mb-2 rounded-full text-3xl text-zinc-900 grid place-items-center mx-auto">
                <AiOutlineEnvironment />
              </div>
              <h3 className="text-3xl font-bold text-center mb-2">
                Enter your Zipcode
              </h3>
              <form className="relative flex w-full max-w-md items-center gap-2    py-1.5 pl-6 pr-1.5 mb-6">
                <input
                  type="zipcode"
                  placeholder="Enter your first 3 charactor of your zip"
                  className=" border border-zinc-900 rounded w-full py-3 px-2 bg-transparent text-sm text-zinc-900 placeholder-zinc-900 focus:outline-0"
                />
                <div className="rounded-lg transition-colors bg-zinc-900">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="w-full origin-top-left rounded-lg border py-3 text-xs font-medium transition-all md:text-base px-4 py-2 border-zinc-900 bg-white text-zinc-900 hover:-rotate-2"
                  >
                    Confirm
                  </button>
                </div>
              </form>
              <p className=" px-6">eg:L4J A6R you insert L4J </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
