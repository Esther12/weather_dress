"use client";

import { AnimatePresence, motion } from "framer-motion";
import { AiOutlineEnvironment } from "react-icons/ai";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/types";
import { setZip } from "../redux/slices/locationSlice";

type ClickProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

const Modal: React.FC = () => {
  const zip = useSelector((state: RootState) => state.location.zip);
  const [isOpen, setIsOpen] = useState<boolean>(!!zip);

  return (
    <div className="px-4 py-1 grid place-content-center">
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
  const dispatch = useDispatch();
  const zip = useSelector((state: RootState) => state.location.zip);
  const [inputValue, setInputValue] = useState<string>(zip);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsOpen(false);
    console.log("inputValue", inputValue);
    if (inputValue.trim().length > 2) {
      dispatch(setZip(inputValue));
    }
    setInputValue("");
  };

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
                <AiOutlineEnvironment className="text-indigo-600" />
              </div>
              <h3 className="text-3xl font-bold text-center mb-2">
                Enter your zipcode
              </h3>
              <form
                onSubmit={handleSubmit}
                className="relative flex w-full max-w-md items-center gap-2 py-1.5 pl-6 pr-1.5 mb-2"
              >
                <input
                  type="zipcode"
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Enter your first 3 charactor of your zip"
                  className=" border border-zinc-900 rounded w-full py-3 px-2 bg-transparent text-sm text-zinc-900 placeholder-zinc-900 focus:outline-0"
                />
                <div className="rounded-lg transition-colors bg-zinc-900">
                  <button
                    type="submit"
                    className="w-full origin-top-left rounded-lg border py-3 text-xs font-medium transition-all md:text-base px-4 py-2 border-zinc-900 bg-white text-zinc-900 hover:-rotate-2"
                  >
                    Confirm
                  </button>
                </div>
              </form>
              <p className="mb-4 px-6">eg: Zipcode L4J A6R enter 'L4J' </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;