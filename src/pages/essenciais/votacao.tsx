import Botao from "@/components/template/Botao";
import Display from "@/components/template/Display";
import Flex from "@/components/template/Flex";
import Pagina from "@/components/template/Pagina";
import { useState } from "react";

export default function Votaca0() {
  const [dados, setDados] = useState({ votoRoxo: 0, votoGreen: 0 });
  const votoRoxo = () => {
    //pode ser que o a variavel pode ser alterada em algum momento
    // setDados({votoRoxo: dados.votoRoxo+1,votoGreen:dados.votoGreen})
    setDados((dadosAtuais) => {
      return {
        votoRoxo: dadosAtuais.votoRoxo + 1,
        votoGreen: dadosAtuais.votoGreen,
      };
    });
  };
  const votoGrenn = () => {
    setDados((dadosAtuais) => {
      return {
        votoGreen: dadosAtuais.votoGreen + 1,
        votoRoxo: dadosAtuais.votoRoxo,
      };
    });
  };
  const zerarVotos = () => {
    setDados(() => {
      return {
        votoGreen: 0,
        votoRoxo: 0,
      };
    });
  };
  return (
    <Pagina titulo="Votação" subtitulo="Usando estado com objeto">
      <Flex col center>
        <Display
          texto="Qual a melhor cor?"
          textoComplementar={`Verde: ${dados.votoGreen} | Roxo: ${dados.votoRoxo}`}
        />
        <Flex>
          <Botao cor="bg-green-600" onClick={votoGrenn} redondo tamanho="2xl" />
          <Botao cor="bg-purple-600" onClick={votoRoxo} redondo tamanho="2xl" />
        </Flex>
        <Botao
          className="justify-center items-center"
          texto="Zerar"
          cor="bg-gray-700"
          tamanho="lg"
          onClick={zerarVotos}
        />
      </Flex>
    </Pagina>
  );
}
