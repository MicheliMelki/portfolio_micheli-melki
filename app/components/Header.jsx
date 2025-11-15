import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <div className="w-11/12 max-w-3x1 text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        <Image src={assets.profile_img} alt="" className="rounded-full w-32" />
      </motion.div>
      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex itemns-end gap-2 text-x1 md:text-2x1 mb-3 font-Ovo"
      >
        Oi! Eu sou a Micheli Melki{" "}
        <Image src={assets.hand_icon} alt="" className="w-6" />
      </motion.h3>
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-3x1 sm:text-6x1 lg:text-[66px]"
      >
        FullStack Junior em JavaScript.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="max-w-2x1 mx-auto font-Ovo"
      >
        Futura desenvolvedora em início de carreira, motivada e focada em
        aprendizado contínuo, buscando experiência prática em projetos de
        tecnologia.
      </motion.p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          href="#contact"
          className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent"
        >
          Entre em contato{" "}
          <Image src={assets.right_arrow_white} alt="" className="w-4" />
        </motion.a>

        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2}}
          href="#/sample-resume.pdf"
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black"
        >
          Um pouco sobre mim{" "}
          <Image src={assets.download_icon} alt="" className="w-4" />
        </motion.a>
      </div>
    </div>
  );
};

export default Header;
