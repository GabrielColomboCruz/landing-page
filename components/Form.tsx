import React from "react";

const Form = () => {
  return (
    <div className="flex flex-col items-center ">
      <div className="text-center mb-4">
        <h1 className="text-xl font-bold mb-2">Receba a planilha por e-mail</h1>
        <p className="text-sm ">
          Preencha os seus <br /> dados para receber o material
        </p>
        <br />
        <hr className=" border-t border-gray-300" />
      </div>

      <div className="w-full max-w-md">
        <form className="flex flex-col space-y-2 text-sm">
          <label htmlFor="nome" className="font-medium">
            Nome*
          </label>
          <input
            id="nome"
            type="text"
            placeholder="Digite seu nome"
            className="border border-gray-300 p-2 rounded-none w-full h-8 text-black"
          />{" "}
          <label htmlFor="email" className="font-medium">
            E-mail*
          </label>
          <input
            id="email"
            type="email"
            placeholder="Digite seu e-mail"
            className="border border-gray-300 p-2 rounded-none w-full h-8 text-black"
          />{" "}
          <label htmlFor="empresa" className="font-medium">
            Você possui empresa?*
          </label>
          <select
            id="empresa"
            className="border border-gray-300 p-2 rounded-none w-full h-8 text-black"
          >
            <option value=""></option>
            <option value="sim">Sim</option>
            <option value="nao">Não</option>
          </select>
          <label htmlFor="setor" className="font-medium">
            Qual o setor da sua empresa?*
          </label>
          <select
            id="setor"
            className="border border-gray-300 p-2 rounded-none w-full h-8 text-black"
          >
            <option value=""></option>
            <option value="financeiro">Financeiro</option>
            <option value="marketing">Marketing</option>
            <option value="tecnologia">Tecnologia</option>
            <option value="outros">Outros</option>
          </select>
          <label htmlFor="pessoas" className="font-medium">
            Quantas pessoas têm na sua empresa?*
          </label>
          <select
            id="pessoas"
            className="border border-gray-300 p-2 rounded-none w-full h-8 text-black"
          >
            <option value=""></option>
            <option value="1-10">1-10</option>
            <option value="11-50">11-50</option>
            <option value="51-200">51-200</option>
            <option value="200+">200+</option>
          </select>
          <button
            type="submit"
            className="bg-orange-500 text-white p-3 rounded-none hover:bg-orange-600 w-full h-16"
          >
            Receber o material
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
