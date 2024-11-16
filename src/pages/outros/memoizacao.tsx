import Display from "@/components/template/Display";
import Flex from "@/components/template/Flex";
import InputFormatado from "@/components/template/InputFormatado";
import Pagina from "@/components/template/Pagina";
import { useMemo, useState } from "react";

//Memoização é ela serve par quando temos calculos muito grandes e demorados
export default function Memoizacao() {
  const [numero1, setNumero1] = useState(1);
  const [numero2, setNumero2] = useState(1);
  const [numero3, setNumero3] = useState(1);
  const [numero4, setNumero4] = useState(1);
  //aqui vai simular um daley de 3 segundo antes de fazer a potencia
  //   const potencia = () => {
  //     let future = Date.now() + 300;
  //     while (Date.now() < future);
  //     return numero1 ** numero2;
  //   };
  let potencia = useMemo(() => {
    let future = Date.now() + 300;
    while (Date.now() < future);
    return numero1 ** numero2;
  }, [numero1,numero2]);
  let soma = numero3 + numero4;
  return (
    <Pagina titulo="Memoização 1" subtitulo="Usando o hook useMemo">
      <Flex col center>
        <Display
          texto={
            <>
              <span>{numero1}</span>
              <sup>{numero2}</sup>
              <span>= {potencia}</span>
            </>
          }
        ></Display>
        <Flex>
          <InputFormatado
            valor={numero1}
            tipo="number"
            onInput={(e) => setNumero1(+e.target.value)}
          />
          <InputFormatado
            valor={numero2}
            tipo="number"
            onInput={(e) => setNumero2(+e.target.value)}
          />
        </Flex>
        <Display texto={`${numero3} + ${numero4} = ${soma}`}></Display>
        <Flex>
          <InputFormatado
            valor={numero3}
            tipo="number"
            onInput={(e) => setNumero3(+e.target.value)}
          />
          <InputFormatado
            valor={numero4}
            tipo="number"
            onInput={(e) => setNumero4(+e.target.value)}
          />
        </Flex>
      </Flex>
    </Pagina>
  );
}
