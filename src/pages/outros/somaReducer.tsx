import InputFormatado from "@/components/formulario/InputFormatado";
import Botao from "@/components/template/Botao";
import Display from "@/components/template/Display";
import Flex from "@/components/template/Flex";
import Pagina from "@/components/template/Pagina";
import { Reducer, useReducer } from "react";

function mudaDados(estadoAtual:any, acao:any ){
  switch (acao.type) {
    case "ALTERA_N1":
      return {
        ...estadoAtual,
        num1: acao.novoValor,
        validaNum1: acao.novoValor > 0,
      };
    case "ALTERA_N2":
      return {
        ...estadoAtual,
        num2: acao.novoValor,
        validaNum2: acao.novoValor > 0,
      };
    case "SOMA":
      if (estadoAtual.validaNum1 && estadoAtual.validaNum2) {
        let soma = estadoAtual.num1 + estadoAtual.num2;
        return { ...estadoAtual, soma };
      } else {
        return { ...estadoAtual, soma: -9999 };
      }
  }
}

export default function somaReducer() {
  const [dados, dispatchDados] = useReducer<Reducer<any, any>>(mudaDados, {
    num1: 0,
    num2: 0,
    validaNum1: false,
    validaNum2: false,
    soma: 0,
  });

  return (
    <Pagina titulo="Soma com useState" subtitulo="Exemplo de soma  useState">
      <Flex col centerCross>
        <Display texto="Faça uma soma" />
        <Flex center>
          <InputFormatado
            tipo="number"
            valor={dados.num1}
            onInput={(e) => {
              dispatchDados({ type: "ALTERA_N1", novoValor: +e.target.value });
            }}
          />
          <span className="ml-2 text-4xl">+</span>
          <InputFormatado
            tipo="number"
            valor={dados.num2}
            onInput={(e) => {
              dispatchDados({ type: "ALTERA_N2", novoValor: +e.target.value });
            }}
          />
          <Botao
            cor="bg-orange-400"
            texto="="
            onClick={() => dispatchDados({ type: "SOMA" })}
          />
        </Flex>
      </Flex>
      <Display texto={dados.soma} />
    </Pagina>
  );
}
