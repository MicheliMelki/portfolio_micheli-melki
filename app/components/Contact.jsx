"use client";
import React, { useState } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";


const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "913ad8c4-72e1-4131-a3a5-454610bd094e");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    setResult(data.success ? "Success!" : "Error");
  };

  return (
    <div
      id="contact"
      className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-size-[90%_auto]'
    >
      <h4 className="text-center mb-2 text-lg font-Ovo">Conecte-se comigo</h4>
      <h2 className="text-center text-5xl font-Ovo">Entre em contato</h2>

      <p className="text-center max-w-2x1 mx-auto mt-5 mb-12 font-Ovo">
        Ficarei feliz em receber seu contato! Envie sua mensagem para dúvidas,
        comentários ou feedbacks sobre meus projetos. Sua opinião é muito
        bem-vinda e pode contribuir para meu crescimento profissional.
      </p>

      <form onSubmit={onSubmit} className="max-w-2xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 mb-8">
          <input
            type="text"
            placeholder="Digite o seu nome"
            required
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white" name="name"
          />
          <input
            type="email"
            placeholder="Digite o seu e-mail"
            required
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"  name="email"
          />
        </div>
        <textarea
          rows="6"
          placeholder="Digite sua mensagem!"
          required
          className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6"  name="message"
        ></textarea>

        <button
          type="submit"
          className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 cursor-pointer"
        >
          Enviar!
          <Image src={assets.right_arrow_white} alt="" className="w-4" />
        </button>

        <p className="mt-4">{result}</p>
      </form>
    </div>
  );
};

export default Contact;
