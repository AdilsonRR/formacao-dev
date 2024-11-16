import InputFormatado from "@/components/formulario/InputFormatado";
import Botao from "@/components/template/Botao";
import Display from "@/components/template/Display";
import Flex from "@/components/template/Flex";
import Pagina from "@/components/template/Pagina";
import { useEffect, useState } from "react";

export default function Soma() {
  //1. Criardois estado para armazenar numeor
  //2. Link os estados com input
  //3. Monitorar a validade dos numeros. O numero será valido se for > 0
  //4 Fazer a soma clicando no botão se os numeros forem validos
  const [num1, setNun1] = useState(0);
  const [num2, setNun2] = useState(0);
  const [validadoNum1, setValidadoNum1] = useState(false);
  const [validadoNum2, setValidadoNum2] = useState(false);
  const [soma, setSoma] = useState(0);
  useEffect(() => {
    setValidadoNum1(num1 > 0);
  }, [num1]);
  useEffect(() => {
    setValidadoNum2(num2 > 0);
  }, [num2]);
  const fazSoma = () => {
    if (validadoNum1 && validadoNum2) {
      setSoma(num1 + num2);
    } else {
      setSoma(-99999);
    }
  };
  return (
    <Pagina titulo="Soma com useState" subtitulo="Exemplo de soma  useState">
      <Flex col centerCross>
        <Display texto="Faça uma soma" />
        <Flex center>
          <InputFormatado
            tipo="number"
            valor={num1}
            onInput={(e) => setNun1(+e.target.value)}
          />
          <span className="ml-2 text-4xl">+</span>
          <InputFormatado
            tipo="number"
            valor={num2}
            onInput={(e) => setNun2(+e.target.value)}
          />
          <Botao cor="bg-orange-400" texto="=" onClick={fazSoma} />
        </Flex>
      </Flex>
      <Display texto={soma}/>
    </Pagina>
  );
}
