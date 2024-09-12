import React from "react";

const Secondary = () => {
  return (
    <div className="text-sm">
      <b>
        <h3 className="text-base">Importante</h3>
      </b>
      <br />
      <p>
        O link para você baixar o guia sera enviado para o seu e-mail.{" "}
        <b>Isso pode levar ate 30 minutos</b>
        <br />
        <br />
        Caso você não receba em sua caixa de entrada,{" "}
        <b>cheque sua caixa de SPAM</b>
        <br />
        <br />
        Para evitar que o e-mail seja enviado para sua caixa de SPAM, adicione
        este endereço aos seus contatos cassio.muller@qu
        <br />
        <br />
        Para ver como adicionar contoatos no seu e-mail:{" "}
        <a className="text-black" href="">
          Gmail
        </a>
        ,{" "}
        <a href="" className="text-black">
          Outlook
        </a>
        ,{" "}
        <a href="" className="text-black">
          Yahoo
        </a>
      </p>
    </div>
  );
};

export default Secondary;
